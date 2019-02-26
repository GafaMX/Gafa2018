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

  // if ( WEBGL.isWebGLAvailable() === false ) {

  //   document.body.appendChild( WEBGL.getWebGLErrorMessage() );

  // }

  var SEPARATION = 100, AMOUNTX = 80, AMOUNTY = 80;

  var container;
  var camera, scene, renderer;

  var particles, count = 0;

  var mouseX = 0;
  var windowHalfX;
  
  initBack();
  animateBack();

  function initBack() {

    // ============= SET SCENE and CAMERA
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 0);
    camera.position.set( 0, 2000, 0);
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x000000 );
    container = $( '.back-element' );

    windowHalfX = container.innerWidth() / 2;

    // ============= SET SCENE and CAMERA
    // ============= Define Particles Object

    var numParticles = AMOUNTX * AMOUNTY, 
      positions = new Float32Array( numParticles * 3 ),
      scales = new Float32Array( numParticles );

    var i = 0, j = 0;

    for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

      for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

        positions[ i ] = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 ); // x
        positions[ i + 1 ] = 0; // y
        positions[ i + 2 ] = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 ); // z

        scales[ j ] = 1;

        i += 3;
        j ++;

      }

    }

    var geometry = new THREE.BufferGeometry();
    geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
    geometry.addAttribute( 'scale', new THREE.BufferAttribute( scales, 1 ) );

    var material = new THREE.ShaderMaterial( {

      uniforms: {
        color: { value: new THREE.Color( 0xb5b5b5 ) },
      },
      vertexShader: document.getElementById( 'vertexshader' ).textContent,
      fragmentShader: document.getElementById( 'fragmentshader' ).textContent

    } );

    particles = new THREE.Points( geometry, material );
    scene.add( particles );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( container.innerWidth(), container.innerHeight() );
    container.append( renderer.domElement );

    // ============= Define Particles Object

    $('.portfolio-item-wrap').on('click', function(){
      $('.back-element').addClass('open');
      var from = {
        x: 0,
        y: 2000,
        z: 0,
        fov: 45,
        far: 0
      };

      var to = {
        x: 4000,
        y: 600,
        z: 4000,
        fov: 100,
        far: 5000
      };
      var tween = new TWEEN.Tween(from)
        .delay(2000)
        .to(to, 600)
        .easing(TWEEN.Easing.Linear.None)
        .onUpdate(function () {
        camera.position.set(this.x, this.y, this.z);
        camera.fov = this.fov;
        camera.far = this.far;
      }).start();
    });

    $('.gallery-close').on('click', function(){
      $('.back-element').removeClass('open');
      var from = {
        x: 4000,
        y: 600,
        z: 4000,
        fov: 100,
        far: 5000
      };

      var to = {
        x: 0,
        y: 2000,
        z: 0,
        fov: 45,
        far: 0
      };
      var tween = new TWEEN.Tween(from)
        .delay(300)
        .to(to, 600)
        .easing(TWEEN.Easing.Linear.None)
        .onUpdate(function () {
        camera.position.set(this.x, this.y, this.z);
        camera.fov = this.fov;
        camera.far = this.far;
      }).start();
    });
    window.addEventListener( 'resize', onWindowResize, false );

  }

  function onWindowResize() {

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

  }

  function animateBack() {
    requestAnimationFrame( animateBack );
    render();
    TWEEN.update();    
  }

  function render() {
    camera.lookAt( scene.position );
    var positions = particles.geometry.attributes.position.array;
    var scales = particles.geometry.attributes.scale.array;

    var i = 0, j = 0;

    for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

      for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

        positions[ i + 1 ] = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) +
                ( Math.sin( ( iy + count ) * 0.5 ) * 50 );

        scales[ j ] = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 8 +
                ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 8;

        i += 3;
        j ++;

      }

    }

    particles.geometry.attributes.position.needsUpdate = true;
    particles.geometry.attributes.scale.needsUpdate = true;
    renderer.render( scene, camera );
    count += 0.1;

  }
});
