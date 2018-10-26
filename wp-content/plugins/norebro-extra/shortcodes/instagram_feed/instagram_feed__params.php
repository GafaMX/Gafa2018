<?php

/**
* Visual Composer Norebro Instagram Feed shortcode params
*/

vc_map( array(
	'name' => __( 'Instagram Feed', 'norebro-extra' ),
	'description' => __( 'Instagram feed module', 'norebro-extra' ),
	'base' => 'norebro_instagram_feed',
	'category' => __( 'Norebro', 'norebro-extra' ),
	'icon' => plugin_dir_url( __FILE__ ) . 'images/icon.svg',
	'params' => array(

		// General
		array(
			'type' => 'textfield',
			'group' => __( 'General', 'norebro-extra' ),
			'heading' => __( 'Your Instagram username', 'norebro-extra' ),
			'param_name' => 'username',
		),
		array(
			'type' => 'textfield',
			'group' => __( 'General', 'norebro-extra' ),
			'heading' => __( 'Number of photos', 'norebro-extra' ),
			'param_name' => 'photo_count',
			'description' => __( 'Default 4. We recommend using a number that is suitable for the number of columns.', 'norebro-extra' ),
		),
		array(
			'type' => 'dropdown',
			'group' => __( 'General', 'norebro-extra' ),
			'heading' => __( 'Columns', 'norebro-extra' ),
			'param_name' => 'columns',
			'value' => array(
				'1' => '1',
				'2' => '2',
				'3' => '3',
				'4' => '4',
				'5' => '5',
				'6' => '6',
				'12' => '12',
			),
			'default' => '4',
		),

		// Styles and colors
		array(
			'type' => 'dropdown',
			'group' => __( 'Styles and Colors', 'norebro-extra' ),
			'heading' => __( 'Style of cards', 'norebro-extra' ),
			'param_name' => 'card_type',
			'value' => array(
				'Vertical aligned' => 'vertical',
				'Cropped squares' => 'cropped',
			),
			'default' => 'cropped',
		),
		array(
			'type' => 'textfield',
			'group' => __( 'Styles and Colors', 'norebro-extra' ),
			'heading' => __( 'Photos offset size', 'norebro-extra' ),
			'param_name' => 'offset_photo',
			'description' => __( 'Space between photos (CSS value).', 'norebro-extra' ),
		),
		array(
			'type' => 'dropdown',
			'group' => __( 'Styles and Colors', 'norebro-extra' ),
			'heading' => __( 'Appearance effect', 'norebro-extra' ),
			'param_name' => 'appearance_effect',
			'value' => array(
				__( 'None', 'norebro-extra' ) => 'none',
				__( 'Fade up', 'norebro-extra' ) => 'fade-up',
				__( 'Fade down', 'norebro-extra' ) => 'fade-down',
				__( 'Fade right', 'norebro-extra' ) => 'fade-right',
				__( 'Fade left', 'norebro-extra' ) => 'fade-left',
				__( 'Flip up', 'norebro-extra' ) => 'flip-up',
				__( 'Flip down', 'norebro-extra' ) => 'flip-down',
				__( 'Zoom in', 'norebro-extra' ) => 'zoom-in',
				__( 'Zoom out', 'norebro-extra' ) => 'zoom-out'
			)
		),
		array(
			'type' => 'textfield',
			'group' => __( 'Styles and Colors', 'norebro-extra' ),
			'heading' => __( 'Appearance effect duration', 'norebro-extra' ),
			'param_name' => 'appearance_duration',
			'description' => __( 'Duration accept values from 50 to 3000(ms), with step 50.', 'norebro-extra' ),
		),
		array(
			'type' => 'textfield',
			'group' => __( 'Styles and Colors', 'norebro-extra' ),
			'heading' => __( 'Custom CSS class', 'norebro-extra' ),
			'param_name' => 'css_class',
			'description' => __( 'If you want to add styles to a specific unit, use this field to add CSS class.', 'norebro-extra' ),
		),
	)
) );