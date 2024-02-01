const lazyEvaluation = (func, ...args) => {
  return () => {
    return func(...args);
  };
};

export default lazyEvaluation;
