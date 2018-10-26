<?php

/* function remove_acf_menu() {
	remove_menu_page('edit.php?post_type=acf-field-group');
}
add_action( 'admin_menu', 'remove_acf_menu', 999 ); */

function norebro_acf_json_load_point( $paths ) {
	$paths = array( get_template_directory() . '/inc/tgmpa/acf-json' );
	if( is_child_theme() ) {
		$paths[] = get_stylesheet_directory() . '/inc/tgmpa/acf-json';
	}
	return $paths;
}

add_filter('acf/settings/load_json', 'norebro_acf_json_load_point');


if ( function_exists( 'acf_add_options_page' ) && function_exists( 'acf_add_options_sub_page' ) ) {
	
	acf_add_options_page(array(
		'page_title' => esc_html__( 'Norebro Theme Settings', 'norebro' ),
		'menu_title' => esc_html__( 'Theme Settings', 'norebro' ),
		'menu_slug' => 'theme-general',
		'capability' => 'edit_posts',
		'icon_url' => get_template_directory_uri().'/inc/tgmpa/theme_settings.png'
	));

	acf_add_options_sub_page(array(
		'page_title' => esc_html__( 'Theme Pages Settings', 'norebro' ),
		'menu_title' => '<span class="ion-document-text"></span> ' . esc_html__( 'Pages', 'norebro' ),
		'menu_slug' => 'theme-general-pages',
		'parent_slug' => 'theme-general'
	));

	acf_add_options_sub_page(array(
		'page_title' => esc_html__( 'Theme Header Settings', 'norebro' ),
		'menu_title' => '<span class="ion-social-buffer"></span> ' . esc_html__( 'Header', 'norebro' ),
		'menu_slug' => 'theme-general-header',
		'parent_slug' => 'theme-general'
	));

	acf_add_options_sub_page(array(
		'page_title' => esc_html__( 'Theme Panels Settings', 'norebro' ),
		'menu_title' => '<span class="ion-android-phone-landscape"></span> ' . esc_html__( 'Panels', 'norebro' ),
		'menu_slug' => 'theme-general-panels',
		'parent_slug' => 'theme-general'
	));

	acf_add_options_sub_page(array(
		'page_title' => esc_html__( 'Theme Blog Settings', 'norebro' ),
		'menu_title' => '<span class="ion-edit"></span> ' . esc_html__( 'Blog / Archive', 'norebro' ),
		'menu_slug' => 'theme-general-blog',
		'parent_slug' => 'theme-general'
	));

	acf_add_options_sub_page(array(
		'page_title' => esc_html__( 'Theme Portfolio Settings', 'norebro' ),
		'menu_title' => '<span class="ion-images"></span> ' . esc_html__( 'Portfolio', 'norebro' ),
		'menu_slug' => 'theme-general-portfolio',
		'parent_slug' => 'theme-general'
	));

	acf_add_options_sub_page(array(
		'page_title' => esc_html__( 'Theme WooCommerce Settings', 'norebro' ),
		'menu_title' => '<span class="ion-bag"></span> ' . esc_html__( 'Shop', 'norebro' ),
		'menu_slug' => 'theme-general-woocommerce',
		'parent_slug' => 'theme-general'
	));
	
	acf_add_options_sub_page(array(
		'page_title' => esc_html__( 'Theme Footer Settings', 'norebro' ),
		'menu_title' => '<span class="ion-social-buffer"></span> ' . esc_html__( 'Footer', 'norebro' ),
		'menu_slug' => 'theme-general-footer',
		'parent_slug' => 'theme-general'
	));

	acf_add_options_sub_page(array(
		'page_title' => esc_html__( 'Theme Plugins Settings', 'norebro' ),
		'menu_title' => '<span class="ion-pull-request"></span> ' . esc_html__( 'Plugins / Widgets', 'norebro' ),
		'menu_slug' => 'theme-general-plugins',
		'parent_slug' => 'theme-general'
	));

	acf_add_options_sub_page(array(
		'page_title' => '',
		'menu_title' => '<span class="ion-help-buoy"></span> ' . esc_html__( 'Support', 'norebro' ),
		'menu_slug' => 'theme-general-support',
		'parent_slug' => 'theme-general'
	));
	
}


// Hard return values for ACF
function norebro_acf_return_default_when_null( $value = NULL, $post_id = NULL, $field = NULL ) {
	if ( ( $field['type'] == 'radio' || $field['type'] == 'select' || $field['type'] == 'true_false' ) && $field['default_value'] && $value == '' ) {
		if ( is_array( $field['default_value'] ) && count( $field['default_value'] ) == 1 ) {
			$field['default_value'] = $field['default_value'][0];
		}
		$value = $field['default_value'];
	}
	return $value;
}

add_filter( 'acf/load_value', 'norebro_acf_return_default_when_null', 10, 3 );

// fallbacks
if ( ! is_admin() ) {
	if ( ! function_exists( 'get_field' ) ) {
		function get_field( $key, $second = false, $third = false ) {
			return null;
		}
	}

	if ( ! function_exists( 'have_rows' ) ) {
		function have_rows() {
			return false;
		}
	}

	if ( ! function_exists( 'the_row' ) ) {
		function the_row() {
			return false;
		}
	}
}