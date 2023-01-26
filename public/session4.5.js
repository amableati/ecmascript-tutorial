/**
 * Math is a built-in object that has properties and methods for mathematical constants and functions. 
It's not a function object.
Math works with the Number type
Math is not a constructor. All properties and methods of Math are static.
 */

console.log(Math.PI);

console.log(Math.cbrt(Math.abs(-27)));//3

console.log(Math.ceil(Math.sqrt(Math.abs(-9.4))));//3.2

console.log(Math.floor(Math.sqrt(Math.abs(-16.18))));//4.0224

//rounds down and returns the largest integer less than or equal to a given number.
console.log(Math.round(Math.sqrt(Math.abs(-36.25))));//6.020797289396148

console.log(Math.pow(Math.sqrt(4), Math.cbrt(729)));//2, 9

console.log(Math.hypot(2,3));//4 + 9 = 13 = 3
//square root of the sum of squares of its arguments
console.log(Math.hypot(Math.cbrt(-125), Math.sqrt(144)));//5, 12 = 13

//25 + 144 = 13 * 13

const array1 = [1, 3, 2];
console.log(Math.max(...array1));//3
console.log(Math.min(...array1));//1