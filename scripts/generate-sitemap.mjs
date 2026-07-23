#!/usr/bin/env node
/** Generate public/sitemap.xml from SEO route list. */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

// Inline route list (mirrors src/data/seo.js getAllPublicPaths) — kept here so Node can run without bundling app code.
const SITE_URL = 'https://innovexce.com';

async function loadPaths() {
  const { getAllPublicPaths } = await import('../src/data/seo.js');
  return getAllPublicPaths();
}

async function main() {
  const paths = await loadPaths();
  const today = new Date().toISOString().slice(0, 10);

  const urls = paths
    .map((p) => {
      const loc = p === '/' ? SITE_URL : `${SITE_URL}${p}`;
      const priority = p === '/' ? '1.0' : p.startsWith('/products') || p.startsWith('/case-studies') ? '0.8' : '0.7';
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  const out = path.join(root, 'public', 'sitemap.xml');
  fs.writeFileSync(out, xml, 'utf8');
  console.log(`Wrote ${paths.length} URLs to public/sitemap.xml`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
