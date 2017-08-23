/* globals console, inView, Vivus */
$(function(){
    var welcome_svg,
        logo_svg,
        title = $("#title");
    var name = $('#name');
    
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

	//LOGO ON HOVER
	$("#navbar-brand-container").on('mouseover', function(){
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
})();