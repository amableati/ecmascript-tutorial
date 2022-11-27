const PI = 3.14;


function method(){}
class Rent{
}


console.log(PI);

let a = "Value";
a ="Change";

a = 1;

//a = "Value";

console.log(a);

var bigInt = BigInt(1);
const alsoHuge = BigInt(9007199254740991)
console.log(bigInt);


const hugeString = BigInt("9007199254740991")
// 9007199254740991n
const hugeHex = BigInt("0x1fffffffffffff")
// 9007199254740991n
const hugeOctal = BigInt("0o377777777777777777")
// 9007199254740991n
const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111")
// 9007199254740991n
console.log(hugeString, hugeHex, hugeOctal, hugeBin);

var mul = 1 % 2;
console.log(mul);

var num1 = Number(1);
var num2 = 1;
var val1=new String("Atindra");
































console.log(val1 instanceof String);


console.log(1 & 1);


var obj = {
	name: "Atindra",
	marks: 22
}

console.log(obj);

delete obj.name;

console.log(obj);


var bodmas = 2*(2+50)/1;
console.log(bodmas);
bodmas = 2*2+50/1;
console.log(bodmas);

var abc = 11;
var cdf = null;
console.log(abc && cdf);//true && false
console.log(abc || cdf);//true || false





var duynamicVaraible = 2;//2

var mathVal = 45/duynamicVaraible?45/duynamicVaraible:1;//false 45/1 true 45/2



// duynamicVaraible == null || duynamicVaraible == undefined
// 


const adventurer = {
  name: 'Alice',
  cat: {
    name: 'cat',
		dog: {
		    name: 'dog',
			mice: {
			    name: 'Dinah'
			  }
		  }
  }
};

const dogName = adventurer.cat.dog.name;
console.log(dogName);
// expected output: undefined

//console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined



















