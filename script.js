var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setRandom(){
	s = "0123456789abcdef";
	c1 = "#";
	c2 = "#";
	console.log(Math.floor( Math.random()*16));
	for( var i=0;i<6;i++){
		c1 += s[Math.floor( Math.random()*16)];
		c2 += s[Math.floor( Math.random()*16)];
	}
	console.log(c1);

	color1.value = c1;
	color2.value = c2;
	setGradient();
	console.log("set random clicked");
}
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


