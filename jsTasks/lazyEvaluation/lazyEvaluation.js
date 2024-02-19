const lazyEvaluation = (func, ...args) => {
  let result;
  return () => {
    if (!result) {
      result = func(...args);
    }
    return result;
  };
};

export default lazyEvaluation;
