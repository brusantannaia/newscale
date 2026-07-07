/* ============================================================
   NewScale — Premium Dark: JS compartilhado (menu, reveal, form)
============================================================ */
(function () {
  'use strict';

  /* ---------- MENU MOBILE (painel + backdrop) ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    var backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    document.body.appendChild(backdrop);

    var setOpen = function (open) {
      nav.classList.toggle('open', open);
      backdrop.classList.toggle('on', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.documentElement.style.overflow = open ? 'hidden' : '';
    };
    toggle.setAttribute('aria-expanded', 'false');
    toggle.addEventListener('click', function () { setOpen(!nav.classList.contains('open')); });
    backdrop.addEventListener('click', function () { setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
    nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setOpen(false); }); });
  }

  /* ---------- REVEAL ON SCROLL (threshold 0 + rede de segurança) ---------- */
  var revealAll = function () {
    document.querySelectorAll('.rv:not(.in)').forEach(function (el) { el.classList.add('in'); });
  };
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      var batch = entries.filter(function (e) { return e.isIntersecting; });
      batch.forEach(function (e, i) {
        /* stagger de 70ms entre elementos que entram juntos */
        (function (el, delay) {
          setTimeout(function () { el.classList.add('in'); }, delay);
        })(e.target, i * 70);
        io.unobserve(e.target);
      });
    }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.rv').forEach(function (el) { io.observe(el); });
  } else {
    revealAll();
  }
  /* rede de segurança: nada pode ficar invisível */
  setTimeout(revealAll, 2500);

  /* ---------- CONTADOR ANIMADO ----------
     uso: <span data-count="42" data-prefix="+" data-suffix="%">+42%</span>
     o texto final já vem no HTML (fallback sem JS); a animação só roda 1x ao entrar na tela */
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length && !reduced && 'IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        cio.unobserve(e.target);
        var el = e.target;
        var target = parseFloat(String(el.getAttribute('data-count')).replace(',', '.'));
        if (isNaN(target)) return;
        var decimals = (String(el.getAttribute('data-count')).split(/[.,]/)[1] || '').length;
        var prefix = el.getAttribute('data-prefix') || '';
        var suffix = el.getAttribute('data-suffix') || '';
        var dur = 1100, t0 = null;
        function frame(ts) {
          if (!t0) t0 = ts;
          var p = Math.min((ts - t0) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          var val = (target * eased).toFixed(decimals).replace('.', ',');
          el.textContent = prefix + val + suffix;
          if (p < 1) requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { cio.observe(el); });
  }

  /* ---------- FORMULÁRIO DE DIAGNÓSTICO (multi-etapas + captura dupla) ---------- */
  var SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx90IdrA_L6n3jVdoYBinBPxPfWq0h6Iua1MrI8gQ7-RgBXhU1rOqF9dM2n7mLdAeMW/exec';

  document.querySelectorAll('form[data-diag]').forEach(function (form) {
    var steps = form.querySelectorAll('.diag-step');
    var dots = form.querySelectorAll('.diag-dot');
    var current = 0;

    var show = function (i) {
      current = i;
      steps.forEach(function (s, k) { s.classList.toggle('on', k === i); });
      dots.forEach(function (d, k) { d.classList.toggle('on', k <= i); });
    };
    if (steps.length) show(0);

    form.querySelectorAll('[data-next]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var panel = steps[current];
        var ok = true;
        panel.querySelectorAll('input,select,textarea').forEach(function (f) {
          if (f.required && !f.value.trim()) { f.classList.add('err'); ok = false; }
          else { f.classList.remove('err'); }
        });
        if (ok && current < steps.length - 1) show(current + 1);
      });
    });
    form.querySelectorAll('[data-prev]').forEach(function (btn) {
      btn.addEventListener('click', function () { if (current > 0) show(current - 1); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var data = {};
      new FormData(form).forEach(function (v, k) { data[k] = v; });

      var invalid = false;
      form.querySelectorAll('input,select,textarea').forEach(function (f) {
        if (f.required && !f.value.trim()) { f.classList.add('err'); invalid = true; }
      });
      if (invalid) return;

      if (btn) { btn.disabled = true; btn.textContent = 'Enviando...'; }

      var payload = {
        list: 'newscale-diagnostico',
        timestamp: new Date().toISOString(),
        source: location.href,
        nome: data.nome || '',
        empresa: data.empresa || '',
        whatsapp: data.whatsapp || '',
        email: data.email || '',
        gargalo: data.gargalo || ''
      };

      /* 1) planilha (Apps Script) */
      var toSheet = fetch(SCRIPT_URL, {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(function () {});

      /* 2) Netlify Forms (backup com todos os campos) */
      var enc = Object.keys(data).map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
      });
      enc.push('form-name=' + encodeURIComponent(form.getAttribute('name') || 'diagnostico'));
      var toNetlify = fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: enc.join('&')
      }).catch(function () {});

      Promise.all([toSheet, toNetlify]).then(function () {
        if (typeof gtag === 'function') gtag('event', 'lead_capture', { list: 'newscale-diagnostico' });
        form.querySelectorAll('.diag-step,.diag-dots,.diag-head').forEach(function (el) { el.style.display = 'none'; });
        var done = form.querySelector('.diag-done');
        if (done) done.classList.add('show');
      });
    });
  });
})();
