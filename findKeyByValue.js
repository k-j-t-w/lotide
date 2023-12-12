

const findKeyByValue = function(objectToSearch, valueToFind) {
  let foundKey = undefined;

  for (const key in objectToSearch) {
    if (objectToSearch[key] === valueToFind) {
      foundKey = key;
    }
  }

  return foundKey;
};

module.exports = findKeyByValue;