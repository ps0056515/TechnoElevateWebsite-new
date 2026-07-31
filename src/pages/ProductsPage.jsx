import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Announcement from "../components/Announcement";
import ProductVisual from "../components/ProductVisual";
import {
  PRODUCTS,
  PRODUCT_FILTERS,
  PLATFORM_TRUST,
  PORTFOLIO_STATS,
  FEATURED_PRODUCT_SLUG,
  getProductFilterGroup,
} from "../data/products";
import { useDocumentTitle } from "../hooks/useSiteEffects";

export default function ProductsPage() {
  useDocumentTitle("Products");
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => getProductFilterGroup(p.slug) === filter);

  const featured =
    PRODUCTS.find((p) => p.slug === FEATURED_PRODUCT_SLUG) || PRODUCTS[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <Announcement
        pill="Product portfolio"
        text="Seven production platforms - voice AI, admissions, enterprise agents, ed-tech, accessibility, and hiring intelligence."
        linkHref="/contact"
        linkText="Build your next product with us →"
      />

      {/* Cinematic hero - Ushur-style dark + visual */}
      <section className="products-cinematic-hero">
        <div className="products-cinematic-bg" aria-hidden="true" />
        <div
          className="products-cinematic-orb products-cinematic-orb--1"
          aria-hidden="true"
        />
        <div
          className="products-cinematic-orb products-cinematic-orb--2"
          aria-hidden="true"
        />
        <div className="wrap products-cinematic-inner">
          <div className="products-cinematic-copy">
            <div className="page-breadcrumb products-breadcrumb-light">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Products</span>
            </div>
            <h1>
              AI-powered platforms
              <br />
              <em>built for production.</em>
            </h1>
            <p className="products-cinematic-lead">
              Purpose-built product lines for voice admissions, enterprise
              agents, ed-tech learning, accessibility communities, and hiring
              intelligence - engineered end-to-end with the same rigour we bring
              to Kotak, Tekion, and LegalDST engagements.
            </p>
            <div className="products-cinematic-actions">
              <Link
                to={`/products/${featured.slug}`}
                className="cta-band-primary"
              >
                Explore {featured.name} →
              </Link>
              <Link to="/contact" className="products-hero-ghost">
                Request a demo
              </Link>
            </div>
            <div className="products-cinematic-stats">
              {PORTFOLIO_STATS.map((s) => (
                <div key={s.label} className="products-cinematic-stat">
                  <div className="num">{s.value}</div>
                  <div className="lbl">{s.label}</div>
                  <div className="sub">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="products-cinematic-visual reveal">
            <ProductVisual product={featured} size="hero" />
          </div>
        </div>
      </section>

      {/* Trust pillars */}
      <section className="products-trust-section">
        <div className="wrap">
          <div className="products-trust-head reveal">
            <div className="s-eyebrow">Platform DNA</div>
            <h2 className="s-title">
              Trust-native architecture -
              <br />
              built in, not bolted on.
            </h2>
            <p className="s-sub" style={{ maxWidth: 560 }}>
              Every product in the portfolio shares production patterns:
              governed AI, observable pipelines, contract-first APIs, and deploy
              paths your ops team can actually run.
            </p>
          </div>
          <div className="products-trust-grid reveal">
            {PLATFORM_TRUST.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`products-trust-card${i ? ` reveal-delay-${Math.min(i, 3)}` : ""}`}
              >
                <div className="products-trust-icon">{pillar.icon}</div>
                <h4>{pillar.title}</h4>
                <p>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + showcase list */}
      <section className="section" id="products">
        <div className="wrap">
          <div className="products-showcase-head reveal">
            <div>
              <div className="s-eyebrow">The portfolio</div>
              <h2 className="s-title">
                One platform suite.
                <br />
                Endless product possibilities.
              </h2>
            </div>
            <div className="products-filter-pills">
              {PRODUCT_FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  className={`products-filter-pill${filter === f.id ? " active" : ""}`}
                  onClick={() => setFilter(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="products-showcase-list">
            {filtered.map((p, i) => (
              <article
                key={p.slug}
                className={`product-showcase reveal${i % 2 === 1 ? " product-showcase--reverse" : ""}`}
                style={{ "--product-accent": p.accent }}
              >
                <div className="product-showcase-visual">
                  <ProductVisual product={p} image={p.cardImage} size="md" />
                </div>
                <div className="product-showcase-content">
                  <span className="product-showcase-category">
                    {p.category}
                  </span>
                  <h3>{p.name}</h3>
                  <p className="product-showcase-tagline">{p.tagline}</p>
                  <p className="product-showcase-summary">{p.summary}</p>
                  <ul className="product-showcase-highlights">
                    {p.modules.slice(0, 3).map((m) => (
                      <li key={m.title}>
                        <strong>{m.title}</strong>
                        <span>{m.desc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="product-showcase-metrics">
                    {p.metrics.slice(0, 3).map((m) => (
                      <div key={m.label} className="product-showcase-metric">
                        <strong>{m.value}</strong>
                        <span>{m.label}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={`/products/${p.slug}`}
                    className="product-showcase-cta"
                  >
                    Explore {p.name} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quick grid for scanability */}
      <section className="section products-quick-section">
        <div className="wrap">
          <div className="s-eyebrow">At a glance</div>
          <h2 className="s-title">All seven products</h2>
          <div className="products-bento reveal">
            {PRODUCTS.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="products-bento-tile"
                style={{
                  "--product-accent": p.accent,
                  backgroundImage: `url(${p.cardImage})`,
                }}
              >
                <div className="products-bento-overlay" />
                <div className="products-bento-body">
                  <span className="products-bento-cat">{p.category}</span>
                  <h4>{p.name}</h4>
                  <p>{p.tagline}</p>
                  <span className="products-bento-link">View product →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="wrap">
          <div className="s-eyebrow">How we ship products</div>
          <h2 className="s-title">From idea to production</h2>
          <p className="s-sub" style={{ maxWidth: 560, marginBottom: 32 }}>
            Cursor-accelerated engineering with architecture-first delivery -
            the same playbook behind every product in this portfolio.
          </p>
          <div className="products-pipeline reveal">
            {[
              {
                step: "01",
                title: "Discovery & PRD",
                desc: "Align problem, personas, tenancy model, and success metrics.",
              },
              {
                step: "02",
                title: "Architecture",
                desc: "Reference patterns, API contracts, and security posture signed off.",
              },
              {
                step: "03",
                title: "Build & integrate",
                desc: "Monorepo delivery with AI-assisted velocity and QA gates.",
              },
              {
                step: "04",
                title: "Deploy & iterate",
                desc: "Docker, observability, and content ops for continuous improvement.",
              },
            ].map((item) => (
              <div key={item.step} className="products-pipeline-step">
                <span className="products-pipeline-num">{item.step}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
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
