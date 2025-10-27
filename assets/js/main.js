(function(){
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
  const YEAR = new Date().getFullYear();
  const ls = window.localStorage;

  // Year
  const yearEl = $('#year'); if(yearEl) yearEl.textContent = YEAR;

  // Language
  const defaultLang = 'en';
  let lang = ls.getItem('lang') || defaultLang;
  const toggleBtn = $('#langToggle');
  function setLang(next){ lang = next; ls.setItem('lang', lang); I18N.applyI18n(lang); updatePlaceholders(); if(window.PAGE === 'products') initProducts(); if(window.PAGE === 'home') initHomepageProducts(); }
  function updatePlaceholders(){ if($('#search')) $('#search').setAttribute('placeholder', I18N.strings[lang].search_placeholder); }
  if(toggleBtn){ toggleBtn.addEventListener('click', ()=> setLang(lang==='en'?'mr':'en')); }
  I18N.applyI18n(lang);
  updatePlaceholders();

  // Routing helpers
  function param(name){ return new URLSearchParams(location.search).get(name); }
  function toSlug(s){ return s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''); }

  // Products - using embedded data (no server needed!)
  function loadProducts(){
    const items = window.PRODUCTS_DATA || [];
    return Promise.resolve(items.map(p => ({...p, slug: p.slug || toSlug(p.name)})));
  }

  function renderCard(p){
    const priceText = I18N.strings[lang].call_for_price;
    const moreText = I18N.strings[lang].view_details;
    const name = lang==='mr' && p.name_mr ? p.name_mr : p.name;
    const img = (p.images && p.images[0]) || 'assets/placeholder.svg';
    
    // Show key specs on card
    const specsPreview = p.specs ? Object.entries(p.specs).slice(0,2).map(([k,v])=>`<small style="color:#6c757d">${k}: ${v}</small>`).join('<br>') : '';
    
    return `
      <article class="card">
        <img src="${img}" alt="${name}" loading="lazy">
        <div class="content">
          <span class="badge">${p.category}</span>
          <strong>${name}</strong>
          ${specsPreview ? `<div style="margin:8px 0">${specsPreview}</div>` : ''}
          <div style="margin-top:auto;padding-top:12px">
            <a class="btn small" href="product.html?id=${encodeURIComponent(p.slug)}" style="width:100%;text-align:center">${moreText}</a>
          </div>
        </div>
      </article>`;
  }

  function renderChips(categories){
    const wrap = $('#categories'); if(!wrap) return;
    wrap.innerHTML = '';
    const all = document.createElement('button');
    all.className = 'active'; all.innerHTML = 'All Products <span style="opacity:.7">(' + (window.allProductsCount || 0) + ')</span>'; all.dataset.cat = '';
    wrap.appendChild(all);
    categories.forEach(c=>{ 
      const count = window.categoryCounts ? window.categoryCounts[c] || 0 : 0;
      const b=document.createElement('button'); 
      b.innerHTML = c + ' <span style="opacity:.7">(' + count + ')</span>'; 
      b.dataset.cat=c; 
      wrap.appendChild(b); 
    });
  }

  function attachChipFilter(items){
    const wrap = $('#categories'); const grid = $('#grid'); const input = $('#search'); const countEl = $('#productsCount');
    if(!wrap || !grid) return;
    
    function apply(){
      const q = (input?.value || '').toLowerCase();
      const active = wrap.querySelector('button.active');
      const cat = active?.dataset.cat || '';
      const filtered = items.filter(p=>{
        const inCat = !cat || p.category === cat;
        const text = `${p.name} ${p.category} ${(p.keywords||[]).join(' ')}`.toLowerCase();
        return inCat && (!q || text.includes(q));
      });
      
      // Update count
      if(countEl){
        countEl.textContent = `Showing ${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;
      }
      
      // Always show as grid (no category grouping on products page)
      grid.innerHTML = filtered.length > 0 ? filtered.map(renderCard).join('') : '<p class="loading">No products found.</p>';
    }
    
    wrap.addEventListener('click', e=>{
      const b = e.target.closest('button'); if(!b) return;
      $$('button', wrap).forEach(x=>x.classList.remove('active')); b.classList.add('active');
      apply();
    });
    if(input){ input.addEventListener('input', apply); }
    apply();
  }

  async function initProducts(){
    const grid = $('#grid'); if(!grid) return;
    const items = await loadProducts();
    const cats = [...new Set(items.map(p=>p.category))].filter(Boolean).sort();
    
    // Store counts globally
    window.allProductsCount = items.length;
    window.categoryCounts = {};
    items.forEach(p=>{
      if(p.category){
        window.categoryCounts[p.category] = (window.categoryCounts[p.category] || 0) + 1;
      }
    });
    
    renderChips(cats);
    attachChipFilter(items);
  }

  function renderSpecs(specs){
    if(!specs || Object.keys(specs).length === 0) return '';
    const title = I18N.strings[lang].specs;
    return `
      <div class="specs">
        <h3>${title}</h3>
        <ul class="list">
          ${Object.entries(specs).map(([k,v])=>`<li><strong>${k}</strong> ${v}</li>`).join('')}
        </ul>
      </div>`;
  }

  async function initProduct(){
    const container = $('#product'); if(!container) return;
    const id = param('id');
    const items = await loadProducts();
    const p = items.find(x=>x.slug===id) || items[0];
    if(!p){ container.innerHTML = '<p>No product found.</p>'; return; }
    const name = lang==='mr' && p.name_mr ? p.name_mr : p.name;
    const img = (p.images && p.images[0]) || 'assets/placeholder.svg';
    const cTitle = I18N.strings[lang].category;
    const priceText = I18N.strings[lang].call_for_price;
    const moreInfo = I18N.strings[lang].more_info;
    
    container.innerHTML = `
      <div class="product">
        <div>
          <img src="${img}" alt="${name}">
        </div>
        <div>
          <h1>${name}</h1>
          <p style="font-size:1.1rem;margin:16px 0"><span class="badge">${p.category}</span></p>
          ${renderSpecs(p.specs)}
          <div style="margin-top:24px;display:flex;gap:12px;flex-wrap:wrap">
            <a class="btn" href="https://wa.me/912333214210?text=Hi, I'm interested in ${encodeURIComponent(name)}" target="_blank" rel="noopener">📞 ${priceText}</a>
            <a class="btn outline" href="products.html">← Back to Products</a>
          </div>
        </div>
      </div>`;
  }

  // Homepage products showcase
  async function initHomepageProducts(){
    const showcase = $('#productsShowcase');
    if(!showcase) return;
    
    const items = await loadProducts();
    // Show first 6 products
    const featured = items.slice(0, 6);
    
    if(featured.length === 0){
      showcase.innerHTML = '<p class="loading">No products available.</p>';
      return;
    }
    
    showcase.innerHTML = `<div class="grid">${featured.map(renderCard).join('')}</div>`;
  }

  // Page router
  if(window.PAGE === 'products') initProducts();
  if(window.PAGE === 'product') initProduct();
  
  // Homepage
  if(window.PAGE === 'home' || !window.PAGE) initHomepageProducts();
})();
