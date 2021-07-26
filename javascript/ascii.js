window.onload = function() {
	
	var textarea = document.getElementById("text-area");
	var start = document.getElementById("start");
	start.onclick = animate;
	var animation = document.getElementById("animation");
	animation.onchange = setAnime;
	var turbo = document.getElementById("turbo");
	turbo.onchange = setTurbo;
	
	let interval = 250;
	let i = 0;
	let timer = null;
	function animate() {
 		if (timer === null) {
 			timer = setInterval(display, interval);
		} else {
			clearInterval(timer);
 			timer = null;
		}
	} 
	
	function display() {
		textarea.innerHTML = animeTypeArray[i]; 
		(i+1==animeTypeArray.length) ? i=0 : i++;
	}
	
	let animeType = null;
	let animeTypeArray = [];
	function setAnime() {
		animeType = ANIMATIONS[animation.value];
		animeTypeArray = animeType.split("=====\n");
		textarea.innerText = animeType;
	}
	
	function setTurbo() {
		if(turbo.checked) {
			interval=50;
		} else {
			interval=250;
		}
		clearInterval(timer);
		timer = setInterval(display, interval);
	}
};
