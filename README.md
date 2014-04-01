scrollToBySpeed
===============

When I'm working on sites I find myself binding click events that scroll
the browser frequently. I got annoyed that sometimes the scroll would
cover a short distance and take a long time while it would warp at light
speed to cover a long scroll. The issue is that the animation is usually
set to a single time value that is applied to all scrolling animations.

I wanted to pick a speed rather than a duration, a value of pixels
to cover per second while scrolling. The duration of the animation can be
calculated based on this value. This is exactly what this jQuery plugin does.

Usage
-----

Include the plugin on your page or compile it into your libraries.

```html
<script src="scrolltobyspeed.jquery.js"></script>
```

Calling it with no argument invokes defaults. Clicking this element
will scroll the browser to the top at 1000 pixels per second.

```javascript
$('button').scrollToBySpeed();
```

Now let's scroll to some other element at a custom speed of 2000 pixels
per second.

```javascript
$('button').scrollToBySpeed({
  anchor: $('#my_element'),
  speed: 2000
});
```

Versions
--------

+ v0.1.0 2014-04-01
  + Initial

License
-------

Apache2
