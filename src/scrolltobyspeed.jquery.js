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
    , mode: 'chain'
    };
 
    settings = $.extend(defaults,args);
 
    distance = Math.abs( $w.scrollTop() - $(this).offset().top );
    duration = ( distance / settings.speed ) * 1000;

    $d.animate({
      scrollTop: $(this).offset().top - settings.offset
    }, duration);
 
    if ( settings.mode !== 'chain' ) {
      return duration;
    }
    
    return this;
  };
}(jQuery));
