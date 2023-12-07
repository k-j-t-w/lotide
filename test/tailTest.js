const assert = require('chai').assert;
const tail = require('../tail');
let test = [1, 2, 3, 4, 5];

describe('#tail', () => {
  it('should return [2, 3, 4, 5] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(tail(test), [2, 3, 4, 5]);
  });
  it('should return [tail(test)[0]], test[1]', () => {
    assert.deepEqual(tail(test)[0], test[1]);
  });
  it('should return 0 for tail([]).length', () => {
    assert.deepEqual(tail([]).length, 0);
  });
  it('should return 0 for tail(["test"]).length]', () => {
    assert.deepEqual(tail(["test"]).length, 0);
  });
  it('should return 5 for test.length', () => {
    assert.deepEqual(test.length, 5);
  });
});
