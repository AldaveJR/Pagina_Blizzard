/*Pagina Contacto*/


$(document).ready(function(){
  
    

   $("#btnaceptar").click(function(){
	if ($("#txtnombre").val() == ""){
		alert("Falta escribir  su nombre...");
	    $("#txtnombre").focus();
	    return;
	}

	if ($("#txtapellido").val() == ""){
		alert("Falta escribir  su apellido...");
	    $("#txtapellido").focus();
	    return;
	}

	if ($("#cbodistrito").val() == ""){
		alert("Falta escribir  su distrito...");
	    $("#cbodistrito").focus();
	    return;
	}

	if ($("#txtfecha").val() == ""){
		alert("Falta escribir  su fecha...");
	    $("#txtfecha").focus();
	    return;
	}

	if ($("#txthijos").val() == ""){
		alert("Falta escribir  su hijos...");
	    $("#txthijos").focus();
	    return;
	}

	if ($("#txtcorreo").val() == ""){
		alert("Falta escribir  su correo..");
	    $("#txtcorreo").focus();
	    return;
	}

	if ($("#txttelefono").val() == ""){
		alert("Falta escribir  su telefono..");
	    $("#txttelefono").focus();
	    return;
	}

	if ($("#txtredsocial").val() == ""){
		alert("Falta escribir  su red social..");
	    $("#txtredsocial").focus();
	    return;
	}

	if ($("#txtcomentarios").val() == ""){
		alert("Falta escribir  su comentarios..");
	    $("#txtcomentarios").focus();
	    return;
	}






	alert("Datos correctos");
	
});


   



   $("#btnlimpiar").click(function(){
	$("#frmdatos")[0].reset();
	$("#txtnombre").focus();
});

  });




