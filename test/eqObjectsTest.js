const assert = require('chai').assert;
const eqObjects = require('../index').eqObjects;

describe("#eqObjects", () => {
  it("returns true for {a: 1, b: 2} and {b: 2, a: 1}", () => {
    assert.deepEqual(eqObjects({a: 1, b: 2}, {b: 2, a: 1}), true);
  });

  it("returns false for {a: 1, b: 2} and {a: 1, b: 2, c: 3}", () => {
    assert.deepEqual(eqObjects({a: 1, b: 2}, {a: 1, b: 2, c: 3}), false);
  });

  it("returns true for {a: 1, b: 2, c: 3} and {a: 1, b: 2, c: 3}", () => {
    assert.deepEqual(eqObjects({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3}), true);
  });

});