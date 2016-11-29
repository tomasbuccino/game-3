<?php
	if(isset($_SESSION['username']) && isset($_SESSION['password']) ){
		print json_encode($_SESSION);
	}
?>