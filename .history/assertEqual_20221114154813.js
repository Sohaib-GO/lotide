const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}
// the expected output is:
// ✅✅✅ Assertion Passed: Lighthouse Labs === Lighthouse Labs
// ✅✅✅ Assertion Passed: Bootcamp === Bootcamp
// 🛑🛑🛑 Assertion Failed: I love Lighthouse !== Lighthouse Labs
