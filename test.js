mocha.setup('bdd');
import assert from 'assert';
import {offset,distanceBetween,distanceToDuration,scrollToBySpeedDuration,scrollToBySpeed} from './scroll-to-by-speed.js';
function scrollToTop() {
  window.scrollTo(0,0);
}
describe('offset', function () {
  before(scrollToTop);
  it('gets the top offset', function () {
    assert.equal(
      offset(document.querySelector('.container')).top,
      0
    );
    assert.equal(
      offset(document.querySelector('.t100')).top,
      100
    );
  });
  it('gets the left offset', function () {
    assert.equal(
      offset(document.querySelector('.t100')).left,
      0
    );
    assert.equal(
      offset(document.querySelector('.ty300')).left,
      700
    );
  });
});
describe('distanceBetween', function () {
  before(scrollToTop);
  it('calculates the distance between two elements', function () {
    assert.equal(
      distanceBetween(
        document.querySelector('.container .t100'),
        document.querySelector('.container .t4000')
      ),
      Math.abs(100-4000)
    );
  });
  it('calculates the distance between two elements in a scrolling element', function () {
    assert.equal(
      distanceBetween(
        document.querySelector('.container-scrolling-x .t200'),
        document.querySelector('.container-scrolling-x .t3000')
      ),
      Math.abs(200-3000)
    );
  });
  it('calculates the distance between two elements on the y axis', function () {
    assert.equal(
      distanceBetween(
        document.querySelector('.container-scrolling-y .ty300'),
        document.querySelector('.container-scrolling-y .ty5000'),
        { axis: 'x' }
      ),
      Math.abs(300-5000)
    );
  });
});
describe('distanceToDuration', function() {
  before(scrollToTop);
  it('calculates a duration from a distance', function () {
    assert.equal(distanceToDuration(3900,3900),1000);
    assert.equal(distanceToDuration(1000,5000),200);
  });
});
describe('scrollToBySpeedDuration', function() {
  before(scrollToTop);
  it('calculates a duration for a speed when given two elements', function () {
    assert.equal(
      scrollToBySpeedDuration(
        document.querySelector('.container-scrolling-x .t200'),
        document.querySelector('.container-scrolling-x .t3000'),
        1000
      ),
      2800
    );
  });
});
describe('scrollToBySpeed', function () {
  before(scrollToTop);
  it('scrolls to an element');
});
mocha.checkLeaks();
mocha.run();
