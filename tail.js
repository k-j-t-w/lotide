// Assert Equal Function

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉💖🎉 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫😒🚫 Assertion failed: ${actual} !== ${expected}`);
  }
};

// Tail function

const tail = function(array) {
  let tailArray = array.slice(1);
  return tailArray;
};


let test = [1, 2, 3, 4, 5];
console.log(tail(test));
assertEqual(tail(test)[0], test[1])
console.log(test);
assertEqual(tail([]).length, 0)
assertEqual(tail(["test"]).length, 0)
assertEqual(test.length, 5)