$(function() {
	timer;
	
});

let size = 50;
var timer = setInterval(function() { grow(); }, 250);

var grow = function() {
	console.log("called ===");
	size += 10;
	$("div").width(size).height(size).removeClass('ball').addClass('ball');
	$('div').css('border-radius', size+'px');
}

var pop = function() {
	$("div").remove("div", function(idx, current) {
		$(current).remove("div");
	});
}

$('div').click(function(e) {
    $('div').remove(e);
});