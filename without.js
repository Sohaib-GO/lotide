const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

// TEST CODE
// console.log(assertArraysEqual(without(["1", "2", "3"], ["2"]), ["1", "3"])); // => should PASS
// console.log(assertArraysEqual(without(["1", "2", "3"], ["1", "2"]), [])); // => should FAIL


