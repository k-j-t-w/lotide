

// without function removes items from an array. this is done by having an independant
//varible(shouldRemove) set for each value of the source array. Changing the boolean of
//shouldRemove triggers the removal of it(rather it simply doesn't add it) from the new array.

const without = function(source, itemsToRemove) {
  let newArray = [];

  for (let n = 0; n < source.length; n++) {
    const sourceElement = source[n];
    let shouldRemove = false;

    for (let i = 0; i < itemsToRemove.length; i++) {
      if (sourceElement === itemsToRemove[i]) {
        shouldRemove = true;
      }
    }
    if (!shouldRemove) {
      newArray.push(sourceElement);
    }
  }
  return newArray;
};

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);


// const primeNumbers = [1, 2, 4, 5, 6, 7, 10, 11];
// console.log(without(primeNumbers, [4, 6, 8, 9, 10]));

// const numbers = [1, 2, 4, 4, 5, 6, 4, 7];
// console.log(without(numbers, [4, 6, 8, 9]));
// console.log(without([1, 2, 3], [1]));

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => should PASS
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => should PASS

module.exports = without;