<?php

/**
* Visual Composer Norebro Instagram Feed shortcode view
*/

?>
<div class="norebro-instagram-feed-sc instagram-feed vc_row"
	id="<?php echo esc_attr( $instagram_feed_uniqid ); ?>"
	<?php if ( $appearance_effect != 'none' ) { echo ' data-aos="' . esc_attr( $appearance_effect ) . '"'; } ?> 
	<?php if ( $appearance_duration ) { echo ' data-aos-duration="' . esc_attr( $appearance_duration ) . '"'; } ?>>

	<?php
		if( isset( $result->graphql->user->edge_owner_to_timeline_media->edges ) ) :
			$_counter = 0;
			foreach ( $result->graphql->user->edge_owner_to_timeline_media->edges as $post ) : ?>
				<?php $thumbnail = end( $post->node->thumbnail_resources ); ?>

				<?php $_counter++; ?>
				<?php if ( $_counter > $photo_count ) break; ?>

				<?php if ( $columns == '5' ) : ?>
					<div class="col-md-five-columns column">
				<?php else : ?>
					<div class="vc_col-md-<?php echo $column; ?> column">
				<?php endif; ?>

				<?php if ( $card_type == 'vertical' ) : ?>
					<a href="<?php echo esc_url( 'https://www.instagram.com/p/' . $post->node->shortcode . '/?taken-by=' . $username ); ?>"><img src="<?php echo esc_attr( $thumbnail->src ) ?>" alt=""/></a>
				<?php else : ?>
					<a href="<?php echo esc_url( 'https://www.instagram.com/p/' . $post->node->shortcode . '/?taken-by=' . $username ); ?>"><div style="background-size:cover;background-image:url('<?php echo esc_url( $thumbnail->src ) ?>');"></div></a>
				<?php endif; ?>

					</div>

			<?php endforeach;
		endif;
	?>

	<div class="clear"></div>

</div>