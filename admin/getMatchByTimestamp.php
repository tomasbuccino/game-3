<?php
	//session_start();
	require_once("connection.php");
    $connection = new connection;
	
	$player_1 = $_POST["player_1"];
	$timestamp = $_POST["time"];
	//
	$query = "UPDATE partidas SET $player_1 = '$player_1' WHERE $time_match='$timestamp'";
	if (mysqli_query ($connection->connected, $query)) {
	    echo "Escribio.";
	} else {
	    echo "Error updating";
	}
?>
