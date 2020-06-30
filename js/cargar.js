$(document).ready(function(){
    //Llamar clase enviar archivo
	$('.enviar_archivo').on( "click", function(evt) {
        //Crear evento
        evt.preventDefault();
        //Llamar function cargar archivo CSV para que funcione el boton 
		cargarArchivoCSV();
	});

});
//Crear funsión
function cargarArchivoCSV()
{
//Crear variables
	var archivo 		  = $('input[name=archivo_csv]').val(); //Alamacenar la variable del nombre archivo para luego capturar el nombre del imput.five
	var extension		  = $('#archivo_csv').val().split(".").pop().toLowerCase();
	var Formulario		  = document.getElementById('frmSubirCSV');
	var dataForm		  = new FormData(Formulario);

	var retornarError     = false;//Esta variable sirve para que al inicio sea falso para no tener un error
    //Validación
	if(archivo=="") //Archivo es = vacio
	{
        //Marcar de rojo el borde al no tener archivo
		$('#archivo_csv').addClass('error');
		retornarError = true;
		$('#archivo_csv').focus();
	} 
	else if($.inArray(extension, ['csv']) == -1)
	{
		alert("¡El archivo que esta tratando de subir es invalido!");
		retornarError = true;
		$('#archivo_csv').val("");
	}
	else
	{
		$('#archivo_csv').removeClass('error');//Variable para subir el archivo
	}

    // A continuacion se resalta todos los campos que contengan errores.
    if(retornarError == true)
    {
        return false;
    }

    $.ajax({

		url: 'procesar.php',
		type: 'POST',
		data: dataForm,
		cache: false,
		contentType: false,
		processData: false,
        beforeSend: function(){
            $('#estado').prepend('<p><img src="images/facebook.gif" /></p>');
        },
        success: function(data){
            $('#estado').fadeOut("fast",function()
            {
                $('#estado').html(data);
            });
            
            $('#estado').fadeIn("slow");
            $("#frmSubirCSV").find('input[type=file]').val("");

        },
		error: function (jqXHR, textStatus, errorThrown) {
		    $loader.html(jqXHR + " :: " + textStatus + " :: " + errorThrown);
		}

    });


}