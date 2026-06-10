/* Step-reveal engine for the CBS deck.
 * - Elements with class "seq" and data-step="N" reveal progressively.
 * - Step 0 shows on slide arrival; forward (→ / click) reveals next step.
 * - Max data-step per slide is 2 (≤2 clicks). On the last step, forward
 *   falls through to deck-stage so it advances to the next slide.
 * - Going backward lands on the previous slide fully revealed.
 * - On reveal: [data-count-to] counts up, .bar fills, .draw lines grow.
 */
(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    var deck = document.querySelector('deck-stage');
    if (!deck) return;

    var FWD = { 'ArrowRight': 1, 'PageDown': 1, ' ': 1, 'Spacebar': 1 };

    function seqEls(slide) {
      return Array.prototype.slice.call(slide.querySelectorAll('.seq[data-step]'));
    }
    function maxStep(slide) {
      var m = 0;
      seqEls(slide).forEach(function (e) { m = Math.max(m, +e.dataset.step || 0); });
      return m;
    }

    function fmt(n, sep) {
      var s = String(Math.round(n));
      return sep ? s.replace(/\B(?=(\d{3})+(?!\d))/g, sep) : s;
    }

    function runCount(el, instant) {
      if (el._counted) return;
      el._counted = true;
      var to = parseFloat(el.dataset.countTo);
      var suffix = el.dataset.countSuffix || '';
      var sep = el.dataset.countSep || '';
      if (instant) { el.textContent = fmt(to, sep) + suffix; return; }
      var dur = +el.dataset.countDur || 1100;
      var start = null;
      function tick(t) {
        if (start === null) start = t;
        var p = Math.min(1, (t - start) / dur);
        var e = 1 - Math.pow(1 - p, 3); // easeOutCubic
        el.textContent = fmt(to * e, sep) + suffix;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = fmt(to, sep) + suffix;
      }
      requestAnimationFrame(tick);
    }

    function reveal(el, instant) {
      el.classList.add('in');
      // counters inside (or self)
      var counters = el.matches('[data-count-to]') ? [el] : [];
      counters = counters.concat(Array.prototype.slice.call(el.querySelectorAll('[data-count-to]')));
      counters.forEach(function (c) { runCount(c, instant); });
    }

    function applyStep(slide, step, instant) {
      slide._step = step;
      seqEls(slide).forEach(function (e) {
        var s = +e.dataset.step || 0;
        if (s <= step) reveal(e, instant);
        else e.classList.remove('in');
      });
    }

    var cur = null;
    function firstSection() {
      return Array.prototype.slice.call(deck.children)
        .filter(function (n) { return n.tagName === 'SECTION'; })[0] || null;
    }
    function currentSlide() {
      return cur || deck.querySelector('section[data-deck-active]') || firstSection();
    }

    deck.addEventListener('slidechange', function (ev) {
      var d = ev.detail;
      cur = d.slide;
      var back = d.previousIndex > d.index && d.previousIndex !== -1;
      // reset counters that belong to this slide so they can replay if revisited
      if (!back) {
        seqEls(cur).forEach(function (e) {
          var cs = e.matches('[data-count-to]') ? [e] : [];
          cs.concat(Array.prototype.slice.call(e.querySelectorAll('[data-count-to]')))
            .forEach(function (c) { c._counted = false; });
        });
      }
      applyStep(cur, back ? maxStep(cur) : 0, back);
    });

    // Initialize the slide that's already active. Runs SYNCHRONOUSLY (not in
    // rAF) because rAF callbacks are paused while the tab is hidden, and the
    // component's init slidechange may have fired during upgrade before this
    // listener attached.
    function initActive() {
      var active = deck.querySelector('section[data-deck-active]') || firstSection();
      if (active && active._step == null) { cur = active; applyStep(active, 0, false); }
      else if (active) { cur = active; }
    }
    initActive();
    setTimeout(initActive, 0);

    // Forward keys: consume to step within slide; let deck-stage advance when done.
    window.addEventListener('keydown', function (e) {
      var t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (!FWD[e.key]) return;
      var slide = currentSlide();
      if (slide) {
        var st = slide._step == null ? 0 : slide._step;
        if (st < maxStep(slide)) {
          applyStep(slide, st + 1, false);
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      }
    }, true);

    // Click on slide body: step or advance. Works desktop + touch; we
    // preventDefault so deck-stage's touch _onTap (which checks
    // defaultPrevented) doesn't double-advance.
    Array.prototype.slice.call(deck.children).forEach(function (node) {
      if (node.tagName !== 'SECTION') return;
      node.addEventListener('click', function (e) {
        if (e.target.closest && e.target.closest('a,button,input,textarea,select,[data-interactive]')) return;
        e.preventDefault();
        var st = node._step == null ? 0 : node._step;
        if (st < maxStep(node)) applyStep(node, st + 1, false);
        else deck.next();
      });
    });

    // Print / PDF: reveal everything.
    window.addEventListener('beforeprint', function () {
      Array.prototype.slice.call(deck.children).forEach(function (node) {
        if (node.tagName === 'SECTION') applyStep(node, maxStep(node), true);
      });
    });
  });
})();
