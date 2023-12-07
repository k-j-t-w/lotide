

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

module.exports = flatten;