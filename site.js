(() => {
  const header = document.querySelector('.site-header');
  if (header) {
    const path = window.location.pathname.replace(/\/+$/, '') || '/';

    const navItems = [
      {href:'/custom-swimming-pools/pool-business-visibility/', label:'Pool businesses'},
      {href:'/custom-swimming-pools/', label:'Research'},
      {href:'/case-studies/hardinge-road-l19/', label:'Proof'},
      {href:'/about/', label:'About'}
    ];

    const active = (href) => {
      const h = href.replace(/\/+$/, '') || '/';
      if (h === '/custom-swimming-pools') {
        return path === h || (path.startsWith('/custom-swimming-pools/') && path !== '/custom-swimming-pools/pool-business-visibility');
      }
      return path === h;
    };

    header.innerHTML = `
      <div class="wrap nav">
        <a class="brand-lockup" href="/" aria-label="KRONATRIX Home Services home">
          <img src="/kronatrix-k-logo.webp" width="42" height="42" alt="">
          <span class="brand-copy"><strong>KRONATRIX</strong><small>HOME SERVICES</small></span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav">Menu</button>
        <nav id="primary-nav" class="nav-links" aria-label="Primary">
          ${navItems.map(item => `<a href="${item.href}"${active(item.href) ? ' aria-current="page"' : ''}>${item.label}</a>`).join('')}
          <a class="nav-cta" href="mailto:homeservices.kronatrix@gmail.com?subject=Home%20Services%20visibility%20review">Visibility review</a>
        </nav>
      </div>`;

    const toggle = header.querySelector('.nav-toggle');
    const nav = header.querySelector('.nav-links');

    if (toggle && nav) {
      const close = () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
      };

      toggle.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
      });

      nav.addEventListener('click', e => {
        if (e.target.closest('a')) close();
      });

      document.addEventListener('keydown', e => {
        if (e.key === 'Escape') close();
      });

      document.addEventListener('click', e => {
        if (!header.contains(e.target)) close();
      });
    }
  }

  const HOME_SERVICES_EMAIL = 'homeservices.kronatrix@gmail.com';
  const OLD_EMAIL = 'kronatrix.ai@gmail.com';
  document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href.includes(OLD_EMAIL)) link.setAttribute('href', href.replace(OLD_EMAIL, HOME_SERVICES_EMAIL));
    if ((link.textContent || '').includes(OLD_EMAIL)) link.textContent = link.textContent.replace(OLD_EMAIL, HOME_SERVICES_EMAIL);
  });
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    if (node.nodeValue && node.nodeValue.includes(OLD_EMAIL)) node.nodeValue = node.nodeValue.replaceAll(OLD_EMAIL, HOME_SERVICES_EMAIL);
  });

})();