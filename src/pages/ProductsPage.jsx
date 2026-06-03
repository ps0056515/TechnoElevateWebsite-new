import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Announcement from '../components/Announcement';
import { PRODUCTS } from '../data/products';
import { useDocumentTitle } from '../hooks/useSiteEffects';

export default function ProductsPage() {
  useDocumentTitle('Products');

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <Announcement
        pill="Products"
        text="Platforms engineered by TestYantra & TechnoElevate — voice AI, admissions, agents, ed-tech, accessibility, and hiring."
        linkHref="/contact"
        linkText="Discuss a product build →"
      />

      <section className="page-hero bg-theme bg-products">
        <div className="page-hero-inner">
          <div className="page-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Products</span>
          </div>
          <h1>
            Product engineering
            <br />
            <em>shipped on Cursor.</em>
          </h1>
          <p className="page-hero-lead">
            Seven live product lines — from IVRAI voice bots and AdmitIQ admissions to enterprise agentic AI,
            ZupFly learning, AccessHub, LexiQuest, and InterviewIQ. Each built as a full-stack platform, not a slide deck.
          </p>
        </div>
      </section>

      <section className="section" id="products">
        <div className="wrap">
          <div className="services-head">
            <div>
              <div className="s-eyebrow">Portfolio</div>
              <h2 className="s-title">
                Seven products.
                <br />
                One engineering studio.
              </h2>
            </div>
            <p className="s-sub" style={{ fontSize: 15, maxWidth: 320 }}>
              Select a product for capabilities, technology stack, and who it serves.
            </p>
          </div>
          <div className="services-grid reveal">
            {PRODUCTS.map((p, i) => (
              <div key={p.slug} className={`svc ${p.svcClass}`}>
                <span className="svc-n">{String(i + 1).padStart(2, '0')}</span>
                <div className="svc-icon">
                  <span style={{ fontSize: 22 }} aria-hidden>
                    {p.category.includes('Voice') ? '🎙️' : p.category.includes('EdTech') ? '📚' : p.category.includes('Enterprise') ? '⚡' : p.category.includes('HR') ? '💼' : p.category.includes('A11y') ? '♿' : '🤖'}
                  </span>
                </div>
                <h3>
                  <Link to={`/products/${p.slug}`}>{p.name}</Link>
                </h3>
                <p className="svc-body">{p.summary}</p>
                <div className="svc-tags">
                  <span className="svc-tag hl">{p.category}</span>
                  {p.industries.slice(0, 2).map((ind) => (
                    <span key={ind} className="svc-tag">
                      {ind}
                    </span>
                  ))}
                </div>
                <Link to={`/products/${p.slug}`} className="svc-link">
                  View product →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-band">
        <div className="cta-band-inner">
          <h2>
            Want to launch your own
            <br />
            <em>product line?</em>
          </h2>
          <div className="cta-band-btns">
            <Link to="/contact" className="cta-band-primary">
              Start a Conversation
            </Link>
            <Link to="/services" className="cta-band-secondary">
              Explore services →
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
