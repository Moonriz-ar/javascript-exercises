function add (num1, num2) {
	return num1 + num2; 
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (array) {
	let result = array.reduce((sum, current) => sum + current, 0);
	return result;
}

function multiply (array) {
	let result = array.reduce((multiplied, current) => multiplied * current, 1);
	return result;
}

function power(num1, num2) {
	return Math.pow(num1, num2);
}

function factorial(num) {
	let result = 1;
	if (num === 0) {
		return result;
	} else {
		while (num > 0) {
			result *= num;
			num--;
		}
		return result;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}