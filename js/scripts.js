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
// Функция показа инфо о разработчике
const infC = document.querySelector('.menu-info .info');
infC.onmouseover = function(){
  let infK = document.querySelector('.info-popup');
  infK.classList.add('open');
 
}
infC.onmouseout = function(){
  let infK = document.querySelector('.info-popup');
  infK.classList.remove('open');
 
}
// Share
$(document).ready(function () {
    $(".share").click(function (event) {
        event.preventDefault();
        CopyToClipboard("https://jkenix.github.io/", true, "Link copied");
    });
});

function CopyToClipboard(value, showNotification, notificationText) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(value).select();
    document.execCommand("copy");
    $temp.remove();

    if (typeof showNotification === 'undefined') {
        showNotification = true;
    }
    if (typeof notificationText === 'undefined') {
        notificationText = "Copied to clipboard";
    }

    var notificationTag = $("div.copy-notification");
    if (showNotification && notificationTag.length == 0) {
        notificationTag = $("<div/>", { "class": "copy-notification", text: notificationText });
        $("body").append(notificationTag);

        notificationTag.fadeIn("slow", function () {
            setTimeout(function () {
                notificationTag.fadeOut("slow", function () {
                    notificationTag.remove();
                });
            }, 1000);
        });
    }
}

 