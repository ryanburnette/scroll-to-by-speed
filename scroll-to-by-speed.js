function distanceToDuration(distance,speed) {
  return (distance/speed) * 1000;
}

function scrollToBySpeedDuration(from,to,speed,options={}) {
  return distanceToDuration((from-to),speed);
}

function scroll(to,duration) {
}

function scrollToBySpeed(to,speed,options={}) {
  var from = window.pageYOffset;
  var duration = scrollToBySpeedDuration(from,to,speed,options);
  scroll(to,duration);
}

exports.distanceToDuration = distanceToDuration;
exports.scrollToBySpeed = scrollToBySpeed;
