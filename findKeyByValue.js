const assertEqual = require('./assertEqual');

const findKeyByValue = (object, value) => {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }

  return undefined;

};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// TEST CODE
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy")); // => PASS
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")); // => PASS
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), undefined)); // => FAIL
