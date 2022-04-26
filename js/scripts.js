// Import styles
import '/styles/jk_parcel.scss'; // Comment, if don't use parcel
// Define Jquery 
// If you dont' use node.js comment var line
var jquery = require("jquery"); window.$ = window.jQuery = jquery;  
var bootstrap = require("bootstrap"); 
// Function to switch navigation class to fixed on scroll
// and change the position of the modal window
$(function($) {
    $(window).scroll(function(){
        if($(this).scrollTop()>1500){
            $('.header').addClass('fixed-top');
            $('.modal-dialog').addClass('modal-dialog-center');
        }
        else if ($(this).scrollTop()<1500){
            $('.header').removeClass('fixed-top');
            $('.modal-dialog').removeClass('modal-dialog-center');
        }
    });
});