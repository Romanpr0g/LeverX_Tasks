import sumOfRandomNumbers from "./sumOfRandomNumbers";

describe("sumOfRandomNumbers function", () => {
  test("should handles empty array", () => {
    const result = sumOfRandomNumbers(0);
    expect(result).toBe(0);
  });
});
