import { SITE } from '../config/site.js';
import { PRODUCTS } from './products.js';
import { CASES } from './cases.js';
import { SEARCH_INDEX } from './site.js';

/** Static route overrides — richer descriptions than page title alone. */
const PAGE_SEO = {
  '/': {
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
  },
  '/about': {
    title: 'About TechnoElevate',
    description:
      'Product engineering studio within TestYantra — CMMI Level 3 certified. Embedded partners for BFSI, telecom, automotive and enterprise AI since 2016.',
  },
  '/contact': {
    title: 'Contact',
    description: 'Talk to TechnoElevate about enterprise AI, DevOps/SRE, application development and product engineering engagements.',
  },
  '/services': {
    title: 'Services',
    description:
      'Application development, cloud & DevOps, AI/ML, digital transformation, ERP integration and consulting — built for enterprise scale.',
  },
  '/products': {
    title: 'Products',
    description:
      'Production platforms built by TechnoElevate — IVRAI voice AI, AdmitIQ, Agentic Platform, ZupFly, AccessHub, LexiQuest and InterviewIQ.',
  },
  '/casestudies': {
    title: 'Case Studies',
    description:
      'Documented outcomes for Kotak, CARS24, LegalDST, Tekion, Verizon, JPMorgan, Lloyds and global enterprise clients.',
  },
  '/ai-hub': {
    title: 'AI Hub',
    description: 'Enterprise AI strategy, LLM & RAG engineering, agentic workflows, ML platforms and computer vision — from TechnoElevate.',
  },
  '/devops-sre': {
    title: 'DevOps, SRE & Observability',
    description: 'CI/CD, Kubernetes, Prometheus, Grafana and SRE practices for production microservices at enterprise scale.',
  },
  '/leadership': {
    title: 'Leadership',
    description: 'TechnoElevate leadership — practice heads for AI, cloud, delivery and client success within the TestYantra group.',
  },
  '/careers': {
    title: 'Careers',
    description: 'Engineering careers at TechnoElevate — Kotak-scale banking, CARS24 fintech ML, Tekion cloud DMS and LegalDST AI.',
  },
};

function titleWithBrand(title) {
  if (!title || title.includes('TechnoElevate')) return title || SITE.defaultTitle;
  return `${title} — TechnoElevate`;
}

export function getSeoForPath(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/';
  const canonical = `${SITE.url}${path === '/' ? '' : path}`;

  if (PAGE_SEO[path]) {
    const p = PAGE_SEO[path];
    return { ...p, title: titleWithBrand(p.title), canonical, path };
  }

  const productMatch = path.match(/^\/products\/([^/]+)$/);
  if (productMatch) {
    const product = PRODUCTS.find((p) => p.slug === productMatch[1]);
    if (product) {
      return {
        title: titleWithBrand(product.name),
        description: product.summary,
        canonical,
        path,
        keywords: [product.name, product.category, ...product.tech.slice(0, 4)].join(', '),
      };
    }
  }

  const caseMatch = path.match(/^\/case-studies\/([^/]+)$/);
  if (caseMatch) {
    const cs = CASES.find((c) => c.id === caseMatch[1]);
    if (cs) {
      return {
        title: titleWithBrand(`${cs.client} — ${cs.project}`),
        description: cs.problem.slice(0, 155) + (cs.problem.length > 155 ? '…' : ''),
        canonical,
        path,
      };
    }
  }

  const indexEntry = SEARCH_INDEX.find((item) => item.href === path);
  if (indexEntry) {
    return {
      title: titleWithBrand(indexEntry.title),
      description: `${indexEntry.title} — TechnoElevate product engineering, AI and enterprise delivery.`,
      canonical,
      path,
    };
  }

  return {
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
    canonical: `${SITE.url}${path === '/' ? '' : path}`,
    path,
  };
}

/** All public paths for sitemap generation and prerender. */
export function getAllPublicPaths() {
  const paths = new Set(['/']);

  SEARCH_INDEX.forEach((item) => {
    if (item.href && item.href.startsWith('/')) paths.add(item.href);
  });

  PRODUCTS.forEach((p) => paths.add(`/products/${p.slug}`));
  CASES.forEach((c) => paths.add(`/case-studies/${c.id}`));

  paths.add('/leadership');
  paths.add('/privacy');

  return [...paths].sort();
}
