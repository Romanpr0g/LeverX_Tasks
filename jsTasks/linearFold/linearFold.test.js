import linearFold from "./linearFold";

describe("linearFold function", () => {
  test("should fold the array correctly with the provided callback and initial value", () => {
    const array = [1, 2, 3, 4, 5];
    const callback = (accumulator, currentValue) => accumulator + currentValue;
    const initialValue = 0;

    expect(linearFold(array, callback, initialValue)).toEqual(15);
  });

  test("should work correctly with an empty array and the provided initial value", () => {
    const array = [];
    const callback = (accumulator, currentValue) => accumulator + currentValue;
    const initialValue = 10;

    expect(linearFold(array, callback, initialValue)).toEqual(10);
  });

  test("should handle the index parameter correctly", () => {
    const array = ["a", "b", "c", "d"];
    const callback = (accumulator, currentValue, index) =>
      accumulator + currentValue + index;
    const initialValue = "";

    expect(linearFold(array, callback, initialValue)).toEqual("a0b1c2d3");
  });

  test("should not modify the original array", () => {
    const array = [1, 2, 3, 4, 5];
    const originalArray = [...array];
    const callback = (accumulator, currentValue) => accumulator + currentValue;
    const initialValue = 0;

    linearFold(array, callback, initialValue);

    expect(array).toStrictEqual(originalArray);
  });

  test("should work correctly with a custom starting index", () => {
    const array = [1, 2, 3, 4, 5];
    const callback = (accumulator, currentValue, index) =>
      index >= 2 && accumulator + currentValue;
    const initialValue = 0;

    expect(linearFold(array, callback, initialValue)).toEqual(12);
  });
});
