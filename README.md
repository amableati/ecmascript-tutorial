
# Introduction
European Computer Manufacturers Association (ECMAScript) or (ES) is a standard for scripting languages like JavaScript, ActionScript and JScript. It was initially created to standardize JavaScript, It is used by applications to enable client-side scripting. The specification is influenced by programming languages like Self, Perl, Python, Java etc.
JavaScript was developed by Brendan Eich, a developer at Netscape Communications Corporation, in 1995. JavaScript started life with the name Mocha, and was briefly named LiveScript before being officially renamed to JavaScript.
# ECMA Script Basics
A JavaScript program can be composed of −
## Keywords
Words that have a special meaning in the context of a language.
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

## Boolean
JavaScript Boolean is an object that represents value in two states: true or false.
` let b=new Boolean(value);  `

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

## Symbol
The JavaScript Symbol is a function that is used to identify the object properties. Symbols are often used to add unique property keys to an object
A Symbol() method always return a unique value.
A symbol value may be used as an identifier for object properties.
Symbols are immutable, just like numbers or strings.
Symbols cannot be typecasted to primitive data types.

# Numbers, dates, and mathematical calculations
## Number
Number object enables you to represent a numeric value. It may be integer or floating-point. Numbers are always stored as double precision floating point numbers.

```
let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals
```

The maximum number of decimals is 17.
Floating point arithmetic is not always 100% accurate: ```let x = 0.2 + 0.1;```

## Date
The JavaScript date object can be used to get year, month and day.
You can use 4 variant of Date constructor to create date object.
1.	Date()
2.	Date(milliseconds)
3.	Date(dateString)
4.	Date(year, month, day, hours, minutes, seconds, milliseconds)

## Math
The JavaScript math object provides several constants and methods to perform mathematical operation. It doesn't have constructors.

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

Array Objects

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
