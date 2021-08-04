$(function() {  		
	$('button').click(function(){
       addBall();
    });
});
$(document).on('click', 'div', function(e){
	$(this).remove();
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
	$("div").width(size).height(size).css('border-radius', size+'px');
}

var addBall = function() {
	size = parseInt($('#width').val());
 	growth = parseInt($('#growth').val());
 	interval = parseInt($('#interval').val());
	
	$("body").append($("<div>", {
		"width": size+'px',
	 	"height": size+'px',
	 	"id": "divs",
	 	"css": {
	 		"background-color": generateRandomColor(),
	 		"position": "absolute",
	 		"left": generateRandomPosition()+'%',
	 		"top": generateRandomPosition()+'%',
	 		'border-radius': parseInt($('#width').val())+'px',
	 	}
	}));
	
	//clearInterval(intervalId);
  	//startInterval(interval);
}

var generateRandomColor = function() {
	var back = ["#ff0000","blue","gray","blue","pink","orange","red","brown"];
  	var rand = back[Math.floor(Math.random() * back.length)];
  	return rand;
}

var generateRandomPosition = function() {
	return Math.floor(Math.random() * 100);
}