const assert = require('chai').assert;
const countOnly = require('../index').countOnly;


describe("#countOnly", () => {
  it("returns {Jason: 1, Fang: 2} for ['Jason', 'Fang', 'Fang']", () => {
    assert.deepEqual(countOnly(['Jason', 'Fang', 'Fang'], {Jason: true, Fang: true}), {Jason: 1, Fang: 2});
  });

  it("returns {Jason: 1, Fang: 2} for ['Jason', 'Fang', 'Fang']", () => {
    assert.deepEqual(countOnly(['Jason', 'Fang', 'Fang'], {Jason: true, Fang: true, }), {Jason: 1, Fang: 2});
  });


});