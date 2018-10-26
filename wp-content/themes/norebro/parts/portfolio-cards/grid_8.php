<?php
	$project = NorebroHelper::get_storage_item_data();

	if( ! isset( $title_class ) ){
		$title_class = '';
	}
	if( ! isset( $category_class ) ){
		$category_class = '';
	}
	if( ! isset( $more_class ) ){
		$more_class = '';
	}
?>

<div class="portfolio-item grid-7 grid-8"<?php if ( $project['in_popup'] ) { echo ' data-portfolio-popup="' . esc_attr( $project['popup_id'] ) . '"'; } ?>>
	<?php if ( $project['featured_image_full'] ) : ?>
	<div class="image-wrap overlay" data-norebro-bg-image="<?php echo esc_url( $project['featured_image_full'] ); ?>"></div>
	<?php endif; ?>
	<div class="description overlay">
		<div class="content-center page-container">
			<div class="wrap text-left">

				<div class="date-left uppercase font-titles">
					<?php echo esc_html( $project['date'] ); ?>
				</div>
				
				<?php if ( $project['categories_plain'] ) : ?>
					<?php $categories = explode( ', ', $project['categories_plain'] ) ?>
					<?php foreach ( $categories as $category ) : ?>
						<span class="category<?php echo esc_attr( $category_class ); ?>"><?php echo esc_html( $category ); ?></span>
					<?php endforeach; ?>
				<?php endif; ?>

				<h4 class="title<?php echo esc_attr( $title_class ); ?>"><?php echo esc_html( $project['title'] ); ?></h4>
				<div class="text-description">
					<?php echo wp_kses( $project['short_description'], 'default' ); ?>
				</div>
				<a href="<?php echo esc_url( $project['url'] ); ?>"<?php if ( $project['external'] ) { echo ' target="_blank"'; } ?> class="font-titles more hover-underline<?php echo esc_attr( $more_class ); ?>">
					<?php echo esc_html__( 'View Project', 'norebro' ); ?>
				</a>

				<div class="date font-titles" data-onepage-counter="true">
					01/01
				</div>

			</div>
		</div>
	</div>
</div>