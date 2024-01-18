function curry(f) {
  function curried(...args) {
    if (args.length >= f.length) {
      return f(...args);
    } else {
      return function (...moreArgs) {
        return curried(...args, ...moreArgs);
      };
    }
  }
  return curried;
}

module.exports = curry;