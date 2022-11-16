const  assertArraysEqual = require('./assertArraysEqual');

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
assertArraysEqual(letterPositions("hello").e, [1]); // => PASS
assertArraysEqual(letterPositions("hello").l, [2, 3]); // => PASS
assertArraysEqual(letterPositions("hello").o, [5]); // => FAIL
