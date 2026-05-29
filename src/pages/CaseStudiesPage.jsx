import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Announcement from '../components/Announcement';
import ScrollReveal from '../components/ScrollReveal';
import { useDocumentTitle } from '../hooks/useSiteEffects';
import { CASES } from '../data/cases';
import { meta } from '../content/pages/casestudies';

const FILTERS = ['all', 'BFSI', 'Telecom', 'Automotive', 'Healthcare', 'Insurance', 'Manufacturing', 'Retail & E-com', 'AI'];

const CASE_IMAGES = {
  legaldst: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80',
  'kotak-sra': 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=900&q=80',
  'cars24-credit': 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=900&q=80',
  'kotak-lcrms': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
  'jpmorgan-tps': 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80',
  'lloyds-ddrx': 'https://images.unsplash.com/photo-1565373677928-90e963765eac?auto=format&fit=crop&w=900&q=80',
  saarathi: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=900&q=80',
  'tekion-dms': 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
  'tekion-hub': 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
  'verizon-mybiz': 'https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=900&q=80',
  'att-wos': 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80',
  'mndot-etbos': 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=900&q=80',
  medhost: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
  talic: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80',
  'tata-aig': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
  autonomo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80',
  sdms: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
  iiot: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
  transconnect: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80',
  procurehere: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80',
};

const INDUSTRY_IMAGES = {
  BFSI: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80',
  Telecom: 'https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=900&q=80',
  Automotive: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
  Healthcare: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
  Insurance: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80',
  Manufacturing: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
  'Retail & E-com': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80',
  LegalTech: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80',
  'Public Sector': 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=900&q=80',
  Energy: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80',
  'Enterprise SaaS': 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80',
};

function caseCardTitle(project) {
  const parts = project.split(/\s(?:-|--|—|â€”)\s/);
  return parts.length > 1 ? parts[0] : project;
}

function caseCardSubtitle(c, index, visible) {
  const sameClientAsPrev = index > 0 && visible[index - 1].client === c.client;
  const parts = c.project.split(/\s(?:-|--|—|â€”)\s/);
  if (sameClientAsPrev && parts.length > 1) return parts.slice(1).join(' - ');
  return c.client;
}

function caseCardImage(c) {
  return CASE_IMAGES[c.id] || INDUSTRY_IMAGES[c.industryNorm] || INDUSTRY_IMAGES.BFSI;
}

function caseMetric(c) {
  if (c.id === 'legaldst') return 'AI legal research';
  if (c.id === 'kotak-sra') return '80-90% SR automated';
  if (c.id === 'cars24-credit') return 'In-house ML scoring';
  return c.outcomes[0];
}

function chipClass(value, type = 'meta') {
  const key = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  return `cs-chip ${type} chip-${key}`;
}

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 95, damping: 16 },
  },
};

export default function CaseStudiesPage() {
  useDocumentTitle(meta.title);
  const [activeF, setActiveF] = useState('all');
  const [count, setCount] = useState(9);

  useEffect(() => {
    document.body.className = meta.bodyClass || '';
    return () => {
      document.body.className = '';
    };
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

      <section className="case-index-hero">
        <motion.div
          className="case-index-hero-inner"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="page-breadcrumb" variants={heroItem}>
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Case Studies</span>
          </motion.div>
          <motion.div className="case-index-kicker" variants={heroItem}>
            Case Studies
          </motion.div>
          <motion.h1 variants={heroItem}>
            Real clients.<br />
            <em>Real outcomes.</em>
          </motion.h1>
          <motion.p variants={heroItem}>
            From banking automation and legal AI to automotive platforms and cloud-native
            modernization, explore production work delivered by TechnoElevate teams.
          </motion.p>
          <motion.div className="case-index-stats" variants={heroItem}>
            <span><strong>{CASES.length}+</strong> engagements</span>
            <span><strong>12+</strong> industries</span>
            <span><strong>6</strong> delivery regions</span>
          </motion.div>
        </motion.div>
      </section>

      <section className="case-index-section" id="casestudies">
        <div className="wrap">
          <ScrollReveal direction="up" distance={22}>
            <div className="cs-head case-index-head">
              <div>
                <div className="s-eyebrow">Case Studies</div>
                <h2 className="s-title">Browse the work.</h2>
              </div>
              <div className="cs-filter-wrap">
                {FILTERS.map((f) => (
                  <motion.button
                    key={f}
                    type="button"
                    className={`cs-f${activeF === f ? ' on' : ''}`}
                    onClick={() => {
                      setActiveF(f);
                      setCount(9);
                    }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    {f === 'Retail & E-com' ? 'Retail' : f === 'all' ? 'All' : f}
                  </motion.button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <motion.div className="cs-grid case-index-grid" layout>
            <AnimatePresence mode="popLayout">
              {visible.map((c, i) => (
                <motion.div
                  key={c.id}
                  layout
                  initial={{ opacity: 0, y: 26, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.98 }}
                  transition={{
                    duration: 0.35,
                    delay: Math.min(i * 0.035, 0.24),
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link to={`/case-studies/${c.id}`} className="cs-card case-index-card">
                    <div
                      className="cs-card-media"
                      style={{ backgroundImage: `url('${caseCardImage(c)}')` }}
                    >
                      <span className="cs-media-ind">{c.industryNorm}</span>
                      <span className="cs-media-metric">{caseMetric(c)}</span>
                    </div>
                    <div className="cs-card-body">
                      <div className="cs-client">{caseCardTitle(c.project)}</div>
                      <div className="cs-proj">{caseCardSubtitle(c, i, visible)}</div>
                      <p className="cs-excerpt">{c.problem}</p>
                    </div>
                    <div className="cs-card-foot">
                      {c.services.slice(0, 2).map((s) => (
                        <span key={s} className={chipClass(s, 'svc')}>{s}</span>
                      ))}
                      <span className={chipClass(c.engagement, 'eng')}>{c.engagement}</span>
                      <span className={chipClass(c.regions[0], 'region')}>{c.regions[0]}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length > count && (
            <div className="cs-more-wrap">
              <motion.button
                type="button"
                className="btn-more"
                onClick={() => setCount((n) => n + 9)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Load More Case Studies -&gt;
              </motion.button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
