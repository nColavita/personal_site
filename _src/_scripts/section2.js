(function(){
    var window_width = $(window).width();
    var max_width = 1200;
    var timeline = $("#timeline-svg"),
        animateTimeline;

    var timeline_body_copy_1 = $("#timeline_body_copy_1"),
        timeline_body_copy_2 = $("#timeline_body_copy_2"),
        timeline_body_copy_3 = $("#timeline_body_copy_3"),
        timeline_sub_body_1 = $("#timeline-sub-body-1"),
        timeline_sub_body_2 = $("#timeline-sub-body-2"),
        timeline_sub_body_3 = $("#timeline-sub-body-3"),
        timeline_sub_body_4 = $("#timeline-sub-body-4"),
        timeline_sub_body_5 = $("#timeline-sub-body-5"),
        timeline_sub_body_6 = $("#timeline-sub-body-6"),
        timeline_sub_body_7 = $("#timeline-sub-body-7"),
        timeline_sub_body_8 = $("#timeline-sub-body-8");

    function timelineAnimation(){
        timeline_sub_body_1.delay(300).animate({opacity: 1}, 600);
        timeline_sub_body_2.delay(800).animate({opacity: 1}, 600);
        timeline_body_copy_1.delay(2500).animate({opacity: 1}, 600);

        timeline_sub_body_3.delay(3000).animate({opacity: 1}, 600);
        timeline_sub_body_4.delay(3500).animate({opacity: 1}, 600);
        timeline_body_copy_2.delay(5200).animate({opacity: 1}, 600);
        
        timeline_sub_body_5.delay(5700).animate({opacity: 1}, 600);
        timeline_sub_body_6.delay(6400).animate({opacity: 1}, 600);
        timeline_body_copy_3.delay(8200).animate({opacity: 1}, 600);
        timeline_sub_body_7.delay(8700).animate({opacity: 1}, 600);
        timeline_sub_body_8.delay(9200).animate({opacity: 1}, 600);
    }

    animateTimeline = function(){
        console.log("IN VIEW!");
        $("#timeline-svg").css("opacity", "1");
        timeline = new Vivus('timeline-svg', {
            type: 'oneByOne',
            duration: 600,
            // animTimingFunction: Vivus.EASE
        });
        
        //TIMELINE COPY ANIMATION
        window.setTimeout(timelineAnimation, 200);    
    };

    inView("#section2")
        .once('enter', animateTimeline);

    $(window).resize(function(){
        window_width = $(window).width();
        console.log('resized');
        if(window_width >= max_width){
            console.log('show');
            $("#section2").show();
        }else if(window_width < max_width){
            console.log('hide');
            $("#section2").hide();
        }
    });
})();