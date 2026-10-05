(function () {
  'use strict';

  document.querySelectorAll('.faq-q').forEach(function (question) {
    question.addEventListener('click', function () {
      var item = question.parentElement;
      var mark = question.querySelector('span');
      item.classList.toggle('open');
      if (mark) {
        mark.textContent = item.classList.contains('open') ? '−' : '+';
      }
    });
  });

  var slides = document.getElementById('productSlides');
  var prev = document.getElementById('productPrev');
  var next = document.getElementById('productNext');

  function stepSlide(direction) {
    if (!slides) return;
    slides.scrollBy({ left: direction * slides.clientWidth, behavior: 'smooth' });
  }

  if (prev) prev.addEventListener('click', function () { stepSlide(-1); });
  if (next) next.addEventListener('click', function () { stepSlide(1); });

  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[href*="shp.ee"], a[href*="shopee"]');
    if (!link || typeof oaiq !== 'function') return;
    oaiq(
      'measure',
      'custom',
      { type: 'custom' },
      { custom_event_name: 'click_buynow' }
    );
  });
})();
