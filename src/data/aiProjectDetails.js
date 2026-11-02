
export const projectDetails = {
  "hrms-erp": {
    company: "Haoda Technology Pvt Ltd",
    myRole:
      "Senior Software Developer — led frontend architecture for HRMS and ERP SaaS modules; led a team of 3 engineers",
    domain: "Enterprise HRMS + ERP SaaS (HRMS serves 50+ customers)",
    highlights: [
      "HRMS modules: employee management, attendance, payroll, leave, recruitment, tax, performance, shift management, reporting/analytics",
      "ERP modules: user management, workflow automation, inventory, quotations, invoicing, order management, enterprise reporting",
      "JWT authentication, protected routes and role-based UI for Admin, HR and Employee users on RBAC-secured REST APIs",
      "Reduced unnecessary re-renders in complex dashboards with React.memo, useMemo and useCallback, guided by profiling",
      "GitHub Actions workflows maintained across 3+ applications with weekly production releases",
      "Unit and component testing with Jest and React Testing Library",
    ],
    architecture:
      "React.js and Next.js (App Router, SSR/SSG) with TypeScript. State and data layer: Redux Toolkit, React Query and Zustand, with standardized API-integration patterns over REST APIs. Reusable UI components and shared frontend patterns used across HRMS, ERP and payment workflows. JWT-based authentication, protected routes and role-based UI access (Admin, HR, Employee).",
    challenges: "",
  },
  "merchant-payment-platform": {
    company: "Haoda Technology Pvt Ltd",
    myRole: "Contributed to the frontend of the FinTech Merchant Payment Platform",
    domain: "FinTech / Payments",
    highlights: [
      "Integrated bank APIs for payment collection, Virtual Account Number (VAN) creation, transaction status tracking",
      "Reconciliation, settlements, refunds, merchant onboarding, wallet management and reporting",
      "Supported daily collections of approximately ₹20–30 lakh",
    ],
    architecture:
      "Micro-frontend architecture (worked hands-on with it on this platform and other Haoda projects), React.js with TypeScript, REST API integration with JWT authentication and role-based UI access.",
    challenges: "",
  },
  "marsh-insurance": {
    company: "Thynksight Technology Pvt Ltd",
    myRole: "Frontend Developer — responsive redesign using React.js and Redux",
    domain: "Insurance broking (Marsh)",
    highlights: [
      "User engagement up 30%, bounce rate down 25%, mobile traffic up 40% (based on website analytics)",
      "Reusable UI component libraries and client-specific design systems reduced feature development effort by about 40%",
    ],
    architecture:
      "React.js with Redux; reusable UI component libraries and client-specific design systems; responsive design across mobile and desktop.",
    challenges: "",
  },
  gamistaan: {
    company: "Vervali Systems Pvt Ltd",
    myRole: "Frontend Developer — rebuilt the e-commerce platform from Figma designs to production",
    domain: "E-commerce (board game rentals, subscriptions, product discovery, event and wedding gaming)",
    highlights: [
      "Frontend page-load performance improved by 25% across critical rendering paths",
      "Faster design-to-development handoff",
    ],
    architecture:
      "React.js, Redux, JavaScript ES6 and Tailwind CSS; Figma-to-production implementation with performance optimization on critical rendering paths.",
    challenges: "",
  },
  "neuberg-diagnostics": {
    company: "Vervali Systems Pvt Ltd",
    myRole: "Frontend Developer — built the platform from scratch",
    domain: "Healthcare / diagnostics",
    highlights: [
      "Fully API-driven — zero static data",
      "Lab test discovery, appointment booking, home sample collection, prescription uploads, diagnostic report access",
      "50+ reusable React components shared across modules",
      "REST API integration improving data loading and responsiveness",
    ],
    architecture:
      "React.js, Redux, JavaScript ES6 and Tailwind CSS. Component-based architecture with separation of concerns and reusable design patterns; all data comes from REST APIs.",
    challenges: "",
  },
  prodash: {
    company: "Eureka D-soft Private Limited",
    myRole:
      "Frontend Developer — built interactive project dashboards (one of four production applications delivered)",
    domain: "Piping / construction / industrial operations (clients include BHEL, L&T, DORC)",
    highlights: [
      "Interactive dashboards with amCharts JS visualizing project schedules, costs and risk metrics",
      "Frontend components integrated with backend APIs for data-driven workflows",
      "Other Eureka applications: MyApp (customer satisfaction up 30%), P-Gold and Epcproman (legacy jQuery/Kendo UI migrated to React and Redux; Epcproman delivery time down 25%)",
    ],
    architecture: "React.js and amCharts JS, fed by backend APIs.",
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
    "This assistant runs through a Vercel serverless function (/api/chat) that calls the Google Gemini API. The API key stays on the server. The function enforces an origin check, request validation, rate limiting and a daily cap, retries on a fallback model when one is overloaded, and asks the model for structured JSON so the UI can show matching project cards.",
  hosting: "Vercel",
  repo: "https://github.com/sonawaneritesh0419/portfolio",
};