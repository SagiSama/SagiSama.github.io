$(function(){
	let status=false;
	
	$( "#start" ).click(function() {
	  alert( "Handler for .click() called." );
	});
	
	$("#end").mouseenter(function(){
		$('#status').text('game end!');
	});
});
