$(function(){
	let status = false;
	let collision = 0;
	
	$( "#start" ).click(function() {
		status = true;
		collision = 0;
		$(".boundary").css("background-color", "green");
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
		console.log("collition :(");
		$(".boundary").css("background-color", "red");
	    if(status) {
	    	collision += 1;
	    }
	});
});
