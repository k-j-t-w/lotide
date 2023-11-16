const tail = function(array) {
  let tailArray = array.slice(1);
  return tailArray;
};


let test = [1, 2, 3, 4, 5];
console.log(tail(test));
console.log(test);