



const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

// const words = ["ground", "control", "to"];

// const results1 = map(words, word => word[0]);
// console.log(results1);

// assertArraysEqual((map(words, word => word + ' :--)')), ["ground :--)", "control :--)", "to :--)"]);

module.exports = map;