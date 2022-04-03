import '/styles/wooder_jk_parcel.scss'; // Comment, if don't use parcel
/* MENU */
function showMenu() {
    var w = $(window).width();
    $(".menu_slider").css('width', w + "px");
    $(".menu_link").css('opacity', 0.5);    
}

function closeMenu() {
    var w = $(window).width();
    $(".menu_slider").css('width', '0' + "px");
    $(".menu_link").css('opacity', 0).fadeOut(1000, linear);
}

/* INFO */
const infC = document.querySelector('.icon_inf .fas');
infC.onmouseover = function(){
  let infK = document.querySelector('.icon_inf-card');
  infK.classList.add('open');
}
infC.onmouseout = function(){
  let infK = document.querySelector('.icon_inf-card');
  infK.classList.remove('open');
}

function showInfo() {
    var h = $(window).height();
    $(".info_wrapper").css('height', h + "px");
    $(".information_block").css({'display': 'block', 'opacity': 1});
    $(".information_block").css('display', 'block');
}

function closeInfo() {
    var h = $(window).height();
    $(".info_wrapper").css('height', '0' + "px");
    $(".information_block").css('opacity', 0).fadeOut(1000, linear);
    $(".information_block").css('display', none);
}