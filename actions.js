$(document).ready(function(){
    //getSessionUser();


    /**
    
        Variable global de la partida
    
     */

    var match = {
        opponent: "",
        time: "",
        player: ""
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
        $.ajax({
            //url: "http://blinkapp.com.ar/back/user/adminUser.php",
            url: "admin/gameMatch.php",
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
    
    
    /*=====  End of Log in and select player  ======*/
    

    /*=============================================
    =            Start game            =
    =============================================*/
    function createGame(){
        var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

        //GLOBAL VARIABLES
        var timer;
        var total = 0;

        var random = Math.floor(Math.random() * 35) + 0;

        function preload() {

            game.load.spritesheet('button', 'assets/images/pipe.png', 193, 71);
            //game.load.image('background','assets/misc/starfield.jpg');
            //preload cargar el index php que me trae archivos en formato json
            //la sesion del usuario, no del storage
            console.log(localStorage.getItem("player"));
        }

        function create() {

            game.stage.backgroundColor = '#182d3b';

            //background = game.add.tileSprite(0, 0, 800, 600, 'background');

            button = game.add.button(game.world.centerX - 95, 400, 'button', actionOnClick, this, 2, 1, 0);

            button.onInputOver.add(over, this);
            button.onInputOut.add(out, this);
            button.onInputUp.add(up, this);


            //  TIMER
            timer = game.time.create(false);

            //  Set a TimerEvent to occur after 2 seconds
            timer.loop(2000, updateCounter, this);

            //  Start the timer running - this is important!
            //  It won't start automatically, allowing you to hook it to button events and the like.
            timer.start();
            console.log(random);
            generateButtons();
        }

        function update(){
            //json cache dentro de phaser archivos de la
            game.debug.text('Tiempo: ' + total, 32, 64);
        }

        function updateCounter() {
            total++;
        }

        function up() {
            console.log('button up', arguments);
            console.log('button clicked');
            params= {};
            params.action = "createUser";
            //data json?????????
            $.ajax({
                //sin el http??
                //url: "http://www.brendarychter.com.ar/game/admin/gameMatch.php",
                url: "admin/gameMatch.php",
                type: "POST",
                cache: false,
                dataType: "text"
            }).done(function( data ) {
              console.log("click in button. write in table")
            }).error(function(error, textStatus){
                console.log("No pudo conectarse: " + textStatus);
            });
        }

        function over() {
            //console.log('button over');
        }

        function out() {
            //console.log('button out');
        }

        function actionOnClick () {

            

        }
        //Llamar cada 20 segundos para ver si hay una partida nueva 
        function callToDataBase(){
            setInterval(function() {
                $.ajax({
                    //agregar notificaciones
                    //url: "http://www.brendarychter.com.ar/game/admin/gameMatch.php",
                    url: "admin/getMatch.php",
                    type: "POST",
                    cache: false,
                    dataType: "text"
                }).done(function( data ) {
                  
                }).error(function(error, textStatus){
                    console.log("No pudo conectarse: " + textStatus);
                });
            }, 20000);
            
        }


        function generateButtons () {
            //Grilla de cuadrados

          // var button; // Creo variable para que cada botón sea distinto
          // var j=0;  
          // for (var i = 0; i < 7; i++) {
          //   if(i<4){
          //     // Posiciono la primer fila.
          //     button = this.game.add.button(180 + 280*i, 330, 'button', this.clickHandler, this, 2, 1, 0);
          //     game.add.text(205 + 280*i, 410, notes[i][0], style);
          //   }
          //   else{
          //     // Posiciono la segunda fila.
          //     button = this.game.add.button(320 +  280*j, 520, 'button', this.clickHandler, this, 2, 1, 0);
          //     game.add.text(350 +  280*j, 610, notes[i][0], style);
          //     j++;
          //   }    
          //   button.name = notes[i][0];
          // }
        }
    }
    

    
    /*=====  End of Start game  ======*/
    
    
})
