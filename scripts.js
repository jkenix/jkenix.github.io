import '/styles/wooder_jk_parcel.scss';
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

/* smooth scroll */
var scroll = new SmoothScroll('a[data-scroll]', {
    speed: 2500,
    easing: 'easeInOutCubic'
});