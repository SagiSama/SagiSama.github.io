$(function() {
    $("#load").click(loadBoot);
    createLoadingMesage();
});

function createLoadingMesage() {
	var throbber = $('<img>').attr('src','images/loading.gif');
	var div = $('<div>',{
		'text':'Loading...',
		'id':'loading'
	})
		.append(throbber)
		.hide()
		.ajaxStart(function() {
      		$(this).show();
      		$('#boot').empty();
    	}).ajaxStop(function() {
      		$(this).hide();
    	});

	$('#container').append(div);
}

function loadBoot() {
    $.ajax({
	  url: "http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/bootloader/loader.php",
	  context: document.body
	}).done(displayBoot)
	  .fail(ajaxFailure);
}

function displayBoot(data) {
console.log("dat   "+data+" "+ typeof data);
	$('#boot').append($('<img>').attr('src', data));
}

function ajaxFailure(xhr, status, exception) {
  console.log("FSAILURE", xhr, status, exception);
}