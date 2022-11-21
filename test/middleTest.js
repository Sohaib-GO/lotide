const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])); // => should PASS
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4])); // => should PASS
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4])); // => should FAIL
