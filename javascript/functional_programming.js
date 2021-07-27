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

// Task 4
const sum = function sum(arr) {
    let sum=0;
	arr.forEach(function(element) {
	 	sum += element;
	});
	return sum;
};

const multiply = function multiply1(arr) {
	return arr.reduce(function (accumulator, currentValue) {
		return accumulator * currentValue;
	}, 0);
};

// Task 5
const reverse = function reverse(word) {
	let reserved = "";
	let i=word.length-1;
	while(i>-1) {
		reserved += word[i];
		i--;
	}
	return reserved;
}

// Task 6
let findLongestWord = function(strArr) {
	let len=0, i=0;
	while(i<strArr.length) {
		if(len<strArr[i].length) {
			len = strArr[i].length;
		}
		i++;
	}
	return len;
};

// Task 7
const filterLongWords = function(strArr, len) {
	let i=0, res=[];
	while(i<strArr.length) {
		if(len<strArr[i].length) {
			res.push(strArr[i]);
		}
		i++;
	}
	return res;
};

// Task 8
// a
const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem * 10;
})
// b
//document.writeln(b.toString() + "<br/>");
const c = a.filter(function(elem, i, array){
  return elem === 3;});
//document.writeln(c.toString() + "<br/>");
// c
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue + elem;
});

//document.writeln(d+ "<br/>");

const d2 = a.find(function(elem) {return elem > 1;}); //3
const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
//document.writeln(d2+ "<br/>");
//document.writeln(d3);



// Task test
function test(expected, result) {
	if(Array.isArray(expected) && Array.isArray(result)) {
		if(JSON.stringify(expected) === JSON.stringify(result)) {
			return "TEST SUCCEEDED";
		} else {
			return "TEST FAILED.  Expected " + expected + " found " + result;
		}
	}
	
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
console.log("Task 5 -> Expected output of reverse('abc') is 'cba' " + test("cba", reverse("abc")));
console.log("Task 6 -> Expected output of findLongestWord(['123abc?.','a','abc']) is 8 " + test(8, findLongestWord(['123abc?.','a','abc'])));
console.log("Task 7 -> Expected output of filterLongWords(['second','one','third'], 4) is ['second','third'] " + test(['second','third'], filterLongWords(['second','one','third'], 4)));
console.log("Task 8a -> Expected output of b() is [10,30,50,30,30] " + test([10,30,50,30,30], b));
console.log("Task 8b -> Expected output of c() is [3,3,3] " + test([3,3,3], c));
console.log("Task 8c -> Expected output of d() is 15 " + test(15, d));
console.log("Task 8c -> Fail condition check Expected output of d() is 15 but check 14 " + test(14, d));

