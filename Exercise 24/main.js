"use strict";
// More Conditional Tests: 
// You don’t have to limit the number of tests you create to 10. If you want to try more 
// comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal 
// to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in an array
// • Test whether an item is not in an array
// Creating a variable
let apple = "apple";
// Test for equality
console.log("apple is equal to apple");
console.log(apple == "apple");
// Test for inequality
console.log("apple is not equal to apple");
console.log(apple !== "apple");
// Test using lower case function
//  Equal to
let uppercaseApple = "APPLE";
console.log("APPLE is equal to apple after converting to lowercase");
console.log(uppercaseApple.toLocaleLowerCase() == "apple");
// Not equal to
console.log("APPLE is not equal to apple after converting to lowercase");
console.log(uppercaseApple.toLocaleLowerCase() != "apple");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal 
let ten = 10;
let twenty = 20;
// Equal to
console.log("ten is equal to twenty");
console.log(ten == twenty);
// Not equal to
console.log("ten is not equal to twenty");
console.log(ten != twenty);
// Greater than
console.log("twenty os greater than ten");
console.log(twenty > ten);
// Less than
console.log("twenty is less than ten");
console.log(twenty < ten);
// Greater than or equal to ten
console.log("twenty is greater than or equal to ten");
console.log(twenty >= ten);
// Less than or equal to ten
console.log("twenty is less than or equal to ten");
console.log(twenty <= ten);
// • Tests using "and" and "or" operators
// Using && (and)
console.log("twenty is not equal to ten and twenty is greater than ten");
console.log(twenty != ten && twenty > ten);
console.log("twenty is not equal to ten and ten is greater than twenty");
console.log(twenty != ten && ten > twenty);
//  Using || (or) 
console.log("twenty is greater than ten or twenty is equal to twenty");
console.log(twenty > ten || twenty == twenty);
console.log("twenty is less than ten or twenty is not equal to twenty");
console.log(twenty < ten || twenty != twenty);
let fruits = ["apple", "orange", "banana"];
// Test whether an item is an array
console.log("orange is included in my fruit array");
console.log(fruits.includes("orange"));
// • Test whether an item is not in an array
console.log("orange is not included in my fruit array");
console.log(!fruits.includes("orange"));
