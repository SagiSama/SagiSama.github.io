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
var timer = setInterval(function() { grow(size); }, 1000);

var grow = function(s) {
console.log("-size- "+size);
	size += s;
	$("div").width(size).height(size);
	$('div').css('border-radius', size+'px');
}

var addBall = function() {
	let color = generateRandomColor();
 	size = $('#growth').val();
 	interval = $('#interval').val();
	console.log(" ------- "+color+" "+size+" "+interval);
	
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