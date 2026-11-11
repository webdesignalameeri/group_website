const h = document.querySelector('header'),
  m = document.querySelector('.menu'),
  n = document.getElementById('nav');
addEventListener('scroll', () => h.classList.toggle('s', scrollY > 10), {
  passive: true
});
m.onclick = () => m.setAttribute('aria-expanded', n.classList.toggle('o'));
const t = document.getElementById('tabs'),
  cs = [...document.querySelectorAll('.card[data-g]')];
if (t) {
  ['All', ...new Set(cs.map(c => c.dataset.g))].forEach(g => {
    const b = document.createElement('button');
    b.textContent = g;
    b.onclick = () => {
      [...t.children].forEach(x => x.setAttribute('aria-pressed', x === b));
      cs.forEach(c => c.hidden = g !== 'All' && c.dataset.g !== g)
    };
    t.append(b)
  });
  t.firstChild.click()
}
const q = new URLSearchParams(location.search).get('sent'),
  st = document.getElementById('st');
if (st && q !== null) st.textContent = q === '1' ? 'Thank you. Your message has been sent.' : 'Your message could not be sent. Check the fields or email info@alameeri.com.';
const gi = document.querySelectorAll('.gi img');
if (gi.length) {
  const d = document.createElement('dialog');
  d.className = 'lb';
  d.innerHTML = '<img alt="">';
  document.body.append(d);
  gi.forEach(i => i.onclick = () => {
    d.firstChild.src = i.src;
    d.firstChild.alt = i.alt;
    d.showModal()
  });
  d.onclick = () => d.close()
}
/* Hide the header on scroll down, show it again on scroll up */
(function () {
  var header = document.querySelector('header');
  var nav = document.getElementById('nav');
  var last = window.scrollY;
  window.addEventListener('scroll', function () {
    var y = window.scrollY, diff = y - last;
    if (Math.abs(diff) < 8) return;
    last = y;
    if (nav && nav.classList.contains('o')) return;
    if (y < 10 || diff < 0) header.classList.remove('hide');
    else if (y > header.offsetHeight) header.classList.add('hide');
  }, { passive: true });
})();
