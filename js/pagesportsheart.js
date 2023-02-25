var ni = 0;
function Cambio() {
	
	var ruta = "../../img/esport/esporthearbn" + ni + ".jpg";
	
	var img = document.getElementsByTagName("center")[0].getElementsByTagName("img")[0];
	img.src = ruta;

	ni++;

	if (ni > 2) ni = 1;
	
	window.setTimeout("Cambio()", 5000);
}

window.onload = function() {
	Cambio();
}
