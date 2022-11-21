const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5,6,7]), 5); // => should pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // => should pass
assertEqual(head([6, 5]), 5); // => should fail