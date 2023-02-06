/**
 * Text processing
These objects represent strings and support manipulating them.
String - Session 2
 */

let str = "This is a very long string which needs " +
"to wrap across multiple lines because "
+ "otherwise my code is unreadable.";

str =  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";

//Special characters can be encoded using escape sequences:
let escapeString  = "\"\0The quick brown \'fox\' jumps over th lazy dog\"";
console.log(escapeString);

escapeString = "\b \v \f";

/*
newline character or \n moves the cursor to the next line of the console or whatever 
output device that is being used
carriage return or \r moves the cursor to the very beginning of the current 
line on the output device.
*/

console.log("Enter a value\n =");
console.log("Enter a value\r =");




//Static methods
console.log("👨‍".split(""));

/*The String.fromCharCode() static method returns a string created from the 
specified sequence of UTF-16 code units.
The range is between 0 and 65535
https://en.wikipedia.org/wiki/List_of_Unicode_characters
*/
console.log(String.fromCharCode(65, 66, 67));
console.log(String.fromCharCode(0x2014, 8212));

//65536 - 1114111
//require two code units (i.e. a surrogate pair):


/*All unicode characters beyond 0xFFFF, from 0x010000 (65536) to 0x10FFFF (1114111) 
are called supplementary characters
String.fromCharCode cannot return the UNICODE supplementary characters by 
specifying their code point directly which ranges from 0x10000 0x10FFFF. 
Instead, it takes two surrogates (16-bit code units) to return a supplementary
 character.
*/

console.log(String.fromCharCode(55356, 57091));//Night with Stars
console.log(String.fromCharCode(0xD83C, 0xDF04, 55356, 57091));//Sunrise Over Mountains

/*String.fromCodePoint can take both surrogates and code point as arguments for 
supplementary characters*/
console.log(String.fromCodePoint(0x1F304, 55356, 57091, 65));
//equivalent to above 2 statement











