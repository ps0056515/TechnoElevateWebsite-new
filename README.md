# Innovexce - React Website

The site is now a **React SPA** built with Vite and React Router. Original static HTML files are in `legacy/` for reference only.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) - use **`/`** (not `/index.html`).

Legacy bookmark URLs still work and redirect automatically:

| Old URL                         | Redirects to              |
| ------------------------------- | ------------------------- |
| `/index.html`                   | `/`                       |
| `/about.html`                   | `/about`                  |
| `/case-study.html?id=kotak-sra` | `/case-studies/kotak-sra` |

Original static HTML files are preserved in `legacy/` for reference only.

## Build for production

```bash
npm run build
npm run preview
```

Output goes to `dist/` - deploy that folder to any static host (Netlify, Vercel, S3, Azure Static Web Apps, etc.). Configure the host to **rewrite all routes to `index.html`** for client-side routing.

## Project structure

| Path                 | Purpose                                                  |
| -------------------- | -------------------------------------------------------- |
| `src/App.jsx`        | Routes and layout                                        |
| `src/components/`    | Nav, footer, layout                                      |
| `src/pages/`         | Home, case studies, static page wrapper                  |
| `src/content/pages/` | Extracted page HTML (auto-generated from legacy `.html`) |
| `src/data/`          | Case studies, search index                               |
| `shared/`            | Original CSS (imported by React app)                     |
| `public/`            | Logo and static assets                                   |

## Regenerate page content from legacy HTML

If you edit a legacy `.html` file and want to sync it into React:

```bash
node scripts/extract-page-bodies.mjs
```

Then refresh the dev server.

## Notes

- Homepage, Case Studies listing, and the Contact page are fully React components.
- Other pages render migrated HTML with client-side link handling.
- Over time, convert individual pages from `src/content/pages/*.js` to proper JSX components.

## Web3Forms Contact Integration

The contact form is integrated with **Web3Forms** for handling email notifications without a backend.

### Setup Instructions

1. Get a free access key from [web3forms.com](https://web3forms.com/).
2. Open `src/config/site.js`.
3. Add your key:
   ```javascript
   web3FormsAccessKey: 'YOUR_ACCESS_KEY',
   ```

### Form Fields Configured

Submissions will send the following data directly to your email:

- `firstName`: First Name of the sender
- `lastName`: Last Name of the sender
- `email`: Work Email (configured as `replyto` so you can reply to them directly)
- `company`: Company name
- `service`: Selected service of interest
- `message`: Project details or message description

### Premium Email Styling Configuration

Inside `src/pages/ContactPage.jsx`, the form submission appends layout configuration:

```javascript
formData.append("access_key", SITE.web3FormsAccessKey);
formData.append("subject", "New Contact Form Submission - Innovexce");
formData.append(
  "from_name",
  `${formData.get("firstName")} ${formData.get("lastName")}`,
);
formData.append("replyto", formData.get("email"));
formData.append("theme", "orange"); // Automatically styles the email table template to orange
```

You can customize the email look by changing `theme` to `dark`, `purple`, `green`, `blue`, or `red`.
