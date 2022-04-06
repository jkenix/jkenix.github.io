// Определение Jquery 
var jquery = require("jquery");
window.$ = window.jQuery = jquery; // notice the definition of global variables here
// Функция переключения класса навигации на фиксированный при скролле
// Импортирование стилей
import '/styles/wooder_jk_parcel.scss'; // Comment, if don't use parcel
$(function($) {
    $(window).scroll(function(){
        if($(this).scrollTop()>0){
            $('#navigation').addClass('fixednav');
        }
        else if ($(this).scrollTop()<1){
            $('#navigation').removeClass('fixednav');
        }
    });
  });