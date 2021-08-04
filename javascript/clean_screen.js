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
	$("div").width(size).height(size).removeClass('ball').addClass('ball');
	$('div').css('border-radius', size+'px');
}

var addBall = function() {
	console.log("---- red --- added --- button --- ");
	let color = generateRandomColor();
 	size = $('#growth').val();
 	interval = $('#interval').val();
	
	$("body").append($("<div>", {
		"width": $('#width').val(),
	 	"height": $('#width').val(),
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