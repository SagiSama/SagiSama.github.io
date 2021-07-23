// Task 1
function max(num1, num2) {
	if(num1>num2) {
		return num1;
	} else {
		return num2;
	}
}

// Task 2
function maxOfThree(n1, n2, n3) {
	return max(max(a, b), c);
}

// Task test
function test(expected, result) {
	if(expected === result) {
		return "TEST SUCCEEDED";
	} else {
		return "TEST FAILED.  Expected " + expected + " found " + result;
	}
}

console.log("Task 1 -> Expected output of max(1, -2) is 1  " + test(1, max(1, -2)));
console.log("Task 2 -> Expected output of maxOfThree(1, -2) is 1  " + test(1, max(1, -2)));