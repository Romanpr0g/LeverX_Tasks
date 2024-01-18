function lazyEvaluation(fn, ...args) {
  return function () {
    return fn(...args);
  };
}

module.exports = lazyEvaluation;