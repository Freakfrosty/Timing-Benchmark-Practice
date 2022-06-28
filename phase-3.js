const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

  // Your code here
  let sum = [];
  let count = increment;
  console.time();

  for (let i = 0; i <10; i++){
    sum.push(addNums(count));
    count += increment;
    console.timeLog();
    Date.now();
  }

  console.timeEnd()
  return sum;

}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code

  // Your code here
  let sum = [];
  let count = increment;
  console.time();

  for (let i = 0; i <10; i++){
    sum.push(addManyNums(count));
    count += increment;
    console.timeEnd()
    Date.now();

  }

  console.timeEnd()
  return sum;

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
