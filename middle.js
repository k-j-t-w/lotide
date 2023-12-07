const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉💖🎉 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫😒🚫 Assertion failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  
  }
  return true;
};


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✔✔✔ Assertion passed: ${arr1} === ${arr2}.`);
  } else {
    console.log(`🚫🚫🚫 Assertion failed: ${arr1} !== ${arr2}.`);
  }
};


const middle = function(array) {
  let middleElement = [];
  if (array.length <= 2) {
    return middleElement;
  }
  if (array.length % 2 === 0) {
    middleElement.push(array[(array.length / 2) - 1]);
    middleElement.push(array[(array.length / 2)]);
  } else {
    middleElement.push(array[(array.length - 1) / 2]);
  }
  return middleElement;
};


console.log(middle([1, 2]));

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3 ,4]), [2, 3]);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1]), []);