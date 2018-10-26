<?php

add_action( 'wp_ajax_norebro_get_font', 'norebro_gf_get_font' );

function norebro_gf_get_font() {
	include_once( plugin_dir_path( __FILE__ ) . 'gf_list.php' );
	foreach ( $norebro_gf_object->items as $font_object ) {
		if ( $font_object->family == $_POST['font_family'] ) {
			echo json_encode( $font_object );
		}
	}
	wp_die();
}