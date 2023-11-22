const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🐸🐸🐸 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🦞🦞🦞 Assertion failed: ${actual} !== ${expected}`);
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

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {

    if (Array.isArray(object1[key])) {

      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }

    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  return true;
};




const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);