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

module.exports = without;