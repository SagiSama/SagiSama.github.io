$(function() {
    $("#ask").click(updateAnswer);
});

function updateAnswer() {
	$.ajax("ask", {
		"type": "get",
		"data": {}
    }).done(displayAnswer);
}

function displayAnswer(data) {
	$("#question").val(data);
}