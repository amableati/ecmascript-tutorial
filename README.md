
# Introduction
European Computer Manufacturers Association (ECMAScript) or (ES) is a standard for scripting languages like JavaScript, ActionScript and JScript. It was initially created to standardize JavaScript, It is used by applications to enable client-side scripting. The specification is influenced by programming languages like Self, Perl, Python, Java etc.
JavaScript was developed by Brendan Eich, a developer at Netscape Communications Corporation, in 1995. JavaScript started life with the name Mocha, and was briefly named LiveScript before being officially renamed to JavaScript.
# ECMA Script Basics
A JavaScript program can be composed of −
## Keywords
Words that have a special meaning in the context of a language.

|break|as|any|switch|
| - | - | - | - |
|case|if|throw|else|
|var|number|string|get |
|module|type|instanceof|Typeof|
|finally|for|enum|Export|
|while|void|this|New|
|null|super|Catch|let|
|static|return|True|False|

## Variables
Represents a named memory block that can store values for the program.
- let :declare block-scoped variables using the let keyword.
- let vs. var – understand the differences between let and var.
- const : define constants using the const keyword.

**Concept of Hoisting** 

The JavaScript engine, by default, moves declarations to the top. This feature is termed as hoisting. This feature applies to variables and functions. Hoisting allows JavaScript to use a component before it has been declared. However, the concept of hoisting does not apply to scripts that are run in the Strict Mode.
## Literals
Represents constant/fixed values.
Following are the types of literals that are supported by JavaScript:
- Array Literals [ ]
- Boolean Literals <, >, <=, >=, ==, !=
- Floating-point Literals decimal . ,exponential e
- Numeric Literals dec, oct 0, hex 0X
- Object Literals {}
- Regular Expression Literals //
- String Literals “” ‘’
- Template Literals ``

## Comments
Used to improve code readability. These are ignored by the JavaScript engine.
	Single and Multiple comments 

## Operators
Symbols that define how the operands will be processed.
## Modules
Represents code blocks that can be reused across different programs/scripts. JavaScript modules rely on the import and export statements.
## Identifiers
These are the names given to elements in a program like variables, functions, etc.
# Data Types

## Dynamic and weak typing
JavaScript is a dynamic language with dynamic types. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types.
JavaScript is also a weakly typed language, which means it allows implicit type conversion when an operation involves mismatched types, instead of throwing type errors.

## Primitive values
All types except Object define immutable values represented directly at the lowest level of the language. We refer to values of these types as primitive values.
## Boolean type
The Boolean type represents a logical entity and is inhabited by two values: true and false.
## Number type
The Number type is a double-precision 64-bit binary format IEEE 754 value. It is capable of storing positive floating-point numbers between 2-1074 (Number.MIN_VALUE) and 21024 (Number.MAX_VALUE) as well as negative floating-point numbers between -2-1074 and -21024, but it can only safely store integers in the range -(253 − 1) (Number.MIN_SAFE_INTEGER) to 253 − 1
## BigInt type
The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary magnitude. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit.

```
const huge = BigInt(9007199254740991)
// 9007199254740991n
```

## String type
The String type represents textual data and is encoded as a sequence of 16-bit unsigned integer values. Each element in the string occupies a position in the string. The first element is at index 0, the next at index 1, and so on.

## Symbol type
A Symbol is a unique and immutable primitive value and may be used as the key of an Object property

# Operators
## Arithmetic Operators
multiplicative	* / %
additive	+ -

## Assignment operators
= += -= *= /= %= &= ^= |= <<= >>= >>>=

## Relational Operators
comparison	< > <= >= instanceof
equality	== !=

## Bit-wise Operators
bitwise AND	&
bitwise exclusive OR	^
bitwise inclusive OR	|

## delete Operator
The delete operator removes a property from an object. If the property's value is an object and there are no more references to the object, the object held by that property is eventually released automatically.

## Comma operator :
This operator mainly evaluates its operands from left to right sequentially and returns the value of the rightmost operand. A comma operator is used as a separator for multiple expressions at a place that requires a single expression

## Grouping operator ()
The Grouping operator consists of a pair of parentheses around an expression or sub-expression to override the normal operator precedence so that expressions with lower precedence can be evaluated before an expression with higher priority. This operator can only contain expressions.

## Short circuiting operators
logical AND	&&
logical OR	||

