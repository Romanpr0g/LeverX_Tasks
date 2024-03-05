const linearFold = (array, callback, initialValue) => {
  const index = 0;
  return linearFoldRecursive(array, callback, initialValue, index);
};

const linearFoldRecursive = (array, callback, initialValue, index) => {
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
  return linearFoldRecursive(array, callback, newAccumulator, index + 1);
};

export default linearFold;

//Alternative
const array = [1, 2, 3, 4, 5];
const sum = array.reduce((prev, current) => prev + current, 0);
