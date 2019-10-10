(function() {
  function scrollToBySpeed(opts) {
    var currentPos = window.scrollY;
    var newPos = opts.element.getBoundingClientRect().top;
    var distance = Math.abs(currentPos - newPos);
    var duration = opts.speed / distance;
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
