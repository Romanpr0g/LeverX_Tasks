function memoization(F) {
  const cache = new Map();

  return function G(arg) {
    if (!cache.has(arg)) {
      const result = F(arg);

      if (result !== undefined && !Number.isNaN(result)) {
        if (!hasCircularReference(result)) {
          cache.set(arg, result);
        }
      }
    }
    return cache.get(arg);
  };
}

module.exports = memoization;

function hasCircularReference(obj, seen = new WeakSet()) {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }

  if (seen.has(obj)) {
    return true;
  }

  seen.add(obj);

  for (const key in obj) {
    if (hasCircularReference(obj[key], seen)) {
      return true;
    }
  }

  return false;
}