import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import { CASES } from "../data/cases";
import {
  HERO_OVERLAY,
  INDUSTRY_PHOTOS,
  PHOTOS,
  unsplash,
} from "../config/images";
import { useDocumentTitle } from "../hooks/useSiteEffects";

export default function CaseStudyPage() {
  const { id } = useParams();
  const c = CASES.find((x) => x.id === id);

  useDocumentTitle(c ? `${c.client} - Case Study` : "Case Study");
  useEffect(() => {
    document.body.className = "";
    window.scrollTo(0, 0); // Always scroll to top on mount
  }, [id]);

  if (!c) {
    return (
      <div className="wrap" style={{ padding: "80px var(--pad)" }}>
        <h1>Case study not found</h1>
        <p>
          <Link to="/casestudies">Back to case studies</Link>
        </p>
      </div>
    );
  }

  // Beautiful sector-specific high-resolution background image overrides matching homepage perfectly
  const customPhotos = {
    legaldst:
      "https://images.unsplash.com/photo-1535905496755-26ae35d0ae54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGxlZ2FsfGVufDB8fDB8fHww",
    "kotak-sra":
      "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=1920&q=80",
    "cars24-credit":
      "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1920&q=80",
  };

  const photoUrl =
    customPhotos[c.id] ||
    unsplash(INDUSTRY_PHOTOS[c.industryNorm] || PHOTOS.casestudies);
  const bg = `${HERO_OVERLAY},url('${photoUrl}')`;

  // Stagger variants for the Hero section
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <>
      <section
        className="cs-full-hero"
        style={{
          backgroundImage: bg,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          className="cs-full-inner"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="page-breadcrumb" variants={itemVariants}>
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/casestudies">Case Studies</Link>
            <span>/</span>
            <span>{c.client}</span>
          </motion.div>

          <motion.div
            className="m-ind"
            style={{
              fontSize: 10,
              letterSpacing: ".22em",
              textTransform: "uppercase",
              color: "var(--orange2)",
              fontWeight: 700,
              marginBottom: 10,
            }}
            variants={itemVariants}
          >
            {c.industryNorm}
          </motion.div>

          <motion.h1
            style={{
              fontSize: "clamp(28px,4vw,48px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: 8,
              letterSpacing: "-0.02em",
            }}
            variants={itemVariants}
          >
            {c.client}
          </motion.h1>

          <motion.p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,.65)",
              maxWidth: 680,
              marginBottom: 24,
              lineHeight: 1.4,
            }}
            variants={itemVariants}
          >
            {c.project}
          </motion.p>

          <motion.div
            style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
            variants={itemVariants}
          >
            {c.services.map((s) => (
              <span key={s} className="page-tag">
                {s}
              </span>
            ))}
            <span className="page-tag">{c.engagement}</span>
            <span className="page-tag">{c.regions.join(" · ")}</span>
          </motion.div>
        </motion.div>
      </section>

      <div className="cs-split-grid">
        {/* Left Column: Narrative Content */}
        <div className="cs-main-content">
          <ScrollReveal direction="up" distance={20}>
            <div
              className="cs-content-card"
              style={{ borderLeft: "4px solid var(--orange)" }}
            >
              <h2>
                <span style={{ fontSize: "20px" }}>🎯</span> The Challenge
              </h2>
              <p>{c.problem}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={20} delay={0.08}>
            <div
              className="cs-content-card"
              style={{ borderLeft: "4px solid #1B3A5C" }}
            >
              <h2>
                <span style={{ fontSize: "20px" }}>💡</span> Our Solution
              </h2>
              <p>{c.solution}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={20} delay={0.12}>
            <div className="cs-content-card">
              <h2>
                <span style={{ fontSize: "20px" }}>🛠️</span> Technology Stack
              </h2>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  marginTop: 12,
                }}
              >
                {c.tech.map((t) => (
                  <span
                    key={t}
                    className="m-pill"
                    style={{
                      background: "var(--light)",
                      border: "1px solid var(--rule)",
                      color: "var(--ink2)",
                      fontWeight: 600,
                      padding: "6px 12px",
                      borderRadius: "8px",
                      fontSize: "13px",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Sidebar Metrics & CTA */}
        <div className="cs-sidebar-content">
          <ScrollReveal direction="up" distance={20} delay={0.16}>
            <div className="cs-sidebar-card cs-outcomes-card">
              <h3>📈 Key Outcomes Delivered</h3>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {c.outcomes.map((o) => (
                  <div key={o} className="cs-outcome-item">
                    <span className="cs-outcome-icon">✦</span>
                    <span>{o}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={20} delay={0.2}>
            <div className="cs-cta-card">
              <div className="cs-cta-card-content">
                <h4>Partner with us.</h4>
                <p>
                  Need a similar high-performance{" "}
                  {c.industryNorm === "LegalTech"
                    ? "AI / Data Science"
                    : c.industryNorm}{" "}
                  solution? Discuss your goals with our engineering architects
                  today.
                </p>
                <Link to="/contact" className="cs-cta-btn">
                  Discuss a Similar Project
                </Link>
                <Link
                  to="/casestudies"
                  style={{
                    display: "block",
                    textAlign: "center",
                    marginTop: "16px",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.6)",
                  }}
                  className="cs-back-link"
                >
                  ← All Case Studies
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </>
  );
}
