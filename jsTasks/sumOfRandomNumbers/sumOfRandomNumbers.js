import linearFold from "../linearFold/linearFold.js";
import { linearUnfoldCallStack } from "../linearUnfold/linearUnfold.js";

const sumOfRandomNumbers = (size) => {
  const randomNumbers = linearUnfoldCallStack(callback, size);
  return linearFold(randomNumbers, (prev, current) => prev + current, 0);
};

const callback = (acc) => {
  if (acc > 0) {
    const newRandomNumber = getRandomNumber();
    return { value: newRandomNumber, state: acc - 1 };
  } else {
    return { value: null, state: acc };
  }
};

const getRandomNumber = () => {
  return Math.floor(Math.random() * 100);
};

export default sumOfRandomNumbers;
