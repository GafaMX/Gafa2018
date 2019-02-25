<?php

?>

<div class="services">
    <div class="container-fluid services__wrapper" data-theme="home">
        <div class="container">
            <div class="col-8 p-0">
                <h2 class="services__title"><?php echo get_field('servicios_titulo'); ?></h2>
                <p><?php echo get_field('servicios_subtitulo'); ?></p>
                <hr>
            </div>
        </div>
        <div class="container-fluid">
            <ul class="services__indexList">
					<?php $num = 0;
						if( have_rows('servicios_repeater') ) : while( have_rows('servicios_repeater') ): the_row(); $num++; ?>

						<li class="services__indexList__item">
							 <div class="content container">
								  <div class="description" data-text="<?php echo get_sub_field('servicios_repeater_descripcion'); ?>"><?php echo get_sub_field('servicios_repeater_descripcion'); ?></div>
								  <a href="<?php echo get_sub_field('servicios_repeater_pagina'); ?>"><div class="link" id="tecnology-slide"><?php echo get_sub_field('servicios_repeater_titulo'); ?></div></a>
							 </div>
							 <div class="divider"></div>
						</li>

						<?php endwhile; endif; ?>

            </ul>
        </div>
    </div>
</div>