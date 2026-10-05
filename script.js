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
