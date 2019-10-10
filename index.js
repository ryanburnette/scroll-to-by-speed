(function() {
  function scrollToBySpeed() {}

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