## Nullish Coalescing Operator ??
The nullish coalescing operator (??) is a logical operator that checks whether the property presented is null or undefined and that is not for all false values. If it is not a null or undefined value, the operator returns the initial value or prints the property value.

## Optional Chaining Operator ? .
The optional chaining (?.) operator accesses an object's property or calls a function. If the object is undefined or null, it returns undefined instead of throwing an error.

## Ternary Operator ? :
The “Question mark” or “conditional” operator in JavaScript is a ternary operator that has three operands. It is the simplified operator of if/else.

## Instanceof Operator
The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value.

## Spread Operator & Rest Parameters ...
Spread syntax (...) allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected

## Exponential Operator **
The exponentiation assignment operator (**=) raises the value of a variable to the power of the right operand.

## Shift operator << >> >>>
The right shift (>>) operator shifts the first operand the specified number of bits, modulo 32, to the right. Excess bits shifted off to the right are discarded, and copies of the leftmost bit are shifted in from the left.

The left shift (<<) operator shifts the first operand the specified number of bits, modulo 32, to the left. Excess bits shifted off to the left are discarded. Zero bits are shifted in from the right.

# Fundamental objects
Standard objects are category by: -
These are the fundamental, basic objects upon which all other objects are based. This includes general objects, boolean, functions and symbols .

## Objects
Objects are variables too. But objects can contain many values. You define (and create) a JavaScript object with an object literal. It is a common practice to declare objects with the const keyword. The name: values pairs in JavaScript objects are called properties.

