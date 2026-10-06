(function () {
  document.documentElement.classList.add('js');

  // ---------- Reference (stavke su u HTML-u, ovde se samo filtriraju) ----------
  var CATS = [["sve", "Sve"], ["toplovodi", "Toplovodi"], ["podstanice", "Toplotne podstanice"], ["kotlarnice", "Kotlarnice"], ["diktir", "Diktir sistemi"], ["gasovodi", "Gasovodi"], ["klima", "Klimatizacija"], ["solar", "Solarne instalacije"], ["servis", "Održavanje i servis"], ["prodaja", "Zastupstva i prodaja"]];

  var chips = document.getElementById('refChips');
  var list = document.getElementById('refList');
  var count = document.getElementById('refCount');

  function render(cat) {
    var n = 0;
    [].forEach.call(list.children, function (li) {
      var show = cat === 'sve' || li.dataset.cat === cat;
      li.hidden = !show;
      if (show) n++;
    });
    list.classList.toggle('filtered', cat !== 'sve');
    count.textContent = n + (n === 1 ? ' stavka' : ' stavki');
    [].forEach.call(chips.children, function (b) {
      var on = b.dataset.cat === cat;
      b.classList.toggle('on', on);
      b.setAttribute('aria-selected', on);
    });
  }

  if (chips && list) {
    CATS.forEach(function (c) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'chip'; b.dataset.cat = c[0];
      b.setAttribute('role', 'tab');
      b.textContent = c[1];
      b.addEventListener('click', function () { render(c[0]); });
      chips.appendChild(b);
    });
    render('sve');
  }

  // ---------- Navigacija ----------
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('open'); toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    }
  });

  var header = document.querySelector('.site-header');
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- Reveal ----------
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('in'); });
  }

  document.getElementById('year').textContent = new Date().getFullYear();
})();
