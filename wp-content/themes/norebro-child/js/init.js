jQuery(document).ready(function($) {
  'use strict';
  
  if (!$(".home").length) {
    $('.gafa__logo-side').addClass('movehide');
  }
  
  $(window).scroll(function(){
    var tomi = $(window).scrollTop()/20;
    if ($(".home").length) {
      if(tomi >= 20){$('.gafa__logo-side').addClass('movehide');}
      if(tomi <= 20){$('.gafa__logo-side').removeClass('movehide');}
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
