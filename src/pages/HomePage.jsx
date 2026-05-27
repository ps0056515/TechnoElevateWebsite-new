import { Link } from 'react-router-dom';
import Announcement from '../components/Announcement';
import { useBodyClass, useDocumentTitle } from '../hooks/useSiteEffects';

export default function HomePage() {
  useDocumentTitle(null);
  useBodyClass('home-page');

  return (
    <>
      <Announcement
        pill="New"
        text="TechnoElevate now supports AI-powered product engineering — LLM, RAG and ML at enterprise scale."
        linkHref="/ai-hub"
        linkText="Explore AI Hub →"
        light
      />

      <section className="hero hero-home">
        <div className="hero-home-bg" />
        <div className="hero-home-inner">
          <div className="hero-home-copy">
            <div className="hero-home-eyebrow reveal"><span className="dot" />Engineering Partner · Since 2016</div>
            <h1 className="reveal reveal-delay-1">
              AI-powered engineering<br />
              <span className="hl-orange">that drives</span><br />
              <span className="hl-teal">real outcomes.</span>
            </h1>
            <p className="hero-home-lead reveal reveal-delay-2">TechnoElevate is the product engineering studio within TestYantra — from LLM-powered legal research to ML credit scoring and computer-vision retail, we design, build and scale enterprise software.</p>
            <div className="hero-home-ctas reveal reveal-delay-3">
              <Link to="/ai-hub" className="hero-home-cta">Explore AI Hub <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
              <Link to="/casestudies" className="hero-home-cta-ghost">View Case Studies</Link>
            </div>
          </div>
          <div className="hero-home-visual reveal reveal-delay-2" aria-hidden="true">
            <div className="hero-bento">
              <div className="bento-card bento-wide bento-photo img-hero-engineering">
                <span className="bento-photo-label">Enterprise AI &amp; Cloud Engineering</span>
              </div>
              <div className="bento-card bento-metric">
                <div className="bm-num">80–90%</div>
                <div className="bm-lbl">Branch SR automated · Kotak</div>
              </div>
              <div className="bento-card bento-photo bento-photo-sm img-hero-ai">
                <span className="bento-photo-label">LLM · RAG · ML</span>
              </div>
              <div className="bento-card bento-wide bento-stack">
                <div className="bento-stack-icon"><svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg></div>
                <div className="bento-stack-text"><h4>Architecture-first delivery</h4><p>20+ documented enterprise engagements across BFSI, telecom, automotive &amp; AI — CMMI Level 3 processes.</p></div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-home-stats">
          <div className="hero-home-stats-inner reveal reveal-delay-4">
            <div className="hs-item"><div className="num">20<em>+</em></div><div className="lbl">Documented Engagements</div></div>
            <div className="hs-item"><div className="num">12<em>+</em></div><div className="lbl">Industries Served</div></div>
            <div className="hs-item"><div className="num">6</div><div className="lbl">Global Regions</div></div>
            <div className="hs-item"><div className="num">Repeat</div><div className="lbl">Client Engagements</div></div>
          </div>
        </div>
      </section>

      <ClientsBand />
      <PartnersBand />
      <FeaturedCaseStudies />
      <AiShowcase />
      <WhySection />
      <Testimonials />
      <InsightsPreview />
      <ExploreLinks />
      <CtaBand />
    </>
  );
}

