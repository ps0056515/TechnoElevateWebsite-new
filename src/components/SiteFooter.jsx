import { Link } from 'react-router-dom';

const LOGO_SRC = '/technoelevate_logo.png?v=3';

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="f-brand">
            <div className="f-brand-logo">
              <img src={LOGO_SRC} alt="TechnoElevate" className="f-brand-img" width="200" height="44" />
            </div>
            <p>The product engineering studio within TestYantra Software Solutions. Enterprise AI, cloud-native software and outcome-obsessed delivery.</p>
            <div className="f-socials">
              <a href="#" className="f-soc">in</a>
              <a href="#" className="f-soc">X</a>
              <a href="#" className="f-soc">gh</a>
              <a href="#" className="f-soc">yt</a>
            </div>
          </div>
          <div className="f-col">
            <h5>Services</h5>
            <ul>
              <li><Link to="/services">All Services</Link></li>
              <li><Link to="/devops-sre">DevOps, SRE &amp; Observability</Link></li>
              <li><Link to="/ai-hub">AI Hub</Link></li>
              <li><Link to="/ai-llm-rag">LLM &amp; RAG</Link></li>
              <li><Link to="/engagement">Engagement Models</Link></li>
            </ul>
          </div>
          <div className="f-col">
            <h5>Industries</h5>
            <ul>
              <li><Link to="/industries">All Industries</Link></li>
              <li><Link to="/industry-bfsi">BFSI &amp; Fintech</Link></li>
              <li><Link to="/industry-automotive">Automotive</Link></li>
              <li><Link to="/industry-telecom">Telecom</Link></li>
            </ul>
          </div>
          <div className="f-col">
            <h5>Insights</h5>
            <ul>
              <li><Link to="/insights">Articles</Link></li>
              <li><Link to="/casestudies">Case Studies</Link></li>
              <li><Link to="/whitepapers">Whitepapers</Link></li>
              <li><Link to="/newsroom">Newsroom</Link></li>
            </ul>
          </div>
          <div className="f-col">
            <h5>Company</h5>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/leadership">Leadership</Link></li>
              <li><Link to="/locations">Locations</Link></li>
              <li><Link to="/methodology">Methodology</Link></li>
              <li><Link to="/security">Security</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 TechnoElevate &nbsp;·&nbsp; A TestYantra Software Solutions Company</span>
          <span>Made with ♥ in Bengaluru &nbsp;·&nbsp; <a href="mailto:contactus@testyantra.com">contactus@testyantra.com</a></span>
        </div>
      </div>
    </footer>
  );
}
