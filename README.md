# TechnoElevate — React Website

The site is now a **React SPA** built with Vite and React Router. The original static HTML files remain in the project root for reference (`legacy-index.html`, `about.html`, etc.).

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

Output goes to `dist/` — deploy that folder to any static host (Netlify, Vercel, S3, Azure Static Web Apps, etc.). Configure the host to **rewrite all routes to `index.html`** for client-side routing.

## Project structure

| Path | Purpose |
|------|---------|
| `src/App.jsx` | Routes and layout |
| `src/components/` | Nav, footer, layout |
| `src/pages/` | Home, case studies, static page wrapper |
| `src/content/pages/` | Extracted page HTML (auto-generated from legacy `.html`) |
| `src/data/` | Case studies, search index |
| `shared/` | Original CSS (imported by React app) |
| `public/` | Logo and static assets |

## Regenerate page content from legacy HTML

If you edit a legacy `.html` file and want to sync it into React:

```bash
node scripts/extract-page-bodies.mjs
```

Then refresh the dev server.

## Notes

- Homepage and case study listing are fully React components.
- Other pages render migrated HTML with client-side link handling.
- Over time, convert individual pages from `src/content/pages/*.js` to proper JSX components.
