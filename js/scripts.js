// Func add scroll to page
$(document).ready(function () {
    var executed = false;
    return $(window).scroll(function(){
        if (!executed) {
            $("body").append('<a href="#top" id="scroll_top" title="Up"><i class="fa-solid fa-angle-up"></i></a>');
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