(function () {
  var jobs = (window.JOBS || []).filter(function (j) { return j.active !== false; })
    .sort(function (a, b) { return String(b.posted || '').localeCompare(String(a.posted || '')); });
  var hr = window.HR_EMAIL || 'info@alameeri.com';
  var list = document.getElementById('job-list');
  var tabs = document.getElementById('job-filters');
  var empty = document.getElementById('job-empty');
  var count = document.getElementById('job-count');
  if (!list) return;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function date(d) {
    var t = new Date(d);
    return isNaN(t) ? String(d) : t.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  }
  function items(title, arr) {
    return arr && arr.length ? '<h4>' + title + '</h4><ul>' + arr.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' : '';
  }
  function mailto(j) {
    var subject = 'Application: ' + j.title + ' - ' + j.company;
    var body = 'Dear HR Team,\r\n\r\nI would like to apply for the position of ' + j.title + ' at ' + j.company +'.\r\n\r\nFull name:\r\nAge:\r\nNationality:\r\nPhone:\r\nResidency Status:\r\nCurrent Position:\r\nCurrent Salary:\r\nExpected Salary:\r\nExpected Joining Date:\r\nYears of experience:\r\n\r\nMy CV is attached.\r\n\r\nKind regards,';
    return 'mailto:' + hr + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  }
  function card(j) {
    var meta = [['Company', j.company], ['Department', j.department], ['Location', j.location], ['Type', j.type]]
      .filter(function (m) { return m[1]; })
      .map(function (m) { return '<span><b>' + m[0] + ':</b> ' + esc(m[1]) + '</span>'; }).join('');
    var facts = [['Company', j.company], ['Location', j.location], ['Deadline', j.deadline ? date(j.deadline) : ''], ['Department', j.department],
    ['Experience', j.experience], ['Type', j.type]]
      .filter(function (m) { return m[1]; })
      .map(function (m) { return '<div><dt>' + m[0] + '</dt><dd>' + esc(m[1]) + '</dd></div>'; }).join('');
    return '<details class="job" id="' + esc(j.id) + '" data-c="' + esc(j.company) + '"><summary><h3>' + esc(j.title) + '</h3>' +
      '<div class="meta">' + meta + '</div></summary><div class="det"><div class="dcols"><div class="dleft">' +
      '<p class="ref">Reference ' + esc(j.id) + (j.posted ? ' &middot; Posted ' + date(j.posted) : '') + '</p>' +
      (j.description ? '<div class="desc">' + esc(j.description) + '</div>' : '') +
      items('Responsibilities', j.responsibilities) + items('Qualifications', j.qualifications) +
      items('Skills', j.skills || j.requirements) + items('What we offer', j.benefits) +
      '<a class="applylink" href="' + mailto(j) + '">Apply Now</a>' +
      '</div><div class="dright"><h4 class="rtitle">Requirements</h4><dl class="facts">' + facts + '</dl></div></div></div></details>';
  }

  list.innerHTML = jobs.map(card).join('');
  if (count) count.textContent = jobs.length;
  document.querySelectorAll('.hr-mail').forEach(function (a) { a.textContent = hr; a.href = 'mailto:' + hr; });
  if (!jobs.length) { if (empty) empty.hidden = false; return; }
  if (jobs.length === 1) list.firstChild.open = true;

  var companies = ['All'].concat(jobs.map(function (j) { return j.company; }).filter(function (c, i, a) { return a.indexOf(c) === i; }));
  if (companies.length > 2) {
    companies.forEach(function (c) {
      var b = document.createElement('button');
      b.textContent = c; b.type = 'button'; b.setAttribute('aria-pressed', c === 'All');
      b.onclick = function () {
        [].forEach.call(tabs.children, function (x) { x.setAttribute('aria-pressed', x === b); });
        [].forEach.call(list.children, function (d) { d.hidden = c !== 'All' && d.dataset.c !== c; });
      };
      tabs.appendChild(b);
    });
  }
  var hash = decodeURIComponent(location.hash.slice(1)), target = hash && document.getElementById(hash);
  if (target && target.tagName === 'DETAILS') { target.open = true; target.scrollIntoView({ block: 'center' }); }
})();
