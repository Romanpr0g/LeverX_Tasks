function firstElement(array, condition, index = 0) {
  if (index === array.length) {
    return undefined;
  }

  if (condition(array[index], index, array)) {
    return array[index];
  }

  return firstElement(array, condition, index + 1);
}

module.exports = firstElement;