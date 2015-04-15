(function ($) {
  $.fn.scrollToBySpeed = function (args) {
    var defaults
      , settings
      , $d = $('html,body')
      , $w = $(window)
      , distance
      , duration
      , targetPos
      ;
 
    defaults = {
      speed: 1000
    , offset: 0
    , mode: 'chain'
    , easing: 'swing'
    , context: '__window'
    };
 
    settings = $.extend(defaults,args);
    
    // Check if a non-window context has been provided in args. Accepts a jQuery object or a selector string.
    if ( settings.context instanceof jQuery ) {
      $d = settings.context;
      $w = settings.context;
    }
    else if ( settings.context !== '__window' ) {
      $d = $(settings.context);
      $w = $(settings.context);
    }

    targetPos = $(this).offset().top;

    distance = Math.abs( $w.scrollTop() - targetPos );
    duration = ( distance / settings.speed ) * 1000;

    $d.animate({
      scrollTop: targetPos - settings.offset
    }, duration, settings.easing);
 
    if ( settings.mode !== 'chain' ) {
      return duration;
    }
    
    return this;
  };
}(jQuery));
