import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;

const redis = url && token ? new Redis({ url, token }) : null;

// Per visitor: 8 questions / minute.
const perIp = redis
  ? new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(8, "1 m"), prefix: "portfolio-ai:ip" })
  : null;

// Whole site: 300 AI calls / day — protects your free Gemini quota from being drained.
const perDay = redis
  ? new Ratelimit({ redis, limiter: Ratelimit.fixedWindow(300, "1 d"), prefix: "portfolio-ai:day" })
  : null;

// Local-development fallback ONLY. Serverless instances don't share memory,
// so this is NOT reliable in production — set up Upstash for that.
const memory = new Map();

export async function checkRateLimit(ip) {
  if (perIp && perDay) {
    const [a, b] = await Promise.all([perIp.limit(ip), perDay.limit("all")]);
    if (!a.success) return { ok: false, message: "Too many questions — please wait a minute and try again." };
    if (!b.success) return { ok: false, message: "The AI assistant has reached today's limit. Please try again tomorrow or use the Contact page." };
    return { ok: true };
  }

  const now = Date.now();
  const recent = (memory.get(ip) ?? []).filter((t) => now - t < 60_000);
  if (recent.length >= 8) return { ok: false, message: "Too many questions — please wait a minute and try again." };
  memory.set(ip, [...recent, now]);
  return { ok: true };
}
