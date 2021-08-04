$(function(){
	let status = false;
	let collision = 0;
	
	$( "#start" ).click(function() {
		status = true;
		collision = 0;
		$('#status').text('Game started! '+$('#status').text());
	});
	
	$("#end").mouseenter(function(){
		if(status && collision <= 0) {
			$('#status').text('Congrats, won! :) ' + $('#status').text());
		} else if(status && collision > 0) {
			$('#status').text('Lost! ;( ' + $('#status').text());
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
