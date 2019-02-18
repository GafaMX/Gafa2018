<?php


?>

<div class="gafa__clientes">
	<div class="container">







		<div class="row gafa__clientes--items">
			<?php $num = 0;
				if( have_rows('logos_repeater') ) : while( have_rows('logos_repeater') ): the_row(); $num++; ?>
				<div class="col-five">
					<div class="tooltip" data-tooltip="<?php echo get_sub_field('logos_repeater_nombre'); ?>" data-tooltip-desc="<?php echo get_sub_field('logos_repeater_descripcion'); ?>" data-tooltip-type="primary">
						<div class="gafa__clientes--item gafa__effects--glitch">
							<a class="gafa__clientes--item--link" href="<?php echo get_sub_field('logos_repeater_link'); ?>"></a>
							<img class="gafa__clientes--item--img" src="<?php echo get_sub_field('logos_repeater_img'); ?>" />
							<img class="gafa__clientes--item--img" src="<?php echo get_sub_field('logos_repeater_img'); ?>" />
							<img class="gafa__clientes--item--img" src="<?php echo get_sub_field('logos_repeater_img'); ?>" />
						</div>
					</div>
				</div>
			<?php endwhile; endif; ?>
		</div>



	</div>
	<div class="tooltip-window"></div>
</div>
