import sumOfRandomNumbers from "./sumOfRandomNumbers";

describe("sumOfRandomNumbers function", () => {
  test("should returns the sum of 5 random numbers", () => {
    const result = sumOfRandomNumbers(5);
    expect(result).toBeDefined();
    expect(result).toBeGreaterThan(0);
  });

  test("should returns the sum of 1000 random numbers", () => {
    const result = sumOfRandomNumbers(1000);
    expect(result).toBeDefined();
    expect(result).toBeGreaterThan(0);
  });

  test("should handles empty array", () => {
    const result = sumOfRandomNumbers(0);
    expect(result).toBe(0);
  });
});
