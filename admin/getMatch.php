<?php
	//session_start();
	require_once("connection.php");
    $connection = new connection;
	
	$id = $_POST["player"];
	//pero el momento en que se creó tiene que ser de hace 20 segundos.
	$query = "SELECT * FROM partidas WHERE player_1 = '$id'";
	$response = mysqli_query($connection->connected, $query);
	if(mysqli_num_rows($response)>=1){
   		while($obj = mysqli_fetch_object($response)){
   			//Agregar la pass
			$matriz[] = array('player_1' => $obj->player_1, 'player_2' => $obj->player_2, 'id_partida' => $obj->id_partida);
		}
		$datos = json_encode($matriz);
   	}else{
   		$datos = json_encode(false);
   	}
	echo $datos;
?>
