// Task 1

const readline = require('readline').createInterface({
	input: process.stdin,
 	output: process.stdout,
});

readline.question('What is your name? ', name => {
 	console.log(`Welcome ${name}`);
 	readline.question('What is your age? ', age => {
		if(parseInt(age) < 16) {
			console.log('You’re not allowed to drive in Iowa');
		} else {
			console.log('You’re allowed to get a drivers license in Iowa');
		}
		getNumber();
	});
});

// Task 2

let sum = 0;
let getNumber = function () {
  	readline.question('Enter number to stop eneter stop: ', function (num) {
    	if (num === 'stop') {   
    		console.log(`Sum is: ${sum}`);
      		readline.close();
    	} else {
    		if(isNaN(num)) {
    			num = 0;
    		}
			sum += Number(num);
    		console.log(sum);
	    	getNumber();
    	}
  });
};
