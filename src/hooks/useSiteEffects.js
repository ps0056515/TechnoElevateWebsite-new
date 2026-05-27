import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useReveal() {
  const location = useLocation();

  useEffect(() => {
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
    document.querySelectorAll('.reveal').forEach((r) => obs.observe(r));
    return () => obs.disconnect();
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
    return () => { document.body.className = ''; };
  }, [className]);
}
