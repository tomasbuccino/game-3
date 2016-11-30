<?php
	//session_start();
	require_once("connection.php");
    $connection = new connection;
	
	$player_1 = $_POST["player_1"];
	$timestamp = $_POST["time"];
	$time = $_POST["time_player_1"]; 
	
	$query = "UPDATE partidas SET player_1 = 'player_1', time_player1 = '$time' WHERE time_match=FROM_UNIXTIME(1480483599293)";
	if (mysqli_query ($connection->connected, $query)) {
	    echo "Escribio.";
	} else {
	    echo "Error updating";
	}
?>
