$(function() {  	
	$('div').click(function() { 
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
	 		"background-color": color
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