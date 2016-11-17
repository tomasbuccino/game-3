/*// Global Variables
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game'),
  Main = function () {};


Main.prototype = {

  preload: function () {
    game.load.script('polyfill', 'lib/polyfill.js');
    game.load.script('utils', 'lib/utils.js');
    game.load.script('splash', 'states/Splash.js');
  },

  create: function () {
    game.state.add('Splash', Splash);
    game.state.start('Splash');
  }

};

game.state.add('Main', Main);
game.state.start('Main');
*/

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

//GLOBAL VARIABLES
var timer;
var total = 0;

var random = Math.floor(Math.random() * 35) + 0;

function preload() {

    game.load.spritesheet('button', 'assets/images/pipe.png', 193, 71);
    //game.load.image('background','assets/misc/starfield.jpg');
    //preload cargar el index php que me trae archivos en formato json
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