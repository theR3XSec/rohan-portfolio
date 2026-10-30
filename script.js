(() => {
  'use strict';
  const root = document.documentElement;
  const menuButton = document.querySelector('#menu-button');
  const nav = document.querySelector('#primary-nav');
  const themeButton = document.querySelector('#theme-button');
  const copyButton = document.querySelector('#copy-email');
  const copyLabel = document.querySelector('#copy-label');
  const navLinks = [...document.querySelectorAll('.primary-nav a')];
  const email = 'ronkardile123@gmail.com';

  const setTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    themeButton?.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
    try { localStorage.setItem('rk-portfolio-theme', theme); } catch (_) { /* Storage may be unavailable. */ }
  };
  try {
    const savedTheme = localStorage.getItem('rk-portfolio-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') setTheme(savedTheme);
  } catch (_) { /* The site works without storage. */ }
  themeButton?.addEventListener('click', () => setTheme(root.getAttribute('data-theme') === 'light' ? 'dark' : 'light'));

  const closeMenu = () => {
    nav?.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open menu');
  };
  menuButton?.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    menuButton.setAttribute('aria-label', expanded ? 'Open menu' : 'Close menu');
    nav?.classList.toggle('is-open', !expanded);
  });
  navLinks.forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', event => {
    if (nav?.classList.contains('is-open') && !nav.contains(event.target) && !menuButton?.contains(event.target)) closeMenu();
  });

  if ('IntersectionObserver' in window) {
    root.classList.add('js-reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    }, { rootMargin: '0px 0px 25px 0px', threshold: .04 });
    document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
      });
    }, { rootMargin: '-25% 0px -66% 0px', threshold: 0 });
    document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));
  }

  const fallbackCopy = (text) => {
    const el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'fixed';
    el.style.opacity = '0';
    document.body.appendChild(el);
    el.select();
    const succeeded = document.execCommand('copy');
    el.remove();
    return succeeded;
  };
  copyButton?.addEventListener('click', async () => {
    let copied = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
        copied = true;
      } else copied = fallbackCopy(email);
    } catch (_) {
      try { copied = fallbackCopy(email); } catch (error) { copied = false; }
    }
    copyLabel.textContent = copied ? 'Email copied!' : email;
    copyButton.setAttribute('aria-label', copied ? 'Email address copied' : `Email: ${email}`);
    window.setTimeout(() => { copyLabel.textContent = 'Copy email'; copyButton.setAttribute('aria-label', 'Copy email address'); }, 2200);
  });

  const year = document.querySelector('#current-year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
