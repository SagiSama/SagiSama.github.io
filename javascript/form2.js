window.onload = function() {
	"use strict";
	
	let isValid = false;
	const regEx = /^\d{4}-\d{2}-\d{2}$/;
	const regex = /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/;
	
	let date = document.getElementById("date");
	let date_error = document.getElementById("date_error");
	let submit = document.getElementById("submit");
	
	date.addEventListener('change', updateValue);

	function updateValue(e) {
		isValid = regex.test(date.value);
		if(isValid) {
			date_error.className = "df";
		} else {
			date_error.className = "dt";
		}
	}
}