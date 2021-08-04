$(function(){
	let status=false;
	
	$( "#start" ).click(function() {
		status=true;
		$('#status').text('Game started!');
	});
	
	$("#end").mouseenter(function(){
		$('#status').text('Game end!');
	});
});
