(function(){
  const page = (p) => p;
  const LOGO_SRC = 'technoelevate_logo.png?v=5';
  const LOGO_ALT = 'TechnoElevate';

  const NAV_HTML = `
<div class="nav-wrap" id="navWrap">
  <div class="nav-inner">
    <a href="${page('index.html')}" class="nav-logo" id="navLogoLink"></a>
    <ul class="nav-menu" id="navMenu">
      <li class="nav-item has-mega" data-mega="services">
        <button class="nav-trigger" aria-expanded="false">Services <span class="chev">▾</span></button>
        <div class="mega-panel">
          <div class="mega-inner">
            <a href="${page('services.html')}" class="mega-all">All Services <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            <div class="mega-rule"></div>
            <div class="mega-cols">
              <div>
                <a href="${page('ai-hub.html')}">TechnoElevate.AI</a>
                <a href="${page('ai-llm-rag.html')}">LLM &amp; RAG Engineering</a>
                <a href="${page('ai-agentic.html')}">Agentic Business Automation</a>
                <a href="${page('ai-ml-platform.html')}">ML &amp; Data Platforms</a>
                <a href="${page('devops-sre.html')}">DevOps, SRE &amp; Observability</a>
                <a href="${page('services.html')}">Application Development</a>
                <a href="${page('services.html')}">Cloud &amp; Infrastructure</a>
                <a href="${page('services.html')}">Consulting</a>
              </div>
              <div>
                <a href="${page('services.html')}">Digital Transformation</a>
                <a href="${page('ai-computer-vision.html')}">Computer Vision &amp; Edge AI</a>
                <a href="${page('services.html')}">Migration &amp; Modernisation</a>
                <a href="${page('services.html')}">ERP &amp; Platform Integration</a>
                <a href="${page('services.html')}">IoT &amp; Edge Computing</a>
                <a href="${page('engagement.html')}">Engagement Models</a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="nav-item has-mega" data-mega="industries">
        <button class="nav-trigger" aria-expanded="false">Industries <span class="chev">▾</span></button>
        <div class="mega-panel">
          <div class="mega-inner">
            <a href="${page('industries.html')}" class="mega-all">All Industries <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            <div class="mega-rule"></div>
            <div class="mega-cols cols-3">
              <div>
                <a href="${page('industry-bfsi.html')}">BFSI &amp; Fintech</a>
                <a href="${page('industries.html')}">Insurance</a>
                <a href="${page('industries.html')}">Healthcare</a>
                <a href="${page('industry-telecom.html')}">Telecom</a>
              </div>
              <div>
                <a href="${page('industry-automotive.html')}">Automotive</a>
                <a href="${page('industries.html')}">Manufacturing</a>
                <a href="${page('industries.html')}">Retail &amp; E-commerce</a>
                <a href="${page('industries.html')}">Energy &amp; Logistics</a>
              </div>
              <div>
                <a href="${page('industries.html')}">Public Sector</a>
                <a href="${page('industries.html')}">LegalTech</a>
                <a href="${page('industries.html')}">Enterprise SaaS</a>
                <a href="${page('industries.html')}">AgriTech &amp; EdTech</a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="nav-item has-mega" data-mega="ai">
        <button class="nav-trigger" aria-expanded="false">AI Platforms &amp; Solutions <span class="chev">▾</span></button>
        <div class="mega-panel">
          <div class="mega-inner">
            <a href="${page('ai-hub.html')}" class="mega-all">All AI Solutions <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            <div class="mega-rule"></div>
            <div class="mega-cols">
              <div>
                <a href="${page('ai-llm-rag.html')}" class="highlight">Generative AI &amp; RAG</a>
                <a href="${page('ai-agentic.html')}">Agentic AI Workflows</a>
                <a href="${page('ai-ml-platform.html')}">ML Scoring &amp; Underwriting</a>
                <a href="${page('ai-computer-vision.html')}">Computer Vision</a>
              </div>
              <div>
                <a href="${page('ai-hub.html')}">Enterprise AI Strategy</a>
                <a href="${page('ai-llm-rag.html')}">LLM Fine-Tuning &amp; Guardrails</a>
                <a href="${page('ai-ml-platform.html')}">MLOps &amp; Model Governance</a>
                <a href="${page('ai-agentic.html')}">AI Copilots &amp; Assistants</a>
              </div>
            </div>
            <div class="mega-featured">
              <span class="mega-featured-badge">Featured</span>
              <p>LegalDST — AI-powered legal research with verified case-law RAG. Built end-to-end by TechnoElevate.</p>
            </div>
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a href="${page('ai-hub.html')}" class="nav-link-item">AI Hub</a>
      </li>
      <li class="nav-item has-mega" data-mega="insights">
        <button class="nav-trigger" aria-expanded="false">Insights <span class="chev">▾</span></button>
        <div class="mega-panel">
          <div class="mega-inner">
            <a href="${page('insights.html')}" class="mega-all">All Insights <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            <div class="mega-rule"></div>
            <div class="mega-cols">
              <div>
                <a href="${page('insights.html')}">Articles &amp; Blogs</a>
                <a href="${page('whitepapers.html')}">Whitepapers &amp; Guides</a>
                <a href="${page('newsroom.html')}">Newsroom</a>
              </div>
              <div>
                <a href="${page('casestudies.html')}">Case Studies</a>
                <a href="${page('technology.html')}">Technology Stack</a>
                <a href="${page('ai-hub.html')}">AI Success Stories</a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="nav-item has-mega" data-mega="about">
        <button class="nav-trigger" aria-expanded="false">About <span class="chev">▾</span></button>
        <div class="mega-panel">
          <div class="mega-inner">
            <a href="${page('about.html')}" class="mega-all">About TechnoElevate <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            <div class="mega-rule"></div>
            <div class="mega-cols">
              <div>
                <a href="${page('about.html')}">Who We Are</a>
                <a href="${page('leadership.html')}">Leadership</a>
                <a href="${page('locations.html')}">Global Locations</a>
                <a href="${page('methodology.html')}">Delivery Methodology</a>
              </div>
              <div>
                <a href="${page('engagement.html')}">How We Work</a>
                <a href="${page('technology.html')}">Technology</a>
                <a href="${page('security.html')}">Security &amp; Compliance</a>
                <a href="${page('careers.html')}">Careers</a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a href="${page('careers.html')}" class="nav-link-item">Careers</a>
      </li>
    </ul>
    <div class="nav-right">
      <button class="nav-icon-btn" id="navSearchBtn" type="button" aria-label="Search site" title="Search (Ctrl+K)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></button>
      <a href="${page('contact.html')}" class="nav-btn" id="navContactBtn">Contact</a>
      <div class="nav-lang-wrap" id="navLangWrap">
        <button class="nav-lang" id="navLangBtn" type="button" aria-label="Select language" aria-expanded="false" aria-haspopup="listbox"><span id="navLangCode">EN</span> <span class="chev">▾</span></button>
        <div class="lang-dropdown" id="langDropdown" role="listbox" aria-hidden="true"></div>
      </div>
      <button class="nav-burger" id="navBurger" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
  </div>
</div>
<div class="mega-backdrop" id="megaBackdrop"></div>
<div class="search-overlay" id="searchOverlay" aria-hidden="true">
  <div class="search-panel" role="dialog" aria-modal="true" aria-label="Site search">
    <div class="search-head">
      <svg class="search-head-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
      <input type="search" id="searchInput" class="search-input" placeholder="Search services, industries, case studies, insights…" autocomplete="off" aria-label="Search">
      <span class="search-kbd">Esc</span>
      <button type="button" class="search-close" id="searchClose" aria-label="Close search">&times;</button>
    </div>
    <div class="search-body" id="searchBody">
      <div class="search-section-label">Quick links</div>
      <div class="search-results" id="searchResults"></div>
    </div>
  </div>
</div>
<div class="nav-mobile" id="navMobile">
  <div class="mob-section"><h6>Services</h6>
    <a href="${page('ai-hub.html')}">TechnoElevate.AI</a>
    <a href="${page('ai-llm-rag.html')}">LLM &amp; RAG Engineering</a>
    <a href="${page('devops-sre.html')}">DevOps &amp; SRE</a>
    <a href="${page('services.html')}">All Services</a>
  </div>
  <div class="mob-section"><h6>Insights</h6>
    <a href="${page('insights.html')}">Articles</a>
    <a href="${page('casestudies.html')}">Case Studies</a>
    <a href="${page('whitepapers.html')}">Whitepapers</a>
  </div>
  <div class="mob-section"><h6>Company</h6>
    <a href="${page('about.html')}">About</a>
    <a href="${page('leadership.html')}">Leadership</a>
    <a href="${page('careers.html')}">Careers</a>
    <a href="${page('contact.html')}">Contact</a>
  </div>
  <div class="mob-section"><h6>Language</h6>
    <div class="mob-lang-list" id="mobLangList"></div>
  </div>
</div>`;

  const LANGUAGES = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
    { code: 'fr', label: 'French', native: 'Français' },
    { code: 'de', label: 'German', native: 'Deutsch' },
    { code: 'es', label: 'Spanish', native: 'Español' },
    { code: 'ja', label: 'Japanese', native: '日本語' },
    { code: 'pt', label: 'Portuguese', native: 'Português' },
    { code: 'zh', label: 'Chinese (Simplified)', native: '中文' },
    { code: 'ar', label: 'Arabic', native: 'العربية' },
    { code: 'ko', label: 'Korean', native: '한국어' },
    { code: 'it', label: 'Italian', native: 'Italiano' },
    { code: 'nl', label: 'Dutch', native: 'Nederlands' }
  ];

  const SEARCH_INDEX = [
    { title: 'Home', href: 'index.html', cat: 'Pages', keys: 'homepage technoelevate ai engineering' },
    { title: 'Contact Us', href: 'contact.html', cat: 'Pages', keys: 'contact email phone get in touch sales' },
    { title: 'About TechnoElevate', href: 'about.html', cat: 'Pages', keys: 'about company testyantra partner' },
    { title: 'Services', href: 'services.html', cat: 'Services', keys: 'application development cloud devops consulting' },
    { title: 'DevOps, SRE & Observability', href: 'devops-sre.html', cat: 'Services', keys: 'devops sre observability cicd kubernetes prometheus grafana' },
    { title: 'Engagement Models', href: 'engagement.html', cat: 'Services', keys: 'fixed scope t&m bot staff augmentation managed' },
    { title: 'AI Hub', href: 'ai-hub.html', cat: 'AI', keys: 'ai artificial intelligence llm ml rag' },
    { title: 'LLM & RAG Engineering', href: 'ai-llm-rag.html', cat: 'AI', keys: 'generative ai rag llm legaldst' },
    { title: 'Agentic AI Workflows', href: 'ai-agentic.html', cat: 'AI', keys: 'agentic automation agents copilot' },
    { title: 'ML & Data Platforms', href: 'ai-ml-platform.html', cat: 'AI', keys: 'machine learning mlops scoring underwriting' },
    { title: 'Computer Vision & Edge AI', href: 'ai-computer-vision.html', cat: 'AI', keys: 'computer vision retail autonomo edge' },
    { title: 'Industries', href: 'industries.html', cat: 'Industries', keys: 'bfsi telecom automotive healthcare manufacturing' },
    { title: 'BFSI & Fintech', href: 'industry-bfsi.html', cat: 'Industries', keys: 'banking kotak jpmorgan lloyds cars24 fintech' },
    { title: 'Automotive', href: 'industry-automotive.html', cat: 'Industries', keys: 'tekion dms dealership oem automotive' },
    { title: 'Telecom', href: 'industry-telecom.html', cat: 'Industries', keys: 'verizon att wireless telecom bss oss' },
    { title: 'Case Studies', href: 'casestudies.html', cat: 'Insights', keys: 'case studies projects clients outcomes' },
    { title: 'Kotak — Service Request Automation', href: 'case-study.html?id=kotak-sra', cat: 'Case Studies', keys: 'kotak banking automation branch sra' },
    { title: 'LegalDST — AI Legal Research', href: 'case-study.html?id=legaldst', cat: 'Case Studies', keys: 'legaldst legal ai rag case law' },
    { title: 'CARS24 — Credit Underwriting ML', href: 'case-study.html?id=cars24-credit', cat: 'Case Studies', keys: 'cars24 fintech credit scoring ml' },
    { title: 'Verizon MyBiz Platform', href: 'case-study.html?id=verizon-mybiz', cat: 'Case Studies', keys: 'verizon telecom smb microservices sre' },
    { title: 'Tekion Cloud DMS', href: 'case-study.html?id=tekion-dms', cat: 'Case Studies', keys: 'tekion automotive dms cloud kubernetes' },
    { title: 'Insights & Articles', href: 'insights.html', cat: 'Insights', keys: 'blog articles engineering insights' },
    { title: 'Whitepapers & Guides', href: 'whitepapers.html', cat: 'Insights', keys: 'whitepapers guides pdf enterprise ai migration' },
    { title: 'Newsroom', href: 'newsroom.html', cat: 'Insights', keys: 'news announcements press' },
    { title: 'Technology Stack', href: 'technology.html', cat: 'Pages', keys: 'java react aws kubernetes stack' },
    { title: 'Delivery Methodology', href: 'methodology.html', cat: 'Company', keys: 'methodology agile delivery process' },
    { title: 'Leadership', href: 'leadership.html', cat: 'Company', keys: 'leadership team executives' },
    { title: 'Global Locations', href: 'locations.html', cat: 'Company', keys: 'locations bengaluru offices global' },
    { title: 'Security & Compliance', href: 'security.html', cat: 'Company', keys: 'security compliance iso owasp gdpr' },
    { title: 'Careers', href: 'careers.html', cat: 'Company', keys: 'careers jobs hiring devops engineer' },
    { title: 'SRE & Observability Article', href: 'insight-devops-sre.html', cat: 'Insights', keys: 'sre observability microservices prometheus' },
    { title: 'LegalDST RAG Article', href: 'insight-legaldst-rag.html', cat: 'Insights', keys: 'legaldst rag legal ai article' }
  ];

  const LANG_KEY = 'te-lang';
  const LANG_NOTICE_KEY = 'te-lang-notice-dismissed';
  const navUi = { closeSearch: () => {}, closeLang: () => {} };

  function initNav(){
    const mount = document.getElementById('site-nav');
    if(!mount) return;
    mount.innerHTML = NAV_HTML;

    const logoLink = document.getElementById('navLogoLink');
    if(logoLink){
      logoLink.innerHTML = '<img src="' + page(LOGO_SRC) + '" alt="' + LOGO_ALT + '" class="nav-logo-img" width="220" height="48">';
    }

    const navWrap = document.getElementById('navWrap');
    const backdrop = document.getElementById('megaBackdrop');
    const items = navWrap.querySelectorAll('.nav-item.has-mega');
    let openItem = null;

    function closeMega(){
      if(openItem){
        openItem.classList.remove('open');
        openItem.querySelector('.nav-trigger')?.setAttribute('aria-expanded','false');
        openItem = null;
      }
      backdrop.classList.remove('show');
      navWrap.classList.remove('mega-open');
    }

    function openMega(item){
      if(openItem === item){ closeMega(); return; }
      closeMega();
      item.classList.add('open');
      item.querySelector('.nav-trigger')?.setAttribute('aria-expanded','true');
      openItem = item;
      backdrop.classList.add('show');
      navWrap.classList.add('mega-open');
    }

    items.forEach(item=>{
      item.querySelector('.nav-trigger').addEventListener('click', e=>{
        e.stopPropagation();
        openMega(item);
      });
    });

    navWrap.querySelectorAll('.mega-panel a, .nav-link-item').forEach(a=>{
      a.addEventListener('click', closeMega);
    });

    backdrop.addEventListener('click', ()=>{ closeMega(); navUi.closeSearch(); navUi.closeLang(); });
    document.addEventListener('keydown', e=>{
      if(e.key === 'Escape'){ closeMega(); navUi.closeSearch(); navUi.closeLang(); }
      if((e.ctrlKey || e.metaKey) && e.key === 'k'){ e.preventDefault(); navUi.openSearch?.(); }
    });

    window.addEventListener('scroll', ()=>{
      navWrap.classList.toggle('scrolled', window.scrollY > 20);
      if(window.scrollY > 100){ closeMega(); navUi.closeLang(); }
    });

    document.getElementById('navBurger')?.addEventListener('click', ()=>{
      document.getElementById('navMobile').classList.toggle('open');
    });

    const path = location.pathname.split('/').pop() || 'index.html';
    navWrap.querySelectorAll('.mega-cols a, .nav-link-item').forEach(a=>{
      if(a.getAttribute('href') === path) a.classList.add('highlight');
    });
    if(path === 'contact.html'){
      document.getElementById('navContactBtn')?.classList.add('active');
    }

    initSearch(closeMega);
    initLang(closeMega);
  }

  function initSearch(closeMega){
    const overlay = document.getElementById('searchOverlay');
    const input = document.getElementById('searchInput');
    const results = document.getElementById('searchResults');
    if(!overlay || !input || !results) return;

    function renderSearch(q){
      const query = q.trim().toLowerCase();
      const items = query
        ? SEARCH_INDEX.filter(item=>{
            const hay = (item.title + ' ' + item.cat + ' ' + item.keys).toLowerCase();
            return hay.includes(query);
          })
        : SEARCH_INDEX.filter(item => ['Pages', 'Services', 'AI', 'Insights'].includes(item.cat)).slice(0, 8);

      if(!items.length){
        results.innerHTML = '<div class="search-empty">No results for “' + esc(q) + '”. Try “AI”, “DevOps”, or “Contact”.</div>';
        return;
      }

      const groups = {};
      items.forEach(item=>{
        if(!groups[item.cat]) groups[item.cat] = [];
        groups[item.cat].push(item);
      });

      results.innerHTML = Object.keys(groups).map(cat =>
        '<div class="search-group"><div class="search-group-label">' + cat + '</div>' +
        groups[cat].map(item =>
          '<a href="' + page(item.href) + '" class="search-result" data-search-link>' +
          '<span class="search-result-title">' + highlightMatch(item.title, query) + '</span>' +
          '<span class="search-result-cat">' + item.cat + '</span></a>'
        ).join('') + '</div>'
      ).join('');

      results.querySelectorAll('[data-search-link]').forEach(a=>{
        a.addEventListener('click', closeSearch);
      });
    }

    function openSearch(){
      closeMega?.();
      navUi.closeLang();
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.classList.add('search-open');
      input.value = '';
      renderSearch('');
      setTimeout(()=> input.focus(), 50);
    }

    function closeSearch(){
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('search-open');
    }

    document.getElementById('navSearchBtn')?.addEventListener('click', openSearch);
    document.getElementById('searchClose')?.addEventListener('click', closeSearch);
    overlay.addEventListener('click', e=>{ if(e.target === overlay) closeSearch(); });
    input.addEventListener('input', ()=> renderSearch(input.value));

    input.addEventListener('keydown', e=>{
      const links = [...results.querySelectorAll('.search-result')];
      const active = results.querySelector('.search-result.focused');
      let idx = links.indexOf(active);
      if(e.key === 'ArrowDown'){
        e.preventDefault();
        if(active) active.classList.remove('focused');
        idx = idx < links.length - 1 ? idx + 1 : 0;
        links[idx]?.classList.add('focused');
        links[idx]?.scrollIntoView({ block: 'nearest' });
      } else if(e.key === 'ArrowUp'){
        e.preventDefault();
        if(active) active.classList.remove('focused');
        idx = idx > 0 ? idx - 1 : links.length - 1;
        links[idx]?.classList.add('focused');
        links[idx]?.scrollIntoView({ block: 'nearest' });
      } else if(e.key === 'Enter'){
        const target = active || links[0];
        if(target){ window.location.href = target.getAttribute('href'); }
      }
    });

    window.openSiteSearch = openSearch;
    navUi.closeSearch = closeSearch;
    navUi.openSearch = openSearch;
  }

  function initLang(closeMega){
    const wrap = document.getElementById('navLangWrap');
    const btn = document.getElementById('navLangBtn');
    const dropdown = document.getElementById('langDropdown');
    const mobList = document.getElementById('mobLangList');
    if(!btn || !dropdown) return;

    dropdown.innerHTML = LANGUAGES.map(lang =>
      '<button type="button" class="lang-option" role="option" data-lang="' + lang.code + '">' +
      '<span class="lang-option-code">' + lang.code.toUpperCase() + '</span>' +
      '<span class="lang-option-label">' + lang.native + '</span>' +
      (lang.code === 'en' ? '<span class="lang-option-badge">Full site</span>' : '') +
      '</button>'
    ).join('');

    if(mobList){
      mobList.innerHTML = LANGUAGES.map(lang =>
        '<button type="button" class="mob-lang-btn" data-lang="' + lang.code + '">' +
        lang.native + ' <span>(' + lang.code.toUpperCase() + ')</span></button>'
      ).join('');
    }

    function setLanguage(code, closeMenu){
      const lang = LANGUAGES.find(l => l.code === code) || LANGUAGES[0];
      localStorage.setItem(LANG_KEY, lang.code);
      document.documentElement.lang = lang.code;
      document.getElementById('navLangCode').textContent = lang.code.toUpperCase();
      dropdown.querySelectorAll('.lang-option').forEach(opt=>{
        opt.classList.toggle('active', opt.dataset.lang === lang.code);
      });
      mobList?.querySelectorAll('.mob-lang-btn').forEach(opt=>{
        opt.classList.toggle('active', opt.dataset.lang === lang.code);
      });
      updateLanguageNotice(lang);
      if(closeMenu) closeLang();
    }

    function openLang(){
      closeMega?.();
      navUi.closeSearch();
      wrap.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      dropdown.setAttribute('aria-hidden', 'false');
    }

    function closeLang(){
      wrap?.classList.remove('open');
      btn?.setAttribute('aria-expanded', 'false');
      dropdown?.setAttribute('aria-hidden', 'true');
    }

    btn.addEventListener('click', e=>{
      e.stopPropagation();
      wrap.classList.contains('open') ? closeLang() : openLang();
    });

    dropdown.querySelectorAll('.lang-option').forEach(opt=>{
      opt.addEventListener('click', ()=> setLanguage(opt.dataset.lang, true));
    });

    mobList?.querySelectorAll('.mob-lang-btn').forEach(opt=>{
      opt.addEventListener('click', ()=> setLanguage(opt.dataset.lang, false));
    });

    document.addEventListener('click', e=>{
      if(!wrap?.contains(e.target)) closeLang();
    });

    window.setSiteLanguage = setLanguage;
    navUi.closeLang = closeLang;

    const saved = localStorage.getItem(LANG_KEY) || 'en';
    setLanguage(saved, false);
  }

  function updateLanguageNotice(lang){
    let bar = document.getElementById('langNotice');
    if(lang.code === 'en'){
      bar?.remove();
      return;
    }
    if(localStorage.getItem(LANG_NOTICE_KEY) === lang.code) return;

    if(!bar){
      bar = document.createElement('div');
      bar.id = 'langNotice';
      bar.className = 'lang-notice';
      document.body.prepend(bar);
    }
    bar.innerHTML =
      '<span>Site content is currently available in <strong>English</strong>. Selected language: <strong>' + esc(lang.native) + '</strong>. ' +
      '<a href="' + page('contact.html') + '">Contact us</a> for regional language support.</span>' +
      '<button type="button" class="lang-notice-close" aria-label="Dismiss">&times;</button>';
    bar.querySelector('.lang-notice-close')?.addEventListener('click', ()=>{
      localStorage.setItem(LANG_NOTICE_KEY, lang.code);
      bar.remove();
    });
  }

  function esc(str){
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
  }

  function highlightMatch(text, query){
    if(!query) return esc(text);
    const idx = text.toLowerCase().indexOf(query.toLowerCase());
    if(idx < 0) return esc(text);
    return esc(text.slice(0, idx)) + '<mark>' + esc(text.slice(idx, idx + query.length)) + '</mark>' + esc(text.slice(idx + query.length));
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }
})();
