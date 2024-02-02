import linearFold from "../linearFold/linearFold.js";
import filter from "../filter/filter.js";

const averageOfEvenNumbers = (arr) => {
  const evens = filter(arr, (num) => num % 2 === 0);
  const sum1 = linearFold(evens, (prev, current) => prev + current, 0);
  const average = sum1 / evens.length;
  return average;
};

export default averageOfEvenNumbers;
