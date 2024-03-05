const partialApplication =
  (originalFunction, ...argsF) =>
  (...argsH) =>
    originalFunction(...argsF, ...argsH);

export default partialApplication;

// Alternative
function sum(x, y, z) {
  return x + y + z;
}
const partiallyApplied = sum.bind(null, 1);
const result = partiallyApplied(2, 3);
