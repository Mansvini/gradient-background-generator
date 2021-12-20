var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random=document.querySelector(".random");

function randomColorBackgroundGenerator() {
	var c1= Math.floor(Math.random()*16777215).toString(16);
	var c2= Math.floor(Math.random()*16777215).toString(16);
	if (c1.length==6 && c2.length==6){
		color1.value= "#" + c1;
		color2.value= "#" + c2;
		setGradient();
	} else{
		randomColorBackgroundGenerator();
	}
}
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", randomColorBackgroundGenerator);


