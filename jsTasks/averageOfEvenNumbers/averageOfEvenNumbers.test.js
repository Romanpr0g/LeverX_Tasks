import averageOfEvenNumbers from "./averageOfEvenNumbers";

describe("averageOfEvenNumbers function", () => {
  test("should return the average of the even numbers in the array", () => {
    const result = averageOfEvenNumbers([1, 2, 3, 4, 5, 6]);
    expect(result).toBeDefined();
    expect(result).toBe(4);
  });

  test("should handles empty array", () => {
    const result = averageOfEvenNumbers([]);
    expect(result).toBe(undefined);
  });

  test("should handles array with no even numbers", () => {
    const result = averageOfEvenNumbers([1, 3, 5, 7]);
    expect(result).toBe(undefined);
  });
});
