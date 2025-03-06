// 1. Multiply num1 and num2 to get 62
let num1 = 2;
let num2 = 31;
let multiply = num1 * num2; // should be 62

// 2. Generate a random integer greater than o 
let random = Math.floor(Math.random() * 10) + 1;

// 3. Calculate remainder of num3 divided by num4, should  be 4
let num3 = 16;
let num4 = 6;
let mod = num3 % num4; // should be 4 

// 4. Find the highest number in a set 
let max = Math.max(5, 10, 15, 20); // should be 20 

// Export variables if needed for testing 
module.exports = { multiply, random, mod, max }; 