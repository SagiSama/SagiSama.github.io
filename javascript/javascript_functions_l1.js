// Task 1
function max(num1, num2) {
	if(num1>num2) {
		return num1;
	} else {
		return num2;
	}
}

// Task test
function test(expected, result) {
	if(expected === result) {
		console.log("Test success");
	} else {
		console.log("Test failed");
	}
}

console.log("test of one ---->"+max(1,2));