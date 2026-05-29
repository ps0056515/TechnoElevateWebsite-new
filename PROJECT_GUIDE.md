# 🏗️ TechnoElevate Website — Comprehensive Engineering & Architectural Guide

Welcome to the official developer documentation guide for the **TechnoElevate Web Application**. This document serves as a complete blueprint of the project's technical architecture, codebase organization, data flows, routing mechanisms, and build pipelines.

---

## 🚀 1. Executive Summary & Design Paradigm

**TechnoElevate** (a division of *TestYantra Software Solutions*) is a high-performance product engineering studio specializing in enterprise AI, cloud-native software, DevOps/SRE, and advanced machine learning platforms. 

The website is engineered as a modern, lightning-fast **React 19 Single Page Application (SPA)** built with **Vite 6** and **React Router v7**. 

> [!TIP]
> ### 💡 Architectural Core Values
> *   **Performance & Core Web Vitals**: Instantaneous navigation via React Router client-side routing, code-splitting (dynamic lazy-loading), and optimized image delivery (Unsplash source processing).
> *   **Seamless Migration & Backward Compatibility**: Legacy multi-page static HTML paths (e.g., `/about.html`, `/services.html`) are dynamically mapped and routed cleanly to preserve SEO indexation and bookmarks.
> *   **Zero Refactoring Friction**: A node compilation layer extracts legacy page bodies automatically, allowing designers and content creators to modify static HTML without disrupting the React core application.
> *   **State-of-the-Art UX**: Premium dynamic visual effects, viewport intersection animations, a fast client-side fuzzy search (`Ctrl + K`), and multi-lingual compatibility.

---

## 📂 2. Directory & Architecture Blueprint

The project is structured to separate static assets, shared styling systems, raw data catalogs, reusable components, and high-performance routing.

