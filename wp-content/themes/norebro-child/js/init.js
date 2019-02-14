jQuery(document).ready(function($) {
	'use strict';



	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	particlesJS.load('particles-js', 'wp-content/themes/norebro-child/assets/js/particles.json', function() {
	  console.log('callback - particles.js config loaded');
	});




	$(window).scroll(function(){
		 var tomi = $(window).scrollTop()/20;


		 if(tomi >= 20){
			 $('.gafa__logo-side').addClass('movehide');

		 }
		 if(tomi <= 20){
			 $('.gafa__logo-side').removeClass('movehide');
		 }


	});










    $('.tooltip').mousemove(function(e){
      var tooltipType = $(this).data("tooltip-type");
      var dataToolip = $(this).data("tooltip");
      var tooltipWindow = $('.tooltip-window');
      var tooltipDesc = $(this).data("tooltip-desc");
      $('.tooltip-window').fadeIn(100).css({
        left: e.clientX + 'px',
        top: e.clientY + 'px',
      }).html("<h4>" + dataToolip + "</h4><span>" + tooltipDesc + "</span>");
    });

    $('.tooltip').mouseleave(function(){
      $('.tooltip-window').fadeOut(100);
    });

    $(window).scroll(function(){
      $('.tooltip-window').fadeOut(100);
    });

    particlesJS.load('particles-title', '/wp-content/themes/norebro-child/assets/js/particlesjs-config-black.json');

    // particlesJS.load('particlesDark', '/wp-content/themes/norebro-child/assets/js/particlesjs-config-white.json');
    // particlesJS.load('particlesCreative', '/wp-content/themes/norebro-child/assets/js/particlesjs-config-white.json');


});
