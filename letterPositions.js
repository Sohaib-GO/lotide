
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

module.exports = letterPositions;

