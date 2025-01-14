// Control Flow Structures
// 1. Conditional Statements

//     1. Conditional: if, else if, else statement
let temperature = 50;
if (temperature < 0) {
  console.log("It's freezing.");
} else if (temperature >= 0 && temperature < 20) {
  // Range: 0 - 19
  console.log("It's cool outside.");
} else if (temperature >= 20 && temperature < 30) {
  console.log("It's warm outside.");
} else {
  console.log("Desert HOT!");
}

// 2. Looping Statements
// execute a block of code until a specific condition is met.

// 1. For Loop

/*
Parts of the loop
1. Variable Initialization
2. Condition Expression
3. Increment / Decrement
*/

for (let i = 1; i <= 3; i++) {
  console.log("For Loop Count:", i);
}
// i = 3 + 1 = 4

// 2. while loop

let count = 1;
while (count <= 3) {
  console.log("While loop counter:", count);
  count++;
}