<pre style="background: #0d1117; padding: 16px; border-radius: 8px; border: 1px solid #30363d; font-family: monospace; line-height: 1.5; color: #c9d1d9;">
<strong>TechnoElevateWebsite-new/</strong>
├── 📂 <span style="color: #58a6ff;"><strong>legacy/</strong></span>                         <span style="color: #8b949e;"># Original static multi-page HTML source files (kept for archival sync)</span>
│   ├── 📄 <span style="color: #ff7b72;">about.html</span>                  <span style="color: #8b949e;"># "Who We Are" profile page template</span>
│   ├── 📄 <span style="color: #ff7b72;">ai-agentic.html</span>             <span style="color: #8b949e;"># Agentic AI Business Automation page template</span>
│   ├── 📄 <span style="color: #ff7b72;">ai-computer-vision.html</span>     <span style="color: #8b949e;"># Computer Vision & Edge AI page template</span>
│   ├── 📄 <span style="color: #ff7b72;">ai-hub.html</span>                 <span style="color: #8b949e;"># Central AI Hub solutions directory template</span>
│   ├── 📄 <span style="color: #ff7b72;">ai-llm-rag.html</span>             <span style="color: #8b949e;"># Generative AI & RAG Engineering page template</span>
│   ├── 📄 <span style="color: #ff7b72;">ai-ml-platform.html</span>         <span style="color: #8b949e;"># Machine Learning & Data Platforms page template</span>
│   ├── 📄 <span style="color: #ff7b72;">careers.html</span>                <span style="color: #8b949e;"># Career opportunities and talent portal template</span>
│   ├── 📄 <span style="color: #ff7b72;">case-study.html</span>             <span style="color: #8b949e;"># Legacy single case study display template</span>
│   ├── 📄 <span style="color: #ff7b72;">casestudies.html</span>            <span style="color: #8b949e;"># Legacy case studies overview template</span>
│   ├── 📄 <span style="color: #ff7b72;">contact.html</span>                <span style="color: #8b949e;"># Contact form and location details template</span>
│   ├── 📄 <span style="color: #ff7b72;">devops-sre.html</span>             <span style="color: #8b949e;"># DevOps, SRE & Observability page template</span>
│   ├── 📄 <span style="color: #ff7b72;">engagement.html</span>             <span style="color: #8b949e;"># Staff Augmentation & delivery engagement models template</span>
│   ├── 📄 <span style="color: #ff7b72;">industries.html</span>             <span style="color: #8b949e;"># General industries overview template</span>
│   ├── 📄 <span style="color: #ff7b72;">industry-automotive.html</span>    <span style="color: #8b949e;"># Automotive vertical page template</span>
│   ├── 📄 <span style="color: #ff7b72;">industry-bfsi.html</span>          <span style="color: #8b949e;"># BFSI & Fintech vertical page template</span>
│   ├── 📄 <span style="color: #ff7b72;">industry-telecom.html</span>       <span style="color: #8b949e;"># Telecommunication vertical page template</span>
│   ├── 📄 <span style="color: #ff7b72;">insight-*.html</span>              <span style="color: #8b949e;"># Articles & case engineering blogs (e.g. LegalDST, Cars24 ML)</span>
│   ├── 📄 <span style="color: #ff7b72;">insights.html</span>               <span style="color: #8b949e;"># Insights hub main listing page template</span>
│   ├── 📄 <span style="color: #ff7b72;">leadership.html</span>             <span style="color: #8b949e;"># Executive leadership details page template</span>
│   ├── 📄 <span style="color: #ff7b72;">locations.html</span>              <span style="color: #8b949e;"># Global delivery centers map template</span>
│   ├── 📄 <span style="color: #ff7b72;">methodology.html</span>            <span style="color: #8b949e;"># CMMI-aligned Delivery Methodology template</span>
│   ├── 📄 <span style="color: #ff7b72;">newsroom.html</span>               <span style="color: #8b949e;"># Official announcements and press releases template</span>
│   ├── 📄 <span style="color: #ff7b72;">security.html</span>               <span style="color: #8b949e;"># Security, compliance, ISO 27001 info page template</span>
│   ├── 📄 <span style="color: #ff7b72;">services.html</span>               <span style="color: #8b949e;"># Custom application development services template</span>
│   ├── 📄 <span style="color: #ff7b72;">technology.html</span>             <span style="color: #8b949e;"># Technology stack catalog page template</span>
│   └── 📄 <span style="color: #ff7b72;">whitepapers.html</span>            <span style="color: #8b949e;"># Whitepapers & guides download page template</span>
├── 📂 <span style="color: #58a6ff;"><strong>proof-pack/</strong></span>                     <span style="color: #8b949e;"># Verification, compliance, and corporate audit matrices</span>
│   ├── 📂 <span style="color: #58a6ff;"><strong>evidence/</strong></span>                   <span style="color: #8b949e;"># Supporting documents for company, certifications, and security</span>
│   │   ├── 📂 <span style="color: #58a6ff;"><strong>01-company/</strong></span>
│   │   ├── 📂 <span style="color: #58a6ff;"><strong>02-certifications/</strong></span>
│   │   ├── 📂 <span style="color: #58a6ff;"><strong>03-case-studies/</strong></span>
│   │   ├── 📂 <span style="color: #58a6ff;"><strong>04-testimonials/</strong></span>
│   │   └── 📂 <span style="color: #58a6ff;"><strong>05-security/</strong></span>
│   ├── 📄 <span style="color: #7ee787;">CASE-STUDY-CHECKLIST.md</span>      <span style="color: #8b949e;"># Quality checklists for verified outcome claims</span>
│   ├── 📄 <span style="color: #d2a8ff;">CLIENT-REFERENCE-MATRIX.csv</span>  <span style="color: #8b949e;"># Structured table of enterprise contacts for NDAs</span>
│   ├── 📄 <span style="color: #d2a8ff;">PROJECT-REGISTER.csv</span>         <span style="color: #8b949e;"># Master index of client projects and technologies</span>
│   ├── 📄 <span style="color: #7ee787;">PROOF-GAPS-ACTION-PLAN.md</span>    <span style="color: #8b949e;"># Next-step compliance validation audits plan</span>
│   ├── 📄 <span style="color: #7ee787;">README.md</span>                    <span style="color: #8b949e;"># Explanations of audit procedures</span>
│   └── 📄 <span style="color: #7ee787;">SITE-CLAIMS-AUDIT.md</span>         <span style="color: #8b949e;"># Exhaustive validation report of marketing and tech claims</span>
├── 📂 <span style="color: #58a6ff;"><strong>public/</strong></span>                         <span style="color: #8b949e;"># Static assets served in web root</span>
│   ├── ⚙️ <span style="color: #c9d1d9;">_redirects</span>                   <span style="color: #8b949e;"># Netlify redirection file to rewrite routes to index.html</span>
│   ├── 🎨 <span style="color: #c9d1d9;">technoelevate-logo-nav.svg</span>  <span style="color: #8b949e;"># Lightweight vectorized logo for site nav</span>
│   ├── 🎨 <span style="color: #c9d1d9;">technoelevate-logo.svg</span>      <span style="color: #8b949e;"># Main vector branding graphic</span>
│   └── 🖼️ <span style="color: #c9d1d9;">technoelevate_logo.png</span>      <span style="color: #8b949e;"># Raster fallback logo</span>
├── 📂 <span style="color: #58a6ff;"><strong>shared/</strong></span>                         <span style="color: #8b949e;"># Vanilla CSS files (modular stylesheets) and legacy code</span>
│   ├── 📄 <span style="color: #ffa657;">backgrounds.css</span>              <span style="color: #8b949e;"># Premium background grids and card designs</span>
│   ├── 📄 <span style="color: #ffa657;">content.css</span>                  <span style="color: #8b949e;"># Typography and layout constraints for dynamic HTML contents</span>
│   ├── 📄 <span style="color: #ffa657;">home-hero.css</span>                <span style="color: #8b949e;"># Homepage hero slider and bento metric grid styling</span>
│   ├── 📄 <span style="color: #ffa657;">mobile.css</span>                   <span style="color: #8b949e;"># Viewport breakpoint overrides and mobile optimizations</span>
│   ├── 📄 <span style="color: #ffa657;">nav.css</span>                      <span style="color: #8b949e;"># Navigation bar, mobile drawer, and mega drop panel styling</span>
│   ├── 📄 <span style="color: #ffa657;">page.css</span>                     <span style="color: #8b949e;"># Layout, page frames, and alignment helpers</span>
│   ├── 📄 <span style="color: #ffa657;">site.css</span>                     <span style="color: #8b949e;"># Base site styling, variables (CSS custom properties), and utility tokens</span>
│   └── 📄 <span style="color: #79c0ff;">case-page.js / cases.js / ...</span><span style="color: #8b949e;"># Legacy JavaScript logic templates</span>
├── 📂 <span style="color: #58a6ff;"><strong>scripts/</strong></span>                        <span style="color: #8b949e;"># Internal workspace automation</span>
│   └── 📜 <span style="color: #79c0ff;">extract-page-bodies.mjs</span>     <span style="color: #8b949e;"># Migrates and translates legacy HTML into React page modules</span>
├── 📂 <span style="color: #58a6ff;"><strong>src/</strong></span>                            <span style="color: #8b949e;"># Core React Application</span>
│   ├── 🏁 <span style="color: #79c0ff;">main.jsx</span>                    <span style="color: #8b949e;"># System entry point (mounts React App and binds shared styles)</span>
│   ├── 🔀 <span style="color: #79c0ff;">App.jsx</span>                     <span style="color: #8b949e;"># Main router mapping path elements to layout channels</span>
│   ├── 📂 <span style="color: #58a6ff;"><strong>components/</strong></span>                 <span style="color: #8b949e;"># Reusable global shell blocks</span>
│   │   ├── 📄 <span style="color: #79c0ff;">AnimatedCounter.jsx</span>      <span style="color: #8b949e;"># High-performance intersection-observer requestAnimationFrame counter</span>
│   │   ├── 📄 <span style="color: #79c0ff;">Announcement.jsx</span>        <span style="color: #8b949e;"># Global customizable banner bar at top</span>
│   │   ├── 📄 <span style="color: #79c0ff;">HtmlContent.jsx</span>         <span style="color: #8b949e;"># Injector of parsed HTML with SPA click interceptors</span>
│   │   ├── 📄 <span style="color: #79c0ff;">Layout.jsx</span>              <span style="color: #8b949e;"># Page layout template wrapping Nav, Content, and Footer</span>
│   │   ├── 📄 <span style="color: #79c0ff;">LegacyRedirect.jsx</span>      <span style="color: #8b949e;"># Auto-redirecter mapping old paths (.html) to new routing</span>
│   │   ├── 📄 <span style="color: #79c0ff;">PageSkeleton.jsx</span>        <span style="color: #8b949e;"># Shimmer-loading page framework skeleton card</span>
│   │   ├── 📄 <span style="color: #79c0ff;">SiteFooter.jsx</span>          <span style="color: #8b949e;"># Footer with multi-column links and social integrations</span>
│   │   └── 📄 <span style="color: #79c0ff;">SiteNav.jsx</span>             <span style="color: #8b949e;"># Responsive Mega-Nav Header with localization & client search</span>
│   ├── 📂 <span style="color: #58a6ff;"><strong>config/</strong></span>                     <span style="color: #8b949e;"># Branding, image layers, and external configurations</span>
│   │   ├── 📄 <span style="color: #79c0ff;">images.js</span>               <span style="color: #8b949e;"># Unsplash dynamic image catalogs and industry photo index</span>
│   │   ├── 📄 <span style="color: #79c0ff;">logo.js</span>                 <span style="color: #8b949e;"># Core logo config variables</span>
│   │   └── 📄 <span style="color: #79c0ff;">social.js</span>               <span style="color: #8b949e;"># Unified social media platform profiles mapping</span>
│   ├── 📂 <span style="color: #58a6ff;"><strong>content/</strong></span>                    <span style="color: #8b949e;"># Auto-compiled JS content targets from legacy HTML</span>
│   │   └── 📂 <span style="color: #58a6ff;"><strong>pages/</strong></span>                  <span style="color: #8b949e;"># Contains 32 individual page content modules (e.g. about.js)</span>
│   ├── 📂 <span style="color: #58a6ff;"><strong>data/</strong></span>                       <span style="color: #8b949e;"># Core dataset files</span>
│   │   ├── 📄 <span style="color: #79c0ff;">cases.js</span>                <span style="color: #8b949e;"># Complete database array of 20 high-fidelity case studies</span>
│   │   └── 📄 <span style="color: #79c0ff;">site.js</span>                 <span style="color: #8b949e;"># Multilingual language catalog and global search indexes</span>
│   ├── 📂 <span style="color: #58a6ff;"><strong>hooks/</strong></span>                      <span style="color: #8b949e;"># Global state observers and UI transitions hooks</span>
│   │   └── 📄 <span style="color: #79c0ff;">useSiteEffects.js</span>       <span style="color: #8b949e;"># Intersection scroll-reveal and tab header controllers</span>
│   ├── 📂 <span style="color: #58a6ff;"><strong>pages/</strong></span>                      <span style="color: #8b949e;"># Dedicated React Page components</span>
│   │   ├── 📄 <span style="color: #79c0ff;">HomePage.jsx</span>            <span style="color: #8b949e;"># Premium interactive landing page</span>
│   │   ├── 📄 <span style="color: #79c0ff;">CaseStudiesPage.jsx</span>     <span style="color: #8b949e;"># Filterable grid lists of projects with load-more</span>
│   │   ├── 📄 <span style="color: #79c0ff;">CaseStudyPage.jsx</span>       <span style="color: #8b949e;"># Detailed single project output page with custom headers</span>
│   │   ├── 📄 <span style="color: #79c0ff;">StaticPage.jsx</span>          <span style="color: #8b949e;"># Base wrapper executing dynamically rendered modules</span>
│   │   └── 📄 <span style="color: #79c0ff;">routes.js</span>               <span style="color: #8b949e;"># Automatic routes compiler from dynamic page js index</span>
│   └── 📂 <span style="color: #58a6ff;"><strong>utils/</strong></span>                      <span style="color: #8b949e;"># Routing, paths, and calculation utility methods</span>
│   │   └── 📄 <span style="color: #79c0ff;">paths.js</span>                <span style="color: #8b949e;"># Path mapping, normalizers, and redirect translation models</span>
├── 📄 <span style="color: #c9d1d9;">.gitignore</span>                      <span style="color: #8b949e;"># Git ignore rules</span>
├── 📄 <span style="color: #ff7b72;">index.html</span>                      <span style="color: #8b949e;"># SPA HTML DOM root element</span>
├── 📦 <span style="color: #c9d1d9;">package.json</span>                    <span style="color: #8b949e;"># Workspace scripts, react dependencies, and dev plugins</span>
├── 📦 <span style="color: #c9d1d9;">package-lock.json</span>               <span style="color: #8b949e;"># Lockfile containing exact dependencies hierarchy</span>
├── 🛠️ <span style="color: #79c0ff;">vite.config.js</span>                  <span style="color: #8b949e;"># Bundling setup, local server ports, and React configurations</span>
└── 📖 <span style="color: #7ee787;"><strong>PROJECT_GUIDE.md</strong></span>               <span style="color: #8b949e;"># This document</span>
</pre>

