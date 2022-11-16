const  assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');


const letterPositions = function(sentence) {
  const results = {};
  // clears white spaces
  let string = sentence.replace(/\s/g,'');

  // loop over input string
  for (let i = 0; i < string.length; i++)
    if (results.hasOwnProperty(string[i])) {

      results[string[i]].push(i);
    } else {
      results[string[i]] = [i];

    }
  return results;
};

// TEST CODE
console.log(assertArraysEqual(letterPositions("lighthouse in the house")["l"], [0])); // => PASS
console.log(assertArraysEqual(letterPositions("lighthouse in the house")["i"], [2, 1])); // => FAIL
console.log(assertArraysEqual(letterPositions("lighthouse in the house")["g"], [2])); // => PASS