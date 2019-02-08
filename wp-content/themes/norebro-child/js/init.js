jQuery(document).ready(function($) {
	'use strict';

  $(document).ready(function(){

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
});
