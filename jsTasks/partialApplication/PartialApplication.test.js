const partialApplication = require('./PartialApplication');

describe('partialApplication function', () => {
  test('should returns a function', () => {
    const result = partialApplication(() => {});
    expect(typeof result).toEqual('function');
  });

  test('should partially applies arguments correctly', () => {
    const add = (...args) => {
      if (args.length === 0) {
        return 0;
      } else {
        return args[0] + add(...args.slice(1));
      }
    }
  
    const add5 = partialApplication(add, 5);

    expect(add5(3)).toEqual(8);
  });

  test('should works with multiple partial applications', () => {
    const multiply = (...args) => args.reduce((acc, val) => acc * val, 1);
    
    const multiplyByTwo = partialApplication(multiply, 2);
    const multiplyByTwoAndThree = partialApplication(multiplyByTwo, 3);

    expect(multiplyByTwoAndThree(4)).toEqual(24);
  });
});
