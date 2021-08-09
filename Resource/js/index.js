
$(function(){
    $('.collapsible').collapsible();
    $('.sidenav').sidenav();
    $('.dropdown-trigger').dropdown();
    $('.tabs').tabs();
    $('.modal').modal();
    $(".dropdown-trigger").dropdown();
    $('.slider').slider();
    $('select').formSelect();
});

$('.btn-login').on('click', function(){
    var user = $('#txt_user').val();
    var pass = $('#txt_password').val();
    console.log(pass)

    if( user == "walter" && pass == "123" ){
        window.location = "home_encargado_proyecto.html";
    }else if( user == "isa" && pass == "123" ){
        window.location = "home_evaluacion.html";
    }else if( user == "tabita" && pass == "123" ){
        window.location = "home_planeacion.html";
    }else{
        M.toast({html: 'Correo o contraseña incorrectos', classes: 'rounded'});
    }

    $('#txt_user').val("");
    $('#txt_password').val("");
});
