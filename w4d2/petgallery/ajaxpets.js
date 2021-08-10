$(function() {
    $("input[name='animal']").click(updatePictures);
});

function updatePictures() {
	if($("#kitties").attr("checked") == 'checked') {
		animal = "kitty";
	} else {
		animal = "puppy";
	}
	
	$.ajax("getPics", {
		"type": "get",
		"data": {
        	"animal": animal
		}
    }).done(displayPictures);
}

function displayPictures(data) {
	$("#pictures").html(data);
}