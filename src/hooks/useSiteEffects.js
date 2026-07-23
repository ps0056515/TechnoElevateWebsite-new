import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE } from '../config/site.js';
import { getSeoForPath } from '../data/seo.js';

/** Attach scroll-reveal to .reveal elements inside scope (or whole document). */
export function initReveal(scope = document) {
  const root = scope && scope.querySelectorAll ? scope : document;
  const elements = root.querySelectorAll('.reveal');
  if (!elements.length) return () => {};

  const obs = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('up');
        } else {
          // Reset the animation only if the element is below the viewport
          // (scrolled out of view back to the bottom)
          const isBelowViewport = e.boundingClientRect.top > 0;
          if (isBelowViewport) {
            e.target.classList.remove('up');
          }
        }
      }),
    { threshold: 0.12 }
  );
  elements.forEach((r) => obs.observe(r));
  return () => obs.disconnect();
}

export function useReveal() {
  const location = useLocation();

  useEffect(() => {
    let cleanup = initReveal();
    const t1 = requestAnimationFrame(() => {
      cleanup();
      cleanup = initReveal();
    });
    const t2 = setTimeout(() => {
      cleanup();
      cleanup = initReveal();
    }, 350);
    return () => {
      cancelAnimationFrame(t1);
      clearTimeout(t2);
      cleanup();
    };
  }, [location.pathname]);
}

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — Innovexce` : 'Innovexce — Software Engineering at Scale';
  }, [title]);
}

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/** Per-route SEO: title, description, Open Graph, Twitter, canonical. */
export function usePageMeta(pathname) {
  useEffect(() => {
    const seo = getSeoForPath(pathname);
    document.title = seo.title;

    upsertMeta('name', 'description', seo.description);
    upsertMeta('name', 'keywords', seo.keywords || SITE.defaultKeywords);
    upsertMeta('property', 'og:title', seo.title);
    upsertMeta('property', 'og:description', seo.description);
    upsertMeta('property', 'og:url', seo.canonical);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', SITE.name);
    upsertMeta('property', 'og:locale', SITE.locale);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', seo.title);
    upsertMeta('name', 'twitter:description', seo.description);
    upsertLink('canonical', seo.canonical);
  }, [pathname]);
}

export function useBodyClass(className) {
  useEffect(() => {
    document.body.className = className || '';
    return () => {
      document.body.className = '';
    };
  }, [className]);
}
