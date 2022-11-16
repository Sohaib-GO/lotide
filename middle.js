const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let newArray = [];
  if (array.length <= 2) {
    return newArray;
  } else if (array.length % 2 === 0) {
    newArray.push(array[(array.length / 2) - 1]);
    newArray.push(array[array.length / 2]);
  } else {
    newArray.push(array[Math.floor(array.length / 2)]);
  }
  return newArray;
};


// TEST CODE
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])); // => should PASS
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4])); // => should PASS
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5])); // => should PASS
