(function(){
    var delay = 250;

    $('.view-now').on('mouseover', function(){
        $(this).children('.img-container').css('transform', 'scale(1.25)');
    });
    $('.view-now').on('mouseout', function(){
        $(this).children('.img-container').css('transform', 'scale(1)');
    });	

    function setIframeSource(w,h,s){
        var width = w, height = h, source = s;
        return $("#iframe").attr({ width: width, height: height, src: source });
    }

    function resetIframe(){
        $("#iframe").attr('src', '');
    }

    function animateClients(){
        console.log("section 4 in view");
        $('.client-col').each(function(i){
            $(this).delay(800*i).animate({
                'top':'0',
                'opacity': '1'
            }, 'slow');
        });
    }

    $('.view-now').on('click', function(){
        if( $(this).children('div').hasClass('levis-overlay') ){
            resetIframe();
            setTimeout(function() {
                setIframeSource(300, 600, '../projects/LEVIS/index.html');
            }, delay);
        }else if( $(this).children('div').hasClass('arconic-overlay') ){
            resetIframe();
            setTimeout(function() {
                setIframeSource(300, 600, '../projects/ARCONIC/index.html');
            }, delay);
        }else if( $(this).children('div').hasClass('hilton-overlay') ){
            resetIframe();
            setTimeout(function() {
                setIframeSource(970, 418, '../projects/HILTON/index.html');
            }, delay);
        }else if( $(this).children('div').hasClass('reebok-overlay') ){
            resetIframe();
            setTimeout(function() {
                setIframeSource(300, 250, '../projects/REEBOK/index.html');
            }, delay);
        }else if( $(this).children('div').hasClass('grubhub-overlay') ){
            resetIframe();
            setTimeout(function() {
                setIframeSource(300, 600, '../projects/GRUBHUB/index.html');
            }, delay);
        }else if( $(this).children('div').hasClass('novartis-overlay') ){
            resetIframe();
            setTimeout(function() {
                setIframeSource(300, 250, '../projects/NOVARTIS/index.html');
            }, delay);
        }else if( $(this).children('div').hasClass('bby-overlay') ){
            resetIframe();
            setTimeout(function() {
                setIframeSource(300, 250, '../projects/BURBERRY/index.html');
            }, delay);
        }else if( $(this).children('div').hasClass('devry-overlay') ){
            resetIframe();
            setTimeout(function() {
                setIframeSource(300, 250, '../projects/DEVRY/index.html');
            }, delay);
        }else if( $(this).children('div').hasClass('sprout-overlay') ){
            resetIframe();
            setTimeout(function() {
                setIframeSource(300, 250, '../projects/SPROUT/index.html');
            }, delay);
        }

        if( !$(this).hasClass('is-prvt') ){
            $("#banner-container").fadeIn();
        }
    });

    $("#exit").on('click', function(){
        $("#banner-container").fadeOut();
    });

    inView("#section3")
        .once('enter', animateClients);
})();