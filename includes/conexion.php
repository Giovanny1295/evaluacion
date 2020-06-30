<?php
//DEclarar variables define sirve para una variable con constante 
define("SERVIDOR","nombre del servidor");
define("USUARIO","usuario");
define("CLAVE","tu clave");
define("BASE_DATOS","agenda");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Conexion()
{
   if (!($cn=mysqli_connect(SERVIDOR,USUARIO,CLAVE,BASE_DATOS)))
   {
    echo "Error conectando a la base de datos.";
    exit();
   }
   if (!mysqli_select_db($cn,BASE_DATOS))
   {
    echo "Hay un error en la conexión a la base de datos.";
    exit();
   }
   
   return $cn;//Variable para verificar la conexiòn siempre y cuando se llame 
   
}