/*
Create a Pythagorean function in JavaScript.

Note : The Pythagorean Theorem tells us that the relationship in every right triangle is : 
c2 = a2 + b2, where c is the hypotenuse and a, b are two legs of the triangle.
*/

console.log(pythagorean_theorem(2, 4));
console.log(pythagorean_theorem(3, 4));

function pythagorean_theorem(x, y) {
	return Math.pow(x, 2) + Math.pow(y,2);
}



































/*function pythagorean_theorem(x, y) {
	if ((typeof x !== 'number') || (typeof y !== 'number'))
		return false;
	return Math.sqrt(x * x + y * y);
}*/