import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Announcement from '../components/Announcement';
import { getProduct, PRODUCTS } from '../data/products';
import { useDocumentTitle } from '../hooks/useSiteEffects';

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProduct(slug);

  useDocumentTitle(product ? product.name : 'Product');

  if (!product) {
    return (
      <div className="wrap" style={{ padding: '80px var(--pad)' }}>
        <h1>Product not found</h1>
        <p>
          <Link to="/products">← All products</Link>
        </p>
      </div>
    );
  }

  const others = PRODUCTS.filter((p) => p.slug !== slug);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <Announcement
        pill={product.category}
        text={product.tagline}
        linkHref="/products"
        linkText="All products →"
      />

      <section className={`page-hero bg-theme ${product.heroClass}`}>
        <div className="page-hero-inner">
          <div className="page-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/products">Products</Link>
            <span>/</span>
            <span>{product.name}</span>
          </div>
          <h1>
            {product.name}
            <br />
            <em>{product.tagline}</em>
          </h1>
          <p className="page-hero-lead">{product.summary}</p>
          <div className="page-hero-tags">
            {product.tech.slice(0, 6).map((t) => (
              <span key={t} className="page-tag">
                {t}
              </span>
            ))}
          </div>
          <div className="product-hero-stats">
            {product.metrics.map((m) => (
              <div key={m.label} className="product-stat">
                <div className="num">{m.value}</div>
                <div className="lbl">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="wrap">
          <div className="product-split reveal">
            <div>
              <div className="s-eyebrow">Overview</div>
              <h2 className="s-title" style={{ fontSize: 'clamp(26px,3vw,36px)' }}>
                Built for production, not demos
              </h2>
              <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.8, marginBottom: 20 }}>
                {product.description}
              </p>
              <div className="product-personas">
                {product.personas.map((persona) => (
                  <span key={persona} className="product-persona">
                    {persona}
                  </span>
                ))}
              </div>
              <div className="product-problem-box">
                <h4>The challenge</h4>
                <p>{product.problem}</p>
              </div>
              <div className="product-problem-box solution">
                <h4>How {product.name} solves it</h4>
                <p>{product.solution}</p>
              </div>
            </div>
            <div
              className="product-split-visual reveal"
              style={{
                backgroundImage: `url(${product.heroImage})`,
                '--product-accent': product.accent,
              }}
              role="img"
              aria-label={`${product.name} visual`}
            />
          </div>

          <div
            className="product-gallery reveal"
            style={{ '--product-accent': product.accent }}
          >
            <div
              className="product-gallery-main"
              style={{ backgroundImage: `url(${product.heroImage})` }}
            />
            <div className="product-gallery-side">
              <div
                className="product-gallery-tile"
                style={{ backgroundImage: `url(${product.cardImage})` }}
              />
              <div
                className="product-gallery-tile product-gallery-tile--alt"
                style={{
                  backgroundImage: `url(${product.galleryAlt || product.cardImage})`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="product-metrics-band">
        <div className="wrap">
          <div className="s-eyebrow" style={{ color: 'var(--orange2)' }}>
            At a glance
          </div>
          <h2 className="s-title white">Platform highlights</h2>
          <div className="product-metrics-grid reveal">
            {product.metrics.map((m) => (
              <div key={m.label} className="product-metric-dark">
                <div className="num">{m.value}</div>
                <div className="lbl">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="wrap">
          <div className="s-eyebrow">Use cases</div>
          <h2 className="s-title">Who uses {product.name}</h2>
          <p className="s-sub" style={{ maxWidth: 640 }}>
            Typical adoption patterns from institutes, enterprises, and teams we have designed for.
          </p>
          <div className="product-use-grid reveal">
            {product.useCases.map((uc) => (
              <div key={uc.title} className="product-use-card">
                <h4>{uc.title}</h4>
                <p>{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="s-eyebrow">Architecture</div>
          <h2 className="s-title">Core modules</h2>
          <div className="product-modules-grid reveal">
            {product.modules.map((mod) => (
              <div key={mod.title} className="product-module">
                <h4>{mod.title}</h4>
                <p>{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section bg-content-ai">
        <div className="wrap">
          <div className="s-eyebrow">Capabilities</div>
          <h2 className="s-title">Feature depth</h2>
          <div className="cap-list reveal">
            {product.features.map((f, i) => (
              <div key={f} className="cap-item">
                <div className="cap-num">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <p style={{ margin: 0, fontSize: 15, color: 'var(--body)', lineHeight: 1.65 }}>{f}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="wrap">
          <div className="s-eyebrow">Workflow</div>
          <h2 className="s-title">How it runs end-to-end</h2>
          <div className="product-workflow reveal">
            {product.workflow.map((step, i) => (
              <span key={step} style={{ display: 'contents' }}>
                {i > 0 && <span className="product-workflow-arrow">→</span>}
                <div className="product-workflow-step">{step}</div>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="s-eyebrow">Technology</div>
          <h2 className="s-title">Stack &amp; domains</h2>
          <div className="svc-tags" style={{ marginTop: 24, gap: 10 }}>
            {product.tech.map((t) => (
              <span key={t} className="svc-tag hl">
                {t}
              </span>
            ))}
            {product.industries.map((ind) => (
              <span key={ind} className="svc-tag">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="section bg-light">
          <div className="wrap">
            <div className="s-eyebrow">More products</div>
            <h2 className="s-title">Explore the portfolio</h2>
            <div
              className="products-grid reveal"
              style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', marginTop: 40 }}
            >
              {others.map((p) => (
                <Link key={p.slug} to={`/products/${p.slug}`} className="product-related-card">
                  <div
                    className="product-related-img"
                    style={{ backgroundImage: `url(${p.cardImage})` }}
                  />
                  <div className="product-related-body">
                    <h4>{p.name}</h4>
                    <p>{p.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="cta-band">
        <div className="cta-band-inner">
          <h2>
            Deploy {product.name}
            <br />
            <em>with TechnoElevate</em>
          </h2>
          <div className="cta-band-btns">
            <Link to="/contact" className="cta-band-primary">
              Request a Demo
            </Link>
            <Link to="/products" className="cta-band-secondary">
              All products →
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
