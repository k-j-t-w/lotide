const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🐸🐸🐸 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🦞🦞🦞 Assertion failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(objectToSearch, valueToFind) {
  let foundKey = undefined;

  for (const key in objectToSearch) {
    if (objectToSearch[key] === valueToFind) {
      foundKey = key;
    }
  }

  return foundKey;
};




const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);