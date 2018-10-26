<?php

/**
* Visual Composer Norebro Instagram Feed shortcode custom style
*/

$_style_block = '';

if ( $column_css ) {
	$_style_block .= '#' . $instagram_feed_uniqid . ' .column{';
	$_style_block .= $column_css;
	$_style_block .= '}';
}
if ( $image_css ) {
	$_style_block .= '#' . $instagram_feed_uniqid . ' .column a{';
	$_style_block .= $image_css;
	$_style_block .= '}';
}

NorebroLayout::append_to_shortcodes_css_buffer( $_style_block );