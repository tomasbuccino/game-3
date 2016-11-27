<?php
	//session_start();
	require_once("connection.php");
    $connection = new connection;
	
	$id;
	//pero el momento en que se creó tiene que ser de hace 20 segundos.
	$query = "SELECT * FROM partidas WHERE id_player = '$id'";
	if (mysqli_query ($connection->connected, $query)) {
		echo "Escribio";
	} else {
	    echo "Error. No escribio";
	}
?>

<!-- x debug -->
<!-- net beans -->