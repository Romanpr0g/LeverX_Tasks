import linearFold from "../linearFold/linearFold.js";
import { filter } from "../filter/filter.js";

const averageOfEvenNumbers = (arr) => {
  const evens = filter(arr, (num) => num % 2 === 0);
  if (evens.length === 0) {
    return undefined;
  } else {
    return (
      linearFold(evens, (prev, current) => prev + current, 0) / evens.length
    );
  }
};

export default averageOfEvenNumbers;
