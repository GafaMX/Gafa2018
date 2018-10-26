<?php 
	$project = NorebroHelper::get_storage_item_data();
	if ( is_array( $project['images_full'] ) && count( $project['images_full'] ) > 0 ) {
		$project['images'] = $project['images_full'];
	}

	$autoplay = false;
	if ( isset( $project['popup_autoplay'] ) && $project['popup_autoplay'] ) { 
		$autoplay = ' data-autoplay="' . $project['popup_autoplay_time'] . '"';
	}
	$navigation = false;
	if ( isset( $project['popup_navigation'] ) && $project['popup_navigation'] ) { 
		$navigation = ' data-navigation="true"';
	}
	$mouse_scrolling = false;
	if ( isset( $project['popup_mouse_scrolling'] ) && $project['popup_mouse_scrolling'] ) { 
		$mouse_scrolling = ' data-mouse-scrolling="true"';
	}

	if ( $project ) :
?>

	<div class="portfolio-gallery<?php if ( NorebroSettings::get( 'portfolio_gallery_light', 'global' ) != 'light' ) { echo ' gallery-dark'; } ?>" id="<?php echo esc_attr( $project['popup_id'] ); ?>" data-lazy-to-footer="true">
		<div class="slider"<?php echo $autoplay . $navigation . $mouse_scrolling; ?>>

			<?php foreach ( $project['images'] as $i => $art ) : ?>
			<img src="<?php echo esc_url( $art ); ?>" alt="">
			<?php endforeach; ?>

		</div>

		<div class="gallery-content">
			<div class="content-center">
				<div class="wrap">
					<div class="portfolio-page">

						<?php if ( $project['categories_plain'] ) : ?>
							<?php $categories = explode( ', ', $project['categories_plain'] ) ?>
							<?php foreach ( $categories as $category ) : ?>
								<span class="tag"><?php echo esc_html( $category ); ?></span>
							<?php endforeach; ?>
						<?php endif; ?>

						<h2 class="title text-left"><?php echo esc_html( $project['title'] ); ?></h2>
						<div class="description">
							<?php echo esc_attr( $project['short_description'] ); ?>
						</div>
						<div class="info">
							<ul class="info-list">
								<?php if ( $project['date'] ) : ?>
								<li>
									<h5 class="title uppercase"><?php esc_html_e( 'Date', 'norebro' ); ?></h5>
									<p><?php echo esc_html( $project['date'] ); ?></p>
								</li>
								<?php endif; ?>

								<?php if ( $project['skills'] ) : ?>
								<li>
									<h5 class="title uppercase"><?php esc_html_e( 'Skills', 'norebro' ); ?></h5>
									<p><?php echo wp_kses( $project['skills'], 'default' ); ?></p>
								</li>
								<?php endif; ?>

								<?php if ( $project['client'] ) : ?>
								<li>
									<h5 class="title uppercase"><?php esc_html_e( 'Client', 'norebro' ); ?></h5>
									<p><?php echo wp_kses( $project['client'], 'default' ); ?></p>
								</li>
								<?php endif; ?>

								<?php if ( $project['link'] ) : ?>
								<li>
									<h5 class="title uppercase"><?php esc_html_e( 'Project link', 'norebro' ); ?></h5>
									<p><a href="<?php echo esc_url( $project['link'] ); ?>" target="_blank"><?php echo esc_html( $project['link'] ); ?></a></p>
								</li>
								<?php endif; ?>

								<?php if ( $project['custom_fields'] ) : ?>
									<?php foreach ( $project['custom_fields'] as $custom_field ) : ?>
									<li>
										<h5 class="title uppercase"><?php echo esc_html( $custom_field['title'] ); ?></h5>
										<p><?php echo esc_html( $custom_field['value'] ); ?></p>
									</li>
									<?php endforeach; ?>
								<?php endif; ?>
							</ul>
						</div>
						<?php if ( ! $project['hide_view_link_in_popup'] ) : ?>
						<a href="<?php echo esc_url( $project['url'] ); ?>" class="view-project font-titles hover-underline">
							<?php esc_html_e( 'View Project', 'norebro' ); ?>
						</a>
						<?php endif; ?>
					</div>
				</div>
			</div>
		</div>
		<div class="gallery-close" data-popup-close="true">
			<span class="ion-ios-close-empty"></span>
		</div>
	</div>

<?php endif;