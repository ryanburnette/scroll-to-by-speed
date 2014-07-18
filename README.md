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

Set the easing if desired.

```javascript
$('#element').scrollToBySpeed({
  easing: 'linear'
});
```

Scrolls the entire window by default. To scroll within another scrollable element (e.g., a div set to overflow auto), specify the context as either a selector string or a jQuery object.

```javascript
$('#element').scrollToBySpeed({
  context: '.foo'
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

+ v0.2.1 2014-04-07
  + Add easing option

+ v0.2.0 2014-04-07
  + Don't handle event binding, just the scrolling
  + Allow return of duration

+ v0.1.0 2014-04-01
  + Initial

License
-------

Apache2
