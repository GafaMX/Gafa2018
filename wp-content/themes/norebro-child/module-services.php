<?php

?>
<div class="container-fluid services__wrapper" data-theme="home">
    <div class="swiper-container swiper-no-swiping">
        <div class="swiper-wrapper">
            <div class="swiper-slide" data-back="light" id="intro">
                <div class="container">
                    <div class="col-8">
                        <h2 class="services__title">Servicios</h2>
                        <p>Somo el punto de encuentro entre la tecnología, la creatividad y el diseño. La evolución de un proyecto parte de la inspiración.</p>
                        <hr>
                    </div>
                </div>
                <div class="container-fluid">
                    <ul class="services__indexList">
                        <li class="services__indexList__item">
                            <div class="content container">
                                <div class="description" id="tecnology-desc" data-text="Desarrollo digital / Apps sistemas personalizados">Desarrollo digital / Apps sistemas personalizados</div>
                                <div class="link" id="tecnology-slide">Tecnology Development</div>
                            </div>
                            <div class="divider"></div>
                        </li>
                        <li class="services__indexList__item">
                            <div class="content container">
                                <div class="description" id="creative-desc" data-text="Activaciones y eventos sensoriales: AR / VR / Mapping">Activaciones y eventos sensoriales: AR / VR / Mapping</div>
                                <div class="link" id="creative-slide">Creative Production</div>
                            </div>
                            <div class="divider"></div>
                        </li>
                        <li class="services__indexList__item">
                            <div class="content container">
                                <div class="description" id="content-desc" data-text="Foto, video / animación, medios digitales, pauta">Foto, video / animación, medios digitales, pauta</div>
                                <div class="link" id="content-slide">Content marketing</div>
                            </div>
                            <div class="divider"></div>
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="swiper-slide" data-back="dark" id="tecnology">
                <div class="container services__interior">
                    <div class="animation ants"></div>
                    <div class="content">
                        <div class="description">Desarrollo digital / Apps sistemas personalizados</div>
                        <div class="link" id="tecnology-slide">Tecnology Development</div>
                    </div>
                    <div class="data row">
                        <div class="col-4">
                            <p>Somo el punto de encuentro de la tecnología, la creatividad y el diseño. Creemos en el cambio como la base de cualquier proyecto y su evolución a través de una inpiración.</p> 
                        </div>
                        <div class="col-4">
                            <ul>
                                <li>UX</li>
                                <li>Ui</li>
                                <li>Consultoría digital</li>
                                <li>Diseño</li>
                                <li>Web</li>
                                <li>Sistemas personalizados</li>
                                <li>IOS app</li>
                                <li>Android app</li>
                                <li>VR</li>
                                <li>AR</li>
                                <li>Ai</li>
                            </ul>
                        </div>
                        <div class="col-4">

                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide" data-back="dark" id="creative">
                <div class="container services__interior">
                    <div class="animation chroma"></div>
                    <div class="content">
                        <div class="description">Activaciones y eventos sensoriales: AR / VR / Mapping</div>
                        <div class="link" id="tecnology-slide">Creative Production</div>
                    </div>
                    <div class="data row">
                        <div class="col-4">
                            <p>Somo el punto de encuentro de la tecnología, la creatividad y el diseño. Creemos en el cambio como la base de cualquier proyecto y su evolución a través de una inpiración.</p> 
                        </div>
                        <div class="col-4">
                            <ul>
                                <li>UX</li>
                                <li>Ui</li>
                                <li>Consultoría digital</li>
                                <li>Diseño</li>
                                <li>Web</li>
                                <li>Sistemas personalizados</li>
                                <li>IOS app</li>
                                <li>Android app</li>
                                <li>VR</li>
                                <li>AR</li>
                                <li>Ai</li>
                            </ul>
                        </div>
                        <div class="col-4">

                        </div>
                    </div>
                </div>

            </div>

            <div class="swiper-slide" data-back="dark" id="content">
                <div class="container services__interior">
                    <div class="animation">B</div>
                    <div class="content">
                        <div class="description">Foto, video / animación, medios digitales, pauta</div>
                        <div class="link" id="tecnology-slide">Content marketing</div>
                    </div>
                    <div class="data row">
                        <div class="col-4">
                            <p>Somo el punto de encuentro de la tecnología, la creatividad y el diseño. Creemos en el cambio como la base de cualquier proyecto y su evolución a través de una inpiración.</p> 
                        </div>
                        <div class="col-4">
                            <ul>
                                <li>UX</li>
                                <li>Ui</li>
                                <li>Consultoría digital</li>
                                <li>Diseño</li>
                                <li>Web</li>
                                <li>Sistemas personalizados</li>
                                <li>IOS app</li>
                                <li>Android app</li>
                                <li>VR</li>
                                <li>AR</li>
                                <li>Ai</li>
                            </ul>
                        </div>
                        <div class="col-4">

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="return"><i class="fal fa-arrow-left"></i></div>
    </div>
</div>

<script>

(function($) {

    var swiper = new Swiper('.swiper-container', {
        effect: 'fade',
        slidesPerView: 'auto',
        noSwipingClass: 'swiper-no-swiping',
        noSwiping: true,
    });
    
    $('#tecnology-slide').on('click', function (e) {
        e.preventDefault();
        $('.return').show();        
        swiper.slideTo(1, 0);
    });
    
    $('#creative-slide').on('click', function (e) {
        e.preventDefault();
        $('.return').show();        
        swiper.slideTo(2, 0);
    });
    
    $('#content-slide').on('click', function (e) {
        e.preventDefault();
        $('.return').show();        
        swiper.slideTo(3, 0);
    });

    $('.return').on('click', function (e) {
        e.preventDefault();
        $(this).hide();        
        swiper.slideTo(0, 0 );
    });

    //text blotter

    function techText(){
        var ants = new Blotter.Text("Innovation", {
            family : "serif",
            size : 280,
            fill : "white"
        });
    
        var material = new Blotter.FliesMaterial();
        var blotter = new Blotter(material, { 
            texts : ants,
        });
        
        var scope = blotter.forText(ants);
        var thisAnts = document.querySelector('.ants');
    
        material.uniforms.uPointCellWidth.value = 0.01;
        material.uniforms.uPointRadius.value = .8;
        material.uniforms.uSpeed.value = 5;
    
        scope.appendTo(thisAnts);
    }

    function createText(){
        var chroma = new Blotter.Text("Imagination", {
            family : "Oswald",
            size : 280,
            fill : "#171717",
        });
    
        var material = new Blotter.ChannelSplitMaterial();
        var blotter = new Blotter(material, { 
            texts : chroma,
        });
        
        var scope = blotter.forText(chroma);
        var thisChroma = document.querySelector('.chroma');
    
        material.uniforms.uOffset.value = 0.034;
        material.uniforms.uRotation.value = 118;
        material.uniforms.uApplyBlur.value = 0;
        material.uniforms.uAnimateNoise.value = 0;
        
        scope.appendTo(thisChroma);

        scope.on("mousemove", function (mousePosition) {
          var angle = angleBetweenPointsInDegrees(0.5, 0.5, mousePosition.x, mousePosition.y);
          var blur = Math.min(0.3, distanceBetweenPoints(0.5, 0.5, mousePosition.x, mousePosition.y));

          scope.material.uniforms.uRotation.value = angle;
          scope.material.uniforms.uOffset.value = blur;
        });
    }

    techText();
    createText();

    
})(jQuery);
</script>