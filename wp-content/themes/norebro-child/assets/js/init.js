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

    var swiper = new Swiper('.swiper-container', {
      effect: 'fade',
      slidesPerView: 'auto',
      noSwipingClass: 'swiper-no-swiping',
      noSwiping: true,
    });

    var options = { family : "serif", size: 70, fill : "#171717", paddingLeft : 40, paddingRight : 40 };
    var gafaScope, techScope, createScope, storyScope;
  
    function chromaGafa(){    
      var gafa = new Blotter.Text('gafa', options);
      var materialGafa = new Blotter.ChannelSplitMaterial();
      var blotterGafa = new Blotter(materialGafa, { texts : gafa, });
      var thisGafa = $('.canvas-chroma__row:nth-child(1) .letter:nth-child(1)');
      
      gafaScope= blotterGafa.forText(gafa);
      gafaScope.appendTo(thisGafa);
      
      materialGafa.uniforms.uOffset.value = 0.23;
      materialGafa.uniforms.uRotation.value = 25;
      materialGafa.uniforms.uApplyBlur.value = 1;
      materialGafa.uniforms.uAnimateNoise.value = 1;
    }
    
    function chromaTech(){    
      var tech = new Blotter.Text('tech', options);
      var materialTech = new Blotter.ChannelSplitMaterial();
      var blotterTech = new Blotter(materialTech, { texts : tech, });
      var thisTech = $('.canvas-chroma__row:nth-child(1) .letter:nth-child(2)');
      
      techScope= blotterTech.forText(tech);
      techScope.appendTo(thisTech);
      
      materialTech.uniforms.uOffset.value = 0.23;
      materialTech.uniforms.uRotation.value = 115;
      materialTech.uniforms.uApplyBlur.value = 1;
      materialTech.uniforms.uAnimateNoise.value = 1;
    }
    
    function chromaCreate(){    
      var create = new Blotter.Text('create', options);
      var materialCreate = new Blotter.ChannelSplitMaterial();
      var blotter = new Blotter(materialCreate, { texts : create, });
      var thisCreate = $('.canvas-chroma__row:nth-child(2) .letter:nth-child(1)');
      
      createScope= blotter.forText(create);
      createScope.appendTo(thisCreate);
      
      materialCreate.uniforms.uOffset.value = 0.23;
      materialCreate.uniforms.uRotation.value = 115;
      materialCreate.uniforms.uApplyBlur.value = 1;
      materialCreate.uniforms.uAnimateNoise.value = 1;
    }

    function chromaStory(){    
      var story = new Blotter.Text('story', options);
      var materialStory = new Blotter.ChannelSplitMaterial();
      var blotter = new Blotter(materialStory, { texts : story, });
      var thisStory = $('.canvas-chroma__row:nth-child(2) .letter:nth-child(2)');
      
      storyScope= blotter.forText(story);
      storyScope.appendTo(thisStory);
      
      materialStory.uniforms.uOffset.value = 0.23;
      materialStory.uniforms.uRotation.value = 25;
      materialStory.uniforms.uApplyBlur.value = 1;
      materialStory.uniforms.uAnimateNoise.value = 1;
    }

    // chromaGafa();
    // chromaTech();
    // chromaCreate();
    // chromaStory();

    // $('#tecnology-slide').on({
    //   mouseenter: function(){
    //     var selection = $(this).offset().top - $('.gafa__hero').height();
    //     var middleSelection = selection / 2;

    //     $('.canvas-chroma__row:nth-child(1)').animate({
    //       'top' : middleSelection + 0 + 'px',
    //       'opacity' : 1
    //     });
        
    //     $('.canvas-chroma__row:nth-child(2)').animate({
    //       'top' : middleSelection + 5 + 'px',
    //       'opacity' : 1
    //     });

    //     var initial = 0.23;
    //     techScope.material.uniforms.uOffset.value = 0.023;
    //     createScope.material.uniforms.uOffset.value = initial;
    //     storyScope.material.uniforms.uOffset.value = initial;
    //   },
      
    //   mouseleave: function(){
    //     $('.canvas-chroma__row').animate({
    //       // 'opacity' : 0
    //     });
    //   }
    // });
    
    // $('#creative-slide').on({
    //   mouseenter: function(){
    //     var selection = $(this).offset().top - $('.gafa__hero').height();
    //     var middleSelection = selection / 2;
        
    //     $('.canvas-chroma__row:nth-child(1)').animate({
    //       'top' : middleSelection + 0 + 'px',
    //       'opacity' : 1
    //     });
        
    //     $('.canvas-chroma__row:nth-child(2)').animate({
    //       'top' : middleSelection + 5 + 'px',
    //       'opacity' : 1
    //     });
        
    //     var initial = 0.23;
    //     techScope.material.uniforms.uOffset.value = initial;
    //     createScope.material.uniforms.uOffset.value = 0.023;
    //     storyScope.material.uniforms.uOffset.value = initial;
    //   },
      
    //   mouseleave: function(){
    //     $('.canvas-chroma__row').animate({
    //       // 'opacity' : 0
    //     });
    //   }
    // });
    
    // $('#content-slide').on({
    //   mouseenter: function(){
    //     var selection = $(this).offset().top - $('.gafa__hero').height();
    //     var middleSelection = selection / 2;
        
    //     $('.canvas-chroma__row:nth-child(1)').animate({
    //       'top' : middleSelection + 0 + 'px',
    //       'opacity' : 1
    //     });
        
    //     $('.canvas-chroma__row:nth-child(2)').animate({
    //       'top' : middleSelection + 5 + 'px',
    //       'opacity' : 1
    //     });
        
    //     var initial = 0.23;
    //     techScope.material.uniforms.uOffset.value = initial;
    //     createScope.material.uniforms.uOffset.value = initial;
    //     storyScope.material.uniforms.uOffset.value = 0.023;
    //   },

    //   mouseleave: function(){
    //     $('.canvas-chroma__row').animate({
    //       // 'opacity' : 0
    //     });
    //   }
    // });

    // particlesJS.load('particlesLight', '/wp-content/themes/norebro-child/assets/js/particlesjs-config-black.json');
    // particlesJS.load('particlesDark', '/wp-content/themes/norebro-child/assets/js/particlesjs-config-white.json');
    // particlesJS.load('particlesCreative', '/wp-content/themes/norebro-child/assets/js/particlesjs-config-white.json');

  });
});

