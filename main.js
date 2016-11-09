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

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create });

function preload() {

    game.load.spritesheet('button', 'assets/images/pipe.png', 193, 71);
    //game.load.image('background','assets/misc/starfield.jpg');

}

var group;

function create() {

    //game.add.tileSprite(0, 0, 800, 600, 'background');

    group = game.add.group();

    var button = game.make.button(game.world.centerX - 95, 400, 'button', removeGroup, this, 2, 1, 0);

    window.rich = button;

    button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);

    // game.input.onDown.addOnce(removeGroup, this);

    group.add(button);

}

function removeGroup() {

    game.world.remove(group);

    // group.destroy();

}

function over() {
    console.log('button over');
}

function out() {
    console.log('button out');
}

function actionOnClick () {

    console.log('button clicked');
    params= {};
    params.action = "createUser";
    //data json?????????
    $.ajax({
        //http://blinkapp.com.ar/
        url: "admin/gameMatch.php",
        type: "POST",
        data: params,
        cache: false,
        dataType: "json"
    }).done(function( data ) {
      console.log("click in button. write in table")
    }).error(function(error, textStatus){
        console.log("No pudo conectarse: " + textStatus);
    });

}