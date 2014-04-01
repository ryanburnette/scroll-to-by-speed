(function ($) {
  $.fn.scrollToBySpeed = function (args) {
    var defaults
      , settings
      , $d = $('html,body')
      , $w = $(window)
      , distance
      , duration
      ;
 
    defaults = {
      speed: 1000
    , offset: 0
    , anchor: $d
    };
 
    settings = $.extend(defaults,args);
 
    $(this).on('click', function () {
      distance = Math.abs( $w.scrollTop() - settings.anchor.offset().top );
      duration = ( distance / settings.speed ) * 1000;
 
      $d.animate({
        scrollTop: settings.anchor.offset().top - settings.offset
      }, duration);
    });
 
    return this;
  };
}(jQuery));
