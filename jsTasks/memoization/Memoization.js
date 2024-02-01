const memoization = (originalFunction) => {
  const cache = new Map();

  return (memoized = (arg) => {
    if (!cache.has(arg)) {
      const result = originalFunction(arg);

      if (result !== undefined && !Number.isNaN(result)) {
        if (!hasCircularReference(result)) {
          cache.set(arg, result);
        }
      }
    }
    return cache.get(arg);
  });
};

export default memoization;

const hasCircularReference = (obj, seen = new WeakSet()) => {
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
};
