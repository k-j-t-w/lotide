# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @k-j-t-w/lotide`

**Require it:**

`const _ = require('@k-j-t-w/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: Asserts if given arrays are equal
* `assertEqual(actual, expected)`: Asserts if given values are equal
* `assertObjectsEqual(obj1, obj2)`: Asserts if given objects are equal
* `countLetters(stringToCount)`: Returns a count of letters in a string (excludes spaces)
* `countOnly(allItems, itemsToCount)`: Counts specified items in an object
* `eqArrays(arr1, arr2)`: returns a boolean, true if arrays are equal, false if not
* `eqObjects(object1, object2)`: returns a boolean, true if objects are equal, false if not
* `findKey(object, callback)`: returns the key of a key value pair in an object depending on a callback
* `findKeyByValue(objectToSearch, valueToFind)`: returns the key to the specified value of a specified object
* `flatten(array)`: flattens an array (gets rid of nested arrays)
* `head(array)`: returns the head head of an array (array[0])
* `letterPositions(sentence)`: creates an object that stores letter positions for a given string
* `map(array, callback)`: creates a new array with the callback function applied to every element
* `middle(array)`: returns the middle of an array as an array, one element if array odd, 2 elements if array even
* `tail(array)`: returns the tail of an array (an array that excludes the 0th element of the array)
* `takeUntil(array, callback)`: returns a new array that takes elements of the source array until it hits a specified value (determined by the callback)
* `without(source, itemsToRemove)`: returns an array that is the source array, but with specified elements removed (determined by itemsToRemoveArray)