import { filterCallStack, filter } from "./filter";

describe("filter function", () => {
  test("should filter elements based on the provided callback", () => {
    const arr = [1, 2, 3, 4, 5];
    const callback = (value) => value > 2;
    expect(filter(arr, callback)).toEqual([3, 4, 5]);
    expect(filterCallStack(arr, callback)).toEqual([3, 4, 5]);
  });

  test("should work correctly with an empty array", () => {
    const arr = [];
    const callback = (value) => value > 0;
    expect(filter(arr, callback)).toEqual([]);
    expect(filterCallStack(arr, callback)).toEqual([]);
  });

  test("should handle the index parameter correctly", () => {
    const arr = ["a", "b", "c", "d"];
    const callback = (value, index) => index % 2 === 0;
    expect(filter(arr, callback)).toEqual(["a", "c"]);
    expect(filterCallStack(arr, callback)).toEqual(["a", "c"]);
  });

  test("should not modify the original array", () => {
    const arr = [1, 2, 3, 4, 5];
    const originalArray = [...arr];
    const callback = (value) => value > 2;

    filterCallStack(arr, callback);
    filter(arr, callback);
    expect(arr).toStrictEqual(originalArray);
  });

  test("should work correctly with a custom starting index", () => {
    const arr = [3, 2, 3, 4, 1, 5];
    const callback = (value, index) => value > 2 && index >= 2;
    expect(filter(arr, callback)).toEqual([3, 4, 5]);
    expect(filterCallStack(arr, callback)).toEqual([3, 4, 5]);
  });

  test("should not cause stack overflow", () => {
    const recursiveCallback = () => {
      return true;
    };

    const largeArray = Array.from({ length: 100000 }).fill(0);
    expect(() => filterCallStack(largeArray, recursiveCallback)).not.toThrow();
  });
});
