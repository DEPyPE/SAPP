
var ProjectName = localStorage.getItem('ProjectName');

$(function () {
    $('.collapsible').collapsible();
    $('.sidenav').sidenav();
    $('.dropdown-trigger').dropdown();
    $('.tabs').tabs();
    $('.modal').modal();
    $(".dropdown-trigger").dropdown();
    $('.slider').slider();

/*  Inicialización de elementos del proyecto*/
    $('.title-project').text(ProjectName);
});
