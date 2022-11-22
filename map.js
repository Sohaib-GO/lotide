
const assertArraysEqual = require("./assertArraysEqual");


// description: takes in an array and a callback function and returns a new array based on the results of the callback function

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);


// TEST CODE

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]); // => PASS
assertArraysEqual(results1, ["g", "c", "t", "m", "x"]); // => FAIL



