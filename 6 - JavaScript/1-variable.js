console.log("Hello World!");

// Variable: allows us to store data.
// let - mutable/changeable - block-scope
// const - immutable/unchangeable
// var - mutable/changeable - global-scope
let firstName = "John";
console.log("Firstname:", firstName);
firstName = "Jane";
console.log("Firstname:", firstName);

const birthday = "02-14-2000";
console.log("Birthday:", birthday)
// birthday = "03-14-1999" This will return a TypeError.

var lastName = "Doe";
console.log("Lastname:", lastName);
var lastName = "Smith"
console.log("Lastname:", lastName);
