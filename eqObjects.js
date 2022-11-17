const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

const eqObjects = (object1, object2) => {
  // check if both objects have the same number of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  // loop over keys in object1
  for (let key in object1) {
    // check if key exists in object1 and object2
    if (object1.hasOwnProperty(key) && object2.hasOwnProperty(key)) {
      // check if value is an array
      if (Array.isArray(object1[key])) {
        // check if arrays are equal
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        // check if values are equal
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    } else {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
// TEST CODE
// console.log(
//   assertEqual(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true)
// ); // => PASS
// console.log(
//   assertEqual(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true)
// ); // => PASS
// console.log(
//   assertEqual(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), false)
// ); // => FAIL

  