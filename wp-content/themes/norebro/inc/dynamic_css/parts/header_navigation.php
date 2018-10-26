<?php
/*
	Header navigation custom style
	
	Table of contents: (you can use search)
	# 1. Variables
	# 2. Background color
	# 3. Header menu typography
	# 4. Border state
	# 4.1. Border type
	# 4.2. Border color
	# 5. Header height
	# 6. Site name typography
	# 7. View
*/


# 1. Variables

$background_color 	= false;
$header_typo 		= false;
$border_hide 		= false;
$border_type 		= false;
$border_color 		= false;
$header_height 		= false;
$sitename_typo 		= false;

$background_color_css 	= '';
$background_color_css_border = '';
$header_typo_css 		= '';
$border_css 			= '';
$header_height_css 		= '';
$sitename_typo_css 		= '';


# 2. Background color

if ( NorebroSettings::get( 'header_menu_style_settings' ) == 'custom' ) {
	$background_color = NorebroSettings::get( 'header_menu_background_color' );
} else {
	if ( NorebroSettings::page_is( 'ecommerce' ) ) {
		if ( NorebroSettings::get( 'woocommerce_header_menu_style_settings', 'global' ) == 'custom' ) {
			$background_color = NorebroSettings::get( 'woocommerce_header_menu_background_color', 'global' );
		} else {
			$background_color = NorebroSettings::get( 'header_menu_background_color', 'global' );
		}
	} else {
		$background_color = NorebroSettings::get( 'header_menu_background_color', 'global' );
	}
}

if ( $background_color ) {
	$background_color_css = 'background-color:' . $background_color . ';';
}


# 3. Header menu typography

if ( NorebroSettings::get( 'header_menu_style_settings' ) == 'custom' ) {
	$header_typo = NorebroSettings::get( 'header_menu_text_typo' );
} else {
	if ( NorebroSettings::page_is( 'ecommerce' ) ) {
		if ( NorebroSettings::get( 'woocommerce_header_menu_style_settings', 'global' ) == 'custom' ) {
			$header_typo = NorebroSettings::get( 'woocommerce_header_menu_text_typo', 'global' );
		} else {
			$header_typo = NorebroSettings::get( 'header_menu_text_typo', 'global' );
		}
	} else {
		$header_typo = NorebroSettings::get( 'header_menu_text_typo', 'global' );
	}
}

$header_typo_css = NorebroHelper::parse_acf_typo_to_css( $header_typo );

# 4. Border state

if ( NorebroSettings::get( 'header_menu_style_settings' ) == 'custom' ) {
	$border_hide = NorebroSettings::get( 'header_menu_hide_border' );
} else {
	if ( NorebroSettings::page_is( 'ecommerce' ) ) {
		if ( NorebroSettings::get( 'woocommerce_header_menu_style_settings', 'global' ) == 'custom' ) {
			$border_hide = NorebroSettings::get( 'woocommerce_header_menu_hide_border', 'global' );
		} else {
			$border_hide = NorebroSettings::get( 'header_menu_hide_border', 'global' );
			$border_hide = ( $border_hide ) ? 'yes' : 'no';
		}
	} else {
		$border_hide = NorebroSettings::get( 'header_menu_hide_border', 'global' );
		$border_hide = ( $border_hide ) ? 'yes' : 'no';
	}
}

$border_hide = ( bool ) ( $border_hide == 'yes' );

if ( $border_hide ) {
	$border_css .= 'border:none;';
}

# 4.1. Border type

if ( ! $border_hide ) {
	if ( NorebroSettings::get( 'header_menu_style_settings' ) == 'custom' ) {
		$border_type = NorebroSettings::get( 'header_menu_border_type' );
	} else {
		if ( NorebroSettings::page_is( 'ecommerce' ) ) {
			if ( NorebroSettings::get( 'woocommerce_header_menu_style_settings', 'global' ) == 'custom' ) {
				$border_type = NorebroSettings::get( 'woocommerce_header_menu_border_type', 'global' );
			} else {
				$border_type = NorebroSettings::get( 'header_menu_border_type', 'global' );
			}
		} else {
			$border_type = NorebroSettings::get( 'header_menu_border_type', 'global' );
		}
	}

	if ( $border_type ) {
		$border_css .= 'border-bottom-style:' . $border_type . ';';
	}
}


# 4.2. Border color

