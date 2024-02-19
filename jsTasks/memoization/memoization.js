const memoization = (originalFunction) => {
  const cache = new Map();

  return (memoized = (arg) => {
    if (!cache.has(arg)) {
      const result = originalFunction(arg);

      if (result !== undefined && !Number.isNaN(result)) {
        if (!isCyclic(result)) {
          cache.set(arg, result);
        }
      }
    }
    return cache.get(arg);
  });
};

const isCyclic = (obj) => {
  const seenObjects = [];

  const detect = (obj) => {
    if (obj && typeof obj === "object") {
      if (seenObjects.indexOf(obj) !== -1) {
        return true;
      }
      seenObjects.push(obj);
      for (const key in obj) {
        if (obj.hasOwnProperty(key) && detect(obj[key])) {
          return true;
        }
      }
    }
    return false;
  };

  return detect(obj);
};

export default memoization;
