window.onload = function() {
	"use strict";
	
	var textarea = document.getElementById("text-area");
	var start = document.getElementById("start");
	start.onclick = animate;
	var stop = document.getElementById("stop");
	stop.onclick = terminate;
	var animation = document.getElementById("animation");
	animation.onchange = setAnime;
	var size = document.getElementById("fontsize");
	size.onchange = setSize;
	var turbo = document.getElementById("turbo");
	turbo.onchange = setTurbo;
	
	
	let interval = 250;
	let i = 0;
	let timer = null;
	let runStatus = false;
	function animate() {
		if(animeType === "Blank" || animeType === null || animeType === "") {
			alert("Please choose animation type");
		} else {
			timer = setInterval(display, interval);
			stop.disabled = false;
			start.disabled = true;
			runStatus = true;
			animation.disabled = true;
		}
	}
	
	function terminate() {
		clearInterval(timer);
		timer = null;
		stop.disabled = true;
		start.disabled = false;
		runStatus = false;
	} 
	
	function display() {
		textarea.innerHTML = animeTypeArray[i]; 
		(i+1==animeTypeArray.length) ? i=0 : i=i+1;
	}
	
	let animeType = null;
	let animeTypeArray = [];
	function setAnime() {
		animeType = ANIMATIONS[animation.value];
		animeTypeArray = animeType.split("=====\n");
		textarea.innerText = animeType;
	}
	
	function setSize() {
		textarea.className = size.value;
	}
	
	function setTurbo() {
		if(turbo.checked) {
			interval=50;
		} else {
			interval=250;
		}
		if(runStatus) {
			clearInterval(timer);
			timer = null;
			timer = setInterval(display, interval);
		}
	}
};
