import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HtmlContent({ html }) {

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onClick = (e) => {
      const a = e.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) return;
      e.preventDefault();
      navigate(href);
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

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />;
}
