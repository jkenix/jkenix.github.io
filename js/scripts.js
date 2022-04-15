// Определение Jquery 
// If you dont' use node.js comment var line
// var jquery = require("jquery"); window.$ = window.jQuery = jquery;  
// Импортирование стилей // Import styles
// import '/styles/wooder_jk_parcel.scss'; // Comment, if don't use parcel
// Функция переключения класса навигации на фиксированный при скролле
// Function to switch navigation class to fixed on scroll
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
// Функция показа инфо о разработчике // Function to show info about the developer
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
    $(".share").click(function (event) { // Header share
        event.preventDefault();
        CopyToClipboard("https://jkenix.github.io/", true, "Link copied!");
    });
    $(".share_2").click(function (event) { // Footer share
        event.preventDefault();
        CopyToClipboard("https://jkenix.github.io/", true, "Link copied!");
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
// Videos
// Video 1
const btn = document.querySelector('.button_player_1');
const cb = document.querySelector('.close_block');
btn.onclick = function(){
    let vpb = document.querySelector('.video_play_block');
    vpb.classList.add('__open');

    let cbs = document.querySelector('.close_block');
    cbs.classList.add('__show');

}
cb.onclick = function(){
    let cbc = document.querySelector('.close_block');
    cbc.classList.remove('__show');
    let vpbc = document.querySelector('.video_play_block');
    vpbc.classList.remove('__open');
}
// Video 2
const btn2 = document.querySelector('.button_player_2');
const cb2 = document.querySelector('.close_block');
btn2.onclick = function(){
    let vpb2 = document.querySelector('.video_play_block');
    vpb2.classList.add('__open');

    let cbs2 = document.querySelector('.close_block');
    cbs2.classList.add('__show');

}
cb2.onclick = function(){
    let cbc2 = document.querySelector('.close_block');
    cbc2.classList.remove('__show');
    let vpbc2 = document.querySelector('.video_play_block');
    vpbc2.classList.remove('__open');
}
// Video 3
const btn3 = document.querySelector('.button_player_3');
const cb3 = document.querySelector('.close_block');
btn3.onclick = function(){
    let vpb3 = document.querySelector('.video_play_block');
    vpb3.classList.add('__open');

    let cbs3 = document.querySelector('.close_block');
    cbs3.classList.add('__show');

}
cb3.onclick = function(){
    let cbc3 = document.querySelector('.close_block');
    cbc3.classList.remove('__show');
    let vpbc3 = document.querySelector('.video_play_block');
    vpbc3.classList.remove('__open');
}
// Video 4
const btn4 = document.querySelector('.button_player_4');
const cb4 = document.querySelector('.close_block');
btn4.onclick = function(){
    let vpb4 = document.querySelector('.video_play_block');
    vpb4.classList.add('__open');

    let cbs4 = document.querySelector('.close_block');
    cbs4.classList.add('__show');

}
cb4.onclick = function(){
    let cbc4 = document.querySelector('.close_block');
    cbc4.classList.remove('__show');
    let vpbc4 = document.querySelector('.video_play_block');
    vpbc4.classList.remove('__open');
}
// Скрипт закрытия блока с видео по нажатию на свободную область
// Script for closing a block with a video by clicking on a free area
$(document).mouseup(function (e){
    var div = $('.video_play_block');
    if (div.is(e.target) 
        && div.has(e.target).length === 0) { 
        $(".video_play_block").removeClass('__open');
        $(".close_block").removeClass('__show');
        $(".video_play_block").click(function (event) {
            event.preventDefault();
            CopyToClipboard("", true, "Thanks!");
        });
    }
});