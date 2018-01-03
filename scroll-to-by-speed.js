export function offset(el) {
  var rect = el.getBoundingClientRect();
  return {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
  }
}

export function distanceBetween(from,to,options={}) {
  if ( options.axis === 'y' ) {
    return Math.abs(offset(from).left-offset(to).left);
  }
  return Math.abs(offset(from).top-offset(to).top);
}

export function distanceToDuration(distance,speed) {
  return (distance/speed) * 1000;
}

export function scrollToBySpeedDuration(from,to,speed,options={}) {
  return distanceToDuration(distanceBetween(from,to,options),speed);
}

function scroll(to,duration) {
}

export function scrollToBySpeed(to,speed,options={}) {
  var from = window.pageYOffset;
  var duration = scrollToBySpeedDuration(from,to,speed,options);
  scroll(to,duration);
}
