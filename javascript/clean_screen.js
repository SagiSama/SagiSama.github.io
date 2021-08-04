$(function() {  	
	$('div').click(function() { 
		console.log("---- "+this);
		$(this).remove(); 
	});
	$('button').click(function(){
       addBall();
    });
});

var intervalId;
function startInterval(_interval) {
  intervalId = setInterval(function() {
    grow();
  }, _interval);
}

let size = 0;
let growth = 0;
var grow = function() {
	size += growth;
	console.log(" =-> "+size);
	$("div").width(size).height(size).css('border-radius', size+'px');
}

var addBall = function() {
	let color = generateRandomColor();
	size = parseInt($('#width').val());
 	let growth = parseInt($('#growth').val());
 	interval = parseInt($('#interval').val());
	
	$("body").append($("<div>", {
		"width": size+'px',
	 	"height": size+'px',
	 	"css": {
	 		"background-color": color,
	 		"position": "absolute",
	 		"left": generateRandomPosition()+'%',
	 		"top": generateRandomPosition()+'%',
	 		'border-radius': parseInt($('#width').val())+'px',
	 	}
	}));
	
	//clearInterval(intervalId);
  	startInterval(interval);
}

var generateRandomColor = function() {
	var back = ["#ff0000","blue","gray","blue","pink","orange","red","brown"];
  	var rand = back[Math.floor(Math.random() * back.length)];
  	return rand;
}

var generateRandomPosition = function() {
	return Math.floor(Math.random() * 100);
}