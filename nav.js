(function() {
  var links = [
    { href: 'index.html',        label: 'Home' },
    { href: 'comeprocede.html',  label: 'Come procede' },
    { href: 'faq.html',          label: 'FAQ' }
  ];

  var current = location.pathname.split('/').pop() || 'index.html';

  var nav = document.createElement('nav');
  links.forEach(function(link) {
    var a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.label;
    if (link.href === current) a.className = 'active';
    nav.appendChild(a);
  });

  var container = document.querySelector('header .container');
  var toggle = container.querySelector('.nav-toggle');
  container.insertBefore(nav, toggle);

  toggle.addEventListener('click', function() {
    nav.classList.toggle('open');
  });
})();

// Accordion pillole
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.pillola-toggle').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var l2 = btn.closest('.pillola-l1').nextElementSibling;
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        l2.hidden = true;
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = 'Approfondisci ↓';
      } else {
        l2.hidden = false;
        btn.setAttribute('aria-expanded', 'true');
        btn.textContent = 'Chiudi ↑';
      }
    });
  });
});
