/*pagina Informacion*/

function Efecto1(objLugar){
	objLugar.style.borderColor = "#0BDAF3";
	objLugar.style.borderRadius = "0px";
	objLugar.style.transition = "all 0.5s ease";
	objLugar.childNodes[0].style.transform = "scale(1.2,1.2)";


}

function Efecto2(objLugar){
	objLugar.style.borderColor = "#fff";
	objLugar.style.borderRadius = "15px";
	objLugar.style.transition = "all 0.5s ease";


	objLugar.childNodes[0].style.transform = "scale(1,1)";
	
	objLugar.childNodes[0].style.transition = "all 0.5s ease"

}
function Efecto3(objArticulo){


	objArticulo.childNodes[1].style.transform = "scale(2,2)";

	objArticulo.childNodes[1].style.transition = "all 0.5s ease"
	
}

function Efecto4(objArticulo){



	objArticulo.childNodes[1].style.transform = "scale(1,1)";

	objArticulo.childNodes[1].style.transition = "all 0.5s ease"
	
}

/*Paginas noticias*/



function MostrarLugar(n) {

	var ruta = "../img/noticias/img" + n +".jpg" ;
    document.getElementById("nuevo1").src = ruta;

	
}



function MostrarLugar1(m) {

	var ruta1 = "../img/noticias/img" + m +".jpg" ;
    document.getElementById("nuevo2").src = ruta1;

	
}



function MostrarLugar2(p) {

	var ruta2 = "../img/noticias/img" + p +".jpg" ;
    document.getElementById("nuevo3").src = ruta2;

	
}

window.onload = function() {
	
	/*pagina informacion*/
	var arrLugar = document.getElementsByClassName("lugar");
	for (let x = 0; x<arrLugar.length;x++){
		arrLugar[x].onmouseover = function() {
			Efecto1(this);}
		arrLugar[x].onmouseout = function(){ Efecto2(this);}
	}
	var arrArticulo = document.getElementsByClassName("articulo");
	for (let y = 0; y<arrArticulo.length;y++){
		arrArticulo[y].onmouseover = function() {
			Efecto3(this);}
		arrArticulo[y].onmouseout = function(){ Efecto4(this);}
	}

    /*pagina noticias*/

	
	var barra = document.getElementsByTagName("table")[0]; 
	var lista = barra.getElementsByTagName("tr")[0];
	var opcion = lista.getElementsByTagName("td");

	
	var enlace1 = opcion[1].getElementsByTagName("a")[0];
	
	enlace1.addEventListener("click", function(){ MostrarLugar(1)},false);
   
	var enlace2 = opcion[1].getElementsByTagName("a")[1];
	
	enlace2.addEventListener("click", function(){ MostrarLugar(2)},false);


    var barra1 = document.getElementsByTagName("table")[0]; 
	var lista1 = barra1.getElementsByTagName("tr")[2];
	var opcion1 = lista1.getElementsByTagName("td");

	
	var enlac1 = opcion1[1].getElementsByTagName("a")[0];
	
	enlac1.addEventListener("click", function(){ MostrarLugar1(5)},false);
   
	var enlac2 = opcion1[1].getElementsByTagName("a")[1];
	
	enlac2.addEventListener("click", function(){ MostrarLugar1(6)},false);


  
  
    var barra2 = document.getElementsByTagName("table")[0]; 
	var lista2 = barra2.getElementsByTagName("tr")[4];
	var opcion2 = lista2.getElementsByTagName("td");

	
	var enla1 = opcion2[1].getElementsByTagName("a")[0];
	
	enla1.addEventListener("click", function(){ MostrarLugar2(9)},false);
   
	var enla2 = opcion2[1].getElementsByTagName("a")[1];
	
	enla2.addEventListener("click", function(){ MostrarLugar2(10)},false);
}

