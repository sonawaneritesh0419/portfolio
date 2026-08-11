// Central content file — edit this to update the entire site.
// Sourced from Ritesh_Sonawane_React_Developer_5_6_Years.pdf

export const profile = {
  name: "Ritesh Sonawane",
  role: "Senior React / Frontend Engineer",
  location: "Vidyavihar East, Mumbai, Maharashtra, India",
  email: "riteshsonawane0419@gmail.com",
  phone: "+91 9975783675",
  linkedin: "https://linkedin.com/in/sonawaneritesh",
  github: "https://github.com/sonawaneritesh0419",
  tagline:
    "5+ years building scalable, high-performance web apps across FinTech, HRMS, ERP, Healthcare, E-commerce & SaaS.",
  summary:
    "Senior React/Frontend Engineer with 5+ years of experience building scalable, high-performance web applications across FinTech, HRMS, ERP, Healthcare, E-commerce & SaaS domains. Strong expertise in React.js, JavaScript (ES6+), TypeScript, Redux/Redux Toolkit, REST API integration, Tailwind CSS, Material UI, and reusable component architecture. Experienced in owning features end-to-end, from requirement analysis and Figma implementation to deployment, while ensuring responsive UI, performance, code quality, and maintainability.",
  resumeFile: "/Ritesh_Sonawane_React_Developer_5_6_Years.pdf",
};

// Quantified wins pulled straight from the resume bullets — powers the
// stat-card cluster in the Hero (this is the site's signature element).
export const highlights = [
  { value: "5+", label: "Years experience", trend: null },
  { value: "100+", label: "Customers on shipped HRMS/ERP", trend: "up" },
  { value: "30%", label: "Engagement lift, Marsh redesign", trend: "up" },
  { value: "40%", label: "Mobile traffic growth", trend: "up" },
  { value: "25%", label: "Page-load improvement", trend: "up" },
  { value: "50+", label: "Reusable components shipped", trend: null },
];

export const stack = {
  frontend: [
    "React.js",
    "Redux / Redux Toolkit",
    "Context API",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "ShadCN UI",
    "Telerik Kendo UI",
    "jQuery / jQuery UI",
  ],
  api: ["REST API Integration", "AJAX", "JSON", "Third-Party Services"],
  tools: ["Git", "Bitbucket", "Jira", "Webpack", "Vite"],
  practices: [
    "Agile / Scrum",
    "Code Review",
    "Performance Optimization",
    "Cross-Browser Compatibility",
    "Responsive Web Design",
    "CI/CD",
    "Debugging & Troubleshooting",
    "Mentoring",
  ],
  design: ["Material UI", "Figma to Production", "Pixel-Perfect Implementation"],
  extra: ["TanStack Table", "Manual Testing", "Basic PHP Laravel"],
};

export const experience = [
  {
    company: "HaodaTech",
    role: "Senior Software Developer",
    period: "Jan 2025 — Present",
    location: "Thane, India",
    current: true,
    points: [
      "Engineered scalable React.js, TypeScript, and Redux UI components for an enterprise HRMS and ERP platform actively used by 100+ customers, improving maintainability and code reuse.",
      "Integrated RBAC-secured REST APIs across multiple ERP modules, standardizing authentication flows and error-handling patterns that reduced unauthorized access issues.",
      "Contributed to CI/CD pipelines built on GitHub Actions, streamlining build and deployment workflows to cut release friction and speed up shipping cycles.",
      "Mentored 2+ junior developers through structured code reviews and pairing sessions, raising team-wide code quality and consistency.",
      "Delivered secure FinTech payment workflows spanning UPI, card, net banking, reconciliation, and wallets, integrating REST APIs across the full payment stack.",
    ],
    tags: ["React.js", "TypeScript", "Redux", "RBAC", "CI/CD", "FinTech"],
  },
  {
    company: "Thynksight Technology Pvt Ltd",
    role: "Frontend Developer",
    period: "Jul 2024 — Nov 2024",
    location: "India",
    points: [
      "Redesigned and launched responsive web interfaces for Marsh, a global insurance broker, using React.js and Redux, boosting overall user engagement by 30%.",
      "Reduced platform bounce rate by 25% through targeted UI/UX refinements and frontend performance optimization initiatives.",
      "Increased mobile traffic by 40% by enhancing responsive design and cross-device usability across the entire platform.",
      "Coordinated closely with design, backend, and QA teams in an Agile environment, maintaining strong client satisfaction throughout each delivery cycle.",
    ],
    tags: ["React.js", "Redux", "Insurance", "UX Optimization"],
  },
  {
    company: "Vervali Systems",
    role: "Frontend Developer",
    period: "Aug 2023 — Mar 2024",
    location: "India",
    points: [
      "Rebuilt the Gamistaan e-commerce platform end-to-end from Figma designs to production using React.js, accelerating design-to-development handoff speed.",
      "Improved page load performance by 25% through frontend optimization techniques applied across key rendering paths.",
      "Built the Neuberg Diagnostic Center website from scratch using React, Redux, JavaScript ES6, and Tailwind CSS, fully API-driven with zero static data.",
      "Developed 50+ reusable components shared across multiple modules, cutting code duplication and improving long-term scalability.",
      "Integrated REST APIs for healthcare applications, improving data-loading performance and overall responsiveness for end users.",
    ],
    tags: ["React.js", "Redux", "Tailwind CSS", "E-commerce", "Healthcare"],
  },
  {
    company: "Eureka D-soft Private Limited",
    role: "Frontend Developer",
    period: "Nov 2019 — Apr 2023",
    location: "Mumbai, India",
    points: [
      "Built and maintained 3 production web applications in the piping and construction domain over 3.5 years using React, JavaScript ES6, and Kendo UI.",
      "Resolved cross-browser compatibility issues across Chrome, Firefox, Safari, and Edge, cutting QA bug-fix cycles by approximately 20%.",
      "Translated Figma and Adobe XD mockups into pixel-accurate, production-ready React components consistently across all 3 applications.",
      "Implemented SEO best practices across domain-specific workflows, improving organic discoverability and long-term search visibility.",
    ],
    tags: ["React.js", "JavaScript ES6", "Kendo UI", "SEO"],
  },
];

export const projects = [
  {
    name: "HRMS & ERP Platform",
    period: "2025",
    description:
      "Enterprise HRMS/ERP suite used by 100+ customers. Owned reusable UI component architecture and RBAC-secured module integrations.",
    tags: ["React.js", "TypeScript", "Redux Toolkit", "REST API"],
    link: null,
  },
  {
    name: "Marsh — Insurance Broker Platform",
    period: "2024",
    description:
      "Responsive redesign for a global insurance broker's web platform, lifting engagement by 30% and cutting bounce rate by 25%.",
    tags: ["React.js", "Redux", "Responsive Design"],
    link: null,
  },
  {
    name: "Gamistaan",
    period: "2023 — 2024",
    description:
      "End-to-end e-commerce platform build from Figma to production, with a 25% improvement in page-load performance.",
    tags: ["React.js", "Figma to Production", "Performance"],
    link: null,
  },
  {
    name: "Neuberg Diagnostic Center",
    period: "2023 — 2024",
    description:
      "Fully API-driven healthcare website built from scratch — zero static data, 50+ reusable components shared across modules.",
    tags: ["React.js", "Redux", "Tailwind CSS", "REST API"],
    link: null,
  },
];

export const education = [
  {
    title: "S.I.C.E.S. College — BCA (Bachelor of Computer Application)",
    period: "2015 — 2018",
  },
  {
    title: ".Net — Full Stack Developer Course",
    period: "2018",
  },
];
