<?php

/**
* Visual Composer Norebro Google Maps shortcode custom style
*/

$_style_block = '';

if ( $map_height ) {
	$_style_block .= '#' . $google_maps_uniqid . '{';
	$_style_block .= 'height:' . $map_height . ';position:relative;';
	$_style_block .= '}';
}

NorebroLayout::append_to_shortcodes_css_buffer( $_style_block );