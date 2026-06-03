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
        text="Seven full-stack platforms — voice AI, admissions, enterprise agents, ed-tech, accessibility, and hiring intelligence."
        linkHref="/contact"
        linkText="Build your next product with us →"
      />

      <section className="page-hero bg-theme bg-products">
        <div className="page-hero-inner">
          <div className="page-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Products</span>
          </div>
          <h1>
            Platforms we build
            <br />
            <em>and ship to production.</em>
          </h1>
          <p className="page-hero-lead">
            From IVRAI voice bots and AdmitIQ admissions to enterprise agentic AI, ZupFly learning,
            AccessHub, LexiQuest, and InterviewIQ — each product is engineered end-to-end with the same
            rigour we bring to Kotak, Tekion, and LegalDST engagements.
          </p>
          <div className="product-hero-stats">
            <div className="product-stat">
              <div className="num">7</div>
              <div className="lbl">Live product lines</div>
            </div>
            <div className="product-stat">
              <div className="num">AI-first</div>
              <div className="lbl">Voice, agents &amp; ML</div>
            </div>
            <div className="product-stat">
              <div className="num">EdTech</div>
              <div className="lbl">Admissions &amp; learning</div>
            </div>
            <div className="product-stat">
              <div className="num">Full-stack</div>
              <div className="lbl">Web, API, mobile, ops</div>
            </div>
          </div>
        </div>
      </section>

      <div className="products-trust-band">
        <div className="products-trust-inner">
          <span className="products-trust-pill">Product engineering</span>
          <span>Cursor-accelerated delivery</span>
          <span>·</span>
          <span>Multi-tenant SaaS patterns</span>
          <span>·</span>
          <span>Production deploy paths</span>
        </div>
      </div>

      <section className="section" id="products">
        <div className="wrap">
          <div className="services-head">
            <div>
              <div className="s-eyebrow">Portfolio</div>
              <h2 className="s-title">
                Explore each product
                <br />
                in depth.
              </h2>
            </div>
            <p className="s-sub" style={{ fontSize: 15, maxWidth: 340 }}>
              Click through for problem statements, architecture modules, use cases, metrics, and technology stacks — the same depth you would expect on a product marketing site.
            </p>
          </div>
          <div className="products-grid reveal">
            {PRODUCTS.map((p) => (
              <Link key={p.slug} to={`/products/${p.slug}`} className="product-card">
                <div
                  className="product-card-media"
                  style={{
                    backgroundImage: `url(${p.cardImage})`,
                    '--product-accent': p.accent,
                  }}
                >
                  <span className="product-card-badge">{p.category}</span>
                  <div className="product-card-metric">
                    <strong>{p.metrics[0]?.value}</strong>
                    <span>{p.metrics[0]?.label}</span>
                  </div>
                </div>
                <div className="product-card-body">
                  <h3>{p.name}</h3>
                  <div className="product-card-tagline">{p.tagline}</div>
                  <p>{p.summary}</p>
                  <span className="product-card-link">View product details →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="wrap">
          <div className="s-eyebrow">How we ship products</div>
          <h2 className="s-title">From idea to production.</h2>
          <div className="product-workflow" style={{ marginTop: 32 }}>
            <div className="product-workflow-step">Discovery &amp; PRD alignment</div>
            <span className="product-workflow-arrow">→</span>
            <div className="product-workflow-step">Architecture &amp; tenancy model</div>
            <span className="product-workflow-arrow">→</span>
            <div className="product-workflow-step">Cursor-accelerated build</div>
            <span className="product-workflow-arrow">→</span>
            <div className="product-workflow-step">Deploy, observe, iterate</div>
          </div>
        </div>
      </section>

      <div className="cta-band">
        <div className="cta-band-inner">
          <h2>
            Ready to add an eighth
            <br />
            <em>product to this list?</em>
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
