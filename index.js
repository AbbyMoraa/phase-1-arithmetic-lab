// Write your code here
// multiply should equal 62
let num1 = 31;
let num2 = 2;
let multiply = num1 * num2;

// random should be a random integer greater than 0
let random = Math.floor(Math.random() * 100) + 1;

// mod should be an equation that gives remainder 4
let num3 = 44;
let num4 = 10;
let mod = num3 % num4;

// max should return 20
let max = Math.max(1, 2, 3, 20);

// export so tests can see them (if using Node.js)
module.exports = { multiply, random, mod, max };
