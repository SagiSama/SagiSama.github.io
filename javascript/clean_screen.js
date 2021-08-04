$(function() {
	timer;
	//pop;
	$('div').click(function() { 
		pop();
	});
});

let size = 50;
var timer = setInterval(function() { grow(); }, 250);

var grow = function() {
	console.log("called ===");
	size += 10;
	$("div").width(size).height(size).removeClass('ball').addClass('ball');
	$('div').css('border-radius', size+'px');
}

//var pop = $( "div" ).click(function() {
//	$( "div" ).remove( "div" );
//});

var pop = function() {
	alert("Boink.");
}