// Import styles
import '/styles/jk_parcel.scss'; // Comment, if don't use parcel
// Define Jquery 
// If you dont' use node.js comment var line
var jquery = require("jquery"); window.$ = window.jQuery = jquery;  
var bootstrap = require("bootstrap"); 
// Function to switch navigation class to fixed on scroll
// and change the position of the modal window
$(window).scroll(function(){
        if($(this).scrollTop()>1000){
            $('.header').addClass('fixed-top');
            $('.modal-dialog').addClass('modal-dialog-center');
        }
        else if ($(this).scrollTop()<1000){
            $('.header').removeClass('fixed-top');
            $('.modal-dialog').removeClass('modal-dialog-center');
        }
    });
// 
$(document).ready(function (Menu) {
    // Добавить скрипт при опред разрешении экрана
    // $(".menu").append('<a class="page-link"><i class="fa-solid fa-bars"></i> MENU</a>');
    $('.menu').mouseover(function() {
        $('.nav-items').css({display: "block", width: "100px", height: "200px"});
        $('.nav-items a').css({display: "block"});
        $('.nav-items a').addClass('page-link');
        $('.menu').css({display: ""});
    });
    $('.nav-items a').mouseout(function() {
        // $('.nav-items').css({display: "none", width: "0px", height: "0px", });
        // $('.nav-items a').css({display: "none"});
        // $('.nav-items a').removeClass('page-link');
    })
});