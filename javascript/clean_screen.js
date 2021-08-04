$(function() {
	timer;
});

let size = 50;
var timer = setInterval(function() { grow(); }, 250);

var grow = function() {
	console.log("called ===");
	size += 10;
	$("div").width(size).height(size);
	$('div').css('border-radius', size+'px');
}