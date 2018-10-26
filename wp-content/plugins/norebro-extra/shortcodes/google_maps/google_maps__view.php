<?php

/**
* Visual Composer Norebro Google Maps shortcode view
*/

?>
<div class="norebro-google-maps-sc google-maps" id="<?php echo esc_attr( $google_maps_uniqid ); ?>" 
data-google-map="true" data-google-map-zoom="<?php echo esc_attr( $map_zoom ); ?>" 
data-google-map-zoom-enable="<?php echo esc_attr( $map_zoom_enable ); ?>" 
data-google-map-marker="<?php echo esc_attr( $map_marker ); ?>" 
data-google-map-style="<?php echo esc_attr( $map_style ); ?>">
	
	<div class="google-maps-wrap"></div>
	<div class="hidden" data-google-map-markers="true"><?php echo esc_attr( $marker_locations ); ?></div>

</div>