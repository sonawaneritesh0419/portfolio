// Extra knowledge used ONLY by the AI assistant (api/_lib/prompt.js).
// resume.js stays the public content; this file adds the depth recruiters ask about:
// architecture, your role, challenges, trade-offs.
//
// RULES FOR EDITING
// - Write only things that are TRUE. The assistant repeats what is here.
// - Leave a field as "" if you don't want to share it — the assistant will then say
//   the detail isn't documented instead of guessing.
// - Don't put secrets, client-confidential info or private numbers here.
// - Keys must match the `id` of each project in resume.js.

export const projectDetails = {
  "hrms-erp": {
    company: "HaodaTech",
    myRole: "Senior Software Developer — owned reusable UI component architecture and RBAC-secured module integrations",
    domain: "Enterprise HRMS + ERP (used by 100+ customers)",
    highlights: [
      "Reusable React + TypeScript + Redux component architecture across multiple ERP modules",
      "RBAC-secured REST API integration with standardized auth flow and error handling",
      "GitHub Actions CI/CD contribution",
      "Mentored 2+ junior developers via code reviews and pairing",
    ],
    // TODO: fill with real facts, e.g. folder structure (feature-based?), how RBAC is enforced
    // in the UI (route guards? permission hooks?), API layer (axios instance, interceptors),
    // state split (Redux Toolkit vs local state), table/form strategy, performance work.
    architecture: "",
    challenges: "",
  },
  "marsh-insurance": {
    company: "Thynksight Technology Pvt Ltd",
    myRole: "Frontend Developer — responsive redesign using React.js and Redux",
    domain: "Insurance broking (Marsh)",
    highlights: [
      "Engagement up 30%",
      "Bounce rate down 25% via UI/UX refinements and frontend performance work",
      "Mobile traffic up 40% through responsive design improvements",
    ],
    architecture: "",
    challenges: "",
  },
  gamistaan: {
    company: "Vervali Systems",
    myRole: "Frontend Developer — built the e-commerce frontend from Figma to production using React.js",
    domain: "E-commerce",
    highlights: [
      "Page-load performance improved by 25%",
      "Faster design-to-development handoff",
    ],
    architecture: "",
    challenges: "",
  },
  "neuberg-diagnostics": {
    company: "Vervali Systems",
    myRole: "Frontend Developer — built the website from scratch (React, Redux, JavaScript ES6, Tailwind CSS)",
    domain: "Healthcare / diagnostics",
    highlights: [
      "Fully API-driven — zero static data",
      "50+ reusable components shared across modules",
      "REST API integration that improved data-loading performance",
    ],
    architecture: "",
    challenges: "",
  },
};

// Answers "How is this portfolio built?" — a question recruiters love to ask.
export const siteInfo = {
  stack:
    "React 19, Vite, React Router 7 (lazy-loaded routes), Redux Toolkit, Tailwind CSS v4 (CSS-variable light/dark theme), ShadCN-style UI primitives, React Hook Form, Framer Motion, lucide-react. Written in JavaScript (JSX).",
  state:
    "Redux Toolkit slices: theme (persisted to localStorage), ui (mobile menu), contact (async thunk sending the contact form via Web3Forms), chat (this AI assistant, async thunk).",
  content:
    "All site content lives in a single data file (src/data/resume.js); pages render from it.",
  aiAssistant:
    "This assistant runs through a Vercel serverless function (/api/chat) that calls the Google Gemini API. The API key stays on the server. The function enforces an origin check, request validation, rate limiting and a daily cap, and asks the model for structured JSON so the UI can show matching project cards.",
  hosting: "Vercel",
  repo: "https://github.com/sonawaneritesh0419/portfolio",
};
