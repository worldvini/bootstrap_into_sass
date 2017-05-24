$(document).ready(function() {

    //scroll suave
    function scrollSuave(element, speed) {
        var href = element.attr('href');
        var top = $(href).offset().top;

        $("html , body").animate({ scrollTop: top }, speed);
    }

    $(function() {
        $("#scroll a").click(function(e) {
            e.preventDefault();

            scrollSuave($(this), 800);
        });
    });


});