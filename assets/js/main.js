// ===== Theme toggle =====
(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  root.setAttribute('data-theme', saved || (prefersDark ? 'dark' : 'light'));

  const toggle = document.getElementById('themeToggle');
  toggle.addEventListener('click', function () {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();

// ===== Mobile menu =====
(function () {
  const burger = document.getElementById('burger');
  const links = document.getElementById('navLinks');
  burger.addEventListener('click', () => links.classList.toggle('is-open'));
  links.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => links.classList.remove('is-open'))
  );
})();

// ===== Navbar shadow on scroll =====
(function () {
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

// ===== Publication filters =====
(function () {
  const filters = document.getElementById('pubFilters');
  if (!filters) return;
  const pubs = Array.from(document.querySelectorAll('#pubList .pub'));
  filters.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter');
    if (!btn) return;
    filters.querySelectorAll('.filter').forEach((f) => f.classList.remove('is-active'));
    btn.classList.add('is-active');
    const f = btn.dataset.filter;
    pubs.forEach((p) => {
      p.classList.toggle('is-hidden', f !== 'all' && p.dataset.year !== f);
    });
  });
})();

// ===== Reveal on scroll =====
(function () {
  const els = document.querySelectorAll('.section, .stats');
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('in-view'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );
  els.forEach((el) => io.observe(el));
})();

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();
