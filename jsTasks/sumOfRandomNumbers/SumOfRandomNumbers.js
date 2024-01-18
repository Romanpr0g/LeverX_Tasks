const linearFold = require('../linearFold/LinearFold.js');

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

const randomNumbers = linearFold(new Array(100).fill(0), (acc) => [...acc, getRandomNumber()], []);
const sum2 = linearFold(randomNumbers, (prev, current) => prev + current, 0);
console.log(sum2);