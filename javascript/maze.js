$(function(){
	let status = false;
	let collision = 0;
	let text = $('#status').text();
	
	$( "#start" ).click(function() {
		status = true;
		collision = 0;
		$('#status').text('Game started!\n' + text);
		$(".boundary").css("background-color", "#eeeeee");
	});
	
	$("#end").mouseenter(function(){
		if(status && collision <= 0) {
			$('#status').text('Congrats, won! :)\n' + text);
		} else if(status && collision > 0) {
			$('#status').text('Lost! ;(\n' + text);
		}
		status = false;
	});
	
	$("div.boundary").mouseover(function(){
	    if(status) {
			$(".boundary").css("background-color", "#ffcccc");
	    	collision += 1;
	    }
	});
});
