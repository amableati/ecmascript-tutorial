console.log("Session 2");

console.log("Ternary Operator ? :");
let a = true;
if(a){
console.log("TRUE");
}else{
	console.log("FALSE");
}


console.log(a?(!a?"TRUE":"FALSE"):"FALSE");

let str = Object.create({});
let str1 = {};
let str2 = "";
let str3 = new String("");


console.log(typeof str);
console.log(str instanceof Object);
console.log(typeof str1);
console.log(str1 instanceof Object);
console.log(typeof str2);
console.log(str2 instanceof String);
console.log(typeof str3);
console.log(str3 instanceof String);
console.log("Spread Operator & Rest Parameters ");

let num1 = [1, 2, 3, 5, 7, 9];
console.log(...num1);//Spread Operator

function num2(a, b, ...args){//Rest Parameters
	return a*b*args;
}

console.log("Mutiply: "+num2(1,2,10));

let lem = {
	a : {
			a : 23,
			b : 23
		},
	b : 2
}

let lem2 = { ...lem.a };

console.log(lem2);

console.log("Exponential Operator");

console.log(2**2);

console.log("Shift operator ");
console.log("Left shift ");
console.log(2 << 1);// 00000010 => 0 00000100
console.log(3 << 2);// 00000011 => 00 000001100
console.log("Right shift ");
console.log(2 >> 1);// 00000010 => 00000001 0 
console.log(3 >> 2);// 00000010 => 00000000 11 

console.log(255 >> 1); // 11111111 => 01111111 1
console.log(254 << 1); // 0000000011111111 => 1 111111110       11 > 1 10

console.log(1 << 1); // 0000000011111111 => 1 111111110       01 >  10


/// How to swap two variable without using 3rd varaible using bitwise operator
/*swap(a, b); */
//a=1 , b=2
//a=2, b=1

console.log("Creating of object");
let object1 = {};//litters
const object2 = Object.create(object1);//Constructor 
object1 = {
	a: 1
}


object2.a = {
	paraent: "name"
}


const Person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  p : Object.create(object1),
  fullName : function(firstName) {
	this.display();
    return this.firstName + " " + firstName +  " " + this.lastName ;
  },
	display : function(){
		console.log("Welcome");
	}

};

let firstName = "Atindra";


Person.middleName = "wilson";
console.log(Person.fullName());
console.log(Person.fullName(firstName));

console.log("Object methods");

const object3 = Object.create({});//Constructor 
console.log(object3);
const object4 = {};
Object.assign(object4, Person);//target, source
console.log(object4);

const object5 = {};
Object.defineProperties(object5, {property : { value: 23, }});

const object6 = {};
Object.defineProperty(object6, "property",  { value: 25, } );


object5.property = {
	value : 23
}
console.log(object5.property);
console.log(object6.property);
console.log(Object.entries(Person));
console.log(Object.entries(Person)[2]);
console.log(Object.keys(Person));


console.log(Object.getOwnPropertyDescriptors(Person));

const vechile = {
	regNo: null,
	engine: function(){
		return this.type+" : "+this.cc+" : "+this.chassisNo;
	},
	color : null,
	display : function(){
		console.log(this.type+" "+this.color);
	}
}


const bus = vechile;
const bike = {};
Object.assign(bike, vechile);


obj = {
	mouseClick : true
}


const car = Object.freeze(vechile);

console.log("-----------Vechile-------------");
console.log(Object.getOwnPropertyDescriptors(vechile));
console.log("-----------Bike-------------");
console.log(Object.getOwnPropertyDescriptors(bike));
console.log("-----------Car-------------");
console.log(Object.getOwnPropertyDescriptors(car));



console.log("-----------IS-------------");
console.log(Object.is(Person, car));
/*
Object.getOwnPropertyDescriptor()

Object.getOwnPropertyNames()
*/


console.log("-----------SEAL-------------");
console.log(Object.getOwnPropertyDescriptors(Object.seal(bike)));


console.log("-----------Extensions-------------");
console.log(Object.getOwnPropertyDescriptors(Object.preventExtensions(bike)));

console.log(Object.getOwnPropertyNames(bike));