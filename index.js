(function() {
  function scrollToBySpeed(opts) {
    if (!opts) {
      opts = {};
    }

    if (!opts.element) {
      opts.element = document.body;
    }

    if (!opts.speed) {
      opts.speed = 500;
    }

    var currentPos = window.scrollY;

    var newPos = opts.element.getBoundingClientRect().top;

    var distance = currentPos - newPos;

    var duration = Math.abs((distance / 1000) * opts.speed);

    return duration;
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = scrollToBySpeed;
  } else {
    if (typeof define === 'function' && define.amd) {
      define([], function() {
        return scrollToBySpeed;
      });
    } else {
      window.scrollToBySpeed = scrollToBySpeed;
    }
  }
})();
