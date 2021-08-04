$(function(){
	let status = false;
	let collision = 0;
	let state = 'Click the "S" to begin.';
	
	$( "#start" ).click(function() {
		status = true;
		collision = 0;
		$('#status').text('Game started! '+state+$('#status').text());
	});
	
	$("#end").mouseenter(function(){
		if(status && collision <= 0) {
			$('#status').text('Congrats, won! :) ' + state);
		} else if(status && collision > 0) {
			$('#status').text('Lost! ;( ' + state);
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
