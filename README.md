# Scroll To By Speed

Would you rather scroll by a speed than a duration? You could use this library
or learn from the approach.

This library exposes two methods, `durationForDistance` and `scrollToBySpeed`.
If you already have a scrolling mechanism you'd prefer to use, the library will
calculate the duration for a given distance and speed for you to use.

If you'd like it to handle the scrolling, use the `scrollToBySpeed` method.

Previous versions relied on jQuery, this version does not. Previous versions
did not support asyncronous module declaration, this version does.

## Usage

Calculate a duration to scroll between elements at some speed.

```javascript
var duration = durationForDistance(from,to,speed,[{axis:'x'}]);
console.log(duration);
==> 4256
```

Scroll to an element at some speed.

```javascript
var scroll = scrollToBySpeed(to,speed,[]);
```
