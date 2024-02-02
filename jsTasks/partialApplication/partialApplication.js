const partialApplication =
  (originalFunction, ...argsF) =>
  (...argsH) =>
    originalFunction(...argsF, ...argsH);
export default partialApplication;

// Alternative
const originalFunction = (x, y, z) => x + y + z;
const partiallyApplied = originalFunction.bind(null, 1);
const result = partiallyApplied(2, 3);
