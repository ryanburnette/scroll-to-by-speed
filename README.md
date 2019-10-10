# [scroll-to-by-speed][1]

[![repo](https://img.shields.io/badge/repository-Github-black.svg?style=flat-square)](https://github.com/ryanburnette/scroll-to-by-speed)
[![npm](https://img.shields.io/badge/package-NPM-green.svg?style=flat-square)](https://www.npmjs.com/package/scroll-to-by-speed)

Animated scrolling should be a function of speed, not time.

There are lots of ways to scroll that accept a duration argument. This library
doesn't handle scrolling for you, but it will calculate the duration based on
speed given an element, a direction, and a context.

You might be thinking that you don't need a library for this. That's good. This
library exists to promote the concept.

## Usage

```js
function scroll(element, duration) {
  // your favorite scrolling technique goes here
}
var speed = 1000; // pixels per second
var element = document.querySelector('div');
var duration = scrollToBySpeed({ speed, element });
scroll(element, duration);
```

[1]: https://github.com/ryanburnette/scroll-to-by-speed
