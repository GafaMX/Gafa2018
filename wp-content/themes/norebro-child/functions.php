<?php

	add_action( 'wp_enqueue_scripts', 'norebro_child_local_enqueue_parent_styles' );

	function norebro_child_local_enqueue_parent_styles() {
		wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
	}

	if (! function_exists('gafa_select_child_theme_enqueue_scripts')) {
		function gafa_select_child_theme_enqueue_scripts() {

			$parent_style = 'parent-style';

			$gafa_ver = date('his');

			wp_enqueue_style('gafa_select_child_style', get_stylesheet_directory_uri() . '/assets/css/app.css', array($parent_style), esc_attr( $gafa_ver ));
			wp_enqueue_script('gafa_select_modules_init', get_stylesheet_directory_uri() . '/assets/js/init.js', array('jquery'), esc_attr( $gafa_ver ), false, true);
			wp_enqueue_script('gafa_select_modules_lib', get_stylesheet_directory_uri() . '/assets/js/lib.js', array('jquery'), esc_attr( $gafa_ver ), false, true);
		}

		add_action( 'wp_enqueue_scripts', 'gafa_select_child_theme_enqueue_scripts' );
	}


	/* Banner shortcode
	 =================================================================================================== */

	/**
	 *  Banner shortcode -- GAFA
	 */

	if ( ! class_exists( 'gafa__scbanner_Shortcode' ) ) {

		class gafa__scbanner_Shortcode {

			/**
			 * Main constructor
			 *
			 * @since 1.0.0
			 */
			public function __construct() {

				// Registers the shortcode in WordPress
				add_shortcode( 'gafa__scbanner', array( 'gafa__scbanner_Shortcode', 'output' ) );

				// Banner shortcode to Visual Composer
				if ( function_exists( 'vc_lean_map' ) ) {
					vc_lean_map( 'gafa__scbanner', array( 'gafa__scbanner_Shortcode', 'map' ) );
				}

			}

			/**
			 * Shortcode output
			 *
			 * @since 1.0.0
			 */
			public static function output( $atts, $content = null ) {

				// Extract shortcode attributes (based on the vc_lean_map function - see next function)
				extract( vc_map_get_attributes( 'gafa__scbanner', $atts ) );

				var_dump();

				// Define output
				$output = get_template_part( 'module', 'banner' );


				// Return output
				return $output;

			}

			/**
			 * Banner shortcode -- GAFA
			 *
			 * This is an array of all your settings which become the shortcode attributes ($atts)
			 * for the output. See the link below for a description of all available parameters.
			 *
			 * @since 1.0.0
			 * @link  https://wpbakery.atlassian.net/wiki/pages/viewpage.action?pageId=38993922
			 */
			public static function map() {
				return array(
					'name'        => esc_html__( 'GAFA - Banner', 'locale' ),
					'description' => esc_html__( 'Shortcode outputs Banner', 'locale' ),
					'base'        => 'gafa__scbanner',
					'params'      => array(
						array(
							'type'       => 'dropdown',
							'heading'    => esc_html__( 'Banner', 'locale' ),
							'param_name' => 'show_panel',
							'value'      => array(
								esc_html__( 'true', 'locale' )  => 'Sí',
								esc_html__( 'false', 'locale' ) => 'No',
							),
						),
					),
				);
			}

		}

	}
	new gafa__scbanner_Shortcode;




	/* Servicios shortcode
	 =================================================================================================== */

	/**
	 *  Servicios shortcode -- GAFA
	 */

	if ( ! class_exists( 'gafa__scservicios_Shortcode' ) ) {

		class gafa__scservicios_Shortcode {

			/**
			 * Main constructor
			 *
			 * @since 1.0.0
			 */
			public function __construct() {

				// Registers the shortcode in WordPress
				add_shortcode( 'gafa__scservicios', array( 'gafa__scservicios_Shortcode', 'output' ) );

				// Servicios shortcode to Visual Composer
				if ( function_exists( 'vc_lean_map' ) ) {
					vc_lean_map( 'gafa__scservicios', array( 'gafa__scservicios_Shortcode', 'map' ) );
				}

			}

			/**
			 * Shortcode output
			 *
			 * @since 1.0.0
			 */
			public static function output( $atts, $content = null ) {

				// Extract shortcode attributes (based on the vc_lean_map function - see next function)
				extract( vc_map_get_attributes( 'gafa__scservicios', $atts ) );

				var_dump();

				// Define output
				$output = get_template_part( 'module', 'services' );


				// Return output
				return $output;

			}

			/**
			 * Servicios shortcode -- GAFA
			 *
			 * This is an array of all your settings which become the shortcode attributes ($atts)
			 * for the output. See the link below for a description of all available parameters.
			 *
			 * @since 1.0.0
			 * @link  https://wpbakery.atlassian.net/wiki/pages/viewpage.action?pageId=38993922
			 */
			public static function map() {
				return array(
					'name'        => esc_html__( 'GAFA - Servicios', 'locale' ),
					'description' => esc_html__( 'Shortcode outputs Servicios', 'locale' ),
					'base'        => 'gafa__scservicios',
					'params'      => array(
						array(
							'type'       => 'dropdown',
							'heading'    => esc_html__( 'Servicios', 'locale' ),
							'param_name' => 'show_panel',
							'value'      => array(
								esc_html__( 'true', 'locale' )  => 'Sí',
								esc_html__( 'false', 'locale' ) => 'No',
							),
						),
					),
				);
			}

		}

	}
	new gafa__scservicios_Shortcode;



	/* Clientes shortcode
	 =================================================================================================== */

	/**
	 *  Clientes shortcode -- GAFA
	 */

	if ( ! class_exists( 'gafa__scclientes_Shortcode' ) ) {

		class gafa__scclientes_Shortcode {

			/**
			 * Main constructor
			 *
			 * @since 1.0.0
			 */
			public function __construct() {

				// Registers the shortcode in WordPress
				add_shortcode( 'gafa__scclientes', array( 'gafa__scclientes_Shortcode', 'output' ) );

				// Clientes shortcode to Visual Composer
				if ( function_exists( 'vc_lean_map' ) ) {
					vc_lean_map( 'gafa__scclientes', array( 'gafa__scclientes_Shortcode', 'map' ) );
				}

			}

			/**
			 * Shortcode output
			 *
			 * @since 1.0.0
			 */
			public static function output( $atts, $content = null ) {

				// Extract shortcode attributes (based on the vc_lean_map function - see next function)
				extract( vc_map_get_attributes( 'gafa__scclientes', $atts ) );

				var_dump();

				// Define output
				$output = get_template_part( 'module', 'clients' );


				// Return output
				return $output;

			}

			/**
			 * Clientes shortcode -- GAFA
			 *
			 * This is an array of all your settings which become the shortcode attributes ($atts)
			 * for the output. See the link below for a description of all available parameters.
			 *
			 * @since 1.0.0
			 * @link  https://wpbakery.atlassian.net/wiki/pages/viewpage.action?pageId=38993922
			 */
			public static function map() {
				return array(
					'name'        => esc_html__( 'GAFA - Clientes', 'locale' ),
					'description' => esc_html__( 'Shortcode outputs Clientes', 'locale' ),
					'base'        => 'gafa__scclientes',
					'params'      => array(
						array(
							'type'       => 'dropdown',
							'heading'    => esc_html__( 'Clientes', 'locale' ),
							'param_name' => 'show_panel',
							'value'      => array(
								esc_html__( 'true', 'locale' )  => 'Sí',
								esc_html__( 'false', 'locale' ) => 'No',
							),
						),
					),
				);
			}

		}

	}
	new gafa__scclientes_Shortcode;
