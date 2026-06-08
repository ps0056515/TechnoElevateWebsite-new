import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LANGUAGES, LANG_KEY, LANG_NOTICE_KEY, SEARCH_INDEX } from '../data/site';
import { PRODUCTS } from '../data/products';

import { LOGO_ALT, LOGO_SRC } from '../config/logo';

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

function highlightMatch(text, q) {
  if (!q) return esc(text);
  const i = text.toLowerCase().indexOf(q.toLowerCase());
  if (i === -1) return esc(text);
  return esc(text.slice(0, i)) + '<mark>' + esc(text.slice(i, i + q.length)) + '</mark>' + esc(text.slice(i + q.length));
}

export default function SiteNav() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [openMega, setOpenMega] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [langOpen, setLangOpen] = useState(false);
  const [langCode, setLangCode] = useState(() => localStorage.getItem(LANG_KEY) || 'en');
  const searchInputRef = useRef(null);

  const closeAll = useCallback(() => {
    setOpenMega(null);
    setSearchOpen(false);
    setLangOpen(false);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY > 100) {
        setOpenMega(null);
        setLangOpen(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    closeAll();
    setMobileOpen(false);
  }, [location.pathname, closeAll]);

  useEffect(() => {
    document.body.classList.toggle('nav-mobile-open', mobileOpen);
    return () => document.body.classList.remove('nav-mobile-open');
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeAll();
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
        setOpenMega(null);
        setLangOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeAll]);

  useEffect(() => {
    if (searchOpen) {
      setSearchQuery('');
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  }, [searchOpen]);

  useEffect(() => {
    document.body.classList.toggle('search-open', searchOpen);
    return () => document.body.classList.remove('search-open');
  }, [searchOpen]);

  const selectLang = (code) => {
    setLangCode(code);
    localStorage.setItem(LANG_KEY, code);
    setLangOpen(false);
    if (code !== 'en' && !sessionStorage.getItem(LANG_NOTICE_KEY)) {
      sessionStorage.setItem(LANG_NOTICE_KEY, '1');
    }
  };

  const filteredSearch = (() => {
    const q = searchQuery.trim().toLowerCase();
    const items = q
      ? SEARCH_INDEX.filter((item) => (item.title + ' ' + item.cat + ' ' + item.keys).toLowerCase().includes(q))
      : SEARCH_INDEX.filter((item) => ['Pages', 'Services', 'Products', 'AI', 'Insights'].includes(item.cat)).slice(0, 8);
    const groups = {};
    items.forEach((item) => {
      if (!groups[item.cat]) groups[item.cat] = [];
      groups[item.cat].push(item);
    });
    return { q, groups, empty: !items.length };
  })();

  const path = location.pathname;
  const isContact = path === '/contact';

  return (
    <>
      <motion.div
        className={`nav-wrap${scrolled ? ' scrolled' : ''}${openMega ? ' mega-open' : ''}`}
        id="navWrap"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="nav-inner">
          <Link to="/" className="nav-logo" id="navLogoLink">
            <img src={LOGO_SRC} alt={LOGO_ALT} className="nav-logo-img" width="280" height="52" />
          </Link>
          <ul className="nav-menu" id="navMenu">
            <MegaItem id="services" open={openMega === 'services'} onToggle={() => setOpenMega(openMega === 'services' ? null : 'services')} onClose={closeAll}>
              <MegaAll to="/services" label="All Services" />
              <MegaCols>
                <div>
                  <MegaLink to="/ai-hub">TechnoElevate.AI</MegaLink>
                  <MegaLink to="/ai-llm-rag">LLM &amp; RAG Engineering</MegaLink>
                  <MegaLink to="/ai-agentic">Agentic Business Automation</MegaLink>
                  <MegaLink to="/ai-ml-platform">ML &amp; Data Platforms</MegaLink>
                  <MegaLink to="/devops-sre">DevOps, SRE &amp; Observability</MegaLink>
                  <MegaLink to="/application-development">Application Development</MegaLink>
                  <MegaLink to="/devops-sre">Cloud &amp; Infrastructure</MegaLink>
                  <MegaLink to="/consulting">Consulting</MegaLink>
                </div>
                <div>
                  <MegaLink to="/digital-transformation">Digital Transformation</MegaLink>
                  <MegaLink to="/ai-computer-vision">Computer Vision &amp; Edge AI</MegaLink>
                  <MegaLink to="/migration-modernisation">Migration &amp; Modernisation</MegaLink>
                  <MegaLink to="/erp-integration">ERP &amp; Platform Integration</MegaLink>
                  <MegaLink to="/iot-edge">IoT &amp; Edge Computing</MegaLink>
                  <MegaLink to="/engagement">Engagement Models</MegaLink>
                </div>
              </MegaCols>
            </MegaItem>
            <MegaItem id="industries" open={openMega === 'industries'} onToggle={() => setOpenMega(openMega === 'industries' ? null : 'industries')} onClose={closeAll} cols3>
              <MegaAll to="/industries" label="All Industries" />
              <MegaCols cols3>
                <div>
                  <MegaLink to="/industry-bfsi">BFSI &amp; Fintech</MegaLink>
                  <MegaLink to="/industries">Insurance</MegaLink>
                  <MegaLink to="/industries">Healthcare</MegaLink>
                  <MegaLink to="/industry-telecom">Telecom</MegaLink>
                </div>
                <div>
                  <MegaLink to="/industry-automotive">Automotive</MegaLink>
                  <MegaLink to="/industries">Manufacturing</MegaLink>
                  <MegaLink to="/industries">Retail &amp; E-commerce</MegaLink>
                  <MegaLink to="/industries">Energy &amp; Logistics</MegaLink>
                </div>
                <div>
                  <MegaLink to="/industries">Public Sector</MegaLink>
                  <MegaLink to="/industries">LegalTech</MegaLink>
                  <MegaLink to="/industries">Enterprise SaaS</MegaLink>
                  <MegaLink to="/industries">AgriTech &amp; EdTech</MegaLink>
                </div>
              </MegaCols>
            </MegaItem>
            <MegaItem id="products" open={openMega === 'products'} onToggle={() => setOpenMega(openMega === 'products' ? null : 'products')} onClose={closeAll} featured>
              <MegaAll to="/products" label="All Products" />
              <div className="mega-products-layout">
                {(() => {
                  const feat = PRODUCTS.find((p) => p.slug === 'admitiq') || PRODUCTS[0];
                  return (
                    <Link to={`/products/${feat.slug}`} className="mega-product-featured" onClick={closeAll}>
                      <div
                        className="mega-product-featured-img"
                        style={{ backgroundImage: `url(${feat.cardImage})`, '--product-accent': feat.accent }}
                      />
                      <div className="mega-product-featured-body">
                        <span className="mega-product-featured-badge">Featured</span>
                        <h5>{feat.name}</h5>
                        <p>{feat.tagline}</p>
                        <span className="mega-product-featured-link">Explore platform →</span>
                      </div>
                    </Link>
                  );
                })()}
                <div className="mega-products-links">
                  {PRODUCTS.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/products/${p.slug}`}
                      className={`mega-product-link${p.slug === 'admitiq' ? ' highlight' : ''}`}
                      onClick={closeAll}
                    >
                      <span className="mega-product-link-name">{p.name}</span>
                      <span className="mega-product-link-desc">{p.tagline}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mega-featured">
                <span className="mega-featured-badge">7 platforms</span>
                <p>
                  Voice AI, enterprise agents, admissions, ed-tech, accessibility, and hiring intelligence —
                  full-stack products engineered for production deploy.
                </p>
              </div>
            </MegaItem>
            <MegaItem id="ai" open={openMega === 'ai'} onToggle={() => setOpenMega(openMega === 'ai' ? null : 'ai')} onClose={closeAll} featured>
              <MegaAll to="/ai-hub" label="All AI Solutions" />
              <MegaCols>
                <div>
                  <MegaLink to="/ai-llm-rag" highlight>Generative AI &amp; RAG</MegaLink>
                  <MegaLink to="/ai-agentic">Agentic AI Workflows</MegaLink>
                  <MegaLink to="/ai-ml-platform">ML Scoring &amp; Underwriting</MegaLink>
                  <MegaLink to="/ai-computer-vision">Computer Vision</MegaLink>
                </div>
                <div>
                  <MegaLink to="/ai-hub">Enterprise AI Strategy</MegaLink>
                  <MegaLink to="/ai-llm-rag">LLM Fine-Tuning &amp; Guardrails</MegaLink>
                  <MegaLink to="/ai-ml-platform">MLOps &amp; Model Governance</MegaLink>
                  <MegaLink to="/ai-agentic">AI Copilots &amp; Assistants</MegaLink>
                </div>
              </MegaCols>
              <div className="mega-featured">
                <span className="mega-featured-badge">Featured</span>
                <p>LegalDST — AI-powered legal research with verified case-law RAG. Built end-to-end by TechnoElevate.</p>
              </div>
            </MegaItem>
            <li className="nav-item">
              <Link to="/ai-hub" className="nav-link-item">AI Hub</Link>
            </li>
            <MegaItem id="insights" open={openMega === 'insights'} onToggle={() => setOpenMega(openMega === 'insights' ? null : 'insights')} onClose={closeAll}>
              <MegaAll to="/insights" label="All Insights" />
              <MegaCols>
                <div>
                  <MegaLink to="/insights">Articles &amp; Blogs</MegaLink>
                  <MegaLink to="/whitepapers">Whitepapers &amp; Guides</MegaLink>
                  <MegaLink to="/newsroom">Newsroom</MegaLink>
                </div>
                <div>
                  <MegaLink to="/casestudies">Case Studies</MegaLink>
                  <MegaLink to="/technology">Technology Stack</MegaLink>
                  <MegaLink to="/ai-hub">AI Success Stories</MegaLink>
                </div>
              </MegaCols>
            </MegaItem>
            <MegaItem id="about" open={openMega === 'about'} onToggle={() => setOpenMega(openMega === 'about' ? null : 'about')} onClose={closeAll}>
              <MegaAll to="/about" label="About TechnoElevate" />
              <MegaCols>
                <div>
                  <MegaLink to="/about">Who We Are</MegaLink>
                  <MegaLink to="/leadership">Leadership</MegaLink>
                  <MegaLink to="/locations">Global Locations</MegaLink>
                  <MegaLink to="/methodology">Delivery Methodology</MegaLink>
                </div>
                <div>
                  <MegaLink to="/engagement">How We Work</MegaLink>
                  <MegaLink to="/technology">Technology</MegaLink>
                  <MegaLink to="/security">Security &amp; Compliance</MegaLink>
                  <MegaLink to="/careers">Careers</MegaLink>
                </div>
              </MegaCols>
            </MegaItem>
            <li className="nav-item">
              <Link to="/careers" className="nav-link-item">Careers</Link>
            </li>
          </ul>
          <div className="nav-right">
            <button className="nav-icon-btn" type="button" aria-label="Search site" title="Search (Ctrl+K)" onClick={() => { closeAll(); setSearchOpen(true); }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            </button>
            <Link to="/contact" className={`nav-btn${isContact ? ' active' : ''}`}>Contact</Link>
            <div className={`nav-lang-wrap${langOpen ? ' open' : ''}`}>
              <button className="nav-lang" type="button" aria-expanded={langOpen} onClick={() => { setLangOpen(!langOpen); setOpenMega(null); }}>
                <span>{langCode.toUpperCase()}</span> <span className="chev">▾</span>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    className="lang-dropdown"
                    role="listbox"
                    aria-hidden={!langOpen}
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    style={{
                      opacity: 1,
                      visibility: 'visible',
                      transform: 'none',
                      transition: 'none',
                      originX: 1,
                      originY: 0,
                    }}
                  >
                    {LANGUAGES.map((l) => (
                      <button key={l.code} type="button" className={`lang-option${langCode === l.code ? ' active' : ''}`} onClick={() => selectLang(l.code)}>
                        <span>{l.native}</span><span className="lang-code">{l.code.toUpperCase()}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button className="nav-burger" type="button" aria-label="Menu" onClick={() => setMobileOpen(!mobileOpen)}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {(openMega || searchOpen) && (
          <motion.div
            className="mega-backdrop show"
            onClick={closeAll}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              opacity: 1,
              visibility: 'visible',
              transition: 'none',
              pointerEvents: 'auto',
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="search-overlay open"
            aria-hidden={!searchOpen}
            onClick={(e) => e.target === e.currentTarget && closeAll()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              opacity: 1,
              visibility: 'visible',
              transition: 'none',
            }}
          >
            <motion.div
              className="search-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Site search"
              initial={{ opacity: 0, y: -30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              style={{
                transition: 'none',
              }}
            >
              <div className="search-head">
                <svg className="search-head-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                <input ref={searchInputRef} type="search" className="search-input" placeholder="Search services, industries, case studies, insights…" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} aria-label="Search" />
                <span className="search-kbd">Esc</span>
                <button type="button" className="search-close" aria-label="Close search" onClick={closeAll}>&times;</button>
              </div>
              <div className="search-body">
                <div className="search-section-label">Quick links</div>
                <div className="search-results">
                  {filteredSearch.empty ? (
                    <div className="search-empty">No results for “{searchQuery}”. Try “AI”, “DevOps”, or “Contact”.</div>
                  ) : (
                    Object.entries(filteredSearch.groups).map(([cat, items]) => (
                      <div className="search-group" key={cat}>
                        <div className="search-group-label">{cat}</div>
                        {items.map((item) => (
                          <Link key={item.href + item.title} to={item.href} className="search-result" onClick={closeAll}>
                            <span className="search-result-title" dangerouslySetInnerHTML={{ __html: highlightMatch(item.title, filteredSearch.q) }} />
                            <span className="search-result-cat">{item.cat}</span>
                          </Link>
                        ))}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="nav-mobile open"
            id="navMobile"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            style={{
              display: 'block',
              transition: 'none',
            }}
          >
            <div className="mob-section"><h6>Services</h6>
              <Link to="/ai-hub" onClick={closeAll}>TechnoElevate.AI</Link>
              <Link to="/ai-llm-rag" onClick={closeAll}>LLM &amp; RAG Engineering</Link>
              <Link to="/devops-sre" onClick={closeAll}>DevOps &amp; SRE</Link>
              <Link to="/services" onClick={closeAll}>All Services</Link>
            </div>
            <div className="mob-section"><h6>Products</h6>
              <Link to="/products" onClick={closeAll}>All Products</Link>
              {PRODUCTS.map((p) => (
                <Link key={p.slug} to={`/products/${p.slug}`} onClick={closeAll}>
                  {p.name}
                </Link>
              ))}
            </div>
            <div className="mob-section"><h6>Insights</h6>
              <Link to="/insights" onClick={closeAll}>Articles</Link>
              <Link to="/casestudies" onClick={closeAll}>Case Studies</Link>
              <Link to="/whitepapers" onClick={closeAll}>Whitepapers</Link>
            </div>
            <div className="mob-section"><h6>Company</h6>
              <Link to="/about" onClick={closeAll}>About</Link>
              <Link to="/leadership" onClick={closeAll}>Leadership</Link>
              <Link to="/careers" onClick={closeAll}>Careers</Link>
              <Link to="/contact" onClick={closeAll}>Contact</Link>
            </div>
            <div className="mob-section"><h6>Language</h6>
              <div className="mob-lang-list">
                {LANGUAGES.map((l) => (
                  <button key={l.code} type="button" className={`mob-lang-btn${langCode === l.code ? ' on' : ''}`} onClick={() => selectLang(l.code)}>{l.native}</button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MegaItem({ id, open, onToggle, onClose, children, cols3, featured }) {
  return (
    <li className={`nav-item has-mega${open ? ' open' : ''}`} data-mega={id}>
      <button className="nav-trigger" aria-expanded={open} onClick={(e) => { e.stopPropagation(); onToggle(); }} type="button">
        {id === 'services' && 'Services'}
        {id === 'industries' && 'Industries'}
        {id === 'products' && 'Products'}
        {id === 'ai' && 'AI Platforms & Solutions'}
        {id === 'insights' && 'Insights'}
        {id === 'about' && 'About'}
        <span className="chev">▾</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mega-panel"
            initial={{ opacity: 0, y: -12, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.97 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{
              opacity: 1,
              visibility: 'visible',
              transform: 'none',
              transition: 'none',
              originY: 0,
            }}
          >
            <div className={`mega-inner${featured ? ' has-featured' : ''}`} onClick={onClose}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

function MegaAll({ to, label }) {
  return (
    <Link to={to} className="mega-all">
      {label} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </Link>
  );
}

function MegaCols({ children, cols3 }) {
  return (
    <>
      <div className="mega-rule" />
      <div className={`mega-cols${cols3 ? ' cols-3' : ''}`}>{children}</div>
    </>
  );
}

function MegaLink({ to, children, highlight }) {
  return <Link to={to} className={highlight ? 'highlight' : undefined}>{children}</Link>;
}
