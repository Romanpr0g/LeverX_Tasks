const linearUnfold = (callback, currentValue, result = []) => {
  const callStack = [];
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

export default linearUnfold;
