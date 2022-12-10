/*	Session 3
1. Object
2. Function
3. Boolean
4. Symbols
*/
console.log();
obj = {};
const obj1 =new Object();


//Boolean
const b1 = new Boolean(true); //state
console.log(b1);
const b2 = Boolean(b1);//expression
console.log(b2);


const b3 = new Boolean(false); //expression [Boolean: false]
console.log(b3);
const b4 = Boolean(b3);//expression  
console.log(b4);

const b5 = Boolean(1>2);//expression
console.log(b5);

const b6 = new Boolean(6);//expression
console.log(b6);

const b7 = Boolean(new Boolean(6));//expression
console.log(b7);
a = {
	a : undefined,
	b : null
}
//False statements
console.log(Boolean(a.b), Boolean(a.a), Boolean(NaN), Boolean(), new Boolean(''), new Boolean(0), new Boolean());
//True Statements
console.log(Boolean(true), Boolean('false'), Boolean([]), Boolean({}), new Boolean('atindra'), new Boolean(1));

//var a = null;
// null -  not number, not string, defined
//a;
// undefined - not number, not string, undefined


console.log(Boolean()? "TRUE" : "FALSE");


//Functions
function functionName1(){
	return 1;
}


function functionName(a, b, c){
	return 0;
}

//Invoke - call
//call the function
console.log(functionName());

//Event - user trigger onclick 

//Callback
//functionName.call()


console.log(functionName.name);

console.log(functionName.length);

function color(){
	const a = "A";
}

/*const color = function(){
	
}*/

const rainbow = new color();

console.log(color.prototype);

console.log(Object.getPrototypeOf(color));


console.log(functionName1.call()); // this parrent function super()
console.log(functionName1());// equavalent to above function


const people = {
	age : 40,
	getAge: function(){
		return this.age;
	},
	setAge : function(age){
		this.age = age;
	}
}

const man = people.getAge;
console.log(man);

const male = man.bind(people);// create new function whenever it called it will call by this
console.log(male());


console.log(people.getAge.toString());


//Symbole
const sym = Symbol();
console.log(typeof sym, typeof functionName1, typeof people, typeof b3);

const sym1 = Symbol("hindol");//Global Registry value - store 
const sym2 = Symbol("hindol");

console.log(sym1 == sym2);
console.log(sym1);

const symKey = Symbol.for("hindol"); //Key value
console.log(symKey);
console.log(Symbol.keyFor(symKey));

//Symbol.isConcatSpreadable : It is used to configure if an object should be flattened to its array elements.

const number = [1, 2, 3];
const alphabet = ['a', 'b' , 'c'];
console.log(number);

console.log(...number);

let alphaNumeric = number + alphabet;
alphaNumeric = number.concat(alphabet);// [...number, ...alphabet];
console.log(alphaNumeric);

number[Symbol.isConcatSpreadable] = false;

alphaNumeric = alphabet.concat(number);// [...number, ...alphabet];
console.log(alphaNumeric);


console.log(Symbol('COLOR').description);
console.log(Symbol.iterator.description);
console.log(Symbol.for('COLOR').description);
console.log(`${Symbol.for('COLOR').description}FULL`);




//How to swap 2 number witout using 3rd varaible.
swap1(34, 89);
swap2(34, 89);
swap3(34, 89);
function swap1(a ,b){
	b = a+b;
	a = b-a;
	b = b-a;
	console.log(a, b);
}

function swap2(a ,b){//00100010 01011001
	console.log(a, b);
	a = a^b;	//01111011
	console.log(a, b);
	b = a^b;
	console.log(a, b);
	a = a^b;
	console.log(a, b);
}

function swap3(a ,b){
	b = a*b;
	a = b/a;
	b = b/a;
	console.log(a, b);
}

