import { buildSystemPrompt } from "./_lib/prompt.js";
import { checkRateLimit } from "./_lib/rateLimit.js";
import { projects } from "../src/data/resume.js";

const PRIMARY_MODEL = process.env.GEMINI_MODEL || "gemini-flash-latest";
// Optional: a second model to try if the first one is overloaded (503) or times out.
const FALLBACK_MODEL = process.env.GEMINI_FALLBACK_MODEL || "";
const ATTEMPT_TIMEOUT_MS = Number(process.env.GEMINI_TIMEOUT_MS) || 15_000;
const RETRYABLE_STATUS = new Set([500, 502, 503, 504]);

const endpointFor = (model) =>
  `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const SYSTEM_PROMPT = buildSystemPrompt();
const VALID_PROJECT_IDS = new Set(projects.map((p) => p.id));

const MAX_MESSAGES = 10;
const MAX_CHARS = 500;
const MAX_BODY_CHARS = 8000;

function parseMessages(body) {
  const raw = body?.messages;
  if (!Array.isArray(raw) || raw.length === 0 || raw.length > MAX_MESSAGES) return null;

  const out = [];
  for (const m of raw) {
    if (!m || (m.role !== "user" && m.role !== "assistant") || typeof m.content !== "string") return null;
    const content = m.content.trim().slice(0, MAX_CHARS);
    if (!content) return null;
    out.push({ role: m.role, content });
  }
  // Gemini conversations must start with the user and end with the user.
  while (out.length && out[0].role !== "user") out.shift();
  if (!out.length || out[out.length - 1].role !== "user") return null;
  return out;
}

function getIp(req) {
  const h = req.headers;
  return String(h["x-vercel-forwarded-for"] || h["x-forwarded-for"] || h["x-real-ip"] || "unknown")
    .split(",")[0]
    .trim();
}

// One call to Gemini with its own timeout. Returns { status, data }.
async function callGemini(model, payload, apiKey) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ATTEMPT_TIMEOUT_MS);
  try {
    const upstream = await fetch(endpointFor(model), {
      method: "POST",
      signal: controller.signal,
      headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
      body: JSON.stringify(payload),
    });
    if (!upstream.ok) {
      // Google's error text never contains your key; safe to log for debugging.
      console.error(`Gemini (${model}) status`, upstream.status, (await upstream.text()).slice(0, 300));
      return { status: upstream.status, data: null };
    }
    return { status: 200, data: await upstream.json() };
  } finally {
    clearTimeout(timer);
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  // 1. Origin check (stops other websites using your endpoint from a browser).
  const origin = req.headers.origin || "";
  if (!ALLOWED_ORIGINS.includes(origin)) return res.status(403).json({ error: "Forbidden" });

  // 2. Body validation + size cap.
  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = null; }
  }
  if (JSON.stringify(body ?? "").length > MAX_BODY_CHARS) {
    return res.status(413).json({ error: "Request too large" });
  }
  const messages = parseMessages(body);
  if (!messages) return res.status(400).json({ error: "Invalid request" });

  // 3. Rate limit (per visitor + daily global cap).
  const limit = await checkRateLimit(getIp(req));
  if (!limit.ok) return res.status(429).json({ error: limit.message });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "Assistant is not configured" });

  // 4. Call Gemini. If the model is overloaded (503) or times out, try once more
  //    (on the fallback model if configured, otherwise the same model).
  const payload = {
    systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
    contents: messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    })),
    generationConfig: {
      temperature: 0.4,
      maxOutputTokens: 1200,
      responseMimeType: "application/json",
      responseSchema: {
        type: "OBJECT",
        properties: {
          answer: { type: "STRING" },
          projectIds: { type: "ARRAY", items: { type: "STRING" } },
        },
        required: ["answer", "projectIds"],
      },
    },
  };

  const models = [PRIMARY_MODEL, FALLBACK_MODEL || PRIMARY_MODEL];
  let result = null;
  let configProblem = false;

  for (let i = 0; i < models.length; i++) {
    try {
      const r = await callGemini(models[i], payload, apiKey);
      if (r.status === 200) {
        result = r;
        break;
      }
      if (r.status === 429) {
        return res.status(429).json({ error: "The AI is busy right now. Please try again in a moment." });
      }
      if (!RETRYABLE_STATUS.has(r.status)) {
        configProblem = true; // 400/403/404 = key or model problem, retrying won't help
        break;
      }
    } catch (err) {
      console.error(`Gemini attempt ${i + 1} (${models[i]}) failed:`, err?.name, err?.message, err?.cause?.code);
    }
    if (i < models.length - 1) await sleep(700);
  }

  if (!result) {
    return configProblem
      ? res.status(502).json({ error: "AI service is unavailable right now." })
      : res.status(503).json({ error: "The AI is busy right now. Please try again in a moment." });
  }

  try {
    const text = result.data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      return res.status(200).json({
        answer: "I couldn't answer that one. Try rephrasing, or ask about projects, skills or experience.",
        projectIds: [],
      });
    }

    const parsed = JSON.parse(text);
    const ids = Array.isArray(parsed.projectIds) ? parsed.projectIds : [];

    return res.status(200).json({
      answer: String(parsed.answer || "").slice(0, 1500) || "Sorry, I couldn't generate an answer.",
      // Only ids that really exist can reach the UI.
      projectIds: [...new Set(ids)].filter((id) => VALID_PROJECT_IDS.has(id)).slice(0, 3),
    });
  } catch (err) {
    console.error("Could not parse Gemini response:", err?.name);
    return res.status(502).json({ error: "AI service is unavailable right now." });
  }
}