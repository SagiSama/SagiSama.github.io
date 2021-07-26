window.onload = function() {
	
	var textarea = document.getElementById("text-area");
	var start = document.getElementById("start");
	start.onclick = start;
	var animation = document.getElementById("animation");
	animation.onchange = displayAnimation;
	var turbo = document.getElementById("turbo");
	turbo.onchange = turbo;
	
	let timer = null;
	let i = 0;
	let interval = 250;
	function start() {
 		if (timer === null) {
 			timer = setInterval(animate, interval);
		} else {
			clearInterval(timer);
 			timer = null;
		}
	} 
	
	function animate() {
		mainTextArea.innerHTML = animationTypeArray[i]; 
		(i+1==animationTypeArray.length) ? i=0 : i++;
	}
	
	let animationType = null;
	let animationTypeArray = [];
	function displayAnimation() {
		animationType = ANIMATIONS[selectAnimation.value];
		animationTypeArray = animationType.split("=====\n");
		mainTextArea.innerText = animationType;
	}
	
	const turbo = function turbulance() {
		if(turbo.checked) {
			interval = 50;
		} else {
			interval = 250;
		}
	};
};
