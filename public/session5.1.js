/**
 * Text processing
These objects represent strings and support manipulating them.

String - Session 1
 */

const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;

let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
var value1 = String("A quick brown fox jumps over the lazy dog");

var parameter1 = new String("A quick brown fox jumps over the lazy dog");

console.log(typeof string1);
console.log(typeof answer2);
console.log(typeof value1);
console.log(typeof parameter1);

console.log(parameter1.valueOf());

const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object

console.log(eval(s1));
console.log(eval(s2));
console.log(eval(s2.toString())); 
console.log(eval(s2.valueOf()));

//limitation around string
console.log(String(undefined));
console.log(String(null));
console.log(String(true));
console.log(String(false));





// Number + Number -> addition
console.log(1 + 2); // 3
// Boolean + Number -> addition
console.log(true + 1); // 2
// Boolean + Boolean -> addition
console.log(false + false); // 0
// String + Boolean -> concatenation
console.log('foo' + false); // "foofalse"
// String + Number -> concatenation
console.log('2' + 2); // "22"















