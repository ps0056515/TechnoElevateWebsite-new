import { Link } from "react-router-dom";
import { LOGO_ALT, LOGO_SRC } from "../config/logo";
import { SOCIAL_LINKS } from "../config/social";

const getSocialIcon = (id) => {
  switch (id) {
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.2 1.85v4" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      );
    default:
      return null;
  }
};

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="f-brand">
            <div className="f-brand-logo">
              <img
                src={LOGO_SRC}
                alt={LOGO_ALT}
                className="f-brand-img"
                width="280"
                height="52"
              />
            </div>
            <p>
              The product engineering studio within TestYantra Software
              Solutions. Enterprise AI, cloud-native software and
              outcome-obsessed delivery.
            </p>
            <div className="f-socials">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  className="f-soc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                >
                  {getSocialIcon(s.id)}
                </a>
              ))}
            </div>
          </div>
          <div className="f-col">
            <h5>Services</h5>
            <ul>
              <li>
                <Link to="/services">All Services</Link>
              </li>
              <li>
                <Link to="/devops-sre">DevOps, SRE &amp; Observability</Link>
              </li>
              <li>
                <Link to="/ai-hub">AI Hub</Link>
              </li>
              <li>
                <Link to="/ai-llm-rag">LLM &amp; RAG</Link>
              </li>
              <li>
                <Link to="/engagement">Engagement Models</Link>
              </li>
            </ul>
          </div>
          <div className="f-col">
            <h5>Industries</h5>
            <ul>
              <li>
                <Link to="/industries">All Industries</Link>
              </li>
              <li>
                <Link to="/industry-bfsi">BFSI &amp; Fintech</Link>
              </li>
              <li>
                <Link to="/industry-automotive">Automotive</Link>
              </li>
              <li>
                <Link to="/industry-telecom">Telecom</Link>
              </li>
            </ul>
          </div>
          <div className="f-col">
            <h5>Insights</h5>
            <ul>
              <li>
                <Link to="/insights">Articles</Link>
              </li>
              <li>
                <Link to="/casestudies">Case Studies</Link>
              </li>
              <li>
                <Link to="/whitepapers">Whitepapers</Link>
              </li>
              <li>
                <Link to="/newsroom">Newsroom</Link>
              </li>
            </ul>
          </div>
          <div className="f-col">
            <h5>Company</h5>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/leadership">Leadership</Link>
              </li>
              <li>
                <Link to="/locations">Locations</Link>
              </li>
              <li>
                <Link to="/methodology">Methodology</Link>
              </li>
              <li>
                <Link to="/security">Security</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            &copy; 2026 TechnoElevate &nbsp;·&nbsp; A TestYantra Software
            Solutions Company
          </span>
          <span>
            <a href="mailto:contactus@testyantra.com">
              contactus@testyantra.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
