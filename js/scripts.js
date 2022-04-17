// Определение Jquery 
// If you dont' use node.js comment var line
var jquery = require("jquery"); window.$ = window.jQuery = jquery;  
// Импортирование стилей // Import styles
import '/styles/jk_parcel.scss'; // Comment, if don't use parcel
// 

$(document).ready(function () {
    $(window).resize(function () {
        if($(window).width() <= 449){
            $('.nav-items').removeClass('nav-items');
            
        }
        else if ($(window).width() >= 450){
            $('.nav-items').addClass('nav-items');
        }
    })
})