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
      </section>{" "}
      <CoreServicesRow />
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

function CoreServicesRow() {
  const services = [
    {
      title: "Application Development & Management",
      desc: "We design, build and manage enterprise-grade web and mobile applications — from greenfield products to legacy modernization — with modern frameworks, design systems, and CI/CD-first delivery.",
      icon: "🌐",
      img: "/service_web_app.png",
      tags: ["React & Next.js", "Angular", "SPAs & SSR", "Micro-Frontends"],
      imgSide: "left",
      highlights: [
        "Full-stack React, Angular & Vue applications with SSR and ISR",
        "Design system creation with Figma-to-code pipelines",
        "Progressive Web Apps with offline-first architecture",
        "Legacy application modernization & re-platforming",
      ],
      metric: "50+",
      metricLabel: "Production apps delivered",
      link: "/services",
    },
    {
      title: "Mobile Engineering",
      desc: "Native and cross-platform mobile experiences built for scale — from ride-hailing to banking. We ship production apps with fluid animations, biometric auth, offline sync, and deep OS integrations.",
      icon: "📱",
      img: "/service_mobile_dev.png",
      tags: ["React Native", "iOS & Android", "Flutter", "Offline Sync"],
      imgSide: "right",
      highlights: [
        "Cross-platform development with shared business logic",
        "Biometric authentication & secure local storage",
        "Real-time push notifications & background sync",
        "App Store optimization & release management",
      ],
      metric: "4.8★",
      metricLabel: "Avg. app store rating",
      link: "/services",
    },
    {
      title: "Cloud & Infrastructure",
      desc: "Cloud-native transformation from strategy to execution. We architect highly-available, auto-scaling infrastructure on AWS, Azure and GCP — with Kubernetes orchestration and infrastructure-as-code at the core.",
      icon: "☁️",
      img: "/home_hero_engineering_bg.png",
      tags: ["AWS & Azure", "Kubernetes", "Terraform", "GitOps"],
      imgSide: "left",
      highlights: [
        "Multi-cloud strategy & workload migration",
        "Kubernetes cluster design, deployment & management",
        "Infrastructure-as-Code with Terraform & Pulumi",
        "Cost optimization — avg. 35% cloud spend reduction",
      ],
      metric: "99.99%",
      metricLabel: "Uptime SLA achieved",
      link: "/devops-sre",
    },
    {
      title: "Data & Analytics",
      desc: "Turn raw data into real-time intelligence. We build end-to-end data platforms — from ingestion pipelines and data lakes to BI dashboards and predictive analytics — enabling data-driven decision making at enterprise scale.",
      icon: "📈",
      img: "/home_hero_bank_bg.png",
      tags: ["Spark & Kafka", "Snowflake", "Power BI", "ETL Pipelines"],
      imgSide: "right",
      highlights: [
        "Real-time streaming with Kafka & Apache Flink",
        "Data lake architecture on S3, ADLS & BigQuery",
        "BI dashboard & visualization with Power BI & Tableau",
        "Data governance, lineage tracking & compliance",
      ],
      metric: "10x",
      metricLabel: "Faster reporting cycles",
      link: "/services",
    },
    {
      title: "AI & LLM Integration",
      desc: "Production-grade AI that goes beyond proof-of-concept. We deploy enterprise LLMs, RAG pipelines with verified citations, ML scoring engines, and computer vision systems — with the guardrails regulated industries demand.",
      icon: "🧠",
      img: "/service_ai_llm.png",
      tags: ["LLM & RAG", "Vector DBs", "ML Scoring", "Computer Vision"],
      imgSide: "left",
      highlights: [
        "Retrieval Augmented Generation with verified citations",
        "Custom fine-tuned models with enterprise guardrails",
        "ML credit scoring & alternative data pipelines",
        "Computer vision for retail, automotive & healthcare",
      ],
      metric: "10x",
      metricLabel: "Research speed improvement",
      link: "/ai-llm-rag",
    },
    {
      title: "Agentic AI & Automation",
      desc: "Intelligent multi-agent systems that orchestrate complex business workflows autonomously. We build human-in-the-loop validation, automated decision engines, and self-healing pipelines that transform how enterprises operate.",
      icon: "🤖",
      img: "/service_agentic.png",
      tags: ["Multi-Agents", "LangGraph", "CrewAI", "Workflow Automation"],
      imgSide: "right",
      highlights: [
        "Multi-agent orchestration with LangGraph & CrewAI",
        "Human-in-the-loop validation for critical decisions",
        "Automated document processing & contract analysis",
        "Self-healing CI/CD and infrastructure automation",
      ],
      metric: "80%",
      metricLabel: "Manual effort reduction",
      link: "/ai-agentic",
    },
    {
      title: "Enterprise Integration & APIs",
      desc: "Connect your entire technology ecosystem with clean, well-documented APIs and robust integration layers. From payment gateways to ERP connectors — we build the middleware that makes enterprise systems work together seamlessly.",
      icon: "🔌",
      img: "/service_api.png",
      tags: ["REST & GraphQL", "gRPC", "Event-Driven", "iPaaS"],
      imgSide: "left",
      highlights: [
        "RESTful & GraphQL API design with OpenAPI specs",
        "Event-driven architecture with Kafka & RabbitMQ",
        "Payment gateway integration — Stripe, Razorpay, Adyen",
        "ERP & CRM connectors — SAP, Salesforce, HubSpot",
      ],
      metric: "200+",
      metricLabel: "API endpoints managed",
      link: "/services",
    },
    {
      title: "Enterprise IT Security",
      desc: "Zero-trust security architecture woven into every layer of your stack. We implement comprehensive identity management, encryption frameworks, compliance automation, and continuous threat monitoring for regulated enterprises.",
      icon: "🛡️",
      img: "/cs_kotak_bg.png",
      tags: ["Zero Trust", "IAM & SSO", "SOC2", "Pen Testing"],
      imgSide: "right",
      highlights: [
        "Zero-trust network architecture & micro-segmentation",
        "Identity & Access Management with OAuth2 & SAML",
        "Compliance automation — SOC2, ISO 27001, GDPR",
        "Continuous vulnerability scanning & penetration testing",
      ],
      metric: "ISO 27001",
      metricLabel: "Security aligned",
      link: "/services",
    },
    {
      title: "SRE & Observability",
      desc: "Embed reliability into every layer of your infrastructure. We implement comprehensive distributed tracing, centralized logging, proactive alerting, and chaos engineering — ensuring zero-downtime operations at enterprise scale.",
      icon: "📊",
      img: "/service_sre.png",
      tags: ["Prometheus", "Grafana", "OpenTelemetry", "PagerDuty"],
      imgSide: "left",
      highlights: [
        "Distributed tracing with OpenTelemetry & Jaeger",
        "SLO-driven reliability with error budgets & burn rates",
        "Centralized logging with ELK Stack & Datadog",
        "Chaos engineering & disaster recovery automation",
      ],
      metric: "<5min",
      metricLabel: "Mean time to detect",
      link: "/devops-sre",
    },
    {
      title: "CX Transformation",
      desc: "Reimagine your customer experience with intelligent, omnichannel digital journeys. We create personalized touchpoints powered by data, design thinking, and AI — driving measurable improvements in engagement, retention, and revenue.",
      icon: "💎",
      img: "/hero_digital_bg.png",
      tags: [
        "Design Thinking",
        "Omnichannel",
        "Personalization",
        "A/B Testing",
      ],
      imgSide: "right",
      highlights: [
        "Customer journey mapping & experience audits",
        "AI-powered personalization & recommendation engines",
        "Omnichannel engagement — web, mobile, voice, chat",
        "Conversion optimization with A/B testing frameworks",
      ],
      metric: "3x",
      metricLabel: "Conversion improvement",
      link: "/services",
    },
    {
      title: "Quality Engineering & Testing",
      desc: "Shift-left testing at enterprise scale. We build comprehensive test automation frameworks, performance benchmarking suites, and continuous quality gates — ensuring every release meets the highest standards before reaching production.",
      icon: "✅",
      img: "/ai_product_card_bg.png",
      tags: ["Selenium & Cypress", "JMeter", "API Testing", "CI Quality Gates"],
      imgSide: "left",
      highlights: [
        "End-to-end test automation with Selenium & Cypress",
        "Performance testing & capacity planning with JMeter",
        "API contract testing with Pact & Postman",
        "AI-assisted test generation & visual regression",
      ],
      metric: "90%",
      metricLabel: "Test automation coverage",
      link: "/services",
    },
    {
      title: "Consulting & Digital Strategy",
      desc: "Strategic technology consulting that bridges the gap between business vision and engineering execution. We assess, plan and roadmap digital transformations — from modernization audits to architecture reviews — with clear, measurable outcomes.",
      icon: "🎯",
      img: "/service_consulting.png",
      tags: ["Tech Audits", "Architecture Review", "Roadmapping", "CMMI L3"],
      imgSide: "right",
      highlights: [
        "Technology landscape assessment & gap analysis",
        "Enterprise architecture review & modernization roadmap",
        "Build vs. buy analysis with TCO modeling",
        "CMMI Level 3 process maturity & governance frameworks",
      ],
      metric: "20+",
      metricLabel: "Enterprise engagements",
      link: "/about",
    },
  ];

  const imgVariants = {
    hiddenLeft: { opacity: 0, x: -120, scale: 0.95 },
    hiddenRight: { opacity: 0, x: 120, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const textVariants = {
    hiddenLeft: { opacity: 0, x: -80 },
    hiddenRight: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, y: 12, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.35 + i * 0.06,
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const highlightVariants = {
    hidden: { opacity: 0, x: -16 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.25 + i * 0.08,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section className="core-services-section">
      <div className="core-services-header">
        <ScrollReveal direction="up" distance={20}>
          <div className="s-eyebrow">Enterprise Capabilities</div>
          <h2 className="s-title">Core Engineering Services</h2>
          <p className="s-sub" style={{ maxWidth: 700, margin: "0 auto" }}>
            End-to-end digital engineering — from strategy and consulting
            through application development, cloud transformation, AI
            integration, and managed services. We imagine, engineer, modernize,
            and manage.
          </p>
        </ScrollReveal>
      </div>

      <div className="services-cards-stack">
        {services.map((s, idx) => {
          const isImgLeft = s.imgSide === "left";

          const imageBlock = (
            <motion.div
              className="svc-card-img"
              style={{ backgroundImage: `url(${s.img})` }}
              initial={isImgLeft ? "hiddenLeft" : "hiddenRight"}
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={imgVariants}
            >
              <div className="svc-card-img-overlay" />
              {s.metric && (
                <div className="svc-card-metric-badge">
                  <span className="svc-metric-value">{s.metric}</span>
                  <span className="svc-metric-label">{s.metricLabel}</span>
                </div>
              )}
            </motion.div>
          );

          const textBlock = (
            <motion.div
              className="svc-card-content"
              initial={isImgLeft ? "hiddenRight" : "hiddenLeft"}
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={textVariants}
            >
              <h3 className="svc-card-title">
                <span className="svc-card-title-icon">{s.icon}</span>
                {s.title}
              </h3>
              <p className="svc-card-desc">{s.desc}</p>

              {s.highlights && (
                <ul className="svc-card-highlights">
                  {s.highlights.map((h, hi) => (
                    <motion.li
                      key={hi}
                      custom={hi}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      variants={highlightVariants}
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        className="svc-check-icon"
                      >
                        <path
                          d="M6 10l3 3 5-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {h}
                    </motion.li>
                  ))}
                </ul>
              )}

              <div className="svc-card-footer">
                <div className="svc-card-tags">
                  {s.tags.map((t, ti) => (
                    <motion.span
                      className="svc-tag"
                      key={t}
                      custom={ti}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      variants={tagVariants}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
                {/* {s.link && (
                  <Link to={s.link} className="svc-card-cta">
                    Learn more
                    <svg
                      viewBox="0 0 20 20"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M5 10h10M11 6l4 4-4 4" />
                    </svg>
                  </Link>
                )} */}
              </div>
            </motion.div>
          );

          return (
            <div
              className={`svc-card ${isImgLeft ? "img-left" : "img-right"}`}
              key={s.title}
            >
              <div className="svc-card-inner">
                {isImgLeft ? (
                  <>
                    {imageBlock}
                    {textBlock}
                  </>
                ) : (
                  <>
                    {textBlock}
                    {imageBlock}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ClientsBand() {
  const logos = [
    {
      name: "Kotak Mahindra Bank",
      spriteClass: "kotak",
    },
    {
      name: "JPMorgan Chase",
      spriteClass: "jpmorgan",
    },
    {
      name: "Lloyds Banking Group",
      spriteClass: "lloyds",
    },
    {
      name: "Verizon",
      spriteClass: "verizon",
    },
    {
      name: "CARS24",
      spriteClass: "cars24",
    },
    {
      name: "LegalDST",
      spriteClass: "legaldst",
    },
    {
      name: "Autonomo",
      spriteClass: "autonomo",
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
          {track.map(({ name, spriteClass }, i) => (
            <div className="c-logo" key={`${name}-${i}`}>
              <div className={`c-logo-mark brand-sprite ${spriteClass}`} />
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
      spriteClass: "cmmi",
    },
    {
      label: "AWS Cloud",
      spriteClass: "aws",
    },
    {
      label: "Microsoft Azure",
      spriteClass: "azure",
    },
    {
      label: "Google Cloud",
      spriteClass: "gcp",
    },
    {
      label: "Kubernetes",
      spriteClass: "kubernetes",
    },
    {
      label: "ISO 27001 Aligned",
      spriteClass: "iso",
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
        {badges.map(({ label, spriteClass }) => (
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
            <div className={`partner-badge-icon brand-sprite ${spriteClass}`} />
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
      img: "/service_rag_card.png",
      textTag: "RAG & LLM",
    },
    {
      icon: "⚡",
      title: "Agentic Automation",
      desc: "Multi-step AI agents for complex enterprise workflows.",
      link: "/ai-agentic",
      bgClass: "bg-card-agentic",
      img: "/service_agentic_card.png",
      textTag: "AGENTIC AI",
    },
    {
      icon: "📊",
      title: "ML & Data Platforms",
      desc: "Credit scoring, MLOps and real-time inference at scale.",
      link: "/ai-ml-platform",
      bgClass: "bg-card-ml",
      img: "/service_ml_card.png",
      textTag: "ML & DATA",
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
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="none"
          stroke="var(--orange)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
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
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="none"
          stroke="var(--orange)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
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
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="none"
          stroke="var(--orange)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
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
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="none"
          stroke="var(--orange)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
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
                  <span
                    key={j}
                    style={{ color: "var(--orange2)", fontSize: 13 }}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="testi-quote">{t.quote}</p>
              <div className="testi-author">
                <div className="testi-avatar" style={{ background: t.color }}>
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
    [
      "/services",
      "bg-link-services",
      "🏗️",
      "Services",
      "Seven service lines from app dev to AI & IoT.",
      "View services →",
    ],
    [
      "/industries",
      "bg-link-industries",
      "🏦",
      "Industries",
      "Deep expertise across BFSI, telecom, automotive and more.",
      "View industries →",
    ],
    [
      "/casestudies",
      "bg-link-cases",
      "📋",
      "Case Studies",
      "Documented projects with real clients and measurable outcomes.",
      "View case studies →",
    ],
    [
      "/about",
      "bg-link-about",
      "🎯",
      "About Us",
      "Your engineering partner — not just a vendor.",
      "About us →",
    ],
    [
      "/technology",
      "bg-link-tech",
      "⚙️",
      "Technology",
      "Java, React, K8s, DevOps/SRE and full-stack observability.",
      "View stack →",
    ],
    [
      "/devops-sre",
      "bg-link-devops",
      "☁️",
      "DevOps & SRE",
      "CI/CD, Kubernetes, SLOs and unified observability at scale.",
      "Platform engineering →",
    ],
    [
      "/engagement",
      "bg-link-engage",
      "🤝",
      "Engagement Models",
      "Fixed-scope, T&M, BOT, staff aug and managed services.",
      "How we work →",
    ],
    [
      "/ai-hub",
      "bg-link-ai",
      "🤖",
      "AI Hub",
      "LLM, RAG, agents, ML and computer vision solutions.",
      "Explore AI →",
    ],
    [
      "/contact",
      "bg-link-contact",
      "✉️",
      "Contact",
      "Start a conversation about your next project.",
      "Get in touch →",
    ],
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
