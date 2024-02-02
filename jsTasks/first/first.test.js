import firstElement from "./first";

describe("firstElement function", () => {
  test("should returns undefined for empty array", () => {
    expect(firstElement([], () => true)).toEqual(undefined);
  });

  test("should finds the first element that satisfies the condition", () => {
    const arr = [1, 2, 3, 4, 5];
    const conditionMoreThanTwo = (value) => value > 2;
    const conditionEvenNum = (value) => value % 2 === 0;
    expect(firstElement(arr, conditionMoreThanTwo)).toEqual(3);
    expect(firstElement(arr, conditionEvenNum)).toEqual(2);
  });

  test("should returns undefined if no element satisfies the condition", () => {
    const arr = [1, 2, 3, 4, 5];
    const condition = (value) => value > 5;

    expect(firstElement(arr, condition)).toEqual(undefined);
  });

  test("should works with an array of objects and custom condition", () => {
    const arr = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 22 },
    ];
    const condition = (person) => person.age > 25;

    expect(firstElement(arr, condition)).toEqual({ name: "Bob", age: 30 });
  });
});
