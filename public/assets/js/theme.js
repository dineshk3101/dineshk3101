
// function called for including HTML components in the theme
w3IncludeHTML(function() { /* do code here */});

// jquery starts from here
(function($) { $('document').ready(function(){ 

// responsive code
$(document).on("click", ".site-header .toggle-menu", function(){
    $("body").toggleClass('open-menu');
});

function responsiveCode() {
    var windowsize = $(window).width();
    if (windowsize < 767) {
        $sl = $('.site-logo-panel').outerHeight();
        $(".site-navbar").css({'height': "calc(100vh -  "+$sl+"px"});
        $(".site-topbar").insertBefore($(".menu-primary-container"));
    } else {
        $(".site-navbar").removeAttr('style');
        $(".site-topbar").insertAfter($(".site-branding"));
    }
}
// Execute on load
responsiveCode();
// Bind event listener

// toggle menu mobile
function toggleMenuDropIcon(){
    var windowsize = $(window).width();
    if (windowsize < 767) {
    $( ".dropdownMenuIcon" ).click(function() {
        $(this).toggleClass( "dropdownMenuIconTransform" );
    });
    }	
}
toggleMenuDropIcon();

$(window).resize(responsiveCode);

}) })( jQuery );
