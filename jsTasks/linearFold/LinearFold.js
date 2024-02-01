const linearFold = (array, callback, initialValue, index = 0) => {
  if (index === array.length) {
    return initialValue !== undefined ? initialValue : array[0];
  }

  const currentValue = array[index];
  const newAccumulator = callback(
    initialValue !== undefined ? initialValue : array[0],
    currentValue,
    index,
    array
  );

  return linearFold(array, callback, newAccumulator, index + 1);
};

export default linearFold;

//Alternative

const array = [1, 2, 3, 4, 5];
const sum = array.reduce((prev, current) => prev + current, 0);
