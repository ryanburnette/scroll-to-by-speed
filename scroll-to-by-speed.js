export function offset(el) {
  var rect = el.getBoundingClientRect();
  return {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
  }
}

export function distanceBetween(from,to,options={}) {
  var fromDistance = 0;
  if ( from ) {
    if ( typeof(from) === 'number' ) {
      fromDistance = from;
    }
    else if ( typeof(from) === 'object' ) {
      if ( options.axis === 'x' ) {
        fromDistance = offset(from).left;
      }
      else {
        fromDistance = offset(from).top;
      }
    }
  }
  if ( options.axis === 'x' ) {
    return Math.abs(fromDistance-offset(to).left);
  }
  return Math.abs(fromDistance-offset(to).top);
}

export function distanceToDuration(distance,speed) {
  return (distance/speed) * 1000;
}

export function scrollToBySpeedDuration(from,to,speed,options={}) {
  return distanceToDuration(distanceBetween(from,to,options),speed);
}

export function scrollToBySpeed(to,speed,options={}) {
}
