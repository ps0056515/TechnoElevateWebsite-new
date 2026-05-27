(function(){
  function getParam(name){
    return new URLSearchParams(location.search).get(name);
  }
  function renderCasePage(){
    const id=getParam('id');
    const mount=document.getElementById('casePageContent');
    if(!mount||typeof CASES==='undefined')return;
    const c=CASES.find(x=>x.id===id);
    if(!c){
      mount.innerHTML='<div class="wrap" style="padding:80px var(--pad);"><h1>Case study not found</h1><p><a href="casestudies.html">Back to case studies</a></p></div>';
      return;
    }
    document.title=c.client+' — Case Study | TechnoElevate';
    const imgMap={BFSI:'photo-1556761175-5973dc0f32e7',Automotive:'photo-1494976388532-6f2ed50298ed',Telecom:'photo-1516321318823-687547d67d65','Retail & E-com':'photo-1556742049-0cfed4f6a45d',LegalTech:'photo-1620712943348-d21466881688',Manufacturing:'photo-1581091226825-a6a2a5aee158'};
    const photo=imgMap[c.industryNorm]||'photo-1552664730-d307ca884978';
    mount.innerHTML=`
<section class="cs-full-hero" style="background-image:linear-gradient(135deg,rgba(13,17,23,.62),rgba(20,30,46,.55)),url('https://images.unsplash.com/${photo}?auto=format&fit=crop&w=1920&q=80');background-size:cover;">
  <div class="cs-full-inner">
    <div class="page-breadcrumb"><a href="index.html">Home</a><span>/</span><a href="casestudies.html">Case Studies</a><span>/</span><span>${c.client}</span></div>
    <div class="m-ind" style="font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:var(--orange2);font-weight:700;margin-bottom:10px;">${c.industryNorm}</div>
    <h1 style="font-size:clamp(28px,4vw,48px);font-weight:800;color:#fff;line-height:1.1;margin-bottom:8px;">${c.client}</h1>
    <p style="font-size:18px;color:rgba(255,255,255,.55);max-width:680px;margin-bottom:24px;">${c.project}</p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;">
      ${c.services.map(s=>'<span class="page-tag">'+s+'</span>').join('')}
      <span class="page-tag">${c.engagement}</span>
      <span class="page-tag">${c.regions.join(' · ')}</span>
    </div>
  </div>
</section>
<div class="cs-full-body">
  <h2>The Challenge</h2><p>${c.problem}</p>
  <h2>Our Solution</h2><p>${c.solution}</p>
  <h2>Outcomes Delivered</h2>
  <div class="cs-outcomes-full">${c.outcomes.map(o=>'<div class="cs-out-full">'+o+'</div>').join('')}</div>
  <h2>Technology Stack</h2>
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:12px;">${c.tech.map(t=>'<span class="m-pill">'+t+'</span>').join('')}</div>
  <div style="margin-top:48px;padding-top:32px;border-top:1px solid var(--rule);display:flex;gap:16px;flex-wrap:wrap;">
    <a href="contact.html" class="cta-band-primary" style="display:inline-block;">Discuss a Similar Project</a>
    <a href="casestudies.html" class="btn-more">All Case Studies →</a>
  </div>
</div>`;
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',renderCasePage);
  else renderCasePage();
})();
