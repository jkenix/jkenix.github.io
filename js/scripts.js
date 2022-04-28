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
// Function of add button of menu on width < 201px (Work, ONLY if you load page with this width)
$(document).ready(function() {
    if (window.innerWidth < 295) {
            $(".menu").prepend('<a class="page-link"><i class="fa-solid fa-bars"></i> MENU</a>');
            $(".menu").addClass("menu__active");
        $('.menu__active').mouseover(function() {
            $('.nav-items a').addClass('page-link');
        });
        $('.menu__active').mouseleave(function() {
            $('.nav-items a').removeClass('page-link');
        })
    }
    else  if ($(window).width() >= 295) {

    };
});