---

## 🌐 3. High-Performance Client-Side Routing & Legacy Redirects

The application's routing framework is controlled within `src/App.jsx` and `src/utils/paths.js`, implementing a hybrid SPA structure.

> [!NOTE]
> ### 📁 Static Page Autoloading (`src/App.jsx`)
> Instead of hardcoding every static page route, the app utilizes Vite’s high-performance dynamic import tool `import.meta.glob`:
> ```javascript
> const pageLoaders = import.meta.glob('./content/pages/*.js');
> ```
> When a user accesses a static route (e.g. `/about`), the `LazyStaticRoute` component automatically identifies and resolves the target module (`./content/pages/about.js`). This facilitates asynchronous code-splitting: only the requested content bundle is downloaded to the browser.

> [!IMPORTANT]
> ### 🛡️ Smart Link Interception (`src/components/HtmlContent.jsx`)
> Since pages imported from static legacy assets contain normal anchor links (`<a href="about.html">`), a traditional SPA would trigger a full-page browser refresh. To prevent this, `HtmlContent.jsx` intercepts click events dynamically:
> *   A click-listener is attached to the parent container.
> *   It intercepts clicks targeting anchor elements, normalizes the destination path (converting `name.html` into `/name`), and redirects browser default actions using React Router's `navigate(target)` under the hood.

