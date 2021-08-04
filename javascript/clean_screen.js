$(function() {  	
	$('div').click(function() { 
		$(this).remove(); 
	});
	$('button').click(function(){
       addBall();
    });
});

let interval = 0;
let size = 0;
var timer = setInterval(function() { grow(size); }, interval);

var grow = function(s) {
	size += s;
	$("div").width(size).height(size);
	$('div').css('border-radius', size+'px');
}

var addBall = function() {
	let color = generateRandomColor();
 	size = parseInt($('#growth').val());
 	interval = parseInt($('#interval').val());
	
	$("body").append($("<div>", {
		"width": parseInt($('#width').val())+'px',
	 	"height": parseInt($('#width').val())+'px',
	 	"css": {
	 		"background-color": color
	 	}
	}));
}

var generateRandomColor = function() {
	var back = ["#ff0000","blue","gray","blue","pink","orange","red","brown"];
  	var rand = back[Math.floor(Math.random() * back.length)];
  	return rand;
}