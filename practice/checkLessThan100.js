/*
Less Than 100?
Given two numbers, 
return true if the sum of both numbers is less than 100. 
Otherwise return false.

Examples
lessThan100(22, 15) ➞ true		// 22 + 15 = 37
lessThan100(83, 34) ➞ false		// 83 + 34 = 117
lessThan100(3, 77) ➞ true
*/
console.log(lessThan100(110, -1.5));
console.log(lessThan100(-83, 34));
console.log(lessThan100(3, 77));
console.log(lessThan100("A", 0x123));
console.log(lessThan100(3, 77));


function lessThan100(a, b) {
	if(a+b<100) return true;
	else return false;
}