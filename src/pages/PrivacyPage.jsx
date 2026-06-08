import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Announcement from '../components/Announcement';
import ScrollReveal from '../components/ScrollReveal';
import { useDocumentTitle } from '../hooks/useSiteEffects';

const SECTIONS = [
  {
    id: 'intro',
    title: '1. Introduction & Trust',
    badge: 'Trust & Governance',
    summary: 'We collect and process your data transparently to deliver high-quality software engineering services under the TestYantra Group.',
    legal: `TechnoElevate ("we," "us," or "our"), a dedicated product engineering division of the TestYantra Group, is committed to safeguarding your privacy. This Privacy Policy explains how we collect, use, disclose, and secure your personal data when you interact with our website (technoelevate.com), utilize our enterprise engineering solutions, or engage in business inquiries. We operate in compliance with major international standards including GDPR, CCPA, and secure software development lifecycles (SDLC).`,
    icon: '🛡️'
  },
  {
    id: 'collect',
    title: '2. Information We Collect',
    badge: 'Data Minimization',
    summary: 'We only collect contact info, project inquiries, job application data, and web analytics. We do not sell your personal data.',
    legal: `Consistent with our data minimization principles, we only collect personal data that is necessary for our business functions:
    • Contact Details: Name, email address, corporate telephone number, and job title when you voluntarily submit contact or quote forms.
    • Project & Business Data: Scope details, technical requirements, and company profiles shared during client onboarding.
    • Recruitment Information: Resumes, employment history, and portfolios submitted via our career portals.
    • Automated Telemetry: IP addresses, device identifiers, browser types, operating systems, and page navigation history collected through secure cookies and server logs.`,
    icon: '📊'
  },
  {
    id: 'use',
    title: '3. How We Use Your Data',
    badge: 'Purpose Specification',
    summary: 'Your information is used strictly to answer inquiries, deliver engineering services, optimize website performance, and maintain security.',
    legal: `We process your data based on legitimate business interests, contractual obligations, or your explicit consent:
    • Provision of Services: Developing, testing, and shipping custom software engineering and digital transformation architectures.
    • Communication: Responding to requests for proposals (RFPs), resolving client support tickets, and sharing technical insights.
    • Analytical Insights: Optimizing website responsiveness, troubleshooting errors, and preventing malicious activity or DDoS threats.
    • Compliance & Audits: Satisfying regulatory financial reporting and security posture validations (e.g. SOC 2, ISO 27001).`,
    icon: '⚙️'
  },
  {
    id: 'cookies',
    title: '4. Cookies & Analytics',
    badge: 'Consent Control',
    summary: 'We use essential, analytical, and performance cookies. You can manage or block them through your browser settings.',
    legal: `Our website utilizes cookies and similar tracking pixels to analyze traffic and customize user experience:
    • Essential Cookies: Necessary for site security, basic layout rendering, and form submissions.
    • Analytical Cookies: We use services like Google Analytics and Hotjar to monitor aggregated user flows, which helps us improve navigation and site content relevance.
    • Cookie Control: You may restrict, block, or delete cookies through your web browser preferences at any time. Disabling cookies will not prevent you from using our site.`,
    icon: '🍪'
  },
  {
    id: 'subprocessors',
    title: '5. Infrastructure & Subprocessors',
    badge: 'Supply Chain Security',
    summary: 'We host data on secure, world-class clouds like AWS and Azure. Below is a list of our key subprocessors.',
    legal: `To deliver secure and redundant cloud infrastructure, we partner with industry-leading technical subprocessors. All subprocessors are vetted for compliance with GDPR, SOC 2, and physical facility security standards:`,
    isSubprocessorTable: true,
    subprocessors: [
      { name: 'Amazon Web Services (AWS)', purpose: 'Primary cloud hosting, backups, and secure compute', location: 'USA & India (Region Locked)' },
      { name: 'Google Cloud Platform (GCP)', purpose: 'Secure AI models, BigQuery analytics, and API gateway', location: 'USA' },
      { name: 'HubSpot', purpose: 'CRM, sales pipeline, and client inquiry tracking', location: 'USA' },
      { name: 'SendGrid (Twilio)', purpose: 'Automated notification and transaction transactional emails', location: 'USA' }
    ],
    icon: '☁️'
  },
  {
    id: 'security',
    title: '6. Data Security & Encryption',
    badge: 'Security Posture',
    summary: 'Your data is secured using TLS 1.3 in transit and AES-256 at rest, backed by RBAC and secure software development practices.',
    legal: `Security is embedded into our engineering culture from day one:
    • Data Encryption: All personal data is encrypted in transit using Transport Layer Security (TLS 1.3) and at rest utilizing Advanced Encryption Standard (AES-256).
    • Access Control: Strict role-based access controls (RBAC) and least-privilege principles ensure that only authorized personnel can access sensitive databases.
    • Non-Production Safety: We enforce data masking, anonymization, and synthetic test data generation in all software QA and staging environments.
    • Vulnerability Scanning: We conduct automated SAST/DAST code analysis and periodic external penetration tests as part of our secure SDLC.`,
    icon: '🔒'
  },
  {
    id: 'compliance',
    title: '7. Your Rights & Global Compliance',
    badge: 'Privacy Rights',
    summary: 'You have full rights to access, update, or delete your data under GDPR, CCPA, and HIPAA privacy rules.',
    legal: `Regardless of your geographic location, we offer comprehensive rights regarding your personal information:
    • GDPR (Europe): If you reside in the EU, you have the right to access, rectify, erase, or restrict processing of your data, as well as the right to data portability.
    • CCPA (California): We support California consumers' rights to request disclosures of data categories collected, request erasure, and opt-out of data sharing. We do not sell PII.
    • HIPAA Compliance: When building healthcare platforms, we design HIPAA-compliant tenant isolation, secure audit trails, and strict PHI handling schemas.`,
    icon: '🌐'
  },
  {
    id: 'contact',
    title: '8. Contact & DPO Inquiries',
    badge: 'Data Protection Officer',
    summary: 'Have privacy questions? Reach out to our Data Protection Officer at privacy@technoelevate.com or contactus@testyantra.com.',
    legal: `If you have questions, concerns, or requests regarding this Privacy Policy or our data protection activities, please get in touch:
    • Email: privacy@technoelevate.com or contactus@testyantra.com
    • Headquarters: 3rd Floor, Brigade Software Park, Banashankari, Bengaluru, Karnataka 560070, India
    We will respond to all verified requests within thirty (30) days.`,
    icon: '✉️'
  }
];


