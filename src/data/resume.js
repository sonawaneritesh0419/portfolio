// Central content file — edit this to update the entire site.
// Sourced from Ritesh_Sonawane_Senior_React_Developer_Resume.docx (latest)

export const profile = {
  name: "Ritesh Sonawane",
  role: "Senior React Developer",
  location: "Mumbai, Maharashtra, India",
  email: "riteshsonawane0419@gmail.com",
  phone: "+91 9975783675",
  linkedin: "https://linkedin.com/in/sonawaneritesh",
  github: "https://github.com/sonawaneritesh0419",
  portfolio: "https://ritesh-sonawane-portfolio.vercel.app",
  tagline:
    "6+ years building scalable, secure, high-performance web apps across FinTech & Payments, Insurance, HRMS, ERP, Healthcare & E-commerce.",
  summary:
    "Senior React Developer with 6+ years of experience building scalable, secure, and high-performance web applications across FinTech & Payments, Insurance, HRMS, ERP, Healthcare, and E-commerce domains. Strong expertise in React.js, Next.js (App Router, SSR/SSG, API Routes), TypeScript, JavaScript (ES6+), Redux Toolkit, React Query, Zustand, REST API integration, reusable component architecture, and role-based access control. Experienced in leading a team of 3 engineers, driving frontend architecture, sprint planning, effort estimation, code reviews, UAT, production releases, and stakeholder coordination. Hands-on across the full SDLC — from requirement analysis and Figma-to-UI implementation through deployment and post-release support — with a focus on performance optimization, complex dashboards, secure workflows, and maintainable UI systems. Available to join immediately.",
  // The PDF must exist in /public with exactly this file name.
  resumeFile: "/Ritesh_Sonawane_Senior_React_Developer_Resume.pdf",
};

// Quantified wins pulled straight from the resume bullets — powers the
// stat-card cluster in the Hero (this is the site's signature element).
export const highlights = [
  { value: "6+", label: "Years experience", trend: null },
  { value: "3", label: "Engineers led", trend: null },
  { value: "50+", label: "HRMS SaaS customers", trend: "up" },
  { value: "₹20–30L", label: "Daily payment collections", trend: "up" },
  { value: "30%", label: "Engagement lift, Marsh redesign", trend: "up" },
  { value: "40%", label: "Feature dev effort cut", trend: "up" },
  { value: "50+", label: "Reusable components shipped", trend: null },
  { value: "25%", label: "Page-load improvement", trend: "up" },
];

// Keys are rendered by GROUPS in src/pages/Skills.jsx.
// `frontend` is also used for the "Core stack" teaser on the Home page.
export const stack = {
  frontend: [
    "React.js (Hooks)",
    "Next.js (App Router, SSR, SSG, API Routes)",
    "Redux / Redux Toolkit",
    "Context API",
    "Zustand",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Responsive Design",
    "Tailwind CSS",
    "Bootstrap",
    "ShadCN UI",
    "Telerik Kendo UI",
    "jQuery",
  ],
  api: [
    "REST API Integration",
    "React Query / TanStack Query",
    "TanStack Table",
    "AJAX",
    "JSON",
    "Third-Party Services",
  ],
  tools: [
    "Git",
    "GitHub Actions (CI/CD)",
    "Bitbucket",
    "Jira",
    "Webpack",
    "Vite",
    "npm",
    "Vercel",
    "Netlify",
    "Figma",
    "Adobe XD",
  ],
  practices: [
    "Frontend Architecture",
    "Component-Driven Design",
    "Reusable Component Libraries",
    "Design Systems",
    "Micro-Frontends",
    "Clean Architecture",
    "SOLID Principles",
    "React.memo / useMemo / useCallback",
    "Cross-Browser Compatibility",
    "MVC Architecture",
    "Agile / Scrum",
    "SDLC",
    "Sprint Planning",
    "Effort Estimation",
    "Task Allocation",
    "Code Reviews",
    "Debugging",
    "Mentoring",
    "Stakeholder Coordination",
  ],
  design: [
    "Material UI",
    "Ant Design",
    "Figma to Production",
    "Pixel-Perfect Implementation",
  ],
  extra: [
    "JWT Authentication",
    "Protected Routes",
    "Role-Based Access Control (RBAC)",
    "Jest",
    "React Testing Library",
    "Manual Testing",
    "API Integration Validation",
    "UAT Support",
    "Semantic HTML / ARIA / Keyboard Navigation",
    "amCharts",
    "AI-Assisted Dev Tools (ChatGPT, Claude, DeepSeek, OpenCode, Gemini, Copilot, Cursor, Perplexity)",
  ],
};

