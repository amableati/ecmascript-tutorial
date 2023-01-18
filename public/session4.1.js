/**
 * Numbers & their methods
 */
 
 //How to assigned a number to a variable
let createNumber1 = 12.1;//number literal
let createNumber3 = Number(12.1);//number function which converts a string/other value to the Number type
let createNumber2 = new Number(12.1).valueOf();//number constrctor

console.log(createNumber1, createNumber2, createNumber3);

//Using Number constrctor
console.log(new Number(42), "is", typeof new Number(42),"\n");
console.log("But new Number()===Number() is", new Number(42) === Number(42),"\n");
console.log("   123  == 123.0 is", Number("   123  ")==Number(123.0),"\n");
console.log("null == 0 is", Number(null)==0,"\n");
//NaN is also one of the falsy values in JavaScript.
console.log(Number(undefined),"==", Number("Atindra"),"is", Number(undefined)==Number("Atindra"),"\n");
//isNaN(x): The boolean value true if the given value is a number with value NaN. Otherwise, false.
console.log("undefined == 'Atindra' is", isNaN(Number(undefined))==isNaN(Number("Atindra")),"\n");

/*
Number.parseFloat() and Number.parseInt() are similar to Number() but only convert strings, 
and have slightly different parsing rules.
parseInt() doesn't recognize the decimal point, and 
parseFloat() doesn't recognize the 0x prefix.
*/
console.log(Number.parseFloat("0x15"), "!=", Number("0x15"),"\n");
console.log(Number.parseInt("15.917"), "!=", Number("15.917"),"==", +15.917,"\n");

//JS doesn't gives always correct output
console.log(0.1 + 0.2, "==",0.3, "is", 0.1 + 0.2 === 0.3,"\n"); // false


/*The Number.EPSILON property represents the difference between 1 and 
the smallest floating point number greater than 1.
*/
console.log(0.2 - 0.3 + 0.1,"=0 \n");
let eps = Number.EPSILON;

let e52 = 2 ** 52;
console.log("Number.EPSILON == 2e-52 is", eps==e52, "\n");






 