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
function startInterval(_interval, growth) {
  intervalId = setInterval(function() {
    grow(growth);
  }, _interval);
}

let size = 0;
var grow = function(s) {
	size += s;
	$("div").width(size).height(size);
	$('div').css('border-radius', size+'px');
}

var addBall = function() {
	let color = generateRandomColor();
 	let growth = parseInt($('#growth').val());
 	interval = parseInt($('#interval').val());
	
	$("body").append($("<div>", {
		"width": parseInt($('#width').val())+'px',
	 	"height": parseInt($('#width').val())+'px',
	 	"css": {
	 		"background-color": color,
	 		"position": "absolute",
	 		"left": generateRandomPosition()+'%',
	 		"top": generateRandomPosition()+'%',
	 		'border-radius': parseInt($('#width').val())+'px',
	 	}
	}));
	
	//clearInterval(intervalId);
  	startInterval(interval, growth);
}

var generateRandomColor = function() {
	var back = ["#ff0000","blue","gray","blue","pink","orange","red","brown"];
  	var rand = back[Math.floor(Math.random() * back.length)];
  	return rand;
}

var generateRandomPosition = function() {
	return Math.floor(Math.random() * 100);
}