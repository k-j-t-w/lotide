

const letterPositions = function(sentence) {
  const results = {};
  let sentenceArray = sentence.split("");

  for (let i = 0; i < sentenceArray.length; i++) {
    const letter = sentenceArray[i];
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};


// const result1 = letterPositions("hello jim");
// console.log(result1);
// assertArraysEqual(result1["h"], [0]);
// assertArraysEqual(result1["e"], [1]);
// assertArraysEqual(result1["l"], [2, 3]);
// assertArraysEqual(result1["o"], [4]);




/*
1. loop through string
2. create key-value(array) pairs for each letter
3. indicate the position of each letter(this could be done by using the index of a for loop)


*/
module.exports = letterPositions;