window.onload = function() {
	
	var mainTextArea = document.getElementById("text-area");
	var buttonStart = document.getElementById("start");
	buttonStart.onclick = start;
	var selectAnimation = document.getElementById("animation");
	selectAnimation.onchange = displayAnimationText;

	function start() {
		alert("start animation !!!");
	}
	
	function displayAnimationText() {
		alert(selectAnimation.value);
		mainTextArea.innerText = selectAnimatio.value;
	}
};