function ClientsBand() {
  const logos = [
    ['K', '#ED1C24', 'Kotak Mahindra Bank'],
    ['JPM', '#0066CC', 'JPMorgan Chase'],
    ['L', '#006A4D', 'Lloyds Banking Group'],
    ['V', '#CD040B', 'Verizon'],
    ['C24', '#FF6B00', 'CARS24'],
    ['LD', '#1E40AF', 'LegalDST'],
    ['A', '#10B981', 'Autonomo'],
  ];
  const track = [...logos, ...logos];
  return (
    <div className="clients-band clients-light">
      <div style={{ maxWidth: 'var(--max)', margin: '0 auto', padding: '0 var(--pad)', display: 'flex', alignItems: 'center', gap: 28, marginBottom: 20 }}>
        <span className="clients-label" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Trusted by</span>
        <div className="clients-rule" style={{ flex: 1, height: 1 }} />
      </div>
      <div className="clients-marquee">
        <div className="clients-track">
          {track.map(([mark, bg, name], i) => (
            <div className="c-logo" key={`${name}-${i}`}>
              <div className="c-logo-mark" style={{ background: bg, color: '#fff' }}>{mark}</div>
              <span className="c-logo-text">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PartnersBand() {
  const badges = [
    ['CMMI', '#1B3A5C', 'CMMI Level 3'],
    ['AWS', '#FF9900', 'AWS Cloud'],
    ['Az', '#0078D4', 'Microsoft Azure'],
    ['GCP', '#4285F4', 'Google Cloud'],
    ['K8s', '#326CE5', 'Kubernetes'],
    ['ISO', '#231F20', 'ISO 27001 Aligned'],
  ];
  return (
    <section className="partners-band">
      <h6>Technologies &amp; Engineering Standards</h6>
      <p className="partners-note">Cloud-native stack and quality practices we use on client engagements — certification details available on request.</p>
      <div className="partners-row reveal">
        {badges.map(([icon, bg, label]) => (
          <div className="partner-badge" key={label}>
            <div className="partner-badge-icon" style={{ background: bg, color: '#fff' }}>{icon}</div>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedCaseStudies() {
  const cards = [
    { id: 'legaldst', img: 'img-cs-legal', metric: 'AI', sub: 'Legal research live', ind: 'LegalTech', title: 'LegalDST — AI Legal Research Platform', desc: 'LLM-powered case-law research with verified citations, Clerk auth and Razorpay subscriptions.' },
    { id: 'kotak-sra', img: 'img-cs-bfsi', metric: '80–90%', sub: 'SR volume automated', ind: 'BFSI', title: 'Kotak — Service Request Automation', desc: 'Automated 400 high-volume branch service requests with real-time transaction authorization.' },
    { id: 'cars24-credit', img: 'img-cs-fintech', metric: 'In-house', sub: 'ML scoring at scale', ind: 'Fintech', title: 'CARS24 — Credit Underwriting ML', desc: 'Proprietary alternative-data scoring eliminating third-party API costs.' },
  ];
  return (
    <section className="featured-cs">
      <div className="wrap">
        <div className="s-eyebrow">Proven Outcomes</div>
        <h2 className="s-title">Featured case studies.</h2>
        <p className="s-sub">Real projects, measurable results — from India&apos;s largest private bank to AI-powered legal research.</p>
        <div className="featured-cs-grid reveal">
          {cards.map((c) => (
            <Link key={c.id} to={`/case-studies/${c.id}`} className="feat-card">
              <div className={`feat-card-img ${c.img}`}><div className="feat-card-metric">{c.metric}<span>{c.sub}</span></div></div>
              <div className="feat-card-body">
                <div className="feat-card-ind">{c.ind}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <span className="feat-card-link">Read case study →</span>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }} className="reveal">
          <Link to="/casestudies" style={{ fontSize: 14, fontWeight: 700, color: 'var(--orange)' }}>View all case studies →</Link>
        </div>
      </div>
    </section>
  );
}

function AiShowcase() {
  return (
    <section className="ai-showcase bg-ai-section">
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div className="s-eyebrow" style={{ color: 'var(--orange2)' }}><div style={{ width: 32, height: 2, background: 'var(--orange)', flexShrink: 0 }} />TechnoElevate.AI</div>
        <h2 className="s-title white">Enterprise AI — from strategy to production.</h2>
        <p className="s-sub white" style={{ maxWidth: 640 }}>Production-grade RAG, ML scoring, agentic workflows and computer vision — built with the same rigour as our core engineering work.</p>
        <div className="ai-grid reveal">
          <div className="ai-card has-bg bg-card-llm"><div className="ai-card-icon">🧠</div><h3>Generative AI &amp; RAG</h3><p>LLM products with verified citations and enterprise guardrails.</p><Link to="/ai-llm-rag" className="ai-card-link">Learn more →</Link></div>
          <div className="ai-card has-bg bg-card-agentic"><div className="ai-card-icon">⚡</div><h3>Agentic Automation</h3><p>Multi-step AI agents for complex enterprise workflows.</p><Link to="/ai-agentic" className="ai-card-link">Learn more →</Link></div>
          <div className="ai-card has-bg bg-card-ml"><div className="ai-card-icon">📊</div><h3>ML &amp; Data Platforms</h3><p>Credit scoring, MLOps and real-time inference at scale.</p><Link to="/ai-ml-platform" className="ai-card-link">Learn more →</Link></div>
        </div>
        <div className="ai-hub-cta reveal"><Link to="/ai-hub" className="ai-hub-btn">Visit the AI Hub →</Link></div>
      </div>
    </section>
  );
}

function WhySection() {
  const items = [
    ['01', 'Domain-Led Engineering', 'Deep BFSI, telecom and automotive expertise — we understand your business, not just your stack.'],
    ['02', 'Production AI, Not PoCs', 'LLM products with auth, billing and guardrails — LegalDST, CARS24 ML and Autonomo CV are live proof.'],
    ['03', 'Architecture-First Delivery', 'Microservices, event sourcing and cloud-native patterns from day one — speed without technical debt.'],
    ['04', 'Global Delivery Standard', 'Six regions, one engineering bar — Bengaluru to Silicon Valley with CMMI Level 3 processes.'],
  ];
  return (
    <section className="why-section">
      <div className="wrap">
        <div className="s-eyebrow">Why TechnoElevate</div>
        <h2 className="s-title">What makes us different.</h2>
        <div className="why-grid reveal">
          {items.map(([num, h, p]) => (
            <div className="why-item" key={num}><div className="why-num">{num}</div><h4>{h}</h4><p>{p}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="wrap">
        <div className="s-eyebrow" style={{ color: 'var(--orange2)' }}>Client Voices</div>
        <h2 className="s-title">Trusted by engineering leaders.</h2>
        <div className="testi-grid reveal">
          <div className="testi-card"><p className="testi-quote">TechnoElevate embedded with our team like true partners — not vendors. They understood banking compliance constraints and still delivered sub-second API performance at peak load.</p><div className="testi-author"><div className="testi-avatar">KM</div><div><div className="testi-name">Engineering Lead</div><div className="testi-role">Kotak Mahindra Bank</div></div></div></div>
          <div className="testi-card"><p className="testi-quote">Building in-house ML scoring was a strategic bet. TechnoElevate delivered proprietary models that cut third-party costs and improved new-to-credit approval rates — at our production volume.</p><div className="testi-author"><div className="testi-avatar">C24</div><div><div className="testi-name">Product Director</div><div className="testi-role">CARS24</div></div></div></div>
          <div className="testi-card"><p className="testi-quote">The LegalDST platform needed verified case-law citations — not hallucinated answers. TechnoElevate built production RAG with the rigour our lawyer users demand.</p><div className="testi-author"><div className="testi-avatar">LD</div><div><div className="testi-name">Founder &amp; CEO</div><div className="testi-role">LegalDST</div></div></div></div>
        </div>
        <p className="testi-disclaimer">Representative feedback from client engagements — full references available under NDA.</p>
      </div>
    </section>
  );
}

function InsightsPreview() {
  return (
    <section className="home-insights-preview">
      <div className="wrap">
        <div className="s-eyebrow">From the field</div>
        <h2 className="s-title">Engineering insights.</h2>
        <p className="s-sub">How we approach RAG, ML scoring, DevOps/SRE and enterprise automation — written by practitioners, not marketers.</p>
        <div className="home-insights-grid reveal">
          <Link to="/insight-legaldst-rag" className="home-insight-card"><div className="home-insight-img img-cs-legal" /><div className="home-insight-body"><h4>Building production RAG with verified legal citations</h4><p>Guardrails, retrieval design and why hallucination is not an option in legal research.</p></div></Link>
          <Link to="/insight-devops-sre" className="home-insight-card"><div className="home-insight-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4dfdb9?auto=format&fit=crop&w=600&q=80')" }} /><div className="home-insight-body"><h4>DevOps &amp; SRE for regulated enterprise workloads</h4><p>SLOs, observability and release discipline when downtime has compliance cost.</p></div></Link>
          <Link to="/insight-cars24-ml" className="home-insight-card"><div className="home-insight-img img-cs-fintech" /><div className="home-insight-body"><h4>In-house ML credit scoring at production volume</h4><p>Alternative data, model governance and cutting third-party API dependency.</p></div></Link>
        </div>
        <div style={{ textAlign: 'center', marginTop: 28 }} className="reveal"><Link to="/insights" style={{ fontSize: 14, fontWeight: 700, color: 'var(--orange)' }}>Browse all insights →</Link></div>
      </div>
    </section>
  );
}

function ExploreLinks() {
  const links = [
    ['/services', 'bg-link-services', '🏗️', 'Services', 'Seven service lines from app dev to AI & IoT.', 'View services →'],
    ['/industries', 'bg-link-industries', '🏦', 'Industries', 'Deep expertise across BFSI, telecom, automotive and more.', 'View industries →'],
    ['/casestudies', 'bg-link-cases', '📋', 'Case Studies', 'Documented projects with real clients and measurable outcomes.', 'View case studies →'],
    ['/about', 'bg-link-about', '🎯', 'About Us', 'Your engineering partner — not just a vendor.', 'About us →'],
    ['/technology', 'bg-link-tech', '⚙️', 'Technology', 'Java, React, K8s, DevOps/SRE and full-stack observability.', 'View stack →'],
    ['/devops-sre', 'bg-link-devops', '☁️', 'DevOps & SRE', 'CI/CD, Kubernetes, SLOs and unified observability at scale.', 'Platform engineering →'],
    ['/engagement', 'bg-link-engage', '🤝', 'Engagement Models', 'Fixed-scope, T&M, BOT, staff aug and managed services.', 'How we work →'],
    ['/ai-hub', 'bg-link-ai', '🤖', 'AI Hub', 'LLM, RAG, agents, ML and computer vision solutions.', 'Explore AI →'],
    ['/contact', 'bg-link-contact', '✉️', 'Contact', 'Start a conversation about your next project.', 'Get in touch →'],
  ];
  return (
    <section className="home-links-section">
      <div className="wrap">
        <div className="s-eyebrow">Explore</div>
        <h2 className="s-title">Everything we do — on dedicated pages.</h2>
        <div className="home-links reveal">
          {links.map(([to, bg, icon, title, desc, arrow]) => (
            <Link key={to} to={to} className={`home-link-card has-bg ${bg}`}>
              <div className="hl-icon">{icon}</div><h3>{title}</h3><p>{desc}</p><span className="hl-arrow">{arrow}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <div className="cta-band">
      <div className="cta-band-inner">
        <h2>Ready to build something<br /><em>remarkable</em> together?</h2>
        <div className="cta-band-btns">
          <Link to="/contact" className="cta-band-primary">Start a Conversation</Link>
          <Link to="/casestudies" className="cta-band-secondary">See our case studies →</Link>
        </div>
      </div>
    </div>
  );
}
