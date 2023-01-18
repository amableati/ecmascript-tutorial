/**
 * Number session 3
 */



console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

function checkFiniteNumber(x){
	if(Number.isFinite(x))
	return x;
	else
	return "Number is not finite value";
}

console.log(checkFiniteNumber(Number.MAX_VALUE*2));


//2 ^ 2 = 4   123123 1.23123e4


//returns a string representing the Number object in exponential notation.
console.log("12345 Exponential to",Number(12345).toExponential(),"\n");//12345/1000 = 1.2345
console.log("12345 Exponential to",Number(12345).toExponential(3),"\n");//1.235e+4
console.log("12345 Exponential to",Number(12345).toExponential(2),"\n");//1.23e+4


console.log("1234.567 fixed to",Number(1234.567).toFixed(),"\n");//rounding, no fractional part
console.log("1234.567 fixed to",Number(1234.567).toFixed(2),"\n");// it rounds up
console.log("1234.567 fixed to",Number(1234.567).toFixed(5),"\n");//additional zeros
console.log("2.44999999999999999 fixed to",2.44999999999999999.toFixed(1),"\n");// it rounds up as it's less than NUMBER.EPSILON away from 2.45.



console.log(123456.789.toLocaleString('en-IN'),"\n");

//Can not process more than 17 digit, it will rounds up
console.log("1234567890123456789 toString to",(1234567890123456789).toString(),"\n");

console.log("12.3456789=",12.3456789.toPrecision(5),"\n");
console.log("0.123456789=",0.123456789.toPrecision(5),"\n");