export default function PrivacyPage() {
  useDocumentTitle('Privacy Policy — TechnoElevate');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('detailed'); // 'detailed' or 'summary'
  const [activeSection, setActiveSection] = useState('intro');

  const sectionRefs = useRef({});

  useEffect(() => {
    document.body.className = 'privacy-body-active';
    
    // Scroll-based active section detection — more reliable than IntersectionObserver
    let rafId = null;
    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const detectionLine = window.innerHeight * 0.3;
        let closestId = SECTIONS[0]?.id;
        let closestDistance = Infinity;

        for (const section of SECTIONS) {
          const el = document.getElementById(section.id);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          // Distance from element top to the detection line
          const distance = Math.abs(rect.top - detectionLine);
          // Prefer sections whose top is at or above the detection line
          if (rect.top <= detectionLine + 10) {
            if (rect.top > (document.getElementById(closestId)?.getBoundingClientRect().top ?? -Infinity)) {
              closestId = section.id;
            }
          } else if (closestDistance === Infinity && distance < closestDistance) {
            closestDistance = distance;
            closestId = section.id;
          }
        }

        setActiveSection(closestId);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to set initial active section
    handleScroll();

    return () => {
      document.body.className = '';
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 100; // navbar height + breathing room
      const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const filteredSections = SECTIONS.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.legal.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.badge.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Automatically update active section to first match if current is filtered out
  useEffect(() => {
    if (filteredSections.length > 0) {
      const activeIsStillVisible = filteredSections.some((s) => s.id === activeSection);
      if (!activeIsStillVisible) {
        setActiveSection(filteredSections[0].id);
      }
    }
  }, [searchQuery, filteredSections, activeSection]);

  return (
    <>
      <Announcement
        pill="Trust Center"
        text="Learn how we uphold enterprise security standards."
        linkHref="/security"
        linkText="View Security & Compliance →"
      />

      {/* Page Hero with elegant breathing radial glows and glass tags */}
      <section className="page-hero bg-theme bg-privacy-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Neon overlays */}
        <div className="privacy-hero-glow-1"></div>
        <div className="privacy-hero-glow-2"></div>
        <div className="privacy-hero-grid"></div>

        <div className="page-hero-inner" style={{ position: 'relative', zIndex: 10 }}>
          <div className="page-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Privacy Policy</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Privacy & <em>Data Trust</em>
          </motion.h1>
          <motion.p
            className="page-hero-lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            At TechnoElevate, we embed security, governance, and transparent data processing directly into our software engineering practices.
          </motion.p>
          <motion.div
            className="page-hero-tags"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="page-tag privacy-tag-item">🛡️ GDPR Aligned</span>
            <span className="page-tag privacy-tag-item">🔒 Data Security</span>
            <span className="page-tag privacy-tag-item">📋 ISO 27001</span>
            <span className="page-tag privacy-tag-item">💡 Transparency First</span>
          </motion.div>
        </div>
      </section>

      {/* Interactive Main Layout */}
      <section className="section bg-light privacy-main-section">
        <div className="wrap">
          <div className="privacy-page-layout">
            
            {/* Sticky Sidebar (Left Column) */}
            <aside className="privacy-sidebar">
              <div className="privacy-sidebar-sticky">
                {/* Search Box */}
                <div className="privacy-search-wrap">
                  <span className="privacy-search-icon">🔍</span>
                  <input
                    type="text"
                    placeholder="Search policy..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="privacy-search-input"
                  />
                  {searchQuery && (
                    <button className="privacy-search-clear" onClick={() => setSearchQuery('')}>✕</button>
                  )}
                </div>

                {/* View Mode Toggle */}
                <div className="privacy-toggle-container">
                  <div className="privacy-toggle-label">Reading Mode</div>
                  <div className="privacy-toggle-options">
                    <button
                      className={`privacy-toggle-opt ${viewMode === 'detailed' ? 'active' : ''}`}
                      onClick={() => setViewMode('detailed')}
                    >
                      📜 Legal Text
                    </button>
                    <button
                      className={`privacy-toggle-opt ${viewMode === 'summary' ? 'active' : ''}`}
                      onClick={() => setViewMode('summary')}
                    >
                      ⚡ Quick Summary
                    </button>
                  </div>
                </div>

                {/* Table of Contents */}
                <nav className="privacy-toc">
                  <div className="privacy-toc-title">ON THIS PAGE</div>
                  <div className="privacy-toc-list">
                    {filteredSections.map((sec) => (
                      <button
                        key={sec.id}
                        onClick={() => handleScrollTo(sec.id)}
                        className={`privacy-toc-item ${activeSection === sec.id ? 'active' : ''}`}
                      >
                        <span className="toc-dot"></span>
                        <span className="toc-text">{sec.title.replace(/^\d+\.\s/, '')}</span>
                      </button>
                    ))}
                  </div>
                </nav>

                {/* Trust Callout */}
                <div className="privacy-trust-box">
                  <div className="privacy-trust-header">
                    <span className="privacy-trust-icon">🔒</span>
                    <span className="privacy-trust-title">Security Inquiries</span>
                  </div>
                  <p className="privacy-trust-text">
                    Need our formal data processing addendum (DPA) or security certificates?
                  </p>
                  <Link to="/contact" className="privacy-trust-link">
                    Contact Trust Team →
                  </Link>
                </div>
              </div>
            </aside>

            {/* Content Display (Right Column) */}
            <main className="privacy-content">
              
              {/* Revision Metadata */}
              <div className="privacy-meta-banner">
                <div className="meta-left">
                  <span><strong>Last Updated:</strong> May 3, 2026</span>
                  <span className="meta-divider">|</span>
                  <span><strong>Version:</strong> 2.4</span>
                </div>
                <div className="meta-right">
                  <span className="status-indicator"></span> Active compliance status
                </div>
              </div>

              {filteredSections.length === 0 ? (
                <div className="privacy-empty-state">
                  <h3>No matching policy sections found</h3>
                  <p>Try searching for terms like "cookies", "GDPR", "AWS", or "email".</p>
                  <button className="btn-reset-search" onClick={() => setSearchQuery('')}>
                    Reset Search
                  </button>
                </div>
              ) : (
                <div className="privacy-sections-container">
                  <AnimatePresence mode="wait">
                    {filteredSections.map((sec, idx) => (
                      <motion.div
                        key={sec.id}
                        id={sec.id}
                        className="privacy-card-outer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.2) }}
                      >
                        <div className="privacy-section-anchor"></div>
                        <div className="privacy-content-card">
                          
                          {/* Header */}
                          <div className="privacy-card-header">
                            <div className="privacy-card-title-group">
                              <span className="privacy-card-icon">{sec.icon}</span>
                              <h2 className="privacy-card-title">{sec.title}</h2>
                            </div>
                            <span className="privacy-card-badge">{sec.badge}</span>
                          </div>

                          {/* Quick Summary Highlights Box */}
                          <div className={`privacy-quick-summary-box ${viewMode === 'summary' ? 'expanded' : ''}`}>
                            <div className="summary-title-row">
                            </div>
                            <p className="summary-text">{sec.summary}</p>
                          </div>

                          {/* Legal Text */}
                          {viewMode === 'detailed' && (
                            <div className="privacy-legal-text-wrapper">
                              {sec.legal.split('\n').map((para, pIdx) => {
                                const trimmed = para.trim();
                                if (trimmed.startsWith('•')) {
                                  return (
                                    <ul key={pIdx} className="privacy-bullet-list">
                                      <li>{trimmed.substring(1).trim()}</li>
                                    </ul>
                                  );
                                }
                                return trimmed ? <p key={pIdx} className="privacy-legal-para">{trimmed}</p> : null;
                              })}
                            </div>
                          )}

                          {/* Render Subprocessor Table if applicable */}
                          {sec.isSubprocessorTable && (
                            <div className="privacy-table-container">
                              <table className="privacy-subprocessors-table">
                                <thead>
                                  <tr>
                                    <th>Subprocessor</th>
                                    <th>Core Purpose</th>
                                    <th>Data Location</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {sec.subprocessors.map((sub, sIdx) => (
                                    <tr key={sIdx}>
                                      <td><strong>{sub.name}</strong></td>
                                      <td>{sub.purpose}</td>
                                      <td><span className="location-pill">{sub.location}</span></td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}

                          {/* FAQ accordion inside GDPR / Compliance section for interactivity */}
                          {sec.id === 'compliance' && (
                            <div className="privacy-faq-accordion">
                              <h4 className="faq-main-title">Privacy Frequently Asked Questions</h4>
                              <details className="faq-details">
                                <summary className="faq-summary">Do you sell personal data?</summary>
                                <div className="faq-content">
                                  <p>No. TechnoElevate does not sell, lease, or monetize personal data to third parties. We collect data solely to support contract execution, answer inquiries, and optimize services.</p>
                                </div>
                              </details>
                              <details className="faq-details">
                                <summary className="faq-summary">How do you support HIPAA alignment?</summary>
                                <div className="faq-content">
                                  <p>For healthcare projects, we sign Business Associate Agreements (BAAs), isolate patient data at the network layer, enforce encryption at rest, and support full immutable logging audits.</p>
                                </div>
                              </details>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>

      {/* Trust & Contact CTA Section */}
      <section className="section bg-ink privacy-cta-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="privacy-cta-glow"></div>
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div className="privacy-cta-grid">
            <div className="cta-left">
              <div className="s-eyebrow" style={{ color: 'var(--orange)' }}>Data Governance</div>
              <h2 className="s-title white">Need more technical details?</h2>
              <p className="s-sub white">
                We are happy to answer any questions about our database encryption schemas, secure development environment architecture, or specific regional storage protocols.
              </p>
            </div>
            <div className="cta-right">
              <motion.div
                className="privacy-glass-card"
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(255, 71, 19, 0.15)' }}
              >
                <h3>Submit a Security Inquiry</h3>
                <p>Get in touch directly with our internal Data Protection and Compliance team.</p>
                <Link to="/contact" className="privacy-contact-btn">
                  Submit Request →
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
