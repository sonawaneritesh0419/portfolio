import { lazy } from "react";

// Every page is React.lazy-loaded so each route ships its own chunk.
// To add a new page: create it in src/pages, add one entry here, and
// (if it should appear in the header) add a matching link in
// src/config/navigation.js — nothing else needs to change.
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Skills = lazy(() => import("@/pages/Skills"));
const Experience = lazy(() => import("@/pages/Experience"));
const Projects = lazy(() => import("@/pages/Projects"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export const routes = [
  { path: "/", element: Home },
  { path: "/about", element: About },
  { path: "/skills", element: Skills },
  { path: "/experience", element: Experience },
  { path: "/projects", element: Projects },
  { path: "/contact", element: Contact },
  { path: "*", element: NotFound },
];
