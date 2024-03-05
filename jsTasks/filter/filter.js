const filterCallStack = (arr, callback) => {
  const callStack = [];
  const result = [];
  const index = 0;
  callStack.push({ arr, callback, index, result });
  while (callStack.length > 0) {
    const currentCall = callStack.pop();
    const { arr, callback, index, result } = currentCall;

    if (index === arr.length) {
      return result;
    } else {
      if (callback(arr[index], index, arr)) {
        result.push(arr[index]);
      }
      callStack.push({ arr, callback, index: index + 1, result });
    }
  }
};

const filter = (arr, callback) => {
  const result = [];
  const index = 0;
  return filterRecursive(arr, callback, index, result);
};

const filterRecursive = (arr, callback, index, result) => {
  if (index === arr.length) {
    return result;
  }

  if (callback(arr[index], index, arr)) {
    result.push(arr[index]);
  }

  return filterRecursive(arr, callback, index + 1, result);
};

export { filterCallStack, filter };

//Alternative
const array = [1, 2, 3, 4, 5, 6];
const evenNumbersWithFilter = array.filter((value) => value % 2 === 0);
