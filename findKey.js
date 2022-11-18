const assertEqual = require("./assertEqual");

const findKey = (object, callback) => {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }

  return undefined;
};

console.log(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  ) // => "noma"
);

// TEST CODE
console.log(assertEqual(findKey({ a: 1, b: 2, c: 3 }, (x) => x === 2), "b")); // => PASS
console.log(assertEqual(findKey({ a: 1, b: 2, c: 3 }, (x) => x === 3), "c")); // => PASS
console.log(assertEqual(findKey({ a: 1, b: 2, c: 3 }, (x) => x === 3), undefined)); // => FAIL