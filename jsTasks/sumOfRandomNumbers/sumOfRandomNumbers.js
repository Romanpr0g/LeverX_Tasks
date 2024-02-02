import linearFold from "../linearFold/linearFold";

const sumOfRandomNumbers = (size) => {
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 100);
  };

  const randomNumbers = linearFold(
    new Array(size).fill(0),
    (acc) => [...acc, getRandomNumber()],
    []
  );

  const sum = linearFold(randomNumbers, (prev, current) => prev + current, 0);

  return sum;
};

export default sumOfRandomNumbers;
