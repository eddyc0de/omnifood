$(document).ready(function() {
	/* Sticky Navigation */
	$(".js--section-features").waypoint(function(direction) {
		if (direction == "down") {
			$("nav").addClass("sticky");
		} else {
			$("nav").removeClass("sticky");
		}
	}, {
		offset: "60px"
	});

	/* Scroll on buttons */
	$(".js--scroll-to-plans").click(function() {
		$("html, body").animate({
			scrollTop: $(".js--section-plans").offset().top
		}, 1000);
	});
	$(".js--scroll-to-start").click(function() {
		$("html, body").animate({
			scrollTop: $(".js--section-features").offset().top
		}, 1000);
	});

	$("a").on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();
		// Store hash
		var hash = this.hash;
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 1000, function(){
			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		});
		} // End if
	});

	/* Animations on scroll */
	$(".js--wp-1").waypoint(function(direction) {
		$(".js--wp-1").addClass("animated fadeIn");
	}, {
		offset: "50%"
	});
	$(".js--wp-2").waypoint(function(direction) {
		$(".js--wp-2").addClass("animated fadeInUp");
	}, {
		offset: "50%"
	});
	$(".js--wp-3").waypoint(function(direction) {
		$(".js--wp-3").addClass("animated fadeIn");
	}, {
		offset: "50%"
	});
	$(".js--wp-4").waypoint(function(direction) {
		$(".js--wp-4").addClass("animated pulse");
	}, {
		offset: "50%"
	});

	/* MOBILE NAVIGATION */
	$(".js--nav-icon, .js--main-nav a").click(function(element) {
		var nav = $(".js--main-nav");
		var icon = $(".js--nav-icon i");

		//Gets the class name of the element that triggered the event
        var clicked = element.target.className;

		//Exits the function if the menu is closed AND if any menu element is clicked
		if (icon.hasClass('ion-md-menu') && clicked == 'js--nav-icon')
		return;

		//Opens and closes the menu
		if($(window).width() < 768) {
			nav.slideToggle(200);
		}

		//Changes icon states of the menu button
		if(icon.hasClass("ion-md-menu")) {
			icon.addClass("ion-md-close");
			icon.removeClass("icon ion-md-menu");
		} else {
			icon.addClass("ion-md-menu");
			icon.removeClass("ion-md-close");
		}
	});

	/* Prevents the menu from stay hidden when mobile has been opened and then the window is resized to desktop */
	$(window).resize(function(){
		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon i');

		if ($(window).width() > 767){
			nav.css("display", "block");
			icon.addClass('ion-md-close');
			icon.removeClass('icon ion-md-menu');
		} else {
			nav.css("display", "none");
			icon.addClass('icon ion-md-menu');
			icon.removeClass('ion-md-close');
		}
	});
});