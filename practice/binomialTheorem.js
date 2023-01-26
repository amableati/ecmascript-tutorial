/*
Write a JavaScript program to evaluate binomial coefficients.

 binomial coefficients are a family of positive integers that occur as coefficients in the binomial theorem. 
They are indexed by two nonnegative integers; the binomial coefficient indexed by n and k is usually written \tbinom nk. 
It is the coefficient of the x k term in the polynomial expansion of the binomial power (1 + x) n. 

*/

console.log(binomial(8, 3));
console.log(binomial(10, 2));


function binomial(n, k) {
	return n*k;
}



































/*function binomial(n, k) {
	if ((typeof n !== 'number') || (typeof k !== 'number'))
		return false;
	var coeff = 1;
	for (var x = n - k + 1; x <= n; x++) coeff *= x;
	for (x = 1; x <= k; x++) coeff /= x;
	return coeff;
}*/