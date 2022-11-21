const assertArraysEqual = require('../index').assertArraysEqual;
const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  it("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });
  it("returns false for [1, 2, 3] and [3, 2, 1]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]));
  });
});