import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Announcement from '../components/Announcement';
import HtmlContent from '../components/HtmlContent';
import { useDocumentTitle } from '../hooks/useSiteEffects';
import { CASES } from '../data/cases';
import { meta, html } from '../content/pages/casestudies';

const HERO_HTML = html.split('<section class="section bg-light"')[0];

const FILTERS = ['all', 'BFSI', 'Telecom', 'Automotive', 'Healthcare', 'Insurance', 'Manufacturing', 'Retail & E-com', 'AI'];

function caseCardTitle(project) {
  const dash = project.indexOf(' — ');
  return dash > 0 ? project.slice(0, dash) : project;
}

function caseCardSubtitle(project) {
  const dash = project.indexOf(' — ');
  return dash > 0 ? project.slice(dash + 3) : null;
}

export default function CaseStudiesPage() {
  useDocumentTitle(meta.title);
  const [activeF, setActiveF] = useState('all');
  const [count, setCount] = useState(9);

  useEffect(() => {
    document.body.className = meta.bodyClass || '';
    return () => { document.body.className = ''; };
  }, []);

  const filtered = useMemo(() => {
    if (activeF === 'all') return CASES;
    if (activeF === 'AI') return CASES.filter((c) => c.services.some((s) => s.includes('AI')));
    return CASES.filter((c) => c.industryNorm === activeF);
  }, [activeF]);

  const visible = filtered.slice(0, count);
  const ann = meta.announcement;

  return (
    <>
      <Announcement pill={ann.pill} text={ann.text} linkHref={`/${ann.linkHref}`} linkText={ann.linkText} />
      <HtmlContent html={HERO_HTML} />
      <section className="section bg-light" id="casestudies">
        <div className="wrap">
          <div className="cs-head">
            <div>
              <div className="s-eyebrow">Case Studies</div>
              <h2 className="s-title">Real clients.<br />Real outcomes.</h2>
            </div>
            <div className="cs-filter-wrap">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  className={`cs-f${activeF === f ? ' on' : ''}`}
                  onClick={() => { setActiveF(f); setCount(9); }}
                >
                  {f === 'Retail & E-com' ? 'Retail' : f === 'all' ? 'All' : f}
                </button>
              ))}
            </div>
          </div>
          <div className="cs-grid">
            {visible.map((c, i) => {
              const sameClientAsPrev = i > 0 && visible[i - 1].client === c.client;
              const subtitle = sameClientAsPrev
                ? caseCardSubtitle(c.project)
                : c.client;
              return (
              <Link key={c.id} to={`/case-studies/${c.id}`} className="cs-card">
                <div className="cs-card-top" />
                <div className="cs-card-body">
                  <div className="cs-ind">{c.industryNorm}</div>
                  <div className="cs-client">{caseCardTitle(c.project)}</div>
                  {subtitle && <div className="cs-proj">{subtitle}</div>}
                  <p className="cs-excerpt">{c.problem}</p>
                </div>
                <div className="cs-card-foot">
                  {c.services.slice(0, 2).map((s) => (
                    <span key={s} className="cs-chip svc">{s}</span>
                  ))}
                  <span className="cs-chip eng">{c.engagement}</span>
                  <span className="cs-chip">{c.regions[0]}</span>
                </div>
              </Link>
              );
            })}
          </div>
          {filtered.length > count && (
            <div className="cs-more-wrap">
              <button type="button" className="btn-more" onClick={() => setCount((n) => n + 9)}>
                Load More Case Studies →
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
