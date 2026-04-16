/* NewScale Consulting — Global JS */

// ── Sticky nav ──
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('s', scrollY > 50);
  }, { passive: true });
}

// ── Reveal on scroll ──
const ro = new IntersectionObserver(entries => {
  entries.forEach(x => {
    if (x.isIntersecting) {
      x.target.classList.add('in');
      ro.unobserve(x.target);
    }
  });
}, { threshold: .08, rootMargin: '0px 0px -28px 0px' });
document.querySelectorAll('.rv').forEach(el => ro.observe(el));

// ── Mobile menu ──
const menuBtn = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const mob = document.getElementById('mn');
if (menuBtn && mob) menuBtn.addEventListener('click', () => mob.classList.add('open'));
if (menuClose && mob) menuClose.addEventListener('click', () => mob.classList.remove('open'));
if (mob) mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mob.classList.remove('open')));

// ── Cases tabs ──
window.sc = function(id, btn) {
  document.querySelectorAll('.cpanel').forEach(p => p.classList.remove('on'));
  document.querySelectorAll('.ctab').forEach(b => b.classList.remove('on'));
  const panel = document.getElementById('case-' + id);
  if (panel) panel.classList.add('on');
  btn.classList.add('on');
};

// ── Bio toggle ──
window.toggleBio = function(btn) {
  const fb = btn.previousElementSibling;
  const short = fb.querySelector('.fb-short');
  const full = fb.querySelector('.fb-full');
  if (full.style.display === 'inline') {
    full.style.display = 'none';
    short.style.display = 'inline';
    btn.textContent = 'Ver mais \u2193';
  } else {
    full.style.display = 'inline';
    short.style.display = 'none';
    btn.textContent = 'Ver menos \u2191';
  }
};

// ── Active nav link (highlight current page) ──
const currentPath = window.location.pathname;
document.querySelectorAll('.nlinks a, .mob a').forEach(link => {
  const href = link.getAttribute('href');
  if (href && currentPath.endsWith(href.replace(/^\//, ''))) {
    link.classList.add('active');
  }
});
