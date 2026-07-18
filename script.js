(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');

  if (!toggle || !nav) {
    return;
  }

  function closeNav() {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }

  function openNav() {
    toggle.setAttribute('aria-expanded', 'true');
    nav.classList.add('is-open');
  }

  toggle.addEventListener('click', function () {
    var isOpen = toggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }
  });

  nav.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
      closeNav();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeNav();
      toggle.focus();
    }
  });

  document.addEventListener('click', function (event) {
    var isClickInside = nav.contains(event.target) || toggle.contains(event.target);
    if (!isClickInside && toggle.getAttribute('aria-expanded') === 'true') {
      closeNav();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 900) {
      closeNav();
    }
  });
})();
