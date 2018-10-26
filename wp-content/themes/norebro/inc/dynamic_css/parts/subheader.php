<?php
/*
	Subheader custom style
	
	Table of contents: (you can use search)
	# 1. Variables
	# 2. Background color
	# 3. Typography
	# 4. Height
	# 5. View
*/


# 1. Variables

$subheader_background 	= false;
$subheader_typo 		= false;
$subheader_height 		= false;

$subheader_background_css 	= '';
$subheader_typo_css 		= '';
$subheader_height_css 		= '';


# 2. Background color

if ( NorebroSettings::get( 'header_menu_contacts_bar_style' ) == 'custom' ) {
	$subheader_background = NorebroSettings::get( 'header_menu_contacts_bar_background' );
} else {
	if ( NorebroSettings::page_is( 'ecommerce' ) ) {
		if ( NorebroSettings::get( 'woocommerce_header_menu_contacts_bar_style' ) == 'custom' ) {
			$subheader_background = NorebroSettings::get( 'woocommerce_header_menu_contacts_bar_background', 'global' );
		} else {
			$subheader_background = NorebroSettings::get( 'header_menu_contacts_bar_background', 'global' );
		}
	} else {
		$subheader_background = NorebroSettings::get( 'header_menu_contacts_bar_background', 'global' );
	}
}

if ( $subheader_background ) {
	$subheader_background_css = 'background-color:' . $subheader_background . ';';
}


# 3. Typography

if ( NorebroSettings::get( 'header_menu_contacts_bar_style' ) == 'custom' ) {
	$subheader_typo = NorebroSettings::get( 'header_menu_contacts_bar_text_typo' );
} else {
	if ( NorebroSettings::page_is( 'ecommerce' ) ) {
		if ( NorebroSettings::get( 'woocommerce_header_menu_contacts_bar_style' ) == 'custom' ) {
			$subheader_typo = NorebroSettings::get( 'woocommerce_header_menu_contacts_bar_text_typo', 'global' );
		} else {
			$subheader_typo = NorebroSettings::get( 'header_menu_contacts_bar_text_typo', 'global' );
		}
	} else {
		$subheader_typo = NorebroSettings::get( 'header_menu_contacts_bar_text_typo', 'global' );
	}
}

$subheader_typo_css = NorebroHelper::parse_acf_typo_to_css( $subheader_typo );


# 4. Height

if ( NorebroSettings::get( 'header_menu_contacts_bar_style' ) == 'custom' ) {
	$subheader_height = NorebroSettings::get( 'header_menu_contacts_bar_height' );
} else {
	if ( NorebroSettings::page_is( 'ecommerce' ) ) {
		if ( NorebroSettings::get( 'woocommerce_header_menu_contacts_bar_style' ) == 'custom' ) {
			$subheader_height = NorebroSettings::get( 'woocommerce_header_menu_contacts_bar_height', 'global' );
		} else {
			$subheader_height = NorebroSettings::get( 'subheader_height', 'global' );
		}
	} else {
		$subheader_height = NorebroSettings::get( 'subheader_height', 'global' );
	}
}

if ( $subheader_height ) {
	$subheader_height_css  = 'height:' . $subheader_height . 'px;';
	$subheader_height_css .= 'max-height:' . $subheader_height . 'px;';
	$subheader_height_css .= 'line-height:' . $subheader_height . 'px;';

	$header_css = 'margin-top:' . $subheader_height . 'px;';
}


# 5. View


if ( $subheader_background_css ) {
	// --- start of CSS ---
	$_style_block = '.subheader, .subheader .subheader-contacts .icon,.subheader a, .subheader .social-bar li a{';
	$_style_block .= $subheader_background_css;
	$_style_block .= '}';
	// --- end of CSS ---
	NorebroLayout::append_to_dynamic_css_buffer( $_style_block );
}

if ( $subheader_typo_css ) {
	// --- start of CSS ---
	$_style_block = '.subheader, .subheader .subheader-contacts .icon,.subheader a, .subheader .social-bar li a{';
	$_style_block .= $subheader_typo_css;
	$_style_block .= '}';
	// --- end of CSS ---
	NorebroLayout::append_to_dynamic_css_buffer( $_style_block );
}


if ( $subheader_height_css ) {
	// --- start of CSS ---
	$_style_block = '.subheader,.subheader .content,.subheader .social-bar li a{';
	$_style_block .= $subheader_height_css;
	$_style_block .= '}';
	$_style_block .= '#masthead.with-subheader, .header-cap.with-subheader{';
	$_style_block .= $header_css;
	$_style_block .= '}';
	// --- end of CSS ---
	NorebroLayout::append_to_dynamic_css_buffer( $_style_block );
}



