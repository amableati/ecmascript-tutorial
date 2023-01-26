/*
Create a function that returns a truthy value if the input is prime, and a falsy one otherwise.
*/

console.log(isPrime(16));//true

console.log(isPrime(79));//false

console.log(isPrime(121));//true

























function isPrime(i) {
    if (i < 2) {return 0;};
    var result = 1;
    var l = 2;
    while (result && l <= Math.sqrt(i)){
            result = i%l;
            l += 1;
    }
if(result==0)
    return true;
else return false;
};