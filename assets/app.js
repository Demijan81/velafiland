(function () {
  document.documentElement.classList.add('js');

  // ---------- Reference ----------
  var CATS = [
    ['sve', 'Sve'],
    ['kotlarnice', 'Kotlarnice'],
    ['podstanice', 'Toplotne podstanice'],
    ['gasovodi', 'Gasovodi'],
    ['toplovodi', 'Toplovodi'],
    ['ostalo', 'Klimatizacija, solar i ostalo'],
    ['servis', 'Održavanje i servis'],
    ['prodaja', 'Zastupstvo i prodaja'],
    ['arhiva', 'Arhiva 2014–2015']
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
    ['podstanice', 'Diktir sistemi', 'HERC Feniks — Beogradske elektrane', '2021/26'],
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

    ['ostalo', 'Sistemi klimatizacije i ventilacije proizvodne linije i kompresorske stanice', 'Coca-Cola, Neresnica', '2024'],
    ['ostalo', 'Zamena i ugradnja frekventnih pumpi, 26 kom', 'Beogradske elektrane', '2023'],
    ['ostalo', 'Kanalski grejači vazduha', 'JAT Tehnika', '2023'],
    ['ostalo', 'Hidrantska mreža gasne kotlarnice', 'Coca-Cola, Neresnica', '2022'],
    ['ostalo', 'Degazator — parna kotlarnica', 'Coca-Cola', '2021'],
    ['ostalo', 'Gromobranska instalacija', 'Rudarski institut, Beograd', '2021'],
    ['ostalo', 'Solarni kolektori, 2 sistema', 'Kvantaška pijaca, Beograd', '2020'],
    ['ostalo', 'Ventilacija', 'SRC Tašmajdan, Beograd', '2020'],
    ['ostalo', 'Rekonstrukcija čilerske stanice', 'Coca-Cola, Beograd', '2019'],
    ['ostalo', 'Automatika CSNU — kotlarnica', 'Coca-Cola', '2019'],
    ['ostalo', 'Kaloriferska instalacija', 'Karteks, Šimanovci', '2019'],
    ['ostalo', 'Čelična konstrukcija — kotlarnica Resnik', 'Beogradske elektrane', '2019'],
    ['ostalo', 'Sanacija krova kotlarnice', 'IM „Topola“, Bačka Topola', '2019'],
    ['ostalo', 'Solarni kolektori', 'Delta Inženjering — Opšta bolnica Sremska Mitrovica', '2016'],
    ['ostalo', 'Solarni kolektori', 'Delta Inženjering — Gerontološki centar Ruma', '2016'],
    ['ostalo', 'Instalacije ventilacije', 'SRC Tašmajdan', '2016'],

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

    ['arhiva', 'OILON 7 MW — gasni gorionik', 'JKP „Grejanje“, Pančevo', '2015'],
    ['arhiva', 'OILON 4,5 MW — mazutni gorionik', 'SRC Tašmajdan, hala „Pionir“', '2015'],
    ['arhiva', 'GIERSCH 1,5 MW — gasni gorionik', 'Topling Grejanje — Bitolj', '2015'],
    ['arhiva', 'GIERSCH 1 MW — gasni gorionik', 'Topling Grejanje — Kosovska Mitrovica', '2015'],
    ['arhiva', 'Dimnjak JEREMIAS D = 500 mm, L = 12 m', 'Termah Beograd — JUB, Šimanovci', '2015'],
    ['arhiva', 'Dimnjak JEREMIAS D = 200 mm, L = 12 m', 'Termah Beograd — JUB, Šimanovci', '2015'],
    ['arhiva', 'Dimnjaci JEREMIAS D = 200 i 250 mm, L = 7 m', 'Viessmann Beograd — Swisslion', '2015'],
    ['arhiva', 'Dimnjak JEREMIAS D = 250 mm, L = 12 m', 'Malcoming, S. Mitrovica — Škola Morović', '2014'],
    ['arhiva', 'Dovodni gasovod PE 225, L = 480 m', 'JUB, Šimanovci', '2015'],
    ['arhiva', 'Unutrašnja gasna instalacija — parna kotlarnica 5 MW', 'JUB, Šimanovci', '2015'],
    ['arhiva', 'Ventilacija', 'JUB, Šimanovci', '2015'],
    ['arhiva', 'TNG instalacija — isparivačka stanica Q = 100 kg/h, rezervoar V = 20 m³', 'Topling Grejanje — Kosovska Mitrovica', '2015'],
    ['arhiva', 'Sistem upravljanja grejanjem i klimatizacijom', 'SRC Tašmajdan, Beograd', '2015'],
    ['arhiva', 'Ulja i maziva FUCHS', 'Gas Teh, Inđija', '2014, 2015'],
    ['arhiva', 'CSNU nadogradnja — projektovanje', 'Hotel Mona, Zlatibor', '2014']
  ];

  var chips = document.getElementById('refChips');
  var list = document.getElementById('refList');
  var count = document.getElementById('refCount');
  var catName = {};
  CATS.forEach(function (c) { catName[c[0]] = c[1]; });

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
    render('kotlarnice');
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
