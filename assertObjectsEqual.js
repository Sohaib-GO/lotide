const eqObjects = require("./eqObjects");

const assertObjectsEqual = (actual, expected) => {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

// TEST CODE

// console.log(assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" })); // => PASS
// console.log(assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" })); // => PASS
// console.log(assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "12" })); // => FAIL
