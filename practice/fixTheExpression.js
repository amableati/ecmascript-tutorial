/*
Fix the code in the Code tab so the function returns true if and only if x is equal to 7.

Examples
isSeven(4) ➞ false
isSeven(9) ➞ false
isSeven(7) ➞ true

Notes
The bug can be hard to find, so look closely!
*/

console.log(isSeven(4));
console.log(isSeven(9));
console.log(isSeven(7));
console.log(isSeven(0));

function isSeven(x) {
	//return x="7"?false:true:false;
	return x=="7"?true:false;
}