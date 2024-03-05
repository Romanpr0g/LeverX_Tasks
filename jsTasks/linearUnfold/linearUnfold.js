const linearUnfoldCallStack = (callback, currentValue) => {
  const callStack = [];
  const result = [];
  callStack.push({ callback, currentValue, result });
  while (callStack.length > 0) {
    const currentCall = callStack.pop();
    const { callback, currentValue, result } = currentCall;
    const { value, state } = callback(currentValue);
    if (!value) {
      return result;
    } else {
      result.push(value);
      callStack.push({ callback, currentValue: state, result });
    }
  }
};

const linearUnfold = (callback, currentValue) => {
  const result = [];
  return linearUnfoldRecursive(callback, currentValue, result);
};

const linearUnfoldRecursive = (callback, currentValue, result) => {
  const { value, state } = callback(currentValue);
  if (!value) {
    return result;
  }
  result.push(value);
  return linearUnfoldRecursive(callback, state, result);
};

export { linearUnfoldCallStack, linearUnfold };
