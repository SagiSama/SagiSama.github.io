$(function() {
    $("#addToCard").click(addToCard);
});

function addToCard() {
	let ids = [];
    $.each($("input[type='checkbox']:checked"), function(){
        ids.push($(this).val());
    });

	$.ajax("addToCart", {
		"type": "post",
		"data": { prodId: ids }
    }).done(displayCount);
}

function displayCount(data) {
	$("#count").text("Card("+data.count+")");
}