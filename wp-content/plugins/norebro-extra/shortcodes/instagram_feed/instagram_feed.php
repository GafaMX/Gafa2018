<?php 

/**
* Visual Composer Norebro Instagram Feed shortcode
*/

add_shortcode( 'norebro_instagram_feed', 'norebro_instagram_feed_func' );

function norebro_instagram_feed_func( $atts ) {
	if ( isset( $atts ) && is_array( $atts ) ) extract( $atts );

	// Default values, parsing and filtering
	$username = isset( $username ) ? NorExtraFilter::string( $username, 'string', 'instagram') : 'instagram';
	$photo_count = isset( $photo_count ) ? NorExtraFilter::string( $photo_count, 'string', '4') : '4';
	$columns = isset( $columns ) ? NorExtraFilter::string( $columns, 'string', '4') : '4';
	$card_type = isset( $card_type ) ? NorExtraFilter::string( $card_type, 'string', 'cropped') : 'cropped';
	$offset_photo = isset( $offset_photo ) ? NorExtraFilter::string( $offset_photo, 'string', '') : '';

	$appearance_effect = isset( $appearance_effect ) ? NorExtraFilter::string( $appearance_effect, 'attr', 'none' ) : 'none';
	$appearance_duration = isset( $appearance_duration ) ? NorExtraFilter::string( $appearance_duration, 'attr', false ) : false;
	if ( $appearance_duration ) $appearance_duration = intval( str_replace( 'ms', '', $appearance_duration ) );

	$css_class = isset( $css_class ) ? ' ' . NorExtraFilter::string( $css_class, 'attr', '' ) : '';

	$result = false;
	if ( $username ){
		$url = 'https://www.instagram.com/' . $username . '/?__a=1';
		$ch = curl_init();
		curl_setopt( $ch, CURLOPT_URL, $url );
		curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1 );
		curl_setopt( $ch, CURLOPT_TIMEOUT, 15 );
		$result = json_decode( curl_exec( $ch ) );
		curl_close( $ch );
	}


	$column = 12 / intval($columns);

	// Styling
	$instagram_feed_uniqid = uniqid( 'norebro-custom-' );

	$column_css = $image_css = false;
	if ( $offset_photo ) {
		if ( $card_type == 'vertical' ) {
			$column_css = 'padding: ' . $offset_photo . ';';
		} else {
			$image_css = 'top:' . $offset_photo . ';left:' . $offset_photo . ';width:calc(100% - ' . $offset_photo . ');height:calc(100% - ' . $offset_photo . ');';
		}
	}

	$card_type_class = ( $card_type == 'vertical' ) ? 'vertical' : 'boxed';

	// Assembling
	include( plugin_dir_path( __FILE__ ) . 'instagram_feed__style.php' );
	ob_start();
	include( plugin_dir_path( __FILE__ ) . 'instagram_feed__view.php' );
	return ob_get_clean();
}