<?php 
header("Access-Control-Allow-Origin: *");
/* La primera sentencia que DEBE incluir el php, es la que habilita el envío y recepción de datos de servidores externos (sino no funciona). */

/* conectamos con la base de datos y realizamos el recurso de conexión (la variable $cnx) que utilizaremos en cualquier transacción con la misma. Recordar cambiar los valores de usuario y contraseña (root y "") genéricos por los suministrados por el servidor donde esté subido el php y la base de datos. */
$cnx = mysqli_connect('localhost', 'root', '', 'adidas')
	or die("No se pudo conectar");
	
/* codificamos los caracteres que devuelve la base */
mysqli_set_charset($cnx, "utf8");

/* Realizamos una consulta para enviarle a la app, los comentarios guardados en la tabla. Guardamos la consulta en una variable (los ordenamos descendentes para que el último comentario figure arriba de todos). */	
$consulta = "SELECT nombre FROM productos ORDER BY id_producto DESC";

/* ejecutamos la consulta y colectamos la respuesta en al variable */
$respuesta = mysqli_query($cnx, $consulta);

/* Declaramos un array donde, en cada posición del mismo, iremos agregando cada registro que devuelve la consulta. */
$productos=array();

/* recorremos los resultados recibidos. La función mysqli_fetch_assoc "desarma" de a uno los registros recibidos y devuelve un array asociativo, donde los nombres de las posiciones son los nombres de cada campo de la tabla y los valores de cada posición del array, los valores de cada campo. Cada uno de estos array asociativos que devuelve los guardamos en el array $comentarios que declaramos previamente, mediante el método array_push que agrega una posición al array al final del mismo (recibe 2 parámetros: el primero el array al que le agrega una posición y el segundo el valor a agregar, en este caso el array asociativo con los datos del registro). */
while ($resultados = mysqli_fetch_assoc($respuesta))
{
	$resultados['nombre']= $resultados['nombre'];
	array_push($productos, $resultados);	
}

/* Por último hacemos una impresión (echo) del array generado con todos los comentarios, convertido en JSON por medio de la función php json_encode. La impresión no se verá en pantalla ya que no estamos navegando al php, sino que será la información que colectará jQuery desde la app (la respuesta del php) */
echo json_encode($productos);
?>