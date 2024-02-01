const curry = (originalFunction) => {
  const curried = (...args) => {
    if (args.length >= originalFunction.length) {
      return originalFunction(...args);
    } else {
      return (...moreArgs) => {
        return curried(...args, ...moreArgs);
      };
    }
  };
  return curried;
};

export default curry;
