// Определение Jquery 
var jquery = require("jquery");
window.$ = window.jQuery = jquery; // notice the definition of global variables here
// Импортирование стилей
import '/styles/wooder_jk_parcel.scss'; // Comment, if don't use parcel
// Функция переключения класса навигации на фиксированный при скролле
$(function($) {
    $(window).scroll(function(){
        if($(this).scrollTop()>1043){
            $('#navigation').addClass('__fixednav');
            $('#sub').addClass('__black');
        }
        else if ($(this).scrollTop()<1043){
            $('#navigation').removeClass('__fixednav');
            $('#sub').removeClass('__black');
        }
    });
});