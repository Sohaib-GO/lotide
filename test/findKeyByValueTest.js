const assert = require('chai').assert;
const findKeyByValue = require('../index').findKeyByValue;

describe("#findKeyByValue", () => {
  it("returns 'drama' for  (the Wire) in {sci_fi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama: 'The Wire'}", () => {
    assert.deepEqual(findKeyByValue({sciFi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama: 'The Wire'}, 'The Wire'), 'drama');
  });

  it("returns 'comedy' for (Brooklyn Nine-Nine) in  {sci_fi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama: 'The Wire'}", () => {
    assert.deepEqual(findKeyByValue({sciFi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama: 'The Wire'}, 'Brooklyn Nine-Nine'), 'comedy');
  });

});