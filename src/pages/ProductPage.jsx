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

  const others = PRODUCTS.filter((p) => p.slug !== slug).slice(0, 4);

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

      <section className={`page-hero bg-theme bg-products`}>
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
            {product.tech.slice(0, 5).map((t) => (
              <span key={t} className="page-tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="wrap">
          <div className="content-grid">
            <div className="content-block reveal">
              <div className="s-eyebrow">Overview</div>
              <h2 className="s-title" style={{ fontSize: 'clamp(24px,3vw,32px)' }}>
                What {product.name} does
              </h2>
              <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.75 }}>{product.description}</p>
            </div>
            <div className="content-block reveal">
              <div className="s-eyebrow">Capabilities</div>
              <h2 className="s-title" style={{ fontSize: 'clamp(24px,3vw,32px)' }}>
                Key features
              </h2>
              <div className="cap-list">
                {product.features.map((f, i) => (
                  <div key={f} className="cap-item">
                    <div className="cap-num">{String(i + 1).padStart(2, '0')}</div>
                    <div>
                      <p style={{ margin: 0, fontSize: 15, color: 'var(--body)', lineHeight: 1.6 }}>{f}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
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
        <section className="section">
          <div className="wrap">
            <div className="s-eyebrow">More products</div>
            <h2 className="s-title">Explore the portfolio</h2>
            <div className="services-grid reveal" style={{ marginTop: 40 }}>
              {others.map((p) => (
                <div key={p.slug} className={`svc ${p.svcClass}`}>
                  <h3>
                    <Link to={`/products/${p.slug}`}>{p.name}</Link>
                  </h3>
                  <p className="svc-body">{p.tagline}</p>
                  <Link to={`/products/${p.slug}`} className="svc-link">
                    View product →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="cta-band">
        <div className="cta-band-inner">
          <h2>
            Interested in {product.name}
            <br />
            <em>for your organisation?</em>
          </h2>
          <div className="cta-band-btns">
            <Link to="/contact" className="cta-band-primary">
              Contact Us
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
