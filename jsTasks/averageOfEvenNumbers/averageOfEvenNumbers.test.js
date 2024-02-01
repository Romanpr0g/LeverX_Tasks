import averageOfEvenNumbers from "./averageOfEvenNumbers";

describe("averageOfEvenNumbers function", () => {
  test("returns the average of even numbers in the array", () => {
    const result = averageOfEvenNumbers([1, 2, 3, 4, 5, 6]);
    expect(result).toBeDefined();
    expect(result).toBe(4);
  });

  test("should handles empty array", () => {
    const result = averageOfEvenNumbers([]);
    expect(result).toBeDefined();
    expect(result).toBe(NaN);
  });

  test("should handles array with no even numbers", () => {
    const result = averageOfEvenNumbers([1, 3, 5, 7]);
    expect(result).toBeDefined();
    expect(result).toBe(NaN);
  });
});
