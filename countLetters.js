const assertEqual = require('./assertEqual');

const countLetters = (sentence) => {
  const results = {};
  for (const letter of sentence) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;

  
};

// TEST CODE
console.log(assertEqual(countLetters("lighthouse in the house")["l"], 1)); // => PASS
console.log(assertEqual(countLetters("lighthouse in the house")["i"], 2)); // => PASS
console.log(assertEqual(countLetters("lighthouse in the house")["g"], 12)); // => FAIL
