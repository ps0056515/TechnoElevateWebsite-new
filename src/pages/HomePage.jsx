import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Announcement from "../components/Announcement";
import AnimatedCounter from "../components/AnimatedCounter";
import ScrollReveal from "../components/ScrollReveal";
import { useBodyClass, useDocumentTitle } from "../hooks/useSiteEffects";

export default function HomePage() {
  useDocumentTitle(null);
  useBodyClass("home-page");

  // Hero Copy variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // sleek cubic ease-out
      },
    },
  };

  // Hero Bento Visual variants
  const bentoContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const bentoItemVariants = {
    hidden: { opacity: 0, scale: 0.94, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Hover spring effect
  const cardHover = {
    y: -8,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  };

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
          <motion.div
            className="hero-home-copy"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero-home-eyebrow" variants={itemVariants}>
              <span className="dot" />
              Engineering Partner · Since 2016
            </motion.div>
            <motion.h1 variants={itemVariants}>
              AI-powered engineering
              <br />
              <span className="hl-orange">that drives</span>
              <br />
              <span className="hl-teal">real outcomes.</span>
            </motion.h1>
            <motion.p className="hero-home-lead" variants={itemVariants}>
              TechnoElevate is the product engineering studio within TestYantra
              — from LLM-powered legal research to ML credit scoring and
              computer-vision retail, we design, build and scale enterprise
              software.
            </motion.p>
            <motion.div className="hero-home-ctas" variants={itemVariants}>
              <Link to="/ai-hub" className="hero-home-cta">
                Explore AI Hub{" "}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link to="/casestudies" className="hero-home-cta-ghost">
                View Case Studies
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-home-visual"
            aria-hidden="true"
            variants={bentoContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="hero-bento">
              <motion.div
                className="bento-card bento-wide bento-photo img-hero-engineering"
                variants={bentoItemVariants}
                whileHover={{ ...cardHover, scale: 1.01 }}
              >
                <span className="bento-photo-label">
                  Enterprise AI &amp; Cloud Engineering
                </span>
              </motion.div>

              <motion.div
                className="bento-card bento-metric"
                variants={bentoItemVariants}
                whileHover={{ ...cardHover, scale: 1.03 }}
              >
                <div className="bm-num">
                  <AnimatedCounter value="80" />–
                  <AnimatedCounter value="90" suffix="%" />
                </div>
                <div className="bm-lbl">Branch SR automated · Kotak</div>
              </motion.div>

              <motion.div
                className="bento-card bento-photo bento-photo-sm img-hero-ai"
                variants={bentoItemVariants}
                whileHover={{ ...cardHover, scale: 1.03 }}
              >
                <span className="bento-photo-label">LLM · RAG · ML</span>
              </motion.div>

              <motion.div
                className="bento-card bento-wide bento-stack"
                variants={bentoItemVariants}
                whileHover={{ ...cardHover, scale: 1.01 }}
              >
                <div className="bento-stack-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div className="bento-stack-text">
                  <h4>Architecture-first delivery</h4>
                  <p>
                    20+ documented enterprise engagements across BFSI, telecom,
                    automotive &amp; AI — CMMI Level 3 processes.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="hero-home-stats">
          <ScrollReveal
            direction="up"
            delay={0.4}
            distance={20}
            className="hero-home-stats-inner"
          >
            <div className="hs-item">
              <div className="num">
                <AnimatedCounter value="20" suffix="+" />
              </div>
              <div className="lbl">Documented Engagements</div>
            </div>
            <div className="hs-item">
              <div className="num">
                <AnimatedCounter value="12" suffix="+" />
              </div>
              <div className="lbl">Industries Served</div>
            </div>
            <div className="hs-item">
              <div className="num">
                <AnimatedCounter value="6" />
              </div>
              <div className="lbl">Global Regions</div>
            </div>
            <div className="hs-item">
              <div className="num">
                <AnimatedCounter value="Repeat" />
              </div>
              <div className="lbl">Client Engagements</div>
            </div>
          </ScrollReveal>
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
    {
      name: "Kotak Mahindra Bank",
      bg: "#ED1C24",
      svg: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2.2v-3.8l-2.6 3.8H5.9l3.5-5-3.3-5h2.3l2.4 3.7V6.5H13v10z" />
        </svg>
      ),
    },
    {
      name: "JPMorgan Chase",
      bg: "#0066CC",
      svg: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M0 15.415c0 .468.38.85.848.85h5.937V.575L0 7.72v7.695m15.416 8.582c.467 0 .846-.38.846-.849v-5.937H.573l7.146 6.785h7.697M24 8.587a.844.844 0 0 0-.847-.846h-5.938V23.43l6.782-7.148L24 8.586M8.585.003a.847.847 0 0 0-.847.847v5.94h15.688L16.282.003H8.585Z" />
        </svg>
      ),
    },
    {
      name: "Lloyds Banking Group",
      bg: "#006A4D",
      svg: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M19.1 7.2c-.4-.8-1.2-1.3-2.1-1.3-.4 0-.8.1-1.2.3.2-.8.1-1.7-.3-2.4-.4-.7-1.2-1.2-2.1-1.2-.5 0-1 .2-1.4.5.1-.6-.1-1.2-.5-1.7-.5-.6-1.3-.9-2.1-.9-.7 0-1.4.3-1.9.9-.4.5-.5 1.2-.4 1.8-.4-.3-.9-.5-1.5-.5-1.1 0-2.1.8-2.3 1.9l-.8 3.2C2.1 8.3 1.7 9 1.7 9.8c0 .5.2.9.5 1.2l.3.3c-.3.4-.4 1-.4 1.5 0 .8.4 1.5 1.1 1.9l.4.2c-.2.5-.2 1 0 1.5.3.7.9 1.2 1.7 1.3l.4.1v5c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-4.5l1.6 1.1c.3.2.7.3 1.1.3h4c1.1 0 2-.9 2-2v-6.2c0-.5-.2-1-.5-1.4l-.4-.4c.5-.3.8-.8 1-1.4l.6-2.4c.1-.4 0-.9-.3-1.2z" />
        </svg>
      ),
    },
    {
      name: "Verizon",
      bg: "#CD040B",
      svg: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M18.302 0H22v.003L10.674 24H7.662L2 12h3.727l3.449 7.337z" />
        </svg>
      ),
    },
    {
      name: "CARS24",
      bg: "#FF6B00",
      svg: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.7 1.5 1.5-.67 1.5-1.5 1.5z" />
        </svg>
      ),
    },
    {
      name: "LegalDST",
      bg: "#1E40AF",
      svg: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H7M4.5 10c0 3 2.5 5 2.5 5s2.5-2 2.5-5M14.5 10c0 3 2.5 5 2.5 5s2.5-2 2.5-5M3 22h18" />
        </svg>
      ),
    },
    {
      name: "Autonomo",
      bg: "#10B981",
      svg: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      ),
    },
  ];
  const track = [...logos, ...logos];
  return (
    <div className="clients-band clients-light">
      <div
        style={{
          maxWidth: "var(--max)",
          margin: "0 auto",
          padding: "0 var(--pad)",
          display: "flex",
          alignItems: "center",
          gap: 28,
          marginBottom: 20,
        }}
      >
        <span
          className="clients-label"
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: ".18em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          Trusted by
        </span>
        <div className="clients-rule" style={{ flex: 1, height: 1 }} />
      </div>
      <div className="clients-marquee">
        <div className="clients-track">
          {track.map(({ svg, bg, name }, i) => (
            <div className="c-logo" key={`${name}-${i}`}>
              <div
                className="c-logo-mark"
                style={{ background: bg, color: "#fff", display: "grid", placeItems: "center" }}
              >
                {svg}
              </div>
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
    {
      label: "CMMI Level 3",
      bg: "#1B3A5C",
      svg: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm0 11.9c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z M12 6a3 3 0 00-3 3v2h6V9a3 3 0 00-3-3z" />
        </svg>
      ),
    },
    {
      label: "AWS Cloud",
      bg: "#FF9900",
      svg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <text x="2" y="14" fontSize="12" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="-0.5">aws</text>
          <path d="M2 17c4.5 2.5 10.5 2.5 15 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M17 17l-1-2 M17 17l-2 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      ),
    },
    {
      label: "Microsoft Azure",
      bg: "#0078D4",
      svg: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M12 3.5L2 14.5h7.5L12 3.5z" opacity="0.8" />
          <path d="M2 14.5h7.5L12 20.5 2 14.5z" opacity="0.95" />
          <path d="M12 3.5l10 11h-7.5L12 3.5z" opacity="0.6" />
          <path d="M22 14.5h-7.5L12 20.5 22 14.5z" opacity="0.85" />
        </svg>
      ),
    },
    {
      label: "Google Cloud",
      bg: "#4285F4",
      svg: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.365 9.365 0 0 0-2.821-4.552l-.043.043.006-.05A9.344 9.344 0 0 0 12.19 2.38zm-.358 4.146c1.244-.04 2.518.368 3.486 1.15a5.186 5.186 0 0 1 1.862 4.078v.518c3.53-.07 3.53 5.262 0 5.193h-5.193l-.008.009v-.04H6.785a2.59 2.59 0 0 1-1.067-.23h.001a2.597 2.597 0 1 1 3.437-3.437l3.013-3.012A6.747 6.747 0 0 0 8.11 8.24c.018-.01.04-.026.054-.023a5.186 5.186 0 0 1 3.67-1.69z" />
        </svg>
      ),
    },
    {
      label: "Kubernetes",
      bg: "#326CE5",
      svg: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.147 1.523.004-.002zm.76 2.75l.723.349.722-.347.18-.78-.5-.623h-.804l-.5.623.179.779zm1.5-3.095a.44.44 0 0 0 .7.336l.008.003 2.134-1.513a5.188 5.188 0 0 0-2.992-1.442l.148 2.615.002.001zm10.876 5.97l-5.773 7.181a1.6 1.6 0 0 1-1.248.594l-9.261.003a1.6 1.6 0 0 1-1.247-.596l-5.776-7.18a1.583 1.583 0 0 1-.307-1.34L2.1 5.573c.108-.47.425-.864.863-1.073L11.305.513a1.606 1.606 0 0 1 1.385 0l8.345 3.985c.438.209.755.604.863 1.073l2.062 8.955c.108.47-.005.963-.308 1.34zm-3.289-2.057c-.042-.01-.103-.026-.145-.034-.174-.033-.315-.025-.479-.038-.35-.037-.638-.067-.895-.148-.105-.04-.18-.165-.216-.216l-.201-.059a6.45 6.45 0 0 0-.105-2.332 6.465 6.465 0 0 0-.936-2.163c.052-.047.15-.133.177-.159.008-.09.001-.183.094-.282.197-.185.444-.338.743-.522.142-.084.273-.137.415-.242.032-.024.076-.062.11-.089.24-.191.295-.52.123-.736-.172-.216-.506-.236-.745-.045-.034.027-.08.062-.111.088-.134.116-.217.23-.33.35-.246.25-.45.458-.673.609-.097.056-.239.037-.303.033l-.19.135a6.545 6.545 0 0 0-4.146-2.003l-.012-.223c-.065-.062-.143-.115-.163-.25-.022-.268.015-.557.057-.905.023-.163.061-.298.068-.475.001-.04-.001-.099-.001-.142 0-.306-.224-.555-.5-.555-.275 0-.499.249-.499.555l.001.014c0 .041-.002.092 0 .128.006.177.044.312.067.475.042.348.078.637.056.906a.545.545 0 0 1-.162.258l-.012.211a6.424 6.424 0 0 0-4.166 2.003 8.373 8.373 0 0 1-.18-.128c-.09.012-.18.04-.297-.029-.223-.15-.427-.358-.673-.608-.113-.12-.195-.234-.329-.349-.03-.026-.077-.062-.111-.088a.594.594 0 0 0-.348-.132.481.481 0 0 0-.398.176c-.172.216-.117.546.123.737l.007.005.104.083c.142.105.272.159.414.242.299.185.546.338.743.522.076.082.09.226.1.288l.16.143a6.462 6.462 0 0 0-1.02 4.506l-.208.06c-.055.072-.133.184-.215.217-.257.081-.546.11-.895.147-.164.014-.305.006-.48.039-.037.007-.09.02-.133.03l-.004.002-.007.002c-.295.071-.484.342-.423.608.061.267.349.429.645.365l.007-.001.01-.003.129-.029c.17-.046.294-.113.448-.172.33-.118.604-.217.87-.256.112-.009.23.069.288.101l.217-.037a6.5 6.5 0 0 0 2.88 3.596l-.09.218c.033.084.069.199.044.282-.097.252-.263.517-.452.813-.091.136-.185.242-.268.399-.02.037-.045.095-.064.134-.128.275-.034.591.213.71.248.12.556-.007.69-.282v-.002c.02-.039.046-.09.062-.127.07-.162.094-.301.144-.458.132-.332.205-.68.387-.897.05-.06.13-.082.215-.105l.113-.205a6.453 6.453 0 0 0 4.609.012l.106.192c.086.028.18.042.256.155.136.232.229.507.342.84.05.156.074.295.145.457.016.037.043.09.062.129.133.276.442.402.69.282.247-.118.341-.435.213-.71-.02-.039-.045-.096-.065-.134-.083-.156-.177-.261-.268-.398-.19-.296-.346-.541-.443-.793-.04-.13.007-.21.038-.294-.018-.022-.059-.144-.083-.202a6.499 6.499 0 0 0 2.88-3.622c.064.01.176.03.213.038.075-.05.144-.114.28-.104.266.039.54.138.87.256.154.06.277.128.448.173.036.01.088.019.13.028l.009.003.007.001c.297.064.584-.098.645-.365.06-.266-.128-.537-.423-.608zM16.4 9.701l-1.95 1.746v.005a.44.44 0 0 0 .173.757l.003.01 2.526.728a5.199 5.199 0 0 0-.108-1.674A5.208 5.208 0 0 0 16.4 9.7zm-4.013 5.325a.437.437 0 0 0-.404-.232.44.44 0 0 0-.372.233h-.002l-1.268 2.292a5.164 5.164 0 0 0 3.326.003l-1.27-2.296h-.01zm1.888-1.293a.44.44 0 0 0-.27.036.44.44 0 0 0-.214.572l-.003.004 1.01 2.438a5.15 5.15 0 0 0 2.081-2.615l-2.6-.44-.004.005z" />
        </svg>
      ),
    },
    {
      label: "ISO 27001 Aligned",
      bg: "#231F20",
      svg: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm0 11.9c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z M12 6a3 3 0 00-3 3v2h6V9a3 3 0 00-3-3z" />
        </svg>
      ),
    },
  ];

  const partnersContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const partnerBadgeVariants = {
    hidden: { opacity: 0, y: 15 },
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
    <section className="partners-band">
      <ScrollReveal direction="up" distance={15}>
        <h6>Technologies &amp; Engineering Standards</h6>
      </ScrollReveal>
      <ScrollReveal direction="up" distance={15} delay={0.06}>
        <p className="partners-note">
          Cloud-native stack and quality practices we use on client engagements
          — certification details available on request.
        </p>
      </ScrollReveal>

      <motion.div
        className="partners-row"
        variants={partnersContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
      >
        {badges.map(({ svg, bg, label }) => (
          <motion.div
            className="partner-badge"
            key={label}
            variants={partnerBadgeVariants}
            whileHover={{
              scale: 1.05,
              y: -4,
              borderColor: "#FF4713",
              boxShadow: "0 8px 24px rgba(255,71,19,.12)",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
          >
            <div
              className="partner-badge-icon"
              style={{ background: bg, color: "#fff", display: "grid", placeItems: "center" }}
            >
              {svg}
            </div>
            <span>{label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function FeaturedCaseStudies() {
  const cards = [
    {
      id: "legaldst",
      img: "img-cs-legal",
      metric: "10x",
      sub: "Research speedup",
      ind: "LegalTech",
      title: "LegalDST — AI Legal Research Platform",
      desc: "LLM-powered case-law research with verified citations, Clerk auth and Razorpay subscriptions.",
    },
    {
      id: "kotak-sra",
      img: "img-cs-bfsi",
      metric: "80–90%",
      sub: "SR volume automated",
      ind: "BFSI",
      title: "Kotak — Service Request Automation",
      desc: "Automated 400 high-volume branch service requests with real-time transaction authorization.",
    },
    {
      id: "cars24-credit",
      img: "img-cs-fintech",
      metric: "50%",
      sub: "Underwriting cost cut",
      ind: "Fintech",
      title: "CARS24 — Credit Underwriting ML",
      desc: "Proprietary alternative-data scoring eliminating third-party API costs.",
    },
  ];
  return (
    <section className="featured-cs">
      <div className="wrap">
        <div className="s-eyebrow">Proven Outcomes</div>
        <h2 className="s-title">Featured case studies.</h2>
        <p className="s-sub">
          Real projects, measurable results — from India&apos;s largest private
          bank to AI-powered legal research.
        </p>
        <div className="featured-cs-grid">
          {cards.map((c, idx) => (
            <ScrollReveal
              key={c.id}
              delay={idx * 0.12}
              direction="up"
              distance={30}
            >
              <Link to={`/case-studies/${c.id}`} className="feat-card">
                <div className={`feat-card-img ${c.img}`}>
                  <div className="feat-card-metric">
                    <span className="feat-card-metric-num">
                      {c.id === "legaldst" && (
                        <AnimatedCounter value="10" suffix="x" />
                      )}
                      {c.id === "kotak-sra" && (
                        <span className="feat-card-metric-range">
                          <AnimatedCounter value="80" suffix="%" />
                          <span className="feat-card-metric-hyphen">–</span>
                          <AnimatedCounter value="90" suffix="%" />
                        </span>
                      )}
                      {c.id === "cars24-credit" && (
                        <AnimatedCounter value="50" suffix="%" />
                      )}
                    </span>
                    <span>{c.sub}</span>
                  </div>
                </div>
                <div className="feat-card-body">
                  <div className="feat-card-ind">{c.ind}</div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <span className="feat-card-link">Read case study →</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal
          style={{ textAlign: "center", marginTop: 32 }}
          direction="up"
          distance={15}
        >
          <Link
            to="/casestudies"
            style={{ fontSize: 14, fontWeight: 700, color: "var(--orange)" }}
          >
            View all case studies →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

function AiShowcase() {
  const cards = [
    {
      icon: "🧠",
      title: "Generative AI & RAG",
      desc: "LLM products with verified citations and enterprise guardrails.",
      link: "/ai-llm-rag",
      bgClass: "bg-card-llm",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: "⚡",
      title: "Agentic Automation",
      desc: "Multi-step AI agents for complex enterprise workflows.",
      link: "/ai-agentic",
      bgClass: "bg-card-agentic",
      img: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: "📊",
      title: "ML & Data Platforms",
      desc: "Credit scoring, MLOps and real-time inference at scale.",
      link: "/ai-ml-platform",
      bgClass: "bg-card-ml",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 16,
        delay: i * 0.12,
      },
    }),
  };

  return (
    <section className="ai-showcase bg-ai-section">
      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <ScrollReveal direction="up" distance={20}>
          <div className="s-eyebrow" style={{ color: "var(--orange2)" }}>
            <div
              style={{
                width: 32,
                height: 2,
                background: "var(--orange)",
                flexShrink: 0,
              }}
            />
            TechnoElevate.AI
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" distance={20} delay={0.06}>
          <h2 className="s-title white">
            Enterprise AI — from strategy to production.
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" distance={15} delay={0.1}>
          <p className="s-sub white" style={{ maxWidth: 640 }}>
            Production-grade RAG, ML scoring, agentic workflows and computer
            vision — built with the same rigour as our core engineering work.
          </p>
        </ScrollReveal>
        <div className="ai-grid">
          {cards.map((c, i) => (
            <motion.div
              key={c.link}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                borderColor: "rgba(255,71,19,0.4)",
                boxShadow: "0 20px 50px rgba(255,71,19,0.2)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
              className="ai-card"
              style={{ display: "flex", flexDirection: "column" }}
            >
              {/* Visible image thumbnail */}
              <div
                className="ai-card-thumb"
                style={{
                  height: 140,
                  margin: "-36px -32px 24px",
                  borderRadius: "14px 14px 0 0",
                  backgroundImage: `url('${c.img}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  overflow: "hidden",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(13,17,23,0.1) 0%, rgba(13,17,23,0.75) 100%)",
                  }}
                />
                <motion.div
                  className="ai-card-icon"
                  style={{
                    position: "absolute",
                    bottom: 12,
                    left: 16,
                    zIndex: 2,
                    margin: 0,
                  }}
                  whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                >
                  {c.icon}
                </motion.div>
              </div>

              <h3>{c.title}</h3>
              <p style={{ flex: 1 }}>{c.desc}</p>
              <Link to={c.link} className="ai-card-link">
                Learn more →
              </Link>
            </motion.div>
          ))}
        </div>
        <ScrollReveal className="ai-hub-cta" direction="up" distance={15}>
          <Link to="/ai-hub" className="ai-hub-btn">
            Visit the AI Hub →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

function WhySection() {
  const items = [
    {
      num: "01",
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--orange)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: "Domain-Led Engineering",
      desc: "Deep BFSI, telecom and automotive expertise — we understand your business, not just your stack.",
    },
    {
      num: "02",
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--orange)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a4 4 0 014 4c0 1.95-2 3-2 5h-4c0-2-2-3.05-2-5a4 4 0 014-4z" />
          <path d="M10 17h4" />
          <path d="M10 20h4" />
          <path d="M9 11l3-3 3 3" />
        </svg>
      ),
      title: "Production AI, Not PoCs",
      desc: "LLM products with auth, billing and guardrails — LegalDST, CARS24 ML and Autonomo CV are live proof.",
    },
    {
      num: "03",
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--orange)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
          <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" />
        </svg>
      ),
      title: "Architecture-First Delivery",
      desc: "Microservices, event sourcing and cloud-native patterns from day one — speed without technical debt.",
    },
    {
      num: "04",
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--orange)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      ),
      title: "Global Delivery Standard",
      desc: "Six regions, one engineering bar — Bengaluru to Silicon Valley with CMMI Level 3 processes.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 16,
      },
    },
  };

  return (
    <section className="why-section">
      <div className="wrap">
        <ScrollReveal direction="up" distance={15}>
          <div className="s-eyebrow">Why TechnoElevate</div>
        </ScrollReveal>
        <ScrollReveal direction="up" distance={15} delay={0.05}>
          <h2 className="s-title">What makes us different.</h2>
        </ScrollReveal>
        <ScrollReveal direction="up" distance={10} delay={0.1}>
          <p className="s-sub">
            We combine deep domain expertise with modern engineering practices
            to deliver software that actually works at enterprise scale.
          </p>
        </ScrollReveal>

        <motion.div
          className="why-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          {items.map((item) => (
            <motion.div
              className="why-item"
              key={item.num}
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.03,
                boxShadow: "0 16px 40px rgba(255,71,19,0.12)",
                borderColor: "rgba(255,71,19,0.35)",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 18,
              }}
            >
              <div className="why-item-top">
                <div className="why-num-badge">{item.num}</div>
                <div className="why-icon-wrap">{item.icon}</div>
              </div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote:
        "TechnoElevate embedded with our team like true partners — not vendors. They understood banking compliance constraints and still delivered sub-second API performance at peak load.",
      initials: "KM",
      name: "Engineering Lead",
      role: "Kotak Mahindra Bank",
      color: "#ED1C24",
    },
    {
      quote:
        "Building in-house ML scoring was a strategic bet. TechnoElevate delivered proprietary models that cut third-party costs and improved new-to-credit approval rates — at our production volume.",
      initials: "C24",
      name: "Product Director",
      role: "CARS24",
      color: "#FF6B00",
    },
    {
      quote:
        "The LegalDST platform needed verified case-law citations — not hallucinated answers. TechnoElevate built production RAG with the rigour our lawyer users demand.",
      initials: "LD",
      name: "Founder & CEO",
      role: "LegalDST",
      color: "#1E40AF",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 16 },
    },
  };

  return (
    <section className="testimonials">
      <div className="wrap">
        <ScrollReveal direction="up" distance={15}>
          <div className="s-eyebrow" style={{ color: "var(--orange2)" }}>
            Client Voices
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" distance={15} delay={0.05}>
          <h2 className="s-title">Trusted by engineering leaders.</h2>
        </ScrollReveal>

        <motion.div
          className="testi-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              className="testi-card"
              key={i}
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.02,
                borderColor: "rgba(255,71,19,0.25)",
                boxShadow: "0 16px 40px rgba(255,71,19,0.1)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <div className="testi-stars">
                {"★★★★★".split("").map((s, j) => (
                  <span key={j} style={{ color: "var(--orange2)", fontSize: 13 }}>
                    {s}
                  </span>
                ))}
              </div>
              <p className="testi-quote">{t.quote}</p>
              <div className="testi-author">
                <div
                  className="testi-avatar"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <p className="testi-disclaimer">
          Representative feedback from client engagements — full references
          available under NDA.
        </p>
      </div>
    </section>
  );
}

function InsightsPreview() {
  const insights = [
    {
      to: "/insight-legaldst-rag",
      imgClass: "img-cs-legal",
      title: "Building production RAG with verified legal citations",
      desc: "Guardrails, retrieval design and why hallucination is not an option in legal research.",
    },
    {
      to: "/insight-devops-sre",
      imgStyle: {
        backgroundImage:
          "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80')",
      },
      title: "DevOps & SRE for regulated enterprise workloads",
      desc: "SLOs, observability and release discipline when downtime has compliance cost.",
    },
    {
      to: "/insight-cars24-ml",
      imgClass: "img-cs-fintech",
      title: "In-house ML credit scoring at production volume",
      desc: "Alternative data, model governance and cutting third-party API dependency.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 16 },
    },
  };

  return (
    <section className="home-insights-preview">
      <div className="wrap">
        <ScrollReveal direction="up" distance={15}>
          <div className="s-eyebrow">From the field</div>
        </ScrollReveal>
        <ScrollReveal direction="up" distance={15} delay={0.05}>
          <h2 className="s-title">Engineering insights.</h2>
        </ScrollReveal>
        <ScrollReveal direction="up" distance={10} delay={0.1}>
          <p className="s-sub">
            How we approach RAG, ML scoring, DevOps/SRE and enterprise
            automation — written by practitioners, not marketers.
          </p>
        </ScrollReveal>

        <motion.div
          className="home-insights-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          {insights.map((ins) => (
            <motion.div
              key={ins.to}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 16px 40px rgba(255,71,19,0.12)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <Link to={ins.to} className="home-insight-card">
                <div
                  className={`home-insight-img ${ins.imgClass || ""}`}
                  style={ins.imgStyle || {}}
                />
                <div className="home-insight-body">
                  <h4>{ins.title}</h4>
                  <p>{ins.desc}</p>
                  <span className="insight-read-more">Read article →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <ScrollReveal
          style={{ textAlign: "center", marginTop: 28 }}
          direction="up"
          distance={15}
        >
          <Link
            to="/insights"
            style={{ fontSize: 14, fontWeight: 700, color: "var(--orange)" }}
          >
            Browse all insights →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ExploreLinks() {
  const links = [
    ["/services", "bg-link-services", "🏗️", "Services", "Seven service lines from app dev to AI & IoT.", "View services →"],
    ["/industries", "bg-link-industries", "🏦", "Industries", "Deep expertise across BFSI, telecom, automotive and more.", "View industries →"],
    ["/casestudies", "bg-link-cases", "📋", "Case Studies", "Documented projects with real clients and measurable outcomes.", "View case studies →"],
    ["/about", "bg-link-about", "🎯", "About Us", "Your engineering partner — not just a vendor.", "About us →"],
    ["/technology", "bg-link-tech", "⚙️", "Technology", "Java, React, K8s, DevOps/SRE and full-stack observability.", "View stack →"],
    ["/devops-sre", "bg-link-devops", "☁️", "DevOps & SRE", "CI/CD, Kubernetes, SLOs and unified observability at scale.", "Platform engineering →"],
    ["/engagement", "bg-link-engage", "🤝", "Engagement Models", "Fixed-scope, T&M, BOT, staff aug and managed services.", "How we work →"],
    ["/ai-hub", "bg-link-ai", "🤖", "AI Hub", "LLM, RAG, agents, ML and computer vision solutions.", "Explore AI →"],
    ["/contact", "bg-link-contact", "✉️", "Contact", "Start a conversation about your next project.", "Get in touch →"],
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 90, damping: 15 },
    },
  };

  return (
    <section className="home-links-section">
      <div className="wrap">
        <ScrollReveal direction="up" distance={15}>
          <div className="s-eyebrow">Explore</div>
        </ScrollReveal>
        <ScrollReveal direction="up" distance={15} delay={0.05}>
          <h2 className="s-title">Everything we do — on dedicated pages.</h2>
        </ScrollReveal>

        <motion.div
          className="home-links"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {links.map(([to, bg, icon, title, desc, arrow]) => (
            <motion.div
              key={to}
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.03,
                boxShadow: "0 16px 40px rgba(0,0,0,0.18)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <Link to={to} className={`home-link-card has-bg ${bg}`}>
                <div className="hl-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="hl-arrow">{arrow}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <div className="cta-band">
      <ScrollReveal direction="up" distance={30} className="cta-band-inner">
        <h2>
          Ready to build something
          <br />
          <em>remarkable</em> together?
        </h2>
        <div className="cta-band-btns">
          <Link to="/contact" className="cta-band-primary">
            Start a Conversation
          </Link>
          <Link to="/casestudies" className="cta-band-secondary">
            See our case studies →
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
