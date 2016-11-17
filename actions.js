$(document).ready(function(){

    $('#log-in').on('click', function(){
    //Validate empty input
        console.log("entro")
        params= {};
        /*params.action = "logIn";*/
        params.username = $('#username').val();

        $.ajax({
            //url: "http://blinkapp.com.ar/back/user/adminUser.php",
            url: "admin/login.php",
            type: "POST",
            data: params,
            cache: false,
            dataType: "json"
        }).done(function( data ) {
            console.log(data);
            //Guardarme el user id
            if (data){
                $('.log-in').hide();
                $('.select-users').show();
                loadPlayers(data.id_player);
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
            console.log(data);
            //Guardarme el user id
        }).error(function(error, textStatus){
            console.log(error);
        });
    }


    $('#play-game').on("click", function(){
        console.log("hola")
    });
})
