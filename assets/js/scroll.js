$(document).ready(function () {
  $(document).on("scroll", onScroll);
});

function onScroll(event){
    if ($(window).width() <= 576) return;
    var scrollPos = $(document).scrollTop();
    $('#header-nav a').each(function () {
        var currLink = $(this);
        var refElement;
        try {
            refElement= $(currLink.attr("href").replace(document.location.origin, ''));
        } catch (error) {

        }
        if (refElement == null || refElement == undefined ) return;
        if (refElement.position() == null || refElement.position() == undefined ) return;
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#header-nav a div').removeClass("nav-selected");
            currLink.children().addClass("nav-selected");
        }
        else{
            currLink.children().removeClass("nav-selected");
        }
    });
}