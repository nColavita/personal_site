/* globals console, inView, Vivus */

(function(){
	console.log("running");
	inView.offset(1000); //offset when inView triggers when element is visible.
	
	var welcome_svg,
		logo_svg,
		arrow_svg;

	var section1_sub_headline = $("#section1-sub-headline-container"),
		name = $('#name'),
		title = $("#title"),
		timeline = $("#timeline-svg");

	var experience = $('#experience'),
		about = $('#about'),
		connect = $('connect');

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
	
	var animateTimeline,
		welcomeAnimDone;

	var client_logos = $(".img-container");

// VIVUS SVG ANIMATIONS
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
		// animTimingFunction: Vivus.EASE
	}, welcomeAnimDone);

	//LOGO ON HOVER
	$("#navbar-brand-container").on('mouseenter', function(){
		logo_svg = new Vivus('navbar-brand-id', {
			type: 'delayed',
			duration: 100,
		});
	});
	$("#navbar-brand-container").on('click', function(event){
		console.log('clicked!');
		var target = $('#section1');
		if( target.length ) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});

// SMOOTH SCROLL TOO WHEN USER CLICKS ON NAV ITEMS
	$('a[href^="#"]').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		if( target.length ) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});

// INVIEW DETECTING ELEMENTS FOR ANIMATION
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

	//SECTION 2 LOGO ANIMATIONS
	function animateClientLogo(el){
		el.fadeIn();
		el.addClass("animated-client-logo");
	}

	client_logos.each(function(){
		console.log( $(this) );
		animateClientLogo( $(this) );
	});
})();