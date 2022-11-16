const assertEqual = require('./assertEqual');


const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;

};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const results = countOnly(firstNames, { "Jason": false, "Karima": true, "Fang": true , "Agouhanna": true});

console.log(assertEqual(results["Jason"], 1)); // => should FAIL
console.log(assertEqual(results["Karima"], undefined)); // => should PASS
console.log(assertEqual(results["Fang"], 2)); // => should PASS
console.log(assertEqual(results["Agouhanna"], 1)); // => should PASS

console.log(results);