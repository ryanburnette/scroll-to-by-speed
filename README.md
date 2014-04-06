scrollToBySpeed
===============

It seems whack to choose a duration when animating window scrolling to
the position of an element. That element might be close by causing a
super slow scroll. It also might be far away causing the window to scroll
at warp speed.

This plugin let's you scroll the window by speed rather than by duration.

Usage
-----

Include the plugin on your page or compile it into your libraries.

```html
<script src="scrolltobyspeed.jquery.js"></script>
```

Now when we want the window to scroll we give it a speed rather than
a duration.

```javascript
$('#element').scrollToBySpeed({
  speed: 1000
});
```

We can also add an offset to the destination scroll position.

```javascript
$('#element').scrollToBySpeed({
  speed: 1000,
  offset: -100
});
```

If custom easing or callbacks are desired, use the plugin to get the duration
and animate manually.

```javascript
function () {
  var $element = $('#element'),
      duration = $element.scrollToBySpeed({mode:'duration'});

  ...
}
```

Bower
-----

This plugin is available via Bower.

```
bower install scrollToBySpeed
```

Contributing
------------

Everyone is welcome to open issues or make pull requests.

Versions
--------

+ v0.2.0 2014-04-07
  + Don't handle event binding, just the scrolling
  + Allow return of duration

+ v0.1.0 2014-04-01
  + Initial

License
-------

Apache2
