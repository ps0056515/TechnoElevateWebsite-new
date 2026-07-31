import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Announcement from "../components/Announcement";
import {
  LEADERS,
  LEADERSHIP_GROUPS,
  LEADERSHIP_PRINCIPLES,
  OPERATING_MODEL,
} from "../data/leadership";
import { useDocumentTitle } from "../hooks/useSiteEffects";

function LeaderCard({ leader, featured = false }) {
  return (
    <article
      className={`leader-card-v2${featured ? " leader-card-v2--featured" : ""}`}
    >
      <div className="leader-photo">{leader.initials}</div>
      <div className="leader-card-v2-body">
        <h4>{leader.name}</h4>
        <div className="role">{leader.title}</div>
        {leader.subtitle ? (
          <div className="leader-subtitle">{leader.subtitle}</div>
        ) : null}
        <p>{leader.bio}</p>
        {leader.focus?.length ? (
          <ul className="leader-focus">
            {leader.focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
        {leader.linkedIn ? (
          <a
            href={leader.linkedIn}
            className="leader-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn profile →
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default function LeadershipPage() {
  useDocumentTitle("Leadership");

  const executiveLeader = LEADERS.find((l) => l.id === "pradeep");
  const otherLeaders = LEADERS.filter((l) => l.id !== "pradeep");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <Announcement
        pill="TestYantra group"
        text="Innovexce leadership sits within TestYantra Software Solutions - CMMI Level 3 certified since 2003."
        linkHref="/about"
        linkText="About Innovexce →"
      />

      <section className="page-hero bg-theme bg-about">
        <div className="page-hero-inner">
          <div className="page-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/about">About</Link>
            <span>/</span>
            <span>Leadership</span>
          </div>
          <h1>
            Leaders who ship
            <br />
            <em>with accountability.</em>
          </h1>
          <p className="page-hero-lead">
            Our leadership team blends hands-on engineering backgrounds with
            program and commercial ownership - the same people who set
            architecture standards also stand in client forums when it matters.
          </p>
          <div className="leadership-hero-stats">
            <div className="leadership-hero-stat">
              <div className="num">4</div>
              <div className="lbl">Functional leaders</div>
            </div>
            <div className="leadership-hero-stat">
              <div className="num">6</div>
              <div className="lbl">Global delivery regions</div>
            </div>
            <div className="leadership-hero-stat">
              <div className="num">CMMI 3</div>
              <div className="lbl">Group certification</div>
            </div>
            <div className="leadership-hero-stat">
              <div className="num">2003</div>
              <div className="lbl">TestYantra founded</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section leadership-intro">
        <div className="wrap">
          <div className="leadership-intro-grid reveal">
            <div>
              <div className="s-eyebrow">Our mandate</div>
              <h2 className="s-title">
                Product engineering leadership
                <br />
                you can put in front of clients.
              </h2>
            </div>
            <p className="s-sub leadership-intro-copy">
              Innovexce is the product engineering studio within TestYantra.
              Leadership here is structured around four pillars - practice &amp;
              product, technology, delivery, and client growth - so every
              engagement has a clear owner from pursuit through production
              support. We organise the way global consultancies do: visible
              executives, named practice accountability, and transparent
              operating rhythms.
            </p>
          </div>
        </div>
      </section>

      {executiveLeader ? (
        <section className="section section-tight-top">
          <div className="wrap">
            <div className="s-eyebrow">Executive leadership</div>
            <h2 className="s-title" style={{ marginBottom: 28 }}>
              Head of Innovexce
            </h2>
            <div className="reveal">
              <LeaderCard leader={executiveLeader} featured />
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="wrap">
          <div className="s-eyebrow">Leadership team</div>
          <h2 className="s-title">Practice, delivery &amp; growth</h2>
          <p className="s-sub" style={{ maxWidth: 640, marginBottom: 40 }}>
            Each leader owns a distinct lane - with shared standards for
            architecture, quality, and client communication across the group.
          </p>

          {LEADERSHIP_GROUPS.filter((g) => g.id !== "executive").map(
            (group) => {
              const members = otherLeaders.filter((l) => l.group === group.id);
              if (!members.length) return null;
              return (
                <div key={group.id} className="leadership-group reveal">
                  <div className="leadership-group-head">
                    <span className="leadership-group-eyebrow">
                      {group.eyebrow}
                    </span>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                  <div className="leadership-group-grid">
                    {members.map((leader) => (
                      <LeaderCard key={leader.id} leader={leader} />
                    ))}
                  </div>
                </div>
              );
            },
          )}
        </div>
      </section>

      <section className="section leadership-principles-section">
        <div className="wrap">
          <div className="s-eyebrow">How we lead</div>
          <h2 className="s-title">Principles behind every engagement</h2>
          <div className="leadership-principles-grid reveal">
            {LEADERSHIP_PRINCIPLES.map((p, i) => (
              <div
                key={p.title}
                className={`culture-card${i ? ` reveal-delay-${Math.min(i, 3)}` : ""}`}
              >
                <div className="culture-icon">{p.icon}</div>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="group-block reveal">
            <div>
              <div className="s-eyebrow" style={{ color: "var(--orange2)" }}>
                Operating model
              </div>
              <h3>From pursuit to production - one accountable chain</h3>
              <p>
                Inspired by how global technology services firms govern
                programs, we use a simple four-stage rhythm so clients always
                know who owns architecture, delivery, and commercial health.
              </p>
            </div>
            <div className="leadership-operating-steps">
              {OPERATING_MODEL.map((item) => (
                <div key={item.step} className="leadership-op-step">
                  <span className="leadership-op-num">{item.step}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="stats-bar">
        <div className="stats-inner">
          <div className="stat-item reveal">
            <div className="sn">20+</div>
            <div className="sl">Documented engagements</div>
            <div className="sd">Enterprise product &amp; platform work</div>
          </div>
          <div className="stat-item reveal reveal-delay-1">
            <div className="sn">12+</div>
            <div className="sl">Industries served</div>
            <div className="sd">BFSI · Telecom · Auto · EdTech</div>
          </div>
          <div className="stat-item reveal reveal-delay-2">
            <div className="sn">5</div>
            <div className="sl">Engagement models</div>
            <div className="sd">
              Fixed · T&amp;M · BOT · Staff aug · Managed
            </div>
          </div>
          <div className="stat-item reveal reveal-delay-3">
            <div className="sn">500+</div>
            <div className="sl">Group engineers</div>
            <div className="sd">TestYantra delivery backbone</div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="leadership-cta reveal">
            <div>
              <h2 className="s-title" style={{ marginBottom: 12 }}>
                Work with our leadership team
              </h2>
              <p className="s-sub" style={{ margin: 0, maxWidth: 480 }}>
                Discuss your program with the leaders who will own architecture,
                delivery, and account outcomes - not a handoff to a faceless
                PMO.
              </p>
            </div>
            <div className="leadership-cta-actions">
              <Link to="/contact" className="cta-band-primary">
                Talk to us →
              </Link>
              <Link
                to="/careers"
                className="cta-outline"
                style={{ padding: "14px 28px", borderRadius: 8 }}
              >
                Careers at Innovexce →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
