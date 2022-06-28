const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let sum = [];
  let count = increment;
  for (let i = 0; i <10; i++){
    sum.push(addNums(count));
    count += increment;
  }

  return sum;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let sum = [];
  let count = increment;
  for (let i = 0; i <10; i++){
    sum.push(addManyNums(count));
    count += increment;
  }

  return sum;

}

module.exports = [addNums10, addManyNums10];
