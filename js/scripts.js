// Func add scroll to page
$(document).ready(function () {
    var executed = false;
    return $(window).scroll(function(){
        if (!executed) {
            $("body").append('<a href="#home" id="scroll_top" title="Up"><i class="fa-solid fa-angle-up"></i></a>');
        }
        executed = true; // code done. Stop func
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
// Func menu

// Func add classes and remove some classes
$(document).ready(function () {
    // Add class, if mouse over menu__active block (Mobile)
    $('.menu-block .menu').bind('touchstart', function () {
        $(".nav-header .nav-item").addClass("page-link dark__bg");
    });
    // For mouse devices
    $('.menu-block .menu').mouseover(function() {
        $(".nav-header .nav-item").addClass("page-link dark__bg");
    });
    // Func remove classes of nav-item and add center modal on small devices, if resize window
    $(window).resize(function() { 
        if (document.documentElement.clientWidth > 559) {
            $(".nav-header .nav-item").removeClass("page-link dark__bg");
            $('.modal-dialog').removeClass('modal-dialog-centered');
        }
        $(document).ready(function () { 
            if (document.documentElement.clientWidth < 559) {
                $('.modal-dialog').addClass('modal-dialog-centered');
            }
        });
    });
    // If page load on width < 559
    if (window.innerWidth < 559) {
        $('.modal-dialog').addClass('modal-dialog-centered');
    }
});
// Count   
var counterVal = 0;

function incrementClick() {
    if (counterVal < 99) {
        updateDisplay(++counterVal);
    }
    if (counterVal > 99) {
        alert('The limit for adding items to the cart has been exceeded');
    }
}

function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
}

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}