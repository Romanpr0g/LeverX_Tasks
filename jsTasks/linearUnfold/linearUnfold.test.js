import { linearUnfoldCallStack, linearUnfold } from "./linearUnfold";

describe("linearUnfold function", () => {
  test("returns an empty array if callback returns falsy value", () => {
    const callback = () => ({ value: undefined, state: undefined });
    expect(linearUnfold(callback, 0)).toEqual([]);
    expect(linearUnfoldCallStack(callback, 0)).toEqual([]);
  });

  test("should returns an empty array if function not take a currentValue", () => {
    const callback = (currentValue) => {
      const nextElement = currentValue * 2;
      const nextState = currentValue < 5 ? currentValue + 1 : null;
      return { value: nextElement, state: nextState };
    };
    expect(linearUnfold(callback)).toEqual([]);
    expect(linearUnfoldCallStack(callback)).toEqual([]);
  });

  test("should unfolds array based on callback", () => {
    const callback = (currentValue) => {
      const nextElement = currentValue * 2;
      const nextState = currentValue < 5 ? currentValue + 1 : null;
      return { value: nextElement, state: nextState };
    };
    expect(linearUnfold(callback, 1)).toEqual([2, 4, 6, 8, 10]);
    expect(linearUnfoldCallStack(callback, 1)).toEqual([2, 4, 6, 8, 10]);
  });

  test("should handles different types of values in callback", () => {
    let nextState;
    const callback = (currentValue) => {
      if (currentValue < 5) {
        nextState = currentValue + 1;
      } else {
        return { value: null, state: nextState };
      }
      return { value: `Value: ${currentValue}`, state: nextState };
    };
    expect(linearUnfold(callback, 1)).toEqual([
      "Value: 1",
      "Value: 2",
      "Value: 3",
      "Value: 4",
    ]);
    expect(linearUnfoldCallStack(callback, 1)).toEqual([
      "Value: 1",
      "Value: 2",
      "Value: 3",
      "Value: 4",
    ]);
  });

  test("should not cause stack overflow", () => {
    const recursiveCallback = (value) => {
      if (value < 100000) {
        return { value: value + 1, state: value + 1 };
      } else {
        return { value: null, state: null };
      }
    };

    expect(() => linearUnfoldCallStack(recursiveCallback, 0)).not.toThrow();
  });
});
