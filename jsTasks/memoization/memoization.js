const memoization = (originalFunction) => {
  const cache = new Map();

  return (arg) => {
    if (!cache.has(arg)) {
      const result = originalFunction(arg);

      if (result !== undefined && !Number.isNaN(result)) {
        try {
          JSON.stringify(result);
          cache.set(arg, result);
        } catch {}
      }
    }

    return cache.get(arg);
  };
};

export default memoization;
