import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CASES } from '../data/cases';
import { useDocumentTitle } from '../hooks/useSiteEffects';

const IMG_MAP = {
  BFSI: 'photo-1563986768609-322da13575f3',
  Automotive: 'photo-1492144534655-ae79c964c9d7',
  Telecom: 'photo-1558618666-fcd25c85cd64',
  'Retail & E-com': 'photo-1556742049-0cfed4f6a45d',
  LegalTech: 'photo-1620712943348-d21466881688',
  Manufacturing: 'photo-1581091226825-a6a2a5aee158',
};

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

  const photo = IMG_MAP[c.industryNorm] || 'photo-1552664730-d307ca884978';
  const bg = `linear-gradient(135deg,rgba(13,17,23,.92),rgba(20,30,46,.88)),url('https://images.unsplash.com/${photo}?auto=format&fit=crop&w=1920&q=80')`;

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
