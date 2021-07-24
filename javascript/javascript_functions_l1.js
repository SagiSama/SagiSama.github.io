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
	return max(max(n1, n2), n3);
}

// task 3
const isVowel = function(vovel) {
	const charString = "aeiou";
	return charString.indexOf(vovel) > -1;
};

// Task test
function test(expected, result) {
	if(expected === result) {
		return "TEST SUCCEEDED";
	} else {
		return "TEST FAILED.  Expected " + expected + " found " + result;
	}
}

console.log("Task 1 -> Expected output of max(1, -2) is 1  " + test(1, max(1, -2)));
console.log("Task 2 -> Expected output of maxOfThree(1, -2, 0) is 1  " + test(1, maxOfThree(1, -2, 0)));
console.log("Task 3 -> Expected output of isVowel("a") is true  " + test(1, isVowel("a")));