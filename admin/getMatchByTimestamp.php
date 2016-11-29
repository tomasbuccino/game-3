<?php
	//session_start();
	require_once("connection.php");
    $connection = new connection;
	
	$player_1 = $_POST["player_1"];
	$timestamp = $_POST["time"];
	//
	$query = "SELECT * FROM partidas WHERE player_1 = '$player_1' AND time_match  = '$timestamp'";
	$response = mysqli_query($connection->connected, $query);
	if(mysqli_num_rows($response)>=1){
   		while($obj = mysqli_fetch_object($response)){
   			//Agregar la pass
			$matriz = array('player_1' => $obj->player_1, 'player_2' => $obj->player_2, 'id_partida' => $obj->id_partida, 'time_match' => $obj->time_match);
		}
		$datos = json_encode($matriz);
   	}else{
   		$datos = json_encode(false);
   	}
	echo $datos;
?>


<?php
	//session_start();
	require_once("connection.php");
    $connection = new connection;
	
	$player_1 = $_POST["player_1"];
	$timestamp = $_POST["time"];
	//
	$query = "UPDATE home SET $language='$newValue' WHERE value='$realValue'";
	$response = mysqli_query($connection->connected, $query);
	if(mysqli_num_rows($response)>=1){
   		while($obj = mysqli_fetch_object($response)){
   			//Agregar la pass
			$matriz = array('player_1' => $obj->player_1, 'player_2' => $obj->player_2, 'id_partida' => $obj->id_partida, 'time_match' => $obj->time_match);
		}
		$datos = json_encode($matriz);
   	}else{
   		$datos = json_encode(false);
   	}
	echo $datos;
?>
