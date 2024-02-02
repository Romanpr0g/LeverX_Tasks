const filter = (arr, callback, index = 0, result = []) => {
  const callStack = [];
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

export default filter;

//Alternative
const array = [1, 2, 3, 4, 5];
const evenNumbersWithFilter = array.filter((value) => value % 2 === 0);
