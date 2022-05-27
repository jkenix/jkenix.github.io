// Import styles
// import '/styles/jk_parcel.scss'; // Comment, if don't use parcel
// Define Jquery (If you dont' use node.js comment this lines)
// var jquery = require("jquery"); window.$ = window.jQuery = jquery;  
// var bootstrap = require("bootstrap"); 
// var jBox = require("jBox");
// ==================================================================
// Jbox
new jBox('Modal', {
    width: 300,
    height: 200,
    attach: '#myModal',
    title: 'My Modal Window',
    content: '<i>Hello there!</i>'
});
new jBox('Tooltip', {
    attach: '.tooltip',
});
var dropdownElementList = Array.prototype.slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})
// Function to switch navigation class to fixed on scroll
// and change the position of the modal window 
$(window).scroll(function(){
    if($(this).scrollTop()>300){
        $(function(Showmenu){
            $('.modal-dialog').addClass('modal-dialog-center');
        });
    }
    else if ($(this).scrollTop()<300) {
        $('.modal-dialog').removeClass('modal-dialog-center');
    }
    // Check page reboot
    else if (window.innerWidth > 300) {
        return Showmenu();
    }
});
// Function of add button of menu on width < 201px (Work, ONLY if you load page with this width)
// and form .e-name block interactive
$(document).ready(function() {
    if (window.innerWidth < 295) {
        $(".menu").prepend('<a class="menu __bg-dark-menu">MENU<i class="fa-solid fa-bars"></i></a>');
    // Add class, if mouse over menu__active block
        $('.menu').mouseover(function() {
            $('.nav-item').addClass('page-link __bg-dark-menu');
        });
    }
    // Function rename default value and add interacive
    $(function(Ename_active){ 
        $('.e-name').val('Enter email');
            // Clear value functions
            $('.e-name').click(function(){
                $(this).val('');
            });
    });
});
// Function scroll to top
$(window).scroll(function(){
	if($(window).scrollTop() > 50) {
        $(function(Showscroll){
            $('#scroll_top').show();
            $('#scroll_top').css({"display": "flex"},);
        });
	} 
    else if ($(this).scrollTop() < 50) {
		$('#scroll_top').hide();
	} 
    // Check page reboot
    else if (window.innerHeight > 50) {
        return Showscroll();
    }
});
// If click on h1, page scroll to top
$('#scroll_top'), $("h1").click(function(){
	$('html, body').animate({scrollTop: 0}, 600);
	return false;
});