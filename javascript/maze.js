$(function(){
	let status = false;
	let collision = 0;
	
	$( "#start" ).click(function() {
		status=true;
		$('#status').text('Game started!');
	});
	
	$("#end").mouseenter(function(){
		if(status && collision <= 0) {
			$('#status').text('Congrats, you won! :)');
		} else if(status && collision > 0) {
			$('#status').text('lost! ;(');
		}
	});
	
	$("div.boundary").mouseover(function(){
	    if(status) {
	    	collision += 1;
	    }
	});
});
