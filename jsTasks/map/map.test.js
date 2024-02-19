import map from "./map";

describe("map function", () => {
  test("should map array elements based on the provided callback", () => {
    const arr = [1, 2, 3, 4, 5];
    const callback = (value) => value * 2;

    expect(map(arr, callback)).toEqual([2, 4, 6, 8, 10]);
  });

  test("should work correctly with an empty array", () => {
    const arr = [];
    const callback = (value) => value * 2;

    expect(map(arr, callback)).toEqual([]);
  });

  test("should handle the index parameter correctly", () => {
    const arr = ["a", "b", "c", "d"];
    const callback = (value, index) => value + index;

    expect(map(arr, callback)).toEqual(["a0", "b1", "c2", "d3"]);
  });

  test("should not modify the original array", () => {
    const arr = [1, 2, 3, 4, 5];
    const originalArray = [...arr];
    const callback = (value) => value * 2;

    map(arr, callback);

    expect(arr).toStrictEqual(originalArray);
  });
});
