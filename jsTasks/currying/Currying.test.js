const curry = require('./Currying');

describe('curry function', () => {
  test('should curry a function with multiple parameters', () => {
    const add = (a, b, c) => a + b + c;

    const curriedAdd = curry(add);

    expect(curriedAdd(1)(2)(3)).toEqual(6);
  });

  test('should work correctly with a mix of partially applied and fully applied arguments', () => {
    const multiply = (a, b, c) => a * b * c;

    const curriedMultiply = curry(multiply);

    expect(curriedMultiply(2)(3, 4)).toEqual(24);
  });

  test('should handle functions with varying number of parameters', () => {
    const concatenate = (a, b, c, d) => a + b + c + d;

    const curriedConcatenate = curry(concatenate);

    expect(curriedConcatenate('a')('b', 'c')('d')).toEqual('abcd');
  });

  test('should return a function until all arguments are provided', () => {
    const subtract = (a, b, c) => a - b - c;

    const curriedSubtract = curry(subtract);

    const partiallyApplied = curriedSubtract(10);

    expect(typeof partiallyApplied).toEqual('function');

    const fullyApplied = partiallyApplied(5, 2);

    expect(fullyApplied).toEqual(3);
  });

  test('should handle functions with no parameters', () => {
    const constantValue = () => 42;

    const curriedConstantValue = curry(constantValue);

    expect(curriedConstantValue()).toEqual(42);
  });
});