```
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```
this is not a variable. It is a keyword. You cannot change the value of this. In a function definition, this refers to the "owner" of the function.
You access an object method with the following syntax:	`` objectName.methodName() ``
|**S.No**|**Methods**|**Description**|
| :- | :- | :- |
|1|[Object.assign()](https://www.javatpoint.com/javascript-object-assign-method)|This method is used to copy enumerable and own properties from a source object to a target object. Objects are assigned and copied by reference|
|2|[Object.create()](https://www.javatpoint.com/javascript-object-create-method)|This method is used to create a new object with the specified prototype object and properties.|
|3|[Object.defineProperty()](https://www.javatpoint.com/javascript-object-defineproperty-method)|This method is used to describe some behavioral attributes of the property.|
|4|[Object.defineProperties()](https://www.javatpoint.com/javascript-object-defineproperties-method)|This method is used to create or configure multiple object properties.|
|5|[Object.entries()](https://www.javatpoint.com/javascript-object-entries-method)|This method returns an array with arrays of the key, value pairs.|
|6|[Object.freeze()](https://www.javatpoint.com/javascript-object-freeze-method)|This method prevents the modification of existing property, attributes, and values.|
|7|[Object.getOwnPropertyDescriptor()](https://www.javatpoint.com/javascript-object-getownpropertydescriptor-method)|This method returns a property descriptor for the specified property of the specified object.|
|8|[Object.getOwnPropertyDescriptors()](https://www.javatpoint.com/javascript-object-getownpropertydescriptors-method)|This method returns all own property descriptors of a given object.|
|9|[Object.getOwnPropertyNames()](https://www.javatpoint.com/javascript-object-getownpropertynames-method)|This method returns an array of all properties (enumerable or not) found.|
|10|[Object.getOwnPropertySymbols()](https://www.javatpoint.com/javascript-object-getownpropertysymbols-method)|This method returns an array of all own symbol key properties.|
|11|[Object.getPrototypeOf()](https://www.javatpoint.com/javascript-object-getprototypeof-method)|This method returns the prototype of the specified object.|
|12|[Object.is()](https://www.javatpoint.com/javascript-object-is-method)|This method determines whether two values are the same value.|
|13|[Object.isExtensible()](https://www.javatpoint.com/javascript-objects)|This method determines if an object is extensible|
|14|[Object.isFrozen()](https://www.javatpoint.com/javascript-objects)|This method determines if an object was frozen.|
|15|[Object.isSealed()](https://www.javatpoint.com/javascript-objects)|This method determines if an object is sealed.|
|16|[Object.keys()](https://www.javatpoint.com/javascript-objects)|This method returns an array of a given object's own property names.|
|17|[Object.preventExtensions()](https://www.javatpoint.com/javascript-object-preventextensions-method)|This method is used to prevent any extensions of an object.|
|18|[Object.seal()](https://www.javatpoint.com/javascript-object-seal-method)|This method prevents new properties from being added and marks all existing properties as non-configurable. The object to be sealed is passed as an argument, and the method returns the object which has been sealed.|
|19|[Object.setPrototypeOf()](https://www.javatpoint.com/javascript-object-setprototypeof-method)|This method sets the prototype of a specified object to another object.|
|20|[Object.values()](https://www.javatpoint.com/javascript-object-values-method)|This method returns an array of values.|



## Boolean
JavaScript Boolean is an object that represents value in two states: true or false.
` let b=new Boolean(value);  `
|**Method**|**Description**|
| :- | :- |
|toSource()|returns the source of Boolean object as a string.|
|toString()|converts Boolean into String.|
|valueOf()|converts other type into Boolean.|
Excersies

```javascript
const good = Boolean(expression);    // use this
const good2 = !!(expression);        // or this
const bad = new Boolean(expression); // don't use this!

const a = new Boolean(false);
console.log(Boolean(a), Boolean(undefined), Boolean(null), Boolean(0), Boolean(NaN), Boolean(new Object()));

if(a)	console.log("TRUE");
else	console.log("FALSE");

if([]){
	console.log("[] is TRUE");
	if([]==false)
		console.log("[]==false is TRUE");
		if(36==false)
		console.log("[]==false is TRUE");
}

const bNoParam = new Boolean(); //false
const bZero = new Boolean(0); //false
const bNull = new Boolean(null); //false
const bEmptyString = new Boolean(''); //false
const bfalse = new Boolean(false); //false
const btrue = new Boolean(true); //true
const btrueString = new Boolean('true'); //true
const bfalseString = new Boolean('false'); //true
const bSuLin = new Boolean('Su Lin'); //true
const bArrayProto = new Boolean([]); //true
const bObjProto = new Boolean({}); //true
```

## Functions
A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when "something" invokes it (calls it).

```
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```
The code inside the function will execute when "something" invokes (calls) the function:
When an event occurs (when a user clicks a button)
When it is invoked (called) from JavaScript code
Automatically (self invoked)

Every JavaScript function is actually a Function object. This can be seen with below code, which returns true.
`(function () {}).constructor === Function`

|**Methods**|**Description**|
| :- | :- |
Function.prototype.length| Specifies the number of arguments expected by the function.|
Function.prototype.name | The name of the function.|
Function.prototype.prototype | Used when the function is used as a constructor with the new operator. It will become the new object's prototype. |
Function.prototype.apply() | Calls a function with a given this value and optional arguments provided as an array (or an array-like object).|
Function.prototype.bind() | Creates a new function that, when called, has its this keyword set to a provided value, optionally with a given sequence of arguments preceding any provided when the new function is called.|
Function.prototype.call() | Calls a function with a given this value and optional arguments.|
Function.prototype.toString() | Returns a string representing the source code of the function. Overrides the Object.prototype.toString method.|

## Symbol
The JavaScript Symbol is a function that is used to identify the object properties. Symbols are often used to add unique property keys to an object
A Symbol() method always return a unique value.
A symbol value may be used as an identifier for object properties.
Symbols are immutable, just like numbers or strings.
Symbols cannot be typecasted to primitive data types.
|**Methods**|**Description**|
| :- | :- |
|[Symbol.hasInstance](https://www.javatpoint.com/javascript-symbol-hasinstance-property)|It is used to determine if a constructor object recognizes an object as its instance.|
|[Symbol.isConcatSpreadable](https://www.javatpoint.com/javascript-symbol-isconcatspreadable-property)|It is used to configure if an object should be flattened to its array elements.|
|[Symbol.match](https://www.javatpoint.com/javascript-symbol-match-property)|It is a method to identify the matching of a regular expression against a string.|
|[Symbol.prototype](https://www.javatpoint.com/javascript-symbol-prototype-property)|It is used for produce the prototype for the symbol constructor.|
|[Symbol.replace](https://www.javatpoint.com/javascript-symbol-replace-property)|It replace matched substring of a string.|
|[Symbol.search](https://www.javatpoint.com/javascript-symbol-search-property)|It returns the index within a string that matches with the regular expression.|
|[Symbol.split](https://www.javatpoint.com/javascript-symbol-split-property)|It splits a string at the indices that match the regular expression.|
|Symbol.toPrimitive|It is used to convert an object to its equivalent primitive value.|
|[Symbol.unscopables](https://www.javatpoint.com/javascript-symbol-unscopables-property)|It is a well-known object property whose property name are excluded from with environment.|
|[Symbol.for()](https://www.javatpoint.com/javascript-symbol-for-method)|It is used to search for existing symbol in a runtime-wide symbol registry with the provided key and returns if it is found. Otherwise new symbol gets created with this key.|
|[Symbol.keyFor()](https://www.javatpoint.com/javascript-symbol-keyfor-method)|It uses the global symbol registry to look up the key for the symbol. So it doesn't work for non-global symbols. If the symbol is not global, it won't be able to find it and returns undefined.|
|[Symbol.toString()](https://www.javatpoint.com/javascript-symbol-tostring-method)|It is used to return a string representation of an object.|


# Numbers, dates, and mathematical calculations
## Number
Number object enables you to represent a numeric value. It may be integer or floating-point. Numbers are always stored as double precision floating point numbers.

```
let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals
```

The maximum number of decimals is 17.
Floating point arithmetic is not always 100% accurate: ```let x = 0.2 + 0.1;```

Comparission of common Number properties
|MAX_SAFE_INTEGER|MAX_VALUE|MIN_SAFE_INTEGER|MIN_VALUE|EPSILON|
| :- | :- |:- | :- |:- |
|2<sup>53</sup>– 1|2<sup>1024</sup>- 1|-(2<sup>53</sup>- 1)|2<sup>-1074</sup>|2<sup>-52</sup>|
|9007199254740991|1.7976931348623157E<sup>308</sup>|-9007199254740991|5E<sup>-324</sup>|2.2204460492503130808472633361816E<sup>-16</sup>|

Methods & Properties of Number
|toString()|Returns a number as a string|
| :- | :- |
|toExponetial()|Returns a number written in exponential notation|
|toFixed()|Returns a number written with a number of decimals|
|toPrecision()|Returns a number written with a specified length|
|ValueOf()|Returns a number as a number|
|Number()|Returns a number converted from its argument.|
|parseFloat()|Parses its argument and returns a floating point number|
|parseInt()|Parses its argument and returns a whole number|
|Number.isInteger()|Returns true if the argument is an integer|
|Number.isSafeInteger()|Returns true if the argument is a safe integer|
|Number.parseFloat()|Converts a string to a number|
|Number.parseInt()|Converts a string to a whole number|
|[prototype](https://www.w3schools.com/jsref/jsref_prototype_num.asp)|Allows you to add properties and methods to an object|
|EPSILON|The difference between 1 and the smallest JS number.|
|MAX\_VALUE|The largest number possible in JavaScript|
|MIN\_VALUE|The smallest number possible in JavaScript|
|MAX\_SAFE\_INTEGER|The maximum safe integer (253 - 1)|
|MAX\_SAFE\_INTEGER|The minimum safe integer -(253 - 1)|
|POSITIVE\_INFINITY|Infinity (returned on overflow)|
|NEGATIVE\_INFINITY|Negative infinity (returned on overflow)|
|NaN|A "Not-a-Number" value|

## Date
The JavaScript date object can be used to get year, month and day.
You can use 4 variant of Date constructor to create date object.
 - Date()
 - Date(milliseconds)
 - Date(dateString)
 - Date(year, month, day, hours, minutes, seconds, milliseconds)

|**Methods**|**Description**|
| :- | :- |
|[getDate()](https://www.javatpoint.com/javascript-date-getdate-method)|It returns the integer value between 1 and 31 that represents the day for the specified date on the basis of local time.|
|[getDay()](https://www.javatpoint.com/javascript-date-getday-method)|It returns the integer value between 0 and 6 that represents the day of the week on the basis of local time.|
|[getFullYears()](https://www.javatpoint.com/javascript-date-getutcfullyear-method)|It returns the integer value that represents the year on the basis of local time.|
|[getHours()](https://www.javatpoint.com/javascript-date-gethours-method)|It returns the integer value between 0 and 23 that represents the hours on the basis of local time.|
|[getMilliseconds()](https://www.javatpoint.com/javascript-date-getmilliseconds-method)|It returns the integer value between 0 and 999 that represents the milliseconds on the basis of local time.|
|[getMinutes()](https://www.javatpoint.com/javascript-date-getminutes-method)|It returns the integer value between 0 and 59 that represents the minutes on the basis of local time.|
|[getMonth()](https://www.javatpoint.com/javascript-date-getmonth-method)|It returns the integer value between 0 and 11 that represents the month on the basis of local time.|
|[getSeconds()](https://www.javatpoint.com/javascript-date-getseconds-method)|It returns the integer value between 0 and 60 that represents the seconds on the basis of local time.|
|[getUTCDate()](https://www.javatpoint.com/javascript-date-getutcdate-method)|It returns the integer value between 1 and 31 that represents the day for the specified date on the basis of universal time.|
|[getUTCDay()](https://www.javatpoint.com/javascript-date-getutcday-method)|It returns the integer value between 0 and 6 that represents the day of the week on the basis of universal time.|
|[getUTCFullYears()](https://www.javatpoint.com/javascript-date-getutcfullyears-method)|It returns the integer value that represents the year on the basis of universal time.|
|[getUTCHours()](https://www.javatpoint.com/javascript-date-getutchours-method)|It returns the integer value between 0 and 23 that represents the hours on the basis of universal time.|
|[getUTCMinutes()](https://www.javatpoint.com/javascript-date-getutcminutes-method)|It returns the integer value between 0 and 59 that represents the minutes on the basis of universal time.|
|[getUTCMonth()](https://www.javatpoint.com/javascript-date-getutcmonth-method)|It returns the integer value between 0 and 11 that represents the month on the basis of universal time.|
|[getUTCSeconds()](https://www.javatpoint.com/javascript-date-getutcseconds-method)|It returns the integer value between 0 and 60 that represents the seconds on the basis of universal time.|
|setDate()|It sets the day value for the specified date on the basis of local time.|
|setDay()|It sets the particular day of the week on the basis of local time.|
|setFullYears()|It sets the year value for the specified date on the basis of local time.|
|[setHours()](https://www.javatpoint.com/javascript-date-sethours-method)|It sets the hour value for the specified date on the basis of local time.|
|[setMilliseconds()](https://www.javatpoint.com/javascript-date-setmilliseconds-method)|It sets the millisecond value for the specified date on the basis of local time.|
|[setMinutes()](https://www.javatpoint.com/javascript-date-setminutes-method)|It sets the minute value for the specified date on the basis of local time.|
|setMonth()|It sets the month value for the specified date on the basis of local time.|
|[setSeconds()](https://www.javatpoint.com/javascript-date-setseconds-method)|It sets the second value for the specified date on the basis of local time.|
|[setUTCDate()](https://www.javatpoint.com/javascript-date-setutcdate-method)|It sets the day value for the specified date on the basis of universal time.|
|setUTCDay()|It sets the particular day of the week on the basis of universal time.|
|[setUTCFullYears()](https://www.javatpoint.com/javascript-date-setutcfullyear-method)|It sets the year value for the specified date on the basis of universal time.|
|[setUTCHours()](https://www.javatpoint.com/javascript-date-setutchours-method)|It sets the hour value for the specified date on the basis of universal time.|
|setUTCMilliseconds()|It sets the millisecond value for the specified date on the basis of universal time.|
|[setUTCMinutes()](https://www.javatpoint.com/javascript-date-setutcminutes-method)|It sets the minute value for the specified date on the basis of universal time.|
|[setUTCMonth()](https://www.javatpoint.com/javascript-date-setutcmonth-method)|It sets the month value for the specified date on the basis of universal time.|
|[setUTCSeconds()](https://www.javatpoint.com/javascript-date-setutcseconds-method)|It sets the second value for the specified date on the basis of universal time.|
|[toDateString()](https://www.javatpoint.com/javascript-date-todatestring-method)|It returns the date portion of a Date object.|
|[toISOString()](https://www.javatpoint.com/javascript-date-toisostring-method)|It returns the date in the form ISO format string.|
|[toJSON()](https://www.javatpoint.com/javascript-date-tojson-method)|It returns a string representing the Date object. It also serializes the Date object during JSON serialization.|
|[toString()](https://www.javatpoint.com/javascript-date-tostring-method)|It returns the date in the form of string.|
|[toTimeString()](https://www.javatpoint.com/javascript-date-totimestring-method)|It returns the time portion of a Date object.|
|[toUTCString()](https://www.javatpoint.com/javascript-date-toutcstring-method)|It converts the specified date in the form of string using UTC time zone.|
|[valueOf()](https://www.javatpoint.com/javascript-date-valueof-method)|It returns the primitive value of a Date object.|

## Math
The JavaScript math object provides several constants and methods to perform mathematical operation. It doesn't have constructors.

|**Methods**|**Description**|
| :- | :- |
|[abs()](https://www.javatpoint.com/javascript-math-abs-method)|It returns the absolute value of the given number.|
|[acos()](https://www.javatpoint.com/javascript-math-acos-method)|It returns the arccosine of the given number in radians.|
|[asin()](https://www.javatpoint.com/javascript-math-asin-method)|It returns the arcsine of the given number in radians.|
|[atan()](https://www.javatpoint.com/javascript-math-atan-method)|It returns the arc-tangent of the given number in radians.|
|[cbrt()](https://www.javatpoint.com/javascript-math-cbrt-method)|It returns the cube root of the given number.|
|[ceil()](https://www.javatpoint.com/javascript-math-ceil-method)|It returns a smallest integer value, greater than or equal to the given number.|
|[cos()](https://www.javatpoint.com/javascript-math-cos-method)|It returns the cosine of the given number.|
|[cosh()](https://www.javatpoint.com/javascript-math-cosh-method)|It returns the hyperbolic cosine of the given number.|
|[exp()](https://www.javatpoint.com/javascript-math-exp-method)|It returns the exponential form of the given number.|
|[floor()](https://www.javatpoint.com/javascript-math-floor-method)|It returns largest integer value, lower than or equal to the given number.|
|[hypot()](https://www.javatpoint.com/javascript-math-hypot-method)|It returns square root of sum of the squares of given numbers.|
|[log()](https://www.javatpoint.com/javascript-math-log-method)|It returns natural logarithm of a number.|
|[max()](https://www.javatpoint.com/javascript-math-max-method)|It returns maximum value of the given numbers.|
|[min()](https://www.javatpoint.com/javascript-math-min-method)|It returns minimum value of the given numbers.|
|[pow()](https://www.javatpoint.com/javascript-math-pow-method)|It returns value of base to the power of exponent.|
|[random()](https://www.javatpoint.com/javascript-math-random-method)|It returns random number between 0 (inclusive) and 1 (exclusive).|
|[round()](https://www.javatpoint.com/javascript-math-round-method)|It returns closest integer value of the given number.|
|[sign()](https://www.javatpoint.com/javascript-math-sign-method)|It returns the sign of the given number|
|[sin()](https://www.javatpoint.com/javascript-math-sin-method)|It returns the sine of the given number.|
|[sinh()](https://www.javatpoint.com/javascript-math-sinh-method)|It returns the hyperbolic sine of the given number.|
|[sqrt()](https://www.javatpoint.com/javascript-math-sqrt-method)|It returns the square root of the given number|
|[tan()](https://www.javatpoint.com/javascript-math-tan-method)|It returns the tangent of the given number.|
|[tanh()](https://www.javatpoint.com/javascript-math-tanh-method)|It returns the hyperbolic tangent of the given number.|
|[trunc()](https://www.javatpoint.com/javascript-math-trunc-method)|It returns an integer part of the given number.|

# Text processing
These objects represent strings and support manipulating them.
## String
You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

There are 2 ways to create string
1.	By string literal `var stringname="string value";` 
2.	By string object (using new keyword) `var stringname=new String("string literal"); `

**Example**

```
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
```

|**Methods**|**Description**|
| :- | :- |
|[charAt()](https://www.javatpoint.com/javascript-string-charat-method)|It provides the char value present at the specified index.|
|[charCodeAt()](https://www.javatpoint.com/javascript-string-charcodeat-method)|It provides the Unicode value of a character present at the specified index.|
|[concat()](https://www.javatpoint.com/javascript-string-concat-method)|It provides a combination of two or more strings.|
|[indexOf()](https://www.javatpoint.com/javascript-string-indexof-method)|It provides the position of a char value present in the given string.|
|[lastIndexOf()](https://www.javatpoint.com/javascript-string-lastindexof-method)|It provides the position of a char value present in the given string by searching a character from the last position.|
|[search()](https://www.javatpoint.com/javascript-string-search-method)|It searches a specified regular expression in a given string and returns its position if a match occurs.|
|[match()](https://www.javatpoint.com/javascript-string-match-method)|It searches a specified regular expression in a given string and returns that regular expression if a match occurs.|
|[replace()](https://www.javatpoint.com/javascript-string-replace-method)|It replaces a given string with the specified replacement.|
|[substr()](https://www.javatpoint.com/javascript-string-substr-method)|It is used to fetch the part of the given string on the basis of the specified starting position and length.|
|[substring()](https://www.javatpoint.com/javascript-string-substring-method)|It is used to fetch the part of the given string on the basis of the specified index.|
|[slice()](https://www.javatpoint.com/javascript-string-slice-method)|It is used to fetch the part of the given string. It allows us to assign positive as well negative index.|
|[toLowerCase()](https://www.javatpoint.com/javascript-string-tolowercase-method)|It converts the given string into lowercase letter.|
|[toLocaleLowerCase()](https://www.javatpoint.com/javascript-string-tolocalelowercase-method)|It converts the given string into lowercase letter on the basis of host?s current locale.|
|[toUpperCase()](https://www.javatpoint.com/javascript-string-touppercase-method)|It converts the given string into uppercase letter.|
|[toLocaleUpperCase()](https://www.javatpoint.com/javascript-string-tolocaleuppercase-method)|It converts the given string into uppercase letter on the basis of host?s current locale.|
|[toString()](https://www.javatpoint.com/javascript-string-tostring-method)|It provides a string representing the particular object.|
|[valueOf()](https://www.javatpoint.com/javascript-string-valueof-method)|It provides the primitive value of string object.|
|split()|It splits a string into substring array, then returns that newly created array.|
|trim()|It trims the white space from the left and right side of the string.|


## RegExp
The RegExp object is used for matching text with a pattern.
There are two ways to create a RegExp object: a literal notation and a constructor.
- The literal notation takes a pattern between two slashes, followed by optional flags, after the second slash.

```
const re = /ab+c/i; // literal notation
```
- The constructor function takes either a string or a RegExp object as its first parameter and a string of optional flags as its second parameter.

```
const re = new RegExp('ab+c', 'i'); // constructor with string 
const re = new RegExp(/ab+c/, 'i');// constructor with regular
```

Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed.


# Indexed collections
These objects represent collections of data which are ordered by an index value. This includes (typed) arrays and array-like constructs.
## Array
JavaScript array is an object that represents a collection of similar type of elements.

There are 2 ways to construct array in JavaScript
- By array literal
`var arrayname=[value1,value2.....valueN];  `
- By using new keyword
`var arrayname=new Array(); `

|**Methods**|**Description**|
| :- | :- |
|[concat()](https://www.javatpoint.com/javascript-array-concat-method)|It returns a new array object that contains two or more merged arrays.|
|[copywithin()](https://www.javatpoint.com/javascript-array-copywithin-method)|It copies the part of the given array with its own elements and returns the modified array.|
|[entries()](https://www.javatpoint.com/javascript-array-entries-method)|It creates an iterator object and a loop that iterates over each key/value pair.|
|[every()](https://www.javatpoint.com/javascript-array-every-method)|It determines whether all the elements of an array are satisfying the provided function conditions.|
|[flat()](https://www.javatpoint.com/javascript-array-flat-method)|It creates a new array carrying sub-array elements concatenated recursively till the specified depth.|
|[flatMap()](https://www.javatpoint.com/javascript-array-flatmap-method)|It maps all array elements via mapping function, then flattens the result into a new array.|
|[fill()](https://www.javatpoint.com/javascript-array-fill-method)|It fills elements into an array with static values.|
|[from()](https://www.javatpoint.com/javascript-array-from-method)|It creates a new array carrying the exact copy of another array element.|
|[filter()](https://www.javatpoint.com/javascript-array-filter-method)|It returns the new array containing the elements that pass the provided function conditions.|
|[find()](https://www.javatpoint.com/javascript-array-find-method)|It returns the value of the first element in the given array that satisfies the specified condition.|
|[findIndex()](https://www.javatpoint.com/javascript-array-findindex-method)|It returns the index value of the first element in the given array that satisfies the specified condition.|
|[forEach()](https://www.javatpoint.com/javascript-array-foreach-method)|It invokes the provided function once for each element of an array.|
|[includes()](https://www.javatpoint.com/javascript-array-includes-method)|It checks whether the given array contains the specified element.|
|[indexOf()](https://www.javatpoint.com/javascript-array-indexof-method)|It searches the specified element in the given array and returns the index of the first match.|
|[isArray()](https://www.javatpoint.com/javascript-array-isarray-method)|It tests if the passed value ia an array.|
|[join()](https://www.javatpoint.com/javascript-array-join-method)|It joins the elements of an array as a string.|
|[keys()](https://www.javatpoint.com/javascript-array-keys-method)|It creates an iterator object that contains only the keys of the array, then loops through these keys.|
|[lastIndexOf()](https://www.javatpoint.com/javascript-array-lastindexof-method)|It searches the specified element in the given array and returns the index of the last match.|
|[map()](https://www.javatpoint.com/javascript-array-map-method)|It calls the specified function for every array element and returns the new array|
|[of()](https://www.javatpoint.com/javascript-array-of-method)|It creates a new array from a variable number of arguments, holding any type of argument.|
|[pop()](https://www.javatpoint.com/javascript-array-pop-method)|It removes and returns the last element of an array.|
|[push()](https://www.javatpoint.com/javascript-array-push-method)|It adds one or more elements to the end of an array.|
|[reverse()](https://www.javatpoint.com/javascript-array-reverse-method)|It reverses the elements of given array.|
|[reduce(function, initial)](https://www.javatpoint.com/javascript-array-reduce-method)|It executes a provided function for each value from left to right and reduces the array to a single value.|
|[reduceRight()](https://www.javatpoint.com/javascript-array-reduceright-method)|It executes a provided function for each value from right to left and reduces the array to a single value.|
|[some()](https://www.javatpoint.com/javascript-array-some-method)|It determines if any element of the array passes the test of the implemented function.|
|[shift()](https://www.javatpoint.com/javascript-array-shift-method)|It removes and returns the first element of an array.|
|[slice()](https://www.javatpoint.com/javascript-array-slice-method)|It returns a new array containing the copy of the part of the given array.|
|[sort()](https://www.javatpoint.com/javascript-array-sort-method)|It returns the element of the given array in a sorted order.|
|[splice()](https://www.javatpoint.com/javascript-array-splice-method)|It add/remove elements to/from the given array.|
|[toLocaleString()](https://www.javatpoint.com/javascript-array-tolocalestring-method)|It returns a string containing all the elements of a specified array.|
|[toString()](https://www.javatpoint.com/javascript-array-tostring-method)|It converts the elements of a specified array into string form, without affecting the original array.|
|[unshift()](https://www.javatpoint.com/javascript-array-unshift-method)|It adds one or more elements in the beginning of the given array.|
|[values()](https://www.javatpoint.com/javascript-array-values-method)|It creates a new iterator object carrying values for each index in the array.|

# Loops
loops through a block of code a number of times

```
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
```

## for loop
loops through the properties of an object

```
for (key in object) {
  // code block to be executed
}
```

## for (..in) loop
loops through the values of an iterable object

```
for (variable of iterable) {
  // code block to be executed
}
```

## for (..of) loop
loops through the values of an iterable object

```
for (variable of iterable) {
  // code block to be executed
}
```

## while loop
loops through a block of code while a specified condition is true

```
while (condition) {
  // code block to be executed
}
```
## do-while loop
also loops through a block of code while a specified condition is true

```
do {
  // code block to be executed
}
while (condition);
```
# Classes
## Constructor
## Private Property
## Static Property & Static Method
## Prototypal Inheritance
## Inheritance
## Polymorphism
## Lexical scope of this
## Super
## Shadowing
## Creating abstract classes
## Getters and Setters
# De-structuring Array, Object
# Modules
# Debugging
# ECMA Script Advance
## Equality & Mixins
## Arrow Functions
## Default Arguments
## Shorthand for Creating and De-structuring Objects
## Computed Object Keys
## Shorthand for Defining Operations in Objects
## Object Prototype Extensions and Super Calls
## Handler
# Keyed collections
## Map
## Set
## WeakMap
## WeakSet
# Structured data
## ArrayBuffer
## SharedArrayBuffer
## Atomics
## DataView
## JSON
# Iterators and Generators in Depth
## Iterables and Iterators
## Consuming Iterables
## Built-in Iterables
## Iterables with Sets and Maps
## The Role of the Iterables Interface
## Generators and Iterators
## Iterators and De-structuring
## Combining Generators
## Passing Parameters to Iterables
# Control abstraction objects
## Promise
### Promise States
### Creating Promises in ES6
### Handling the Fulfilled or Rejected States
### Handling Multiple Promises
# Generator
## GeneratorFunction
## AsyncFunction
## AsyncGenerator
## AsyncGeneratorFunction
# Reflection
## Reflect
### Creating Objects
### Manipulating Prototypes
### Property Access and Modification
### Exercise on the Reflect API
# Proxy
## Introduction
## Defining Proxies
## Revocable Proxies
## Use Cases
# Closures
## Closures and Scoping
## Function Factories
## Additional Factory (Closures)
## Recursion
# Callbacks
# API handling
# Async await
# References
