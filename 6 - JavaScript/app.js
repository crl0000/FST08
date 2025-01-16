// Arrays
let fruits = ["Apple", "Banana", "Cherry", "Grape"];
console.log("Fruits:", fruits);
console.log("First Fruit:", fruits[0]);
console.log("Last Fruit:", fruits[fruits.length - 1]);
console.log("Length of Fruits:", fruits.length);

// . - Dot Notation: used to access the properties and methods.
// properties - information/data about something (array).
// methods - function that belongs to something (array).

// Update an element
fruits[0] = "Avocado";
console.log("Fruits:", fruits);

// Adding a new element
// .push(): allow us to add an element/s at the end of the array.
fruits.push("Dewberry", "Apple");
console.log("Fruits:", fruits);

// Deleting an element
// .pop(): allow use to delete an element at the end of the array.
fruits.pop();
console.log("Fruits:", fruits);

// Searching element
// .includes(): check if an element exists (case-sensitive)
// Return: true or false
console.log("Is Banana included?", fruits.includes("Banana"));


// .forEach(): allow us to pass a function, and execute this function to each element of the array.
fruits.forEach(function (fruit){
    console.log("Fruit:", fruit)
})