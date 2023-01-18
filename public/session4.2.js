/**
 * Number session 2
 */

console.log(0.2 - 0.3 + 0.1,"=0 \n");
let eps = Number.EPSILON;

let e52 = 2 ** 52;
console.log("Number.EPSILON == 2e-52 is", eps==e52, "\n");


console.log("comparator say",equalNumber(0.1 + 0.2, 0.3),"\n");
console.log("EPSILON say",equalNumberByEPSILON(0.1 + 0.2, 0.3),"\n");
console.log("comparator say",equalNumber(1000.1 + 1000.2, 2000.3),"\n");
console.log("EPSILON say",equalNumberByEPSILON(1000.1 + 1000.2, 2000.3, 1090),"\n");

/*The Number.MAX_SAFE_INTEGER constant represents the maximum safe integer in JavaScript (2e53 – 1).*/
let maxInt = Number.MAX_SAFE_INTEGER; //9007199254740991
let minInt = Number.MIN_SAFE_INTEGER;//-9007199254740991
let e53 = 2 ** 53 - 1;//011111111111111111111111111111111111111111111111111111
console.log("Number.MAX_SAFE_INTEGER == 2e53-1 is", maxInt==e53, "\n");
console.log("2^53",integerWithInSafe(e53),"\n");

//For examples
console.log(convertToBinary(maxInt+1),"\n");


/*To find smallest among two numbers */
function equalNumberByEPSILON(x, y, inaccuracy=1){
if(Math.abs(x-y) < Number.EPSILON * inaccuracy)
	return x+ " is equal to " + y;
else
	return x+ " is not equal to " + y;
}


function equalNumber(x, y){
if(x==y)
	return x+ " is equal to " + y;
else
	return x+ " is not equal to " + y;
}

function convertToBinary(number) {
	if (number > Number.MAX_SAFE_INTEGER || number < Number.MIN_SAFE_INTEGER) 
		return "Can't process the binary representation of "+number;
    let num = number;
    let binary = (num % 2).toString();
    for (; num > 1; ) {
        num = parseInt(num / 2);
        binary =  (num % 2) + (binary);
    }
    return binary;
}


function integerWithInSafe(x) {
  if (Number.isSafeInteger(x)) {
    return x;
  }
  return 'Precision may be lost!';
}
