(function(){
    var logo = $("#navbar-brand-container"),
        logo_svg;

    logo.on('mouseover', function(){
        logo_svg = new Vivus('navbar-brand-id', {
            type: 'delayed',
            duration: 100,
        });
    });
    logo.on('click', function(event){
        console.log('clicked!');
        var target = $('#section1');
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
})();
