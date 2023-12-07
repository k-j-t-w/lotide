
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

// const results1 = countLetters("one two three four");
// console.log(countLetters("Helloh"));
// assertEqual(results1["o"], 3);
// assertEqual(results1.t, 2);
// console.log(results1);

module.exports = countLetters;