if ( ! $border_hide ) {
	if ( NorebroSettings::get( 'header_menu_style_settings' ) == 'custom' ) {
		$border_color = NorebroSettings::get( 'header_menu_border_color' );
	} else {
		if ( NorebroSettings::page_is( 'ecommerce' ) ) {
			if ( NorebroSettings::get( 'woocommerce_header_menu_style_settings', 'global' ) == 'custom' ) {
				$border_color = NorebroSettings::get( 'woocommerce_header_menu_border_color', 'global' );
			} else {
				$border_color = NorebroSettings::get( 'header_menu_border_color', 'global' );
			}
		} else {
			$border_color = NorebroSettings::get( 'header_menu_border_color', 'global' );
		}
	}

	if ( $border_color ) {
		$border_css .= 'border-bottom-color:' . $border_color . ';';
	}
}


# 5. Header height

if ( NorebroSettings::get( 'header_menu_style_settings' ) == 'custom' ) {
	$header_height = NorebroSettings::get( 'header_menu_height' );
} else {
	if ( NorebroSettings::page_is( 'ecommerce' ) ) {
		if ( NorebroSettings::get( 'woocommerce_header_menu_style_settings', 'global' ) == 'custom' ) {
			$header_height = NorebroSettings::get( 'woocommerce_header_menu_height', 'global' );
		} else {
			$header_height = NorebroSettings::get( 'header_menu_height', 'global' );
		}
	} else {
		$header_height = NorebroSettings::get( 'header_menu_height', 'global' );
	}
}

if ( $header_height ) {
	$header_height_css .= 'height:' . $header_height . 'px;';
	$header_height_css .= 'max-height:' . $header_height . 'px;';
	$header_height_css .= 'line-height:' . $header_height . 'px;';
}


# 6. Site name typography

if ( NorebroSettings::get( 'header_logo_style' ) == 'sitename' ) {
	$sitename_typo = NorebroSettings::get( 'header_menu_sitename_typo' );
} elseif ( in_array( NorebroSettings::get( 'header_logo_style' ), array( 'inherit', NULL ) ) ) {
	if ( NorebroSettings::page_is( 'ecommerce' ) ) {
		if ( NorebroSettings::get( 'woocommerce_header_logo_style', 'global' ) == 'sitename' ) {
			$sitename_typo = NorebroSettings::get( 'woocommerce_header_sitename_typo', 'global' );
		} elseif ( in_array( NorebroSettings::get( 'woocommerce_header_logo_style', 'global' ), array( 'inherit', NULL ) ) ) {
			if ( NorebroSettings::get( 'logo_type', 'global' ) == 'sitename' ) {
				$sitename_typo = NorebroSettings::get( 'header_menu_logo_typo', 'global' );
			}
		}
	} else {
		if ( NorebroSettings::get( 'logo_type', 'global' ) == 'sitename' ) {
			$sitename_typo = NorebroSettings::get( 'header_menu_logo_typo', 'global' );
		}
	}
}

$sitename_typo_css = NorebroHelper::parse_acf_typo_to_css( $sitename_typo );


# 7. View
if ( $background_color_css || $header_typo_css ) {
	// --- start of CSS ---
	$_style_block = '#masthead.site-header, #mega-menu-wrap ul li, #masthead .menu-other > li > a, #masthead.site-header .header-bottom .copyright {';
	$_style_block .= $header_typo_css;
	$_style_block .= '}';

	// background
	$_style_block .= '#masthead.site-header{';
	$_style_block .= $background_color_css;
	$_style_block .= '}';
	// --- end of CSS ---
	NorebroLayout::append_to_dynamic_css_buffer( $_style_block );
}

if ( $border_css ) {
	// --- start of CSS ---
	$_style_block = '#masthead.site-header{';
	$_style_block .= $border_css;
	$_style_block .= '}';
	// --- end of CSS ---
	NorebroLayout::append_to_dynamic_css_buffer( $_style_block );
}

if ( $header_height_css ) {
	// --- start of CSS ---
	$_style_block = '#masthead.site-header,#masthead.site-header .header-wrap, .header-cap{';
	$_style_block .= $header_height_css;
	$_style_block .= '}';
	// --- end of CSS ---
	NorebroLayout::append_to_dynamic_css_buffer( $_style_block );
}

if ( $sitename_typo_css ) {
	// --- start of CSS ---
	$_style_block = '#masthead.site-header .site-title a,.fullscreen-navigation .site-title,.fullscreen-navigation .site-title a{';
	$_style_block .= $sitename_typo_css;
	$_style_block .= '}';
	// --- end of CSS ---
	NorebroLayout::append_to_dynamic_css_buffer( $_style_block );
}