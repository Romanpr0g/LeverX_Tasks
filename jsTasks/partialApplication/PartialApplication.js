function partialApplication(G, ...argsF) {
  return function H(...argsH) {
    return G(...argsF, ...argsH);
  };
}
module.exports = partialApplication;

// Alternative
const G = (x, y, z) => x + y + z;
const H = G.bind(null, 1);
const result = H(2, 3);