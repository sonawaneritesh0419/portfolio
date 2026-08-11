# Ritesh Sonawane — Developer Portfolio

Multi-page React portfolio: React Router (lazy-loaded routes), Redux Toolkit
(theme + contact form state), Tailwind CSS v4 (light/dark via CSS variables),
ShadCN-style UI primitives, EmailJS for a backend-free contact form.

## 1. Run locally

```bash
npm i
npm run dev
```

## 2. Build & preview production build

```bash
npm run build
npm run preview
```

## 3. Project structure

```
src/
  App.jsx              Router setup, builds <Routes> from routes.jsx, applies dark/light class
  layouts/
    MainLayout.jsx      Header + <Outlet/> (page content) + Footer, wraps every route
  routes/
    routes.jsx           Array of { path, element } — element is React.lazy(() => import(...))
  config/
    navigation.js         Array of { label, path } — Header & Footer both render from this
  pages/                  One file per route: Home, About, Skills, Experience, Projects, Contact, NotFound
  components/
    common/               Header, Footer, ThemeToggle, PageLoader, ScrollToTop
    ui/                    Button, Card, Badge, StatCard, PageHero, SectionHeading
    icons/                 Custom GitHub/LinkedIn SVGs (lucide-react dropped brand marks)
  store/
    store.js               Redux Toolkit store
    themeSlice.js           dark/light mode, persisted to localStorage
    contactSlice.js         async thunk: sends the contact form via EmailJS
    uiSlice.js               mobile menu open/close state
  data/resume.js            single source of truth for every piece of content on the site
```

## 4. Adding a new page

This is wired so a new page shows up in navigation and routing with three edits:

1. Create `src/pages/YourPage.jsx` (a normal default-exported component).
2. Add it to `src/routes/routes.jsx`:
   ```js
   const YourPage = lazy(() => import("@/pages/YourPage"));
   // ...
   { path: "/your-page", element: YourPage },
   ```
3. If it should appear in the header/footer nav, add it to `src/config/navigation.js`:
   ```js
   { label: "Your Page", path: "/your-page" }
   ```

That's it — `Header.jsx` and `Footer.jsx` both render links by mapping over
`navLinks`, so nothing else needs to change.

## 5. Editing content

Everything text-based — name, summary, skills, experience, projects,
education, the stat highlights on the homepage, contact links — lives in
**`src/data/resume.js`**. Edit that file and every page updates automatically.

Your resume PDF is served from `public/Ritesh_Sonawane_React_Developer_5_6_Years.pdf`;
the header's "Resume" button links to whatever `resumeFile` points to in
`src/data/resume.js`.

## 6. Dark / light mode

A Redux slice (`themeSlice.js`) tracks `mode: "light" | "dark"`, defaults to
the visitor's OS preference on first visit, and is persisted to
`localStorage` after that. `App.jsx` toggles a `.dark` class on `<html>`;
every color in `src/index.css` is a CSS variable with a light value in
`:root` and a dark override in `.dark`, so Tailwind utilities like `bg-bg`
or `text-ink` automatically re-theme — no `dark:` prefix needed anywhere.
Toggle it from the switch in the header.

## 7. Contact form → your email (EmailJS)

The form dispatches a Redux Toolkit thunk (`src/store/contactSlice.js`) that
sends the submission through **EmailJS**, a client-side email API that needs
no backend server:

1. Create a free account at [emailjs.com](https://www.emailjs.com).
2. **Email Services** → add a service → connect your Gmail → copy the
   **Service ID**.
3. **Email Templates** → create a template using these variables:
   `from_name`, `from_email`, `subject`, `message`, `to_email` → copy the
   **Template ID**.
4. **Account → General** → copy your **Public Key**.
5. Copy `.env.example` to `.env` and fill in the three values:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
   ```
6. Restart `npm run dev`. Submissions now land in your inbox.

**Without this setup**, the form still works — it falls back to opening a
pre-filled `mailto:` to your email, so there's nothing broken out of the box.

## 8. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/sonawaneritesh0419/<repo-name>.git
git push -u origin main
```

## 9. Deploy on Vercel

**Dashboard:**
1. [vercel.com/new](https://vercel.com/new) → import the repo.
2. Framework auto-detects as **Vite** (Build: `npm run build`, Output: `dist`) — leave defaults.
3. Add the three `VITE_EMAILJS_*` variables under Project Settings → Environment Variables (if using EmailJS).
4. Deploy.

`vercel.json` in this repo already rewrites all paths to `index.html`, so
deep links like `/projects` or `/contact` work correctly after deploy
instead of 404-ing (a common gotcha with client-side routed SPAs).

**CLI:**
```bash
npm i -g vercel
vercel
vercel --prod
```

## Tech stack

- React 19 + Vite + React Router (lazy-loaded routes, code-split per page)
- Redux Toolkit + React Redux (theme state, mobile menu, contact form flow)
- Tailwind CSS v4 (CSS-variable-driven light/dark theme)
- ShadCN-style primitives (Button, Card, Badge)
- React Hook Form (contact form validation)
- EmailJS (contact form delivery, no backend)
- lucide-react (icons)