---

## 🔄 4. The Legacy Compilation & Extraction Pipeline

A key mechanism of the website is the automated extraction of legacy HTML files into React-renderable modules via the `scripts/extract-page-bodies.mjs` script.

> [!WARNING]
> For every input page (e.g., `about.html`), the script writes a corresponding `src/content/pages/about.js` output:
> ```javascript
> export const meta = {
>   "title": "Who We Are",
>   "announcement": {
>     "pill": "New",
>     "text": "TechnoElevate now supports AI product engineering...",
>     "linkHref": "/ai-hub",
>     "linkText": "Explore"
>   },
>   "bodyClass": "about-page"
> };
> 
> export const html = "<section class=\"section\">...</section>";
> ```

---

## 🔍 5. Premium Interactive & Global Systems

### 🔍 A. The Universal Search Engine (`Ctrl + K`)
Implemented directly inside `SiteNav.jsx` with database configurations stored in `src/data/site.js`:
*   **Fuzzy In-Memory Indexing**: A robust search catalog (`SEARCH_INDEX`) maps page titles, categories (Pages, Services, AI, Insights, Company), paths, and keywords.
*   **Live Query Highlighting**: When matching characters are entered, the engine intercepts the string and wraps exact matching substrings in standard `<mark>` tags via `highlightMatch()`.
*   **Accessible Hotkeys**: Pressing `Ctrl + K` or `Cmd + K` opens the search modal, automatically focusing the input field. Pressing `Escape` closes all interactive panels immediately.

