// Functions
// Reusable blocks of code that can be executed whenever needed.
// 1. Function Definition
function greet() {
  console.log("Hello, welcome to the world of functions!");
  console.log("Let's go!!");
}

// Calling a function (invoking a function)
greet();
greet();
greet();

// 2. Function definition with parameters.
// parameters - placeholder
// arguments - values passed to the functions parameters.
function sum(num1, num2){
    return num1 + num2
}
console.log("Sum of 10 and 20:", sum(10, 20))
console.log("Sum of 30 and 50:", sum(30, 50))