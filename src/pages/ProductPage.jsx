import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Announcement from "../components/Announcement";
import ProductVisual from "../components/ProductVisual";
import { getProduct, PRODUCTS, PLATFORM_TRUST } from "../data/products";
import { useDocumentTitle } from "../hooks/useSiteEffects";

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProduct(slug);

  useDocumentTitle(product ? product.name : "Product");

  if (!product) {
    return (
      <div className="wrap" style={{ padding: "80px var(--pad)" }}>
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
      style={{ "--product-accent": product.accent }}
    >
      <Announcement
        pill={product.category}
        text={product.tagline}
        linkHref="/products"
        linkText="All products →"
      />

      {/* Product cinematic hero */}
      <section className="product-detail-hero">
        <div
          className="product-detail-hero-bg"
          style={{ backgroundImage: `url(${product.heroImage})` }}
          aria-hidden="true"
        />
        <div className="product-detail-hero-overlay" aria-hidden="true" />
        <div className="wrap product-detail-hero-inner">
          <div className="product-detail-hero-copy">
            <div className="page-breadcrumb products-breadcrumb-light">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/products">Products</Link>
              <span>/</span>
              <span>{product.name}</span>
            </div>
            <span className="product-detail-badge">{product.category}</span>
            <h1>{product.name}</h1>
            <p className="product-detail-lead">{product.tagline}</p>
            <p className="product-detail-summary">{product.summary}</p>
            <div className="page-hero-tags product-detail-tags">
              {product.tech.slice(0, 5).map((t) => (
                <span key={t} className="page-tag">
                  {t}
                </span>
              ))}
            </div>
            <div className="product-detail-actions">
              <Link to="/contact" className="cta-band-primary">
                Request a demo
              </Link>
              <Link to="/products" className="products-hero-ghost">
                All products
              </Link>
            </div>
          </div>
          <div className="product-detail-hero-visual reveal">
            <ProductVisual product={product} size="hero" />
          </div>
        </div>
        <div className="product-detail-hero-stats wrap">
          {product.metrics.map((m) => (
            <div key={m.label} className="product-detail-stat">
              <div className="num">{m.value}</div>
              <div className="lbl">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenge / solution - rich split */}
      <section className="section product-detail-overview">
        <div className="wrap">
          <div className="product-detail-split reveal">
            <div className="product-detail-split-copy">
              <div className="s-eyebrow">Overview</div>
              <h2 className="s-title">Built for production, not demos</h2>
              <p className="product-detail-desc">{product.description}</p>
              <div className="product-personas">
                {product.personas.map((persona) => (
                  <span key={persona} className="product-persona">
                    {persona}
                  </span>
                ))}
              </div>
            </div>
            <div className="product-detail-challenge-stack">
              <div className="product-challenge-card">
                <span className="product-challenge-label">The challenge</span>
                <p>{product.problem}</p>
              </div>
              <div className="product-challenge-card product-challenge-card--solution">
                <span className="product-challenge-label">
                  How {product.name} solves it
                </span>
                <p>{product.solution}</p>
              </div>
            </div>
          </div>

          <div className="product-detail-gallery reveal">
            <div
              className="product-detail-gallery-main"
              style={{ backgroundImage: `url(${product.heroImage})` }}
            />
            <div className="product-detail-gallery-side">
              <div
                className="product-detail-gallery-tile"
                style={{ backgroundImage: `url(${product.cardImage})` }}
              />
              <div
                className="product-detail-gallery-tile"
                style={{
                  backgroundImage: `url(${product.galleryAlt || product.cardImage})`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust pillars - tinted per product */}
      <section className="product-trust-band">
        <div className="wrap">
          <div className="products-trust-head reveal">
            <div className="s-eyebrow" style={{ color: "var(--orange2)" }}>
              Platform capabilities
            </div>
            <h2 className="s-title white">What {product.name} delivers</h2>
          </div>
          <div className="products-trust-grid products-trust-grid--dark reveal">
            {PLATFORM_TRUST.map((pillar) => (
              <div
                key={pillar.title}
                className="products-trust-card products-trust-card--dark"
              >
                <div className="products-trust-icon">{pillar.icon}</div>
                <h4>{pillar.title}</h4>
                <p>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases - icon cards */}
      <section className="section bg-light">
        <div className="wrap">
          <div className="s-eyebrow">Use cases</div>
          <h2 className="s-title">Who uses {product.name}</h2>
          <p className="s-sub" style={{ maxWidth: 640 }}>
            Typical adoption patterns from institutes, enterprises, and teams we
            have designed for.
          </p>
          <div className="product-use-grid product-use-grid--rich reveal">
            {product.useCases.map((uc, i) => (
              <div
                key={uc.title}
                className="product-use-card product-use-card--rich"
              >
                <span className="product-use-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4>{uc.title}</h4>
                <p>{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules bento */}
      <section className="section">
        <div className="wrap">
          <div className="s-eyebrow">Architecture</div>
          <h2 className="s-title">Core modules</h2>
          <div className="product-modules-bento reveal">
            {product.modules.map((mod, i) => (
              <div
                key={mod.title}
                className={`product-module-bento${i === 0 ? " product-module-bento--wide" : ""}`}
              >
                <span className="product-module-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4>{mod.title}</h4>
                <p>{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="content-section bg-content-ai">
        <div className="wrap">
          <div className="s-eyebrow">Capabilities</div>
          <h2 className="s-title">Feature depth</h2>
          <div className="product-features-grid reveal">
            {product.features.map((f, i) => (
              <div key={f} className="product-feature-tile">
                <span className="product-feature-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p>{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="section bg-light">
        <div className="wrap">
          <div className="s-eyebrow">Workflow</div>
          <h2 className="s-title">How it runs end-to-end</h2>
          <div className="products-pipeline reveal">
            {product.workflow.map((step, i) => (
              <div key={step} className="products-pipeline-step">
                <span className="products-pipeline-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4>{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
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
        <section className="section products-quick-section">
          <div className="wrap">
            <div className="s-eyebrow">More products</div>
            <h2 className="s-title">Explore the portfolio</h2>
            <div className="products-bento products-bento--related reveal">
              {others.slice(0, 6).map((p) => (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}`}
                  className="products-bento-tile products-bento-tile--sm"
                  style={{
                    "--product-accent": p.accent,
                    backgroundImage: `url(${p.cardImage})`,
                  }}
                >
                  <div className="products-bento-overlay" />
                  <div className="products-bento-body">
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
            <em>with Innovexce</em>
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
