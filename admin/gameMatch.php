<?php
	//session_start();
	require_once("connection.php");
    $connection = new connection;

    $player_1 = $_POST["player"];
    $player_2 = $_POST["opponent"];
    $time_match =  $_POST["time"];
    $query = "INSERT INTO partidas (player_1, player_2, time_match) VALUES ('$player_1', '$player_2', FROM_UNIXTIME('$time_match'))";
	if (mysqli_query ($connection->connected, $query)) {
		echo "Inicio la partida";
	} else {
	    echo "No pudo iniciar partida";
	}
?>