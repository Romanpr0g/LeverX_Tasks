const filter = require('../filter/Filter.js');
const linearFold = require('../linearFold/LinearFold.js');

const numbers4 = [1, 2, 3, 4, 5];
const evens = filter(numbers4, (num) => num % 2 === 0);
const sum1 = linearFold(evens, (prev, current) => prev + current, 0);
const average = sum1 / evens.length;
console.log(average);