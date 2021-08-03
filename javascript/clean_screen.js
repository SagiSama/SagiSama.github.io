$(function() {
	timer;
});

var timer = setInterval(function() { grow; }, 5000);

var grow = function() {
	$("div").css.width() = 100px;
}