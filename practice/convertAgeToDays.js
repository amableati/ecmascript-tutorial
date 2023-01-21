/*
Create a function that takes the age in years and returns the age in days.

Examples
calcAge(65) ➞ 23725
calcAge(0) ➞ 0
calcAge(20) ➞ 7300

Notes
Use 365 days as the length of a year for this challenge.
Ignore leap years and days between last birthday and now.
Expect only positive integer inputs.
*/

console.log(calcAge(20));

function calcAge(age) {
	if(Number.isFinite(age) && age>=0){
		if(age==0) return 0;
		else return age*365;
	}
	return "Invalid Number";
}

