import lazyEvaluation from "./lazyEvaluation";

describe("lazyEvaluation function", () => {
  test("should returns a function", () => {
    const result = lazyEvaluation(() => {});
    expect(typeof result).toEqual("function");
  });

  test("should invokes the function lazily", () => {
    const add = jest.fn((a, b) => a + b);
    const lazyAdd = lazyEvaluation(add, 2, 3);
    expect(add).not.toHaveBeenCalled();

    const result = lazyAdd();
    expect(result).toEqual(5);
    expect(add).toHaveBeenCalledTimes(1);
    expect(add).toHaveBeenCalledWith(2, 3);
  });

  test("should works with different types of functions", () => {
    const concatenate = (str1, str2) => str1 + str2;
    const lazyConcatenate = lazyEvaluation(concatenate, "Hello", " World");

    expect(lazyConcatenate()).toEqual("Hello World");
  });

  test("should handles functions with varying numbers of arguments", () => {
    const multiply = (...args) => args.reduce((acc, val) => acc * val, 1);
    const lazyMultiply = lazyEvaluation(multiply, 2, 3, 4);

    expect(lazyMultiply()).toEqual(24);
  });
});
