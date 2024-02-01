import memoization from "./memoization";

const square = jest.fn((x) => x * x);
const identity = jest.fn((x) => x);
const returnUndefined = jest.fn(() => undefined);
const returnNaN = jest.fn(() => NaN);

describe("memoization function", () => {
  test("should cache results and not recompute for the same argument", () => {
    const memoizedSquare = memoization(square);

    const result1 = memoizedSquare(5);
    const result2 = memoizedSquare(5);

    expect(result1).toEqual(25);
    expect(result2).toEqual(25);

    expect(square).toHaveBeenCalledTimes(1);
  });

  test("should handle functions that accept undefined", () => {
    const memoizedUndefined = memoization(returnUndefined);

    const result = memoizedUndefined("test");

    expect(result).toEqual(undefined);

    expect(returnUndefined).toHaveBeenCalledTimes(1);
  });

  test("should handle functions that accept NaN", () => {
    const memoizedNaN = memoization(returnNaN);

    const result = memoizedNaN("test");

    expect(result).toEqual(undefined);

    expect(returnNaN).toHaveBeenCalledTimes(1);
  });

  test("should handle functions that accept circular references", () => {
    const circularObject = (obj) => obj.owner;
    const home = {
      owner: {
        name: "Misha",
      },
    };
    home.owner.home = home;
    const memoizedCircularReferences = memoization(circularObject);
    const result = memoizedCircularReferences(home);
    expect(result).toEqual(undefined);

    const circularFunction = () => circularFunction;
    const memoizedCircular = memoization(circularFunction);
    const result1 = memoizedCircular("test");
    expect(result1).toEqual(circularFunction);
  });

  test("should compute and cache results for different arguments", () => {
    const memoizedIdentity = memoization(identity);

    const result1 = memoizedIdentity("test1");
    const result2 = memoizedIdentity("test2");

    expect(result1).toEqual("test1");
    expect(result2).toEqual("test2");

    expect(identity).toHaveBeenCalledTimes(2);
  });
});
