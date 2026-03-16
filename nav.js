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
  var pillole = document.querySelectorAll('.pillola');

  function closeAll() {
    pillole.forEach(function(p) {
      var l2 = p.querySelector('.pillola-l2');
      var indicator = p.querySelector('.pillola-indicator');
      if (l2) l2.hidden = true;
      if (indicator) indicator.textContent = '+';
    });
  }

  pillole.forEach(function(pillola) {
    var titolo = pillola.querySelector('.pillola-titolo');
    var l2 = pillola.querySelector('.pillola-l2');
    var indicator = pillola.querySelector('.pillola-indicator');

    if (titolo && l2) {
      titolo.addEventListener('click', function() {
        var isOpen = !l2.hidden;
        closeAll();
        if (!isOpen) {
          l2.hidden = false;
          if (indicator) indicator.textContent = '−';
        }
      });
    }

    if (l2) {
      l2.addEventListener('click', function() {
        l2.hidden = true;
        if (indicator) indicator.textContent = '+';
      });
    }
  });
});
