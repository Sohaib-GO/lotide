const assertEqual = require('./assertEqual');

const countLetters = (sentence) => {
  const results = {};
  // clears white spaces
  let string = sentence.replace(/\s/g,'');

  // loop over input string
  for (let i = 0; i < string.length; i++)
  // check if character has been seen before
    if (results.hasOwnProperty(string[i])) {
      results[string[i]] += 1;
    } else {
      results[string[i]] = 1;
    }
    
  return results;
};

// TEST CODE
console.log(assertEqual(countLetters("lighthouse in the house")["l"], 1)); // => PASS
console.log(assertEqual(countLetters("lighthouse in the house")["i"], 2)); // => PASS
console.log(assertEqual(countLetters("lighthouse in the house")["g"], 12)); // => FAIL
