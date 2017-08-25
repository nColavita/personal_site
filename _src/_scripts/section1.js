/* globals console, inView, Vivus */
(function(){
    var welcome_svg,
        name = $("#name"),
        title = $("#title");

    var welcomeAnimDone;

    welcomeAnimDone = function(){
        name.animate({ 
                opacity: 1,
            },
            {
                duration: 600,
                complete: function(){
                    title.animate({opacity: 1}, 400);
                }
            }
        );
    };

    welcome_svg = new Vivus('welcome-svg', {
        type: 'delayed',
        duration: 100,
    }, welcomeAnimDone);
})();