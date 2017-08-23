/* globals console, inView, Vivus */
(function(){

    //Detect view height to determine inView offset
    var window_height = $(window).height(),
        section_height = window_height - 104,
        height_to_inview = section_height / 2;

    inView.offset(height_to_inview); //offset when inView triggers when element is visible.
	
})();