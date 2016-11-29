<?php
	require_once("connection.php");
    $connection = new connection;

    $user = $_POST["username"];
    $password = $_POST["password"];
	$consulta = "SELECT * FROM jugadores WHERE name_player = '$user' AND pass_player = '$password'";
	$response = mysqli_query($connection->connected,$consulta);


	if(!isset($_SESSION['username']) && ! isset($_SESSION['password'])){
		if(mysqli_num_rows($response)>=1){
	   		while($obj = mysqli_fetch_object($response)){
	   			//Agregar la pass
				$matriz = array('name_player' => $obj->name_player, 'pass_player' => $obj->pass_player, 'id_player' => $obj->id_player);
				session_start();
				$_SESSION["username"] = $obj->name_player;
				$_SESSION["password"] = $obj->pass_player;
				$_SESSION["id_player"] = $obj->id_player;
			}
			$datos = json_encode($matriz);
	   	}else{
	   		$datos = json_encode(false);
	   	}
		echo $datos;
	}//else{
	// 	echo json_encode($_SESSION);
	// }
?>