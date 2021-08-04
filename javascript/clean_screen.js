$(function() {
	//timer;
	
  	var back = ["#ff0000","blue","gray","blue","pink","orange","red","brown"];
  	var rand = back[Math.floor(Math.random() * back.length)];
  	$('div').css('background', rand);
  	
  	//$('div').click(function(e) {
    //	$('div').remove('div');
	//});
	
	$('div').click(function(e){
	    $(e.target).remove();
	});
});

let size = 50;
//var timer = setInterval(function() { grow(); }, 250);

var grow = function() {
	console.log("called ===");
	size += 10;
	$("div").width(size).height(size).removeClass('ball').addClass('ball');
	$('div').css('border-radius', size+'px');
}
