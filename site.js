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
    if (node.nodeValue && node.nodeValue.includes(OLD_EMAIL)) {
      node.nodeValue = node.nodeValue.replaceAll(OLD_EMAIL, HOME_SERVICES_EMAIL);
    }
  });

  const GA_MEASUREMENT_ID = 'G-HVE7XRLZEP';
  const ANALYTICS_CHOICE_KEY = 'kronatrix_home_services_analytics_choice';
  let analyticsLoaded = false;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };

  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });
  window.gtag('set', 'ads_data_redaction', true);

  const loadAnalytics = () => {
    if (analyticsLoaded) return;
    analyticsLoaded = true;

    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
    document.head.appendChild(script);

    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      send_page_view: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });
  };

  const setAnalyticsChoice = (choice) => {
    try { localStorage.setItem(ANALYTICS_CHOICE_KEY, choice); } catch (_) {}
    if (choice === 'granted') {
      loadAnalytics();
    } else {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      });
    }
  };

  const getAnalyticsChoice = () => {
    try { return localStorage.getItem(ANALYTICS_CHOICE_KEY); }
    catch (_) { return null; }
  };

  const removeAnalyticsPanel = () => {
    const panel = document.getElementById('analytics-consent-panel');
    if (panel) panel.remove();
  };

  const showAnalyticsPanel = () => {
    removeAnalyticsPanel();

    const panel = document.createElement('section');
    panel.id = 'analytics-consent-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-modal', 'false');
    panel.setAttribute('aria-labelledby', 'analytics-consent-title');
    panel.style.cssText = 'position:fixed;z-index:9998;left:16px;right:16px;bottom:16px;max-width:760px;margin:auto;padding:18px 20px;background:#07111f;color:#fff;border:1px solid rgba(54,217,255,.35);border-radius:18px;box-shadow:0 20px 60px rgba(0,0,0,.32);font-family:inherit';

    panel.innerHTML = `
      <div id="analytics-consent-title" style="font-weight:900;font-size:1rem;margin-bottom:5px">Analytics choice</div>
      <p style="margin:0;color:#c8d7e7;font-size:.9rem;line-height:1.5">KRONATRIX Home Services uses Google Analytics only after you allow it, to understand page use and improve the website. Advertising storage and personalisation remain disabled.</p>
      <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:14px">
        <button type="button" data-analytics-choice="granted" style="border:1px solid #fff;background:#fff;color:#071226;padding:10px 15px;border-radius:999px;font:inherit;font-weight:850;cursor:pointer">Allow analytics</button>
        <button type="button" data-analytics-choice="denied" style="border:1px solid #6f8198;background:transparent;color:#fff;padding:10px 15px;border-radius:999px;font:inherit;font-weight:850;cursor:pointer">Decline</button>
        <a href="/privacy/" style="align-self:center;color:#bceeff;font-weight:750">Privacy</a>
      </div>`;

    panel.addEventListener('click', (event) => {
      const button = event.target.closest('[data-analytics-choice]');
      if (!button) return;
      setAnalyticsChoice(button.dataset.analyticsChoice);
      removeAnalyticsPanel();
    });

    document.body.appendChild(panel);
  };

  const addAnalyticsSettingsControl = () => {
    if (document.getElementById('analytics-settings-control')) return;
    const footer = document.querySelector('.footer');
    if (!footer) return;

    const button = document.createElement('button');
    button.id = 'analytics-settings-control';
    button.type = 'button';
    button.textContent = 'Analytics settings';
    button.style.cssText = 'display:block;margin:18px auto 0;border:0;background:transparent;color:#bceeff;text-decoration:underline;text-underline-offset:.18em;font:inherit;font-size:.86rem;cursor:pointer';
    button.addEventListener('click', showAnalyticsPanel);
    footer.appendChild(button);
  };

  const existingChoice = getAnalyticsChoice();
  if (existingChoice === 'granted') loadAnalytics();
  if (existingChoice !== 'granted' && existingChoice !== 'denied') showAnalyticsPanel();
  addAnalyticsSettingsControl();

  document.addEventListener('click', (event) => {
    if (!analyticsLoaded) return;

    const link = event.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href') || '';
    const eventNames = [];

    if (href.startsWith(`mailto:${HOME_SERVICES_EMAIL}`)) {
      eventNames.push('home_services_email_click');
    }

    if (link.classList.contains('nav-cta') || href.toLowerCase().includes('visibility%20review')) {
      eventNames.push('visibility_review_click');
    }

    if (href.includes('/custom-swimming-pools/pool-business-visibility/')) {
      eventNames.push('pool_business_visibility_click');
    }

    if (href.startsWith('https://hardinge-road-l19.github.io/')) {
      eventNames.push('proof_live_site_click');
    }

    if (!eventNames.length) return;

    const modifiedClick = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    const opensNewTab = (link.getAttribute('target') || '').toLowerCase() === '_blank';
    const shouldDelayNavigation = !modifiedClick && !opensNewTab;

    let completed = 0;
    let navigated = false;

    const continueNavigation = () => {
      if (!shouldDelayNavigation || navigated) return;
      navigated = true;
      window.location.href = link.href;
    };

    if (shouldDelayNavigation) {
      event.preventDefault();
      window.setTimeout(continueNavigation, 900);
    }

    eventNames.forEach((name) => {
      window.gtag('event', name, {
        page_path: window.location.pathname,
        send_to: GA_MEASUREMENT_ID,
        event_timeout: 800,
        event_callback: () => {
          completed += 1;
          if (completed >= eventNames.length) continueNavigation();
        }
      });
    });
  });

})();