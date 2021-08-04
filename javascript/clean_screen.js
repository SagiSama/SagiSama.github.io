$(function() {  	
	$('div').click(function() { 
		$(this).remove(); 
	});
	$('button').click(addBall());
});

let size = 50;
var timer = setInterval(function() { grow(); }, 250);

var grow = function() {
	size += 10;
	$("div").width(size).height(size).removeClass('ball').addClass('ball');
	$('div').css('border-radius', size+'px');
}

var addBall = function() {
console.log("---- red --- added --- button --- ");
	let color = generateRandomColor();
	const div = $("<div>").css("background-color", color);
	$('body').append(div);
}

var generateRandomColor = function() {
	var back = ["#ff0000","blue","gray","blue","pink","orange","red","brown"];
  	var rand = back[Math.floor(Math.random() * back.length)];
  	return rand;
}