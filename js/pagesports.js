function Efecto1(objlugar) {
	objlugar.style.borderColor = "#fff";
	objlugar.style.borderRadius = "0px";
	objlugar.style.transition = "all 0.5s ease";
	
	objlugar.childNodes[0].style.transform = "scale(0.8, 0.8)";
	objlugar.childNodes[0].style.filter = "grayscale(100%)";
	objlugar.childNodes[0].style.transition = "all 0.5s ease";
	
	objlugar.childNodes[1].style.color = "f00";
}

function Efecto2(objlugar){
	objlugar.style.borderColor = "#002650";
	objlugar.style.borderRadius = "15px";
	objlugar.style.transition = "all 0.5s ease";

	objlugar.childNodes[0].style.transform = "scale(1, 1)";
	objlugar.childNodes[0].style.filter = "grayscale(0%)";
	objlugar.childNodes[0].style.transition = "all 0.5s ease";

	objlugar.childNodes[1].style.color = "000";
}

window.onload = function() {

	var arrlugar = document.getElementsByClassName("lugar");

	for (let x = 0; x < arrlugar.length; x++) {
		arrlugar[x].onmouseover = function() { Efecto1(this); }
		arrlugar[x].onmouseout = function() { Efecto2(this); }
	}
}
