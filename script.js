(function () {
  'use strict';

  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('.nav__link');
  const sections = document.querySelectorAll('section[id]');

  // Header scroll effect
  function onScroll() {
    header.classList.toggle('header--scrolled', window.scrollY > 20);
    highlightActiveNav();
  }

  // Mobile nav toggle
  function toggleNav() {
    const isOpen = nav.classList.toggle('nav--open');
    navToggle.classList.toggle('nav-toggle--open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeNav() {
    nav.classList.remove('nav--open');
    navToggle.classList.remove('nav-toggle--open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // Active nav link on scroll
  function highlightActiveNav() {
    const scrollPos = window.scrollY + 100;

    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function (link) {
          link.classList.toggle(
            'nav__link--active',
            link.getAttribute('href') === '#' + id
          );
        });
      }
    });
  }

  // FAQ: only one open at a time
  const faqItems = document.querySelectorAll('.faq__item');
  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) {
        faqItems.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });

  // Product thumbnail click (visual only for now)
  const thumbs = document.querySelectorAll('.product__thumb');
  thumbs.forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      thumbs.forEach(function (t) { t.classList.remove('product__thumb--active'); });
      thumb.classList.add('product__thumb--active');
    });
  });

  // Event listeners
  window.addEventListener('scroll', onScroll, { passive: true });
  navToggle.addEventListener('click', toggleNav);
  navLinks.forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  // Close nav on escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });

  // Initial state
  onScroll();
})();
