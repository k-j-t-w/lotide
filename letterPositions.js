

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

module.exports = letterPositions;