export const experience = [
  {
    company: "Haoda Technology Pvt Ltd",
    role: "Senior Software Developer",
    period: "Jan 2025 — Sep 2026",
    location: "Mumbai, India",
    current: false,
    domain: "FinTech / HRMS / ERP",
    points: [
      "Led frontend architecture and development for enterprise SaaS and FinTech applications using React.js, Next.js (App Router, SSR/SSG), TypeScript, Redux Toolkit, React Query, and Zustand, ensuring consistent and maintainable development across product modules.",
      "Built reusable UI components and shared frontend patterns for HRMS, ERP, and payment workflows, reducing duplication and improving consistency. Implemented scalable state management and API integration patterns with Redux, React Query, and REST APIs to support complex business workflows and data-driven dashboards.",
      "Worked hands-on with micro-frontend architecture on the Merchant Payment Platform and other Haoda projects.",
      "Reduced unnecessary re-renders in complex enterprise dashboards using React.memo, useMemo, and useCallback, guided by component profiling.",
      "Developed HRMS modules covering employee management, attendance, payroll, leave, recruitment, tax management, performance, shift management, and reporting/analytics for a SaaS product serving 50+ customers.",
      "Built ERP modules covering user management, workflow automation, inventory, quotations, invoicing, order management, and enterprise reporting.",
      "Contributed to a FinTech Merchant Payment Platform integrating bank APIs for payment collection, Virtual Account Number (VAN) creation, transaction status tracking, reconciliation, settlements, refunds, merchant onboarding, wallet management, and reporting — supporting daily collections of approximately ₹20–30 lakh.",
      "Implemented JWT-based authentication, protected routes, and role-based UI access for Admin, HR, and Employee users across HRMS, ERP, and payment modules, integrating with RBAC-secured REST APIs.",
      "Used Jest and React Testing Library for unit and component testing, validating component behavior and supporting application quality through bug fixing, API integration validation, and UAT.",
      "Configured and maintained existing GitHub Actions workflows across 3+ applications, supporting builds, environment configuration, pull request checks with weekly production releases.",
      "Led a team of 3 engineers — managing effort estimation, requirement breakdown, task allocation, sprint planning, progress tracking, code reviews, UAT coordination, and production releases.",
      "Made architecture and tooling decisions collaboratively with the team, focusing on maintainability and performance, including standardizing reusable React components across modules.",
      "Owned features end-to-end, from requirement analysis to production release and post-release support, collaborating with project managers, stakeholders, designers, QA, and backend engineers.",
      "Mentored junior engineers through code reviews and architectural guidance. Applied semantic HTML, ARIA attributes, and keyboard navigation to build usable and accessible interfaces.",
    ],
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "React Query",
      "Zustand",
      "Micro-Frontends",
      "RBAC",
      "Jest / RTL",
      "GitHub Actions",
      "FinTech",
    ],
  },
  {
    company: "Thynksight Technology Pvt Ltd",
    role: "Frontend Developer",
    period: "Jul 2024 — Nov 2024",
    location: "Mumbai, India",
    domain: "Insurance",
    points: [
      "Redesigned and developed responsive web interfaces for Marsh, a global insurance broker, using React.js and Redux, improving usability across mobile and desktop. Increased user engagement by 30%, reduced bounce rate by 25%, and increased mobile traffic by 40%, based on website analytics.",
      "Built reusable UI component libraries and client-specific design systems, reducing feature development effort by approximately 40% and improving frontend development efficiency.",
      "Collaborated with UI/UX designers, backend developers, and QA teams in an Agile environment to deliver high-quality features, ensure cross-functional alignment, and maintain client satisfaction throughout delivery cycles.",
    ],
    tags: [
      "React.js",
      "Redux",
      "Design Systems",
      "Insurance",
      "UX Optimization",
    ],
  },
  {
    company: "Vervali Systems Pvt Ltd",
    role: "Frontend Developer",
    period: "Aug 2023 — Mar 2024",
    location: "Mumbai, India",
    domain: "Service-Based / E-commerce / Healthcare",
    points: [
      "Rebuilt the Gamistaan e-commerce platform from Figma designs to production using React.js, Redux, JavaScript ES6, and Tailwind CSS, implementing board game rentals, subscriptions, product discovery, and event & wedding gaming experiences.",
      "Improved frontend page load performance by 25% through performance optimization techniques across critical rendering paths.",
      "Developed the Neuberg Diagnostic healthcare platform from scratch using React.js, Redux, JavaScript ES6, and Tailwind CSS — fully API-driven features for lab test discovery, appointment booking, home sample collection, prescription uploads, and diagnostic report access.",
      "Developed 50+ reusable React components across multiple modules, improving UI consistency, reducing code duplication, and enhancing maintainability.",
      "Integrated RESTful APIs for healthcare workflows, enabling dynamic data rendering and improving application responsiveness.",
      "Applied component-based architecture, separation of concerns, and reusable design patterns to build scalable and maintainable frontend applications.",
      "Collaborated with product managers, UI/UX designers, QA engineers, and backend developers to translate business requirements and Figma designs into production-ready features.",
    ],
    tags: [
      "React.js",
      "Redux",
      "Tailwind CSS",
      "E-commerce",
      "Healthcare",
      "REST API",
    ],
  },
  {
    company: "Eureka D-soft Private Limited",
    role: "Frontend Developer",
    period: "Nov 2019 — Apr 2023",
    location: "Mumbai, India",
    domain: "Piping / Construction",
    points: [
      "Delivered 4 production applications (MyApp, P-Gold, Epcproman, Prodash) for global clients including BHEL, L&T, and DORC, using React.js, Redux, JavaScript, and Ext.js for construction management, piping workflows, and industrial operations.",
      "Built MyApp, a construction management platform for equipment, electrical, and piping tracking, improving customer satisfaction by 30%.",
      "Modernized P-Gold and Epcproman by migrating legacy jQuery/Kendo UI interfaces to React.js and Redux, improving maintainability and modernizing core industrial workflows.",
      "Developed interactive project dashboards in Prodash using React.js and amCharts JS to visualize project schedules, costs, and risk metrics; integrated frontend components with backend APIs to support data-driven workflows.",
      "Reduced project delivery time by 25% on Epcproman through cross-functional collaboration and requirement alignment.",
      "Translated Figma and Adobe XD mockups into pixel-accurate, production-ready React components across these applications.",
    ],
    tags: [
      "React.js",
      "Redux",
      "Ext.js",
      "Kendo UI",
      "amCharts",
      "Migration",
    ],
  },
];

