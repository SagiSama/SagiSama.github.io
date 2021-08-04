$(function(){
	let status = false;
	let collision = 0;
	let text = $('#status').text();
	
	$( "#start" ).click(function() {
		status = true;
		collision = 0;
		//$('#status').text('Game started! ' + text);
		$("#status").append($("<h2>", {"text": 'Game Started !', "css": {"color": 'blue'}}));
		$(".boundary").css("background-color", "#eeeeee");
	});
	
	$("#end").mouseenter(function(){
		if(status && collision <= 0) {
			$('#status').text('Congrats, won! :) ' + text);
		} else if(status && collision > 0) {
			$('#status').text('Lost! ;( ' + text);
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
