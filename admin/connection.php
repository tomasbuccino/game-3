<?php 
	class connection{
		private $server = "localhost";
		private $user = "root";
		private $pass = "";
		private $bbdd = "game_3";
		public $connected;

		/*private $server = "localhost";
		private $user = "c0140136_game";
		private $pass = "GEzegi51fe";
		private $bbdd = "c0140136_game";
		public $connected;*/
		
		function __construct(){
			$this->connected = @mysqli_connect($this->server, $this->user, $this->pass, $this->bbdd);
		}

	}
?>