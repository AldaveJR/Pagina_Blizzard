var ni = 0;
function Cambio() {
	
	var ruta = "../../img/esport/esportoverwj" + ni + ".png";
	
	var img = document.getElementsByTagName("table")[0].getElementsByTagName("img")[0];
	img.src = ruta;

	ni++;

	if (ni > 7) ni = 1;
	
	window.setTimeout("Cambio()", 2000);
}

window.onload = function() {
	Cambio();
}
