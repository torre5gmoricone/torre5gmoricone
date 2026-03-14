(function() {
  var links = [
    { href: 'index.html',        label: 'Home' },
    { href: 'aggiornamenti.html', label: 'Aggiornamenti' },
    { href: 'documento.html',    label: 'Il documento' },
    { href: 'richieste.html',    label: 'Le richieste' },
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
