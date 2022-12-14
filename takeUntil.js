const assertArraysEqual = require("./assertArraysEqual");

const takeUntil = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array.slice(0, i);
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);


// TEST CODE
assertArraysEqual(results1, [1, 2, 5, 7, 2]); // => should PASS
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]); // => should PASS
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood", "I've"]); // => should FAIL

