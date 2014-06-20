(function ($) {
  $.fn.scrollToBySpeed = function (args) {
    var defaults
      , settings
      , distance
      , duration
      ;
 
    defaults = {
      speed: 1000
    , offset: 0
    , mode: 'chain'
    , easing: 'swing'
    , context: $('html,body')
    };
 
    settings = $.extend(defaults,args);
    $c = settings.context;

	 targetPos = Math.abs( $c.scrollTop() + $(this).offset().top );
	 
    distance = Math.abs( $c.scrollTop() - targetPos );
    duration = ( distance / settings.speed ) * 1000;

    $c.animate({
      scrollTop: targetPos - settings.offset
    }, duration, settings.easing);
 
    if ( settings.mode !== 'chain' ) {
      return duration;
    }
    
    return this;
  };
}(jQuery));
