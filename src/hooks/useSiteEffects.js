import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Attach scroll-reveal to .reveal elements inside scope (or whole document). */
export function initReveal(scope = document) {
  const root = scope && scope.querySelectorAll ? scope : document;
  const elements = root.querySelectorAll('.reveal:not(.up)');
  if (!elements.length) return () => {};

  const obs = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('up');
          obs.unobserve(e.target);
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
    document.title = title ? `${title} — TechnoElevate` : 'TechnoElevate — Software Engineering at Scale';
  }, [title]);
}

export function useBodyClass(className) {
  useEffect(() => {
    document.body.className = className || '';
    return () => {
      document.body.className = '';
    };
  }, [className]);
}
