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

// Task 3
const isVowel = function(vovel) {
	const charString = "aeiouAEIOU";
	return charString.indexOf(vovel) > -1;
};

// Task4
const sum = function sum(arr) {
    let sum=0;
	for(let i=0; i<arr.length; i++) {
	  sum = sum + arr[i];
	}
	return sum;
};

const multiply = function multiply1(arr) {
	let total=1, i=0;
	while(i<arr.length) {
		total *= arr[i];
		i++;
	}
	return total;
};

//Task 5
const reverse = function reverse() {
}

// Task test
function test(expected, result) {
	if(expected === result) {
		return "TEST SUCCEEDED";
	} else {
		return "TEST FAILED.  Expected " + expected + " found " + result;
	}
}

console.log("Task 1 -> Expected output of max(1, -2) is 1 " + test(1, max(1, -2)));
console.log("Task 2 -> Expected output of maxOfThree(1, -2, 0) is 1 " + test(1, maxOfThree(1, -2, 0)));
console.log("Task 3 -> Expected output of isVowel('a') is true " + test(true, isVowel("a")));
console.log("Task 4 -> Expected output of sum([1,2,3,4,5,6,7,8,9]) is 45 " + test(45, sum([1,2,3,4,5,6,7,8,9])));
console.log("Task 4 -> Expected output of multiply([1,2,3,4,5,6,7,8,9]) is 362880 " + test(362880, multiply([1,2,3,4,5,6,7,8,9])));