export const projects = [
  {
    id: "merchant-payment-platform",
    name: "FinTech Merchant Payment Platform",
    period: "2025 — 2026",
    description:
      "Bank-API integrated payment platform handling VAN creation, transaction tracking, reconciliation, settlements, refunds, merchant onboarding, and wallets — supporting daily collections of ₹20–30 lakh.",
    tags: ["React.js", "Next.js", "Micro-Frontends", "RBAC", "FinTech"],
    link: null,
  },
  {
    id: "hrms-erp",
    name: "HRMS & ERP SaaS Suite",
    period: "2025 — 2026",
    description:
      "Enterprise HRMS/ERP suite serving 50+ customers. Owned reusable UI component architecture, RBAC-secured module integrations, and performance-tuned dashboards.",
    tags: ["React.js", "TypeScript", "Redux Toolkit", "React Query", "REST API"],
    link: null,
  },
  {
    id: "marsh-insurance",
    name: "Marsh — Insurance Broker Platform",
    period: "2024",
    description:
      "Responsive redesign for a global insurance broker's web platform — 30% engagement lift, 25% bounce-rate reduction, 40% mobile traffic growth, and ~40% less feature development effort.",
    tags: ["React.js", "Redux", "Design Systems", "Responsive Design"],
    link: null,
  },
  {
    id: "gamistaan",
    name: "Gamistaan",
    period: "2023 — 2024",
    description:
      "End-to-end e-commerce platform build from Figma to production for board game rentals, subscriptions, and event gaming experiences — 25% page-load improvement.",
    tags: ["React.js", "Redux", "Tailwind CSS", "Figma to Production"],
    link: null,
  },
  {
    id: "neuberg-diagnostics",
    name: "Neuberg Diagnostic Center",
    period: "2023 — 2024",
    description:
      "Fully API-driven healthcare platform built from scratch — lab test discovery, appointment booking, home sample collection, prescription uploads, and report access with 50+ reusable components.",
    tags: ["React.js", "Redux", "Tailwind CSS", "REST API", "Healthcare"],
    link: null,
  },
  {
    id: "prodash",
    name: "Prodash — Project Dashboard",
    period: "2019 — 2023",
    description:
      "Interactive enterprise dashboards visualizing project schedules, costs, and risk metrics using React.js and amCharts JS for construction and piping clients including BHEL, L&T, and DORC.",
    tags: ["React.js", "amCharts", "Redux", "Data Visualization"],
    link: null,
  },
];

export const education = [
  {
    title: "S.I.C.E.S. College — BCA (Bachelor of Computer Application)",
    period: "2015 — 2018",
  },
  {
    title: ".NET — Full Stack Developer Course",
    period: "2018",
  },
];