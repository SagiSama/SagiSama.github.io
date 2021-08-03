$(function() {
	timer;
});

let size = 50;
var timer = setInterval(function() { grow; }, 250);

var grow = function() {
	size += 10;
	$("div").width(size).height(size);
}