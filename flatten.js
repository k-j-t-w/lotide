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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉💖🎉 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫😒🚫 Assertion failed: ${actual} !== ${expected}`);
  }
};

const flatten = function(array) {
  let flattened = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (Array.isArray(element)) {
      for (let n of element) {
        flattened.push(n);
      }
    } else {
      flattened.push(element);
    }
    
  }
  return flattened;
};
console.log(flatten([1, 2, [3, 4], 5, [6, 7]]));