### ⚡ B. Viewport Intersection Scroll Reveal Engine
The website incorporates advanced micro-animations via an Intersection Observer pattern in `src/hooks/useSiteEffects.js`:
1.  Elements decorated with the class `.reveal` are automatically queued.
2.  Once an element enters the visible viewport threshold (set to `0.12`), it is dynamically added the class `.up`, triggering keyframed slide-and-fade CSS transitions.
3.  The observer instantly unobserves the element, preventing performance overhead and ensuring the animations run exactly once per mount.

### 🌍 C. Unified Localization System
The multi-lingual configuration supports 12 native language codes (English, Hindi, French, German, Spanish, Japanese, Portuguese, Chinese, Arabic, Korean, Italian, Dutch):
*   Saves selected localization state to `localStorage` key `te-lang`.
*   Supports interactive triggers in both the main desktop mega-menus and mobile menus.

---

## 📊 6. Centralized Database Schema: Case Studies

The primary business engine of the website resides in `src/data/cases.js`. This central repository catalog contains detailed schemas for over 20 enterprise-grade engineering case studies.

### 📋 Data Interface Structure:
```typescript
interface CaseStudy {
  id: string;             // URL-friendly dynamic identifier
  client: string;         // Enterprise client name (e.g., "Kotak Mahindra Bank")
  project: string;        // Full project title
  services: string[];     // Services rendered (e.g., "App Dev", "AI & Data")
  engagement: string;     // Engagement type (Fixed-Scope, T&M, BOT, Staff Aug)
  regions: string[];      // Geographic delivery markets (e.g., "India", "US")
  problem: string;        // In-depth challenge definition
  solution: string;       // Custom software/architecture implementation
  outcomes: string[];     // Measurable business KPI outcomes achieved
  tech: string[];         // Direct technical stack utilised
  industryNorm: string;   // Unified industry category (BFSI, Telecom, etc.)
}
```

