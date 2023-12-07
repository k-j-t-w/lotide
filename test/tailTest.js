const assertEqual = require('../assertEqual');
const tail = require('../tail');

let test = [1, 2, 3, 4, 5];
assertEqual(tail(test)[0], test[1]);
assertEqual(tail([]).length, 0);
assertEqual(tail(["test"]).length, 0);
assertEqual(test.length, 5);