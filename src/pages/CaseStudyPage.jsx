import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CASES } from '../data/cases';
import { HERO_OVERLAY, INDUSTRY_PHOTOS, PHOTOS, unsplash } from '../config/images';
import { useDocumentTitle } from '../hooks/useSiteEffects';

export default function CaseStudyPage() {
  const { id } = useParams();
  const c = CASES.find((x) => x.id === id);

  useDocumentTitle(c ? `${c.client} — Case Study` : 'Case Study');
  useEffect(() => {
    document.body.className = '';
  }, []);

  if (!c) {
    return (
      <div className="wrap" style={{ padding: '80px var(--pad)' }}>
        <h1>Case study not found</h1>
        <p><Link to="/casestudies">Back to case studies</Link></p>
      </div>
    );
  }

  const photo = INDUSTRY_PHOTOS[c.industryNorm] || PHOTOS.casestudies;
  const bg = `${HERO_OVERLAY},url('${unsplash(photo)}')`;

  return (
    <>
      <section className="cs-full-hero" style={{ backgroundImage: bg, backgroundSize: 'cover' }}>
        <div className="cs-full-inner">
          <div className="page-breadcrumb">
            <Link to="/">Home</Link><span>/</span>
            <Link to="/casestudies">Case Studies</Link><span>/</span>
            <span>{c.client}</span>
          </div>
          <div className="m-ind" style={{ fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--orange2)', fontWeight: 700, marginBottom: 10 }}>{c.industryNorm}</div>
          <h1 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: 8 }}>{c.client}</h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,.55)', maxWidth: 680, marginBottom: 24 }}>{c.project}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {c.services.map((s) => <span key={s} className="page-tag">{s}</span>)}
            <span className="page-tag">{c.engagement}</span>
            <span className="page-tag">{c.regions.join(' · ')}</span>
          </div>
        </div>
      </section>
      <div className="cs-full-body">
        <h2>The Challenge</h2><p>{c.problem}</p>
        <h2>Our Solution</h2><p>{c.solution}</p>
        <h2>Outcomes Delivered</h2>
        <div className="cs-outcomes-full">
          {c.outcomes.map((o) => <div key={o} className="cs-out-full">{o}</div>)}
        </div>
        <h2>Technology Stack</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
          {c.tech.map((t) => <span key={t} className="m-pill">{t}</span>)}
        </div>
        <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--rule)', display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link to="/contact" className="cta-band-primary" style={{ display: 'inline-block' }}>Discuss a Similar Project</Link>
          <Link to="/casestudies" className="btn-more">All Case Studies →</Link>
        </div>
      </div>
    </>
  );
}
