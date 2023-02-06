/**
 * Text processing
These objects represent strings and support manipulating them.
String - Session 3
 */

//concat()	It provides a combination of two or more strings.

const str1 = 'Hello';
const str2 = 'World';


console.log(str1.concat(str2));
console.log(str1.concat(' ', str2));

//charAt()	It provides the char value present at the specified index.
let sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);

//charCodeAt()	It provides the Unicode value of a character present at the 
//specified index.

console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);

//indexOf()	It provides the position of a char value present in the given string.
const paragraph = 'The quick brown fox jumps over the lazy dog.\
 If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);
console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);

//lastIndexOf()	It provides the position of a char value present in the given string by searching a character from the last position.
console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);

//substring()	It is used to fetch the part of the given string on the basis of the specified index.
const str = 'Mozilla';

console.log(str.substring(1, 3));//oz
console.log(str.substring(2));//zilla

//slice()	It is used to fetch the part of the given string. It allows us to assign positive as well negative index.
sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.slice(31));//the lazy dog.
console.log(sentence.slice(4, 19));//quick brown fox
console.log(sentence.slice(-4));//dog.
console.log(sentence.slice(-9, -5));

//split()	It splits a string into substring array, then returns that newly created array
const words = sentence.split(' ');
console.log(words);

//toLowerCase()	It converts the given string into lowercase letter.
console.log(sentence.toLowerCase());

//toUpperCase()	It converts the given string into uppercase letter.
console.log(sentence.toUpperCase());

let city = 'teChNoLoGies';
//toLocaleUpperCase()	It converts the given string into uppercase letter on the basis of host?s current locale.

console.log(city.toLocaleUpperCase('en-US'));
console.log(city.toLocaleUpperCase('TR'));

//toLocaleLowerCase()	It converts the given string into lowercase letter on the basis of host?s current locale.
console.log(city.toLocaleLowerCase('en-US'));
console.log(city.toLocaleLowerCase('TR'));


/*Generally, this method returns the same result as the toLowerCase() method. 
However, for some locales, where language conflict with the regular 
Unicode case mappings occurs (such as Turkish), the results may vary.*/














