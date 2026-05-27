(function(){
  const LOGO_SRC = 'technoelevate_logo.png?v=5';
  const LOGO_ALT = 'TechnoElevate';
  const LOGO_MARK = '<img src="' + LOGO_SRC + '" alt="' + LOGO_ALT + '" class="f-brand-img" width="200" height="44">';

  const FOOTER = `
<footer>
  <div class="wrap">
    <div class="footer-grid">
      <div class="f-brand">
        <div class="f-brand-logo">
          ${LOGO_MARK}
        </div>
        <p>The product engineering studio within TestYantra Software Solutions. Enterprise AI, cloud-native software and outcome-obsessed delivery.</p>
        <div class="f-socials">
          <a href="https://www.linkedin.com/company/testyantra-software-solutions" class="f-soc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">in</a>
          <a href="https://x.com/testyantra" class="f-soc" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" title="X (Twitter)">X</a>
          <a href="https://github.com/testyantra" class="f-soc" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">gh</a>
          <a href="https://www.youtube.com/@TestYantra" class="f-soc" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube">yt</a>
        </div>
      </div>
      <div class="f-col"><h5>Services</h5><ul>
        <li><a href="services.html">All Services</a></li>
        <li><a href="devops-sre.html">DevOps, SRE &amp; Observability</a></li>
        <li><a href="ai-hub.html">AI Hub</a></li>
        <li><a href="ai-llm-rag.html">LLM &amp; RAG</a></li>
        <li><a href="engagement.html">Engagement Models</a></li>
      </ul></div>
      <div class="f-col"><h5>Industries</h5><ul>
        <li><a href="industries.html">All Industries</a></li>
        <li><a href="industry-bfsi.html">BFSI &amp; Fintech</a></li>
        <li><a href="industry-automotive.html">Automotive</a></li>
        <li><a href="industry-telecom.html">Telecom</a></li>
      </ul></div>
      <div class="f-col"><h5>Insights</h5><ul>
        <li><a href="insights.html">Articles</a></li>
        <li><a href="casestudies.html">Case Studies</a></li>
        <li><a href="whitepapers.html">Whitepapers</a></li>
        <li><a href="newsroom.html">Newsroom</a></li>
      </ul></div>
      <div class="f-col"><h5>Company</h5><ul>
        <li><a href="about.html">About Us</a></li>
        <li><a href="leadership.html">Leadership</a></li>
        <li><a href="locations.html">Locations</a></li>
        <li><a href="methodology.html">Methodology</a></li>
        <li><a href="security.html">Security</a></li>
        <li><a href="careers.html">Careers</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul></div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 TechnoElevate &nbsp;·&nbsp; A TestYantra Software Solutions Company</span>
      <span>Made with ♥ in Bengaluru &nbsp;·&nbsp; <a href="mailto:contactus@testyantra.com">contactus@testyantra.com</a></span>
    </div>
  </div>
</footer>`;

  function init(){
    const el = document.getElementById('site-footer');
    if(el) el.innerHTML = FOOTER;
    const obs = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('up');obs.unobserve(e.target);}}),{threshold:.12});
    document.querySelectorAll('.reveal').forEach(r=>obs.observe(r));
    document.getElementById('fBtn')?.addEventListener('click',function(){
      this.textContent='Message Sent ✓';this.style.background='#059669';
      setTimeout(()=>{this.textContent='Send Message';this.style.background='';},3500);
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init);
  else init();
})();
