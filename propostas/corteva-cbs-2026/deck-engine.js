/* Motor do deck CBS — SEM CLIQUE, SEM FLASH.
 * - Ao chegar em cada slide, revela TODO o conteudo de uma vez, COM a animacao.
 * - Sem flash: o conteudo fica escondido (html.deck-booting, definido no <head>)
 *   ate o motor assumir; o esconder e instantaneo (transition:none) e so a
 *   entrada e animada.
 * - Avancar (seta -> / clique) passa direto para o proximo slide.
 * - Imprimir/PDF: revela tudo instantaneamente.
 */
(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    var deck = document.querySelector('deck-stage');
    if (!deck) { document.documentElement.classList.remove('deck-booting'); return; }

    function seqEls(slide) {
      return Array.prototype.slice.call(slide.querySelectorAll('.seq'));
    }
    function counters(el) {
      var c = el.matches('[data-count-to]') ? [el] : [];
      return c.concat(Array.prototype.slice.call(el.querySelectorAll('[data-count-to]')));
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
      var dur = +el.dataset.countDur || 1100, start = null;
      function tick(t) {
        if (start === null) start = t;
        var p = Math.min(1, (t - start) / dur);
        var e = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(to * e, sep) + suffix;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = fmt(to, sep) + suffix;
      }
      requestAnimationFrame(tick);
    }

    // esconde instantaneo (sem animacao de saida -> sem flicker)
    function hideAll(slide) {
      var els = seqEls(slide);
      els.forEach(function (e) {
        e.style.transition = 'none';
        e.classList.remove('in');
        counters(e).forEach(function (c) { c._counted = false; });
      });
      void slide.offsetWidth; // forca reflow p/ o estado escondido valer antes de animar
    }
    // revela tudo (restaura a transicao do CSS -> a entrada anima)
    function revealAll(slide, instant) {
      seqEls(slide).forEach(function (e) {
        e.style.transition = instant ? 'none' : '';
        e.classList.add('in');
        counters(e).forEach(function (c) { runCount(c, instant); });
      });
    }

    function enter(slide, instant) {
      if (!slide) return;
      if (instant) { revealAll(slide, true); return; }
      hideAll(slide);
      // dois frames: garante que o "escondido" pintou antes de disparar a animacao
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { revealAll(slide, false); });
      });
    }

    function firstSection() {
      return Array.prototype.slice.call(deck.children)
        .filter(function (n) { return n.tagName === 'SECTION'; })[0] || null;
    }

    // troca de slide -> revela tudo do novo, com animacao
    deck.addEventListener('slidechange', function (ev) {
      enter(ev.detail.slide, false);
    });

    // estado inicial (sincrono): esconde por classe, libera o boot, depois anima
    var active = deck.querySelector('section[data-deck-active]') || firstSection();
    if (active) hideAll(active);
    document.documentElement.classList.remove('deck-booting');
    if (active) {
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { revealAll(active, false); });
      });
    }

    // clique no corpo do slide avanca (exceto em links/botoes)
    Array.prototype.slice.call(deck.children).forEach(function (node) {
      if (node.tagName !== 'SECTION') return;
      node.addEventListener('click', function (e) {
        if (e.target.closest && e.target.closest('a,button,input,textarea,select,[data-interactive]')) return;
        e.preventDefault();
        deck.next();
      });
    });

    // imprimir / PDF: tudo visivel
    window.addEventListener('beforeprint', function () {
      document.documentElement.classList.remove('deck-booting');
      Array.prototype.slice.call(deck.children).forEach(function (n) {
        if (n.tagName === 'SECTION') revealAll(n, true);
      });
    });
  });
})();
