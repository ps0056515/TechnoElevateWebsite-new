import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const outDir = path.join(root, 'src', 'content', 'pages');

const pages = [
  'about', 'services', 'industries', 'engagement', 'technology', 'contact',
  'casestudies', 'ai-hub', 'ai-llm-rag', 'ai-agentic', 'ai-ml-platform', 'ai-computer-vision',
  'devops-sre', 'insights', 'insight-tekion-dms', 'insight-sdms-kafka', 'insight-legaldst-rag',
  'insight-kotak-automation', 'insight-iiot-ml', 'insight-devops-sre', 'insight-cars24-ml',
  'whitepapers', 'newsroom', 'methodology', 'careers', 'leadership', 'locations', 'security',
  'industry-bfsi', 'industry-automotive', 'industry-telecom',
];

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function extractBody(html) {
  const navEnd = html.indexOf('<div id="site-nav"></div>');
  const footerStart = html.indexOf('<div id="site-footer"></div>');
  if (navEnd === -1 || footerStart === -1) return null;
  let body = html.slice(navEnd + '<div id="site-nav"></div>'.length, footerStart).trim();
  body = body
    .replace(/href="index\.html"/g, 'href="/"')
    .replace(/href="([^"#?]+)\.html"/g, 'href="/$1"')
    .replace(/href="case-study\.html\?id=([^"]+)"/g, 'href="/case-studies/$1"');
  return body;
}

function extractMeta(html) {
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1]?.replace(' — Innovexce', '') || '';
  const annMatch = html.match(/<div class="announcement[^"]*">([\s\S]*?)<\/div>/);
  let announcement = null;
  if (annMatch) {
    const pill = annMatch[1].match(/<span class="pill">([^<]+)<\/span>/)?.[1];
    const text = annMatch[1].match(/<span class="pill">[^<]+<\/span>\s*<span>([^<]+)<\/span>/)?.[1];
    const link = annMatch[1].match(/<a href="([^"]+)">([^<]+)/);
    if (pill && text) {
      announcement = {
        pill,
        text,
        linkHref: link?.[1]?.replace('.html', '').replace('index', '/') || null,
        linkText: link?.[2]?.replace(/&rarr;/g, '→') || null,
      };
    }
  }
  const bodyClass = html.match(/<body class="([^"]*)">/)?.[1] || '';
  return { title, announcement, bodyClass };
}

const index = [];

for (const name of pages) {
  const file = path.join(root, `${name}.html`);
  if (!fs.existsSync(file)) {
    console.warn('Skip missing:', name);
    continue;
  }
  const html = fs.readFileSync(file, 'utf8');
  const body = extractBody(html);
  if (!body) {
    console.warn('Skip no body:', name);
    continue;
  }
  const meta = extractMeta(html);
  const outFile = path.join(outDir, `${name}.js`);
  fs.writeFileSync(outFile, `export const meta = ${JSON.stringify(meta, null, 2)};\n\nexport const html = ${JSON.stringify(body)};\n`);
  index.push(name);
  console.log('Extracted:', name);
}

fs.writeFileSync(
  path.join(outDir, 'index.js'),
  index.map((n) => `export * as ${n.replace(/-/g, '_')} from './${n}.js';`).join('\n') + '\n'
);

console.log(`Done: ${index.length} pages`);
