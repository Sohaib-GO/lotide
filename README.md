# Lotide

A mini clone of the [Lodash](https://lodash.com) library.


## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sohaib-go/lotide`

**Require it:**

`const _ = require('@sohaib-go/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first element of an array
* `tail(array)`: returns the tail of an array
* `middle(array)`: returns the middle element of an array
* `assertEqual(actual, expected)`: asserts if two values are equal
* `assertArraysEqual(actual, expected)`: asserts if two arrays are equal
* `assertObjectsEqual(actual, expected)`: asserts if two objects are equal
* `countLetters(string)`: returns an object with the count of each letter in a string
* `countOnly(allItems, itemsToCount)`: returns an object with the count of each item in an array
* `eqArrays(array1, array2)`: returns true if two arrays are equal
* `eqObjects(object1, object2)`: returns true if two objects are equal
* `findKey(object, callback)`: returns the first key for which the callback returns a truthy value
* `findKeyByValue(object, value)`: returns the first key which contains the given value
* `flatten(array)`: returns a flattened version of a nested array
* `letterPositions(string)`: returns an object with the index of each letter in a string
* `map(array, callback)`: returns a new array based on the results of the callback function
* `takeUntil(array, callback)`: returns a slice of the array with elements taken from the beginning
* `without(source, itemsToRemove)`: returns a subset of a given array, removing unwanted elements

