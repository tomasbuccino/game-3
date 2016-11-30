$(document).ready(function(){
    //getSessionUser();


    /**
    
        Variable global de la partida
    
     */

    var match = {
        opponent: "",
        time: "",
        player: "",
        player2: "",
        idPartida: ""
    }
    
    /*================================================
    =            Log in and select player            =
    ================================================*/
    $('#log-in').on('click', function(){
        console.log("entro")
        params= {};
        /*params.action = "logIn";*/
        params.username = $('#username').val();
        params.password = $('#password').val();

        $.ajax({
            //url: "http://blinkapp.com.ar/back/user/adminUser.php",
            url: "admin/login.php",
            type: "POST",
            data: params,
            cache: false,
            dataType: "json"
        }).done(function( data ) {
            console.log(data);
            //Guardar el user id
            if (data){
                $('.log-in').hide();
                $('.select-users').show();
                match.player = data.id_player;
                loadPlayers(data.id_player);
                //Asi no, con session storage
                getMatchesInterval();
                localStorage.setItem("player", data.name_player);
                localStorage.setItem("password", data.pass_player);
            }
        }).error(function(error, textStatus){
            console.log(error);
        });
    })

    function loadPlayers(id){
        params= {};
        params.id = id;
        $.ajax({
            //url: "http://blinkapp.com.ar/back/user/adminUser.php",
            url: "admin/getUsers.php",
            type: "POST",
            data: params,
            cache: false,
            dataType: "json"
        }).done(function( data ) {
            $.each(data, function (i, item) {
                $('#userlist').append($('<option>', { 
                    value: item.id_player,
                    text : item.name_player 
                }));
            });
        }).error(function(error, textStatus){
            console.log(error);
        });
    }


    function getSessionUser(){
        //$.get('http://www.blinkapp.com.ar/back/user/getUserSession.php', function (data) {
        $.get('admin/getUserSession.php', function (data) {
            var user = JSON.parse(data);
            if(user.username != ""){
                console.log(user.id_player)
                loadPlayers(user.id_player);
                //el id guardarlo en matchl
            }
        });
    }


    $('#play-game').on("click", function(){
        match.opponent = $('#userlist').val();
        match.time = (new Date()).getTime();
        console.log(match.time)
        $('.select-users').hide();
        $('.this-game').show();
        $.ajax({
            //url: "http://blinkapp.com.ar/back/user/adminUser.php",
            url: "admin/createMatch.php",
            type: "POST",
            data: match,
            cache: false,
            dataType: "text"
        }).done(function( data ) {
            createGame();
        }).error(function(error, textStatus){
            console.log(error);
        });
        //Escribe en base
    });
    
    //Llamar cada 20 segundos para ver si hay una partida nueva 
    function getMatchesInterval(){
        var amount = -1;
        setInterval(function() {
            $.ajax({
                //url: "http://www.brendarychter.com.ar/game/admin/gameMatch.php",
                url: "admin/getMatch.php",
                type: "POST",
                data: match,
                cache: false,
                dataType: "json"
            }).success(function( data ) {
                //necesito esta partida, de ahora
                //var id_partida = data[i].id_partida;
                //match.idMatch = 
                console.log(data[0].id_partida);
                match.idPartida = data[0].id_partida;
                var matches = data.length;
                if (matches == 0){
                    console.log("aún no hay partidas, no refrescar");
                }
                //me tengo que guardar el timestamp para comprobar que no sea esta partida
                if (matches > 0){
                    if (matches > amount){
                        amount = matches;
                        console.log("avisar que hay partida nueva");
                    }
                }
            }).error(function(error, textStatus){
                console.log("No pudo conectarse: " + textStatus);
            });
        }, 20000);
    }/**/
    /*=====  End of Log in and select player  ======*/
    

    /*=============================================
    =            Start game            =
    =============================================*/
    var game;
    function createGame(){
        game = new Phaser.Game(525, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

        //GLOBAL VARIABLES
        var timer;
        var total = 0;

        var random = Math.floor(Math.random() * 36) + 0;


        function preload() {
            game.load.image('background', 'assets/images/background.png');

            //game.load.spritesheet('button', 'assets/images/pipe.png', 193, 71);
            game.load.spritesheet('button', 'assets/images/grass.png', 193, 71);
            //game.load.spritesheet('piece', 'assets/images/piece.png', 193, 71);
            game.load.spritesheet('piece', 'assets/images/treasure.png', 193, 71);
            //game.load.image('background','assets/misc/starfield.jpg');
            //preload cargar el index php que me trae archivos en formato json
            //la sesion del usuario, no del storage
            console.log(localStorage.getItem("player"));
        }

        function create() {

            game.stage.backgroundColor = '#182d3b';
            game.add.sprite(0, 0, 'background');

            var rows = 6;
            var cols = 6;
            var n = 0;
            for (var i = 0; i < rows; i++){
                for (var j = 0; j < cols; j++){
                    var button; // Creo variable para que cada botón sea distinto
                    button = game.add.button(75*i + 40, 75*j + 90, 'button', actionOnClick);
                    button.num = n;
                    button.onInputOver.add(over, this);
                    button.onInputOut.add(out, this);
                    button.onInputUp.add(up, this);
                    n++;
                }
            }
            
            //  TIMER
            timer = game.time.create(false);

            //  Set a TimerEvent to occur after 2 seconds
            timer.loop(2000, updateCounter, this);

            timer.start();
            console.log("random piece " + random);
        }

        function update(){
            //json cache dentro de phaser archivos de la
            game.debug.text('Tiempo: ' + total, 32, 64);
        }

        function updateCounter() {
            total++;
        }

        function up() {
            //console.log(this)
        }

        function over() {
            //console.log('button over');
        }

        function out() {
            //console.log('button out');
        }

        function actionOnClick () {
            console.log(this.num)
            if (this.num == random){
                console.log("Ganaste!");
                game.world.removeAll();
                game.add.sprite(0, 0, 'background');
                piece = game.add.button(this.position.x, this.position.y, 'piece');


                params = {};
                params.time = match.time;
                //query para ver si la partida tiene ya un player 1
                params.player_1 = match.player;
                params.time_player_1 = total;
                console.log(total)
                params.id_partida = match.idPartida;
                console.log(params.id_partida)

                timer.destroy();
                $.ajax({
                    //url: "http://blinkapp.com.ar/back/user/adminUser.php",
                    url: "admin/getMatchByTimestamp.php",
                    type: "POST",
                    data: params,
                    cache: false,
                    dataType: "json"
                }).done(function( data ) {
                    //createGame();
                }).error(function(error, textStatus){
                    console.log(error);
                });
            }
            this.destroy();

        }
    }
    

    
    /*=====  End of Start game  ======*/
    

    /*================================
    =            Opponent            =
    ================================*/
    
    $('#choose-opponent').on('click', function(){
        
    })
    
    /*=====  End of Opponent  ======*/
    

    /*====================================
    =            Restart game            =
    ====================================*/
    
    $('#restart-game').on('click', function(){
        $('#game').remove();
        createGame();
    })
    
    /*=====  End of Restart game  ======*/
    
    
})
