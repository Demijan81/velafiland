(function () {
  document.documentElement.classList.add('js');

  // ---------- Reference ----------
  var CATS = [
    ['sve', 'Sve'],
    ['toplovodi', 'Toplovodi'],
    ['podstanice', 'Toplotne podstanice'],
    ['kotlarnice', 'Kotlarnice'],
    ['diktir', 'Diktir sistemi'],
    ['gasovodi', 'Gasovodi'],
    ['klima', 'Klimatizacija'],
    ['solar', 'Solarne instalacije'],
    ['servis', 'Održavanje i servis'],
    ['prodaja', 'Zastupstva i prodaja']
  ];

  // [kategorija, opis, naručilac / lokacija, godina]
  var REFS = [
    ['kotlarnice', 'Toplovodna kotlarnica 2 × 1.500 kW', 'Coca-Cola, Neresnica', '2022'],
    ['kotlarnice', 'Toplovodna kotlarnica 2 × 2.000 kW', 'Coca-Cola, Beograd', '2020/21'],
    ['kotlarnice', 'Parna kotlarnica 8 t/h', 'Nektar, Vladičin Han', '2020/21'],
    ['kotlarnice', 'Parna kotlarnica 8 t/h', 'Kartonval, Šabac', '2020'],
    ['kotlarnice', 'Parna kotlarnica', 'AKO Belušić', '2019'],
    ['kotlarnice', 'Toplovodna kotlarnica 2.000 kW', 'SD Crvena zvezda, Beograd', '2018'],
    ['kotlarnice', 'Toplovodna kotlarnica 1.500 kW', 'Rudarski institut', '2018'],

    ['podstanice', 'Zamena pumpi u podstanicama', 'Rudarski institut, Beograd', '2025'],
    ['podstanice', 'Toplotne podstanice 8 MW', 'HERC Feniks — Beogradske elektrane', '2021/26'],
    ['diktir', 'Diktir sistemi', 'HERC Feniks — Beogradske elektrane', '2021/26'],
    ['podstanice', 'Toplotne podstanice, 5 kom', 'Toplana Subotica', '2023'],
    ['podstanice', 'Toplotne podstanice', 'Toplana Majdanpek', '2023'],
    ['podstanice', 'Toplotne podstanice 16 MW', 'JAT Tehnika', '2022/23'],
    ['podstanice', 'Podstanica za grejanje trave na terenu, Siemens automatika — inženjering', 'Stadion Rajko Mitić, Beograd', '2018'],

    ['gasovodi', 'Priključni čelični gasovod, MRS, polietilenski gasovod, UGI', 'Coca-Cola, Neresnica', '2022'],
    ['gasovodi', 'Priključni čelični gasovod DN100 za 6 MRS', 'Gas Teh, Požarevac', '2022'],
    ['gasovodi', 'Polietilenski gasovod', 'Obdanište, Smederevo', '2022'],
    ['gasovodi', 'UGI — kotlarnica', 'Coca-Cola, Beograd', '2021'],
    ['gasovodi', 'UGI', 'Arabesa, Barić', '2020/21'],
    ['gasovodi', 'Polietilenski gasovod', 'JUB boje', '2018'],

    ['toplovodi', 'Toplovod', 'Rudarski institut', '2025'],
    ['toplovodi', 'Toplovod', 'JAT Tehnika', '2023'],
    ['toplovodi', 'Toplovod', 'Coca-Cola, Neresnica', '2021'],
    ['toplovodi', 'Toplovod', 'SRC Tašmajdan, Beograd', '2020'],

    ['klima', 'Sistemi klimatizacije i ventilacije proizvodne linije i kompresorske stanice', 'Coca-Cola, Neresnica', '2024'],
    ['ostalo', 'Zamena i ugradnja frekventnih pumpi, 26 kom', 'Beogradske elektrane', '2023'],
    ['klima', 'Kanalski grejači vazduha', 'JAT Tehnika', '2023'],
    ['kotlarnice', 'Hidrantska mreža gasne kotlarnice', 'Coca-Cola, Neresnica', '2022'],
    ['kotlarnice', 'Degazator — parna kotlarnica', 'Coca-Cola', '2021'],
    ['ostalo', 'Gromobranska instalacija', 'Rudarski institut, Beograd', '2021'],
    ['solar', 'Solarni kolektori, 2 sistema', 'Kvantaška pijaca, Beograd', '2020'],
    ['klima', 'Ventilacija', 'SRC Tašmajdan, Beograd', '2020'],
    ['klima', 'Rekonstrukcija čilerske stanice', 'Coca-Cola, Beograd', '2019'],
    ['kotlarnice', 'Automatika CSNU — kotlarnica', 'Coca-Cola', '2019'],
    ['klima', 'Kaloriferska instalacija', 'Karteks, Šimanovci', '2019'],
    ['kotlarnice', 'Čelična konstrukcija — kotlarnica Resnik', 'Beogradske elektrane', '2019'],
    ['kotlarnice', 'Sanacija krova kotlarnice', 'IM „Topola“, Bačka Topola', '2019'],
    ['solar', 'Solarni kolektori', 'Delta Inženjering — Opšta bolnica Sremska Mitrovica', '2016'],
    ['solar', 'Solarni kolektori', 'Delta Inženjering — Gerontološki centar Ruma', '2016'],
    ['klima', 'Instalacije ventilacije', 'SRC Tašmajdan', '2016'],

    ['servis', 'Servis gorionika', 'SRC Tašmajdan — Hala „Aleksandar Nikolić“', '2016–2026'],
    ['servis', 'Servis gorionika', 'Rudarski institut', '2018–2026'],
    ['servis', 'Servis gorionika', 'Industrija mesa Topola, Bačka Topola', '2018–2026'],
    ['servis', 'Održavanje toplotnih podstanica', 'JAT Tehnika', '2023/24'],
    ['servis', 'Održavanje parne kotlarnice', 'Coca-Cola, Neresnica', '2021/24'],
    ['servis', 'Održavanje termotehničkih instalacija', 'Coca-Cola, Beograd', '2019'],
    ['servis', 'Servis čilera', 'SRC Tašmajdan', '2016'],

    ['prodaja', 'Gorionici GIERSCH, snage 100 – 4.500 kW', 'Nemačka', '2017–2026'],
    ['prodaja', 'Gorionici OILON, snage 500 – 7.500 kW', 'Finska', '2019–2026'],
    ['prodaja', 'INOX dimnjaci JEREMIAS, d = 200 – 900 mm', 'Nemačka', '2014–2026'],

  ];

  var chips = document.getElementById('refChips');
  var list = document.getElementById('refList');
  var count = document.getElementById('refCount');
  var catName = {};
  CATS.forEach(function (c) { catName[c[0]] = c[1]; });
  catName.ostalo = 'Ostalo';

  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  function render(cat) {
    var rows = REFS.filter(function (r) { return cat === 'sve' || r[0] === cat; });
    list.innerHTML = rows.map(function (r) {
      return '<li><div class="ref-main"><strong>' + esc(r[1]) + '</strong><span>' + esc(r[2]) + '</span></div>' +
        (cat === 'sve' ? '<span class="ref-cat">' + esc(catName[r[0]]) + '</span>' : '') +
        '<b class="ref-year">' + esc(r[3]) + '</b></li>';
    }).join('');
    count.textContent = rows.length + (rows.length === 1 ? ' stavka' : ' stavki');
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