This model powers:
1.  **The Case Studies Dashboard (`CaseStudiesPage.jsx`)**: Responsive filtering on category chips with client-specific pagination.
2.  **The Case Study Detailed View (`CaseStudyPage.jsx`)**: Renders custom case study views with custom hero graphics linked dynamically from `src/config/images.js` utilizing highly aesthetic Unsplash backgrounds.

---

## ⚙️ 7. Developer Instructions: Running, Building & Syncing

Follow these commands to interact, extend, and build the application:

### ⚙️ Installing Dependencies
```bash
npm install
```

### ⚡ Starting Local Development Server
```bash
npm run dev
```
Renders the development server at [http://localhost:5173](http://localhost:5173).

### 🔄 Syncing Content from Legacy HTML files
When changes are made to the static `.html` files in the workspace root or the `legacy` directory, sync them to the dynamic SPA pages by running:
```bash
node scripts/extract-page-bodies.mjs
```

### 🚀 Compiling Production Bundle
```bash
npm run build
```
Creates an optimized, production-ready static bundle under the `/dist` directory. 

> [!CAUTION]
> ### ⚠️ SPA Production Routing Setup
> Since this is a Single Page Application (SPA) utilizing HTML5 Client-Side History Routing, ensure your production server or static host (Netlify, Vercel, AWS S3, or Nginx) is configured to **redirect or rewrite all routes back to `index.html`** to prevent 404 page-refresh failures.
