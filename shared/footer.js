(function(){
  const LOGO_SRC = 'IE_Dark.png';
  const LOGO_ALT = 'Innovexce';
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
          <a href="https://www.linkedin.com/company/testyantra-software-solutions" class="f-soc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="https://x.com/testyantra" class="f-soc" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" title="X (Twitter)">
            <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="https://github.com/testyantra" class="f-soc" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.2 1.85v4" />
            </svg>
          </a>
          <a href="https://www.youtube.com/@TestYantra" class="f-soc" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
          </a>
        </div>
      </div>
      <div class="f-col"><h5>Services</h5><ul>
        <li><a href="services.html">All Services</a></li>
        <li><a href="devops-sre.html">DevOps, SRE &amp; Observability</a></li>
        <li><a href="ai-hub.html">AI Hub</a></li>
        <li><a href="ai-llm-rag.html">LLM &amp; RAG</a></li>
        <li><a href="engagement.html">Engagement Models</a></li>
      </ul></div>
      <div class="f-col"><h5>Products</h5><ul>
        <li><a href="products.html">All Products</a></li>
        <li><a href="products.html">IVRAI-BOT</a></li>
        <li><a href="products.html">AdmitIQ</a></li>
        <li><a href="products.html">InterviewIQ</a></li>
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
      <span>&copy; 2026 Innovexce &nbsp;·&nbsp; A TestYantra Software Solutions Company</span>
      <span><a href="mailto:contactus@testyantra.com">contactus@testyantra.com</a></span>
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
