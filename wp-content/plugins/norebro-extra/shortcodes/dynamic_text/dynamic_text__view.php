<?php

/**
 * Visual Composer Norebro Dynamic Text shortcode view
 */

?>
<div class="norebro-dynamic-text-sc" 
	data-dynamic-text="true" 
	data-dynamic-text-options='<?php echo $options_json; ?>' 
	id="<?php echo esc_attr( $dynamic_text_uniqid ); ?>" 
	<?php if ( $appearance_effect != 'none' ) { echo ' data-aos="' . esc_attr( $appearance_effect ) . '"'; } ?> 
	<?php if ( $appearance_duration ) { echo ' data-aos-duration="' . esc_attr( $appearance_duration ) . '"'; } ?>>

	<?php echo $pre_title; ?><span class="dynamic"></span><?php echo $post_title; ?>

</div>