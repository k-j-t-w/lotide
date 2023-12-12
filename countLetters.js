
const countLetters = function(stringToCount) {
  let result = {};
  let stringArray = stringToCount.split("");

  for (let letter of stringArray) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }


  return result;
};


module.exports = countLetters;