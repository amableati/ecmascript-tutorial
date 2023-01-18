/*
Create a function that takes two numbers as arguments and returns their sum.

Examples
sumOfArgs(3, 2) ➞ 5
sumOfArgs(-3, -6) ➞ -9
sumOfArgs(7, 3, 3) ➞ 13
sumOfArgs(7, 3, 3, 1, 10, 4, 5) ➞ 33

Notes
Don't forget to return the result.
*/

function sumOfArgs(a, b, ...c) {
	let result=a+b, start=0;
	while(start < c.length){
		result += +c[start];
		start+=1;
	}
	return result;
}

console.log(sumOfArgs(7, 3, 3, 1, 10, 4, 5));

