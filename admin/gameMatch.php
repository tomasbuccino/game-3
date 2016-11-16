<?php
	//session_start();
	require_once("connection.php");
    $connection = new connection;

    $query = "INSERT INTO partidas (player_1) VALUES ('brenda')";
		if (mysqli_query ($connection->connected, $query)) {
			echo "Escribio";
		} else {
		    echo "Error. No escribio";
		}
?>