<?php
	//session_start();
	require_once("connection.php");
    $connection = new connection;


    $query = "INSERT INTO partida (username) VALUES ('hola')";
		if (mysqli_query ($connection->connected, $query)) {
			echo "Escribio";
		} else {
		    echo "Error. No escribio";
		}
?>