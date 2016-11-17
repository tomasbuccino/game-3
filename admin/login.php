<?php
	require_once("connection.php");
    $connection = new connection;

    $user = $_POST["username"];
	$consulta = "SELECT * FROM jugadores WHERE name_player = '$user'";
	$response = mysqli_query($connection->connected,$consulta);

	if(mysqli_num_rows($response)>=1){
   		while($obj = mysqli_fetch_object($response)){
			$matriz = array('name_player' => $obj->name_player, 'id_player' => $obj->id_player);
		}
		$datos = json_encode($matriz);
   	}else{
   		$datos = json_encode(false);
   	}
   	echo $datos;
?>