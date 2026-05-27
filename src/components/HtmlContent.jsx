import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { initReveal } from '../hooks/useSiteEffects';
import { normalizeHref } from '../utils/paths';

export default function HtmlContent({ html }) {
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onClick = (e) => {
      const a = e.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href');
      const target = normalizeHref(href);
      if (!target) return;
      e.preventDefault();
      navigate(target);
    };

    el.addEventListener('click', onClick);
    return () => el.removeEventListener('click', onClick);
  }, [html, navigate]);

  useEffect(() => {
    const btn = ref.current?.querySelector('#fBtn');
    if (!btn) return;
    const onSubmit = () => {
      btn.textContent = 'Message Sent ✓';
      btn.style.background = '#059669';
      setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.style.background = '';
      }, 3500);
    };
    btn.addEventListener('click', onSubmit);
    return () => btn.removeEventListener('click', onSubmit);
  }, [html]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    let cleanup = initReveal(el);
    const t = setTimeout(() => {
      cleanup();
      cleanup = initReveal(el);
    }, 50);
    return () => {
      clearTimeout(t);
      cleanup();
    };
  }, [html]);

  return <div ref={ref} className="page-html-content" dangerouslySetInnerHTML={{ __html: html }} />;
}
