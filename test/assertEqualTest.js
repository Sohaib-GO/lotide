const assertEqual = require('../index').assertEqual;
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("returns false for 'Lighthouse Labs' and 'Bootcamp'", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"));
  });
  it("returns true for 1 and 1", () => {
    assert.strictEqual(assertEqual(1, 1));
  });
});