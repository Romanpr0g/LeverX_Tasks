const firstElement = (array, condition) => {
  const index = 0;
  return firstElementRecursive(array, condition, index);
};

const firstElementRecursive = (array, condition, index) => {
  if (index === array.length) {
    return undefined;
  }

  if (condition(array[index], index, array)) {
    return array[index];
  }

  return firstElementRecursive(array, condition, index + 1);
};

export default firstElement;
