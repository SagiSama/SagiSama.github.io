$(function(){
	let status=false;
	
	$('#start').click(function() {
       status=true;
       $('#status').value('game started GO!');
    });
	
	$("#end").mouseenter(function(){
		$('#status').text('game end!');
	});
});
