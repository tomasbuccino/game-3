<?php
	//session_start();
	require_once("connection.php");
    $connection = new connection;
	
	$player_1 = $_POST["player_1"];
	$time = $_POST["time_player_1"]; 
	$id = $_POST["id_partida"]; 
	
	$query = "UPDATE partidas SET time_player1 = '$time' WHERE id_partida='$id'";
	if (mysqli_query ($connection->connected, $query)) {
	    echo "Escribio.";
	} else {
	    echo "Error updating";
	}
?>
