<?php
/*
	Typography custom style
	
	Table of contents: (you can use search)
	# 1. Variables
	# 2. Text typography
	# 2.1. Post text typography
	# 3. Title typography
	# 3.1. Post title typography
	# 3. Subtitle typography
	# 5. View
*/


# 1. Variables

$title_typo 			= false;
$subtitle_typo 			= false;
$text_typo 				= false;
$post_title_typo 		= false;
$post_text_typo 		= false;


# 2. Text typography

$text_typo = NorebroSettings::get( 'page_text_typo', 'global' );


# 2.1. Post text typography

if ( NorebroSettings::page_is( 'single' ) ) {
	if ( NorebroSettings::get( 'post_typography_settings', 'global' ) == 'custom' ) {
		$post_text_typo = NorebroSettings::get( 'post_page_text_typo', 'global' );
	}
}


# 3. Title typography

if ( NorebroSettings::page_is( 'single' ) ) {
	if ( NorebroSettings::get( 'post_typography_settings', 'global' ) == 'custom' ) {
		$title_typo = NorebroSettings::get( 'post_header_title_typo', 'global' );
	} else {
		$title_typo = NorebroSettings::get( 'page_headings_typo', 'global' );
	}
} else {
	$title_typo = NorebroSettings::get( 'page_headings_typo', 'global' );
}


# 3.1. Post title typography

if ( NorebroSettings::page_is( 'single' ) ) {
	if ( NorebroSettings::get( 'post_typography_settings', 'global' ) == 'custom' ) {
		$post_title_typo = NorebroSettings::get( 'post_header_title_typo', 'global' );
	}
}


# 4. Subtitle typography

$subtitle_typo = NorebroSettings::get( 'page_subtitles_typo', 'global' );


# 5. View

// Global settings
if ( NorebroHelper::parse_acf_typo_to_css( $text_typo ) ) {
	// --- start of CSS ---
	$_style_block = 'body, .font-main, .font-main a,';
	$_style_block .= 'p{';
	$_style_block .= NorebroHelper::parse_acf_typo_to_css( $text_typo );
	$_style_block .= '}';
	// --- end of CSS ---
	NorebroLayout::append_to_dynamic_css_buffer( $_style_block );
}

if ( NorebroHelper::parse_acf_typo_to_css( $text_typo, array( 'rule' => 'exclude', 'fields' => array( 'color' ) ) ) ) {
	// --- start of CSS ---
	$_style_block = 'input,';
	$_style_block .= 'select,';
	$_style_block .= 'textarea,';
	$_style_block .= '.accordion-box .buttons h5.title,';
	$_style_block .= '.woocommerce div.product accordion-box.outline h5{';
	$_style_block .= NorebroHelper::parse_acf_typo_to_css( $text_typo, array( 'rule' => 'exclude', 'fields' => array( 'color' ) ) );
	$_style_block .= '}';
	// --- end of CSS ---
	NorebroLayout::append_to_dynamic_css_buffer( $_style_block );
}

if ( NorebroHelper::parse_acf_typo_to_css( $title_typo ) ) {
	// --- start of CSS ---
	$_style_block = 'h1,h2,h3,h3.second-title,h4,h5,';
	$_style_block .= '.counter-box .count,';
	$_style_block .= '.counter-box .counter-box-count,';
	$_style_block .= 'h1 a,h2 a,h3 a,h4 a,h5 a{';
	$_style_block .= NorebroHelper::parse_acf_typo_to_css( $title_typo );
	$_style_block .= '}';
	$_style_block .= '.countdown-box .box-time .box-count,';
	$_style_block .= '.chart-box-pie-content{';
	$_style_block .= NorebroHelper::parse_acf_typo_to_css( $title_typo, array( 'rule' => 'exclude', 'fields' => array( 'line-height' ) ) );
	$_style_block .= '}';
	$_style_block .= 'button,.btn,a.btn,input[type="submit"],';
	$_style_block .= '.socialbar.boxed-fullwidth a .social-text, .breadcrumbs,.font-titles,h1, h2, h3, h4, h5, h6,.countdown-box .box-time .box-count,.counter-box .counter-box-count,.vc_row .vc-bg-side-text,.slider-vertical-numbers li, .slider-vertical-numbers > div, .slider-vertical-numbers > .owl-dot,.slider-vertical-dots li,.slider-vertical-dots > div,.slider-vertical-dots > .owl-dot,.socialbar.inline a,.socialbar.boxed a .social-text,.widget_calendar caption,.breadcrumbs,nav.pagination,#masthead .site-title,#masthead .site-title a,.header-search form input,#mega-menu-wrap > ul > li,#masthead .menu-other > li > a,#masthead .menu-other > li .submenu .sub-nav.languages li a,.fullscreen-navigation .languages,.portfolio-sorting li,.portfolio-item.grid-4 .more, .portfolio-item.grid-5 .more,.portfolio-grid-4 .scroll, .portfolio-grid-5 .scroll, .portfolio-grid-7 .scroll{';
	$_style_block .= NorebroHelper::parse_acf_typo_to_css( $title_typo, array( 'rule' => 'include', 'fields' => array( 'font-family' ) ) );
	$_style_block .= '}';
	$_style_block .= '.portfolio-item h4,';
	$_style_block .= '.portfolio-item h4.title,';
	$_style_block .= '.portfolio-item h4 a,';
	$_style_block .= '.portfolio-item-2 h4,';
	$_style_block .= '.portfolio-item-2 h4.title,';
	$_style_block .= '.portfolio-item-2 h4 a,';
	$_style_block .= '.woocommerce ul.products li.product a {';
	$_style_block .= NorebroHelper::parse_acf_typo_to_css( $title_typo, array( 'rule' => 'exclude', 'fields' => array( 'font-size', 'line-height' ) ) );
	$_style_block .= 'font-size:inherit;';
	$_style_block .= 'line-height:inherit;';
	$_style_block .= '}';
	$_style_block .= '.blog-item h3.title{';
	$_style_block .= NorebroHelper::parse_acf_typo_to_css( $title_typo, array( 'rule' => 'exclude', 'fields' => array( 'font-size', 'line-height' ) ) );
	$_style_block .= 'line-height:initial;';
	$_style_block .= '}';
	$_style_block .= '.blog-item h3.title a{';
	$_style_block .= 'font-size: initial;';
	$_style_block .= '}';
	$_style_block .= '.portfolio-item-2 h4 {';
	$_style_block .= NorebroHelper::parse_acf_typo_to_css( $title_typo, array( 'rule' => 'exclude', 'fields' => array( 'font-size', 'color' ) ) );
	$_style_block .= '}';
	// --- end of CSS ---
	NorebroLayout::append_to_dynamic_css_buffer( $_style_block );
}

if ( NorebroHelper::parse_acf_typo_to_css( $subtitle_typo ) ) {
	// --- start of CSS ---
	$_style_block  = 'p.subtitle,';
	$_style_block .= '.subtitle-font,';
	$_style_block .= 'a.category{';
	$_style_block .= NorebroHelper::parse_acf_typo_to_css( $subtitle_typo );
	$_style_block .= '}';
	$_style_block .= 'span.category > a,';
	$_style_block .= 'div.category > a{';
	$_style_block .= NorebroHelper::parse_acf_typo_to_css( $subtitle_typo, array( 'rule' => 'exclude', 'fields' => array( 'font-size', 'line-height' ) ) );
	$_style_block .= '}';
	$_style_block .= '.portfolio-item .subtitle-font,';
	$_style_block .= '.woocommerce ul.products li.product .subtitle-font.category,';
	$_style_block .= '.woocommerce ul.products li.product .subtitle-font.category > a{';
	$_style_block .= NorebroHelper::parse_acf_typo_to_css( $subtitle_typo, array( 'rule' => 'exclude', 'fields' => array( 'font-size', 'line-height' ) ) );
	$_style_block .= 'font-size:inherit;';
	$_style_block .= 'line-height:inherit;';
	$_style_block .= '}';
	$_style_block .= 'input.classic::-webkit-input-placeholder,';
	$_style_block .= '.contact-form.classic input::-webkit-input-placeholder,';
	$_style_block .= '.contact-form.classic textarea::-webkit-input-placeholder,';
	$_style_block .= 'input.classic::-moz-placeholder{';
	$_style_block .= NorebroHelper::parse_acf_typo_to_css( $subtitle_typo );
	$_style_block .= '}';
	$_style_block .= '.contact-form.classic input::-moz-placeholder,';
	$_style_block .= '.contact-form.classic textarea::-moz-placeholder{';
	$_style_block .= NorebroHelper::parse_acf_typo_to_css( $subtitle_typo );
	$_style_block .= '}';
	$_style_block .= 'input.classic:-ms-input-placeholder,';
	$_style_block .= '.contact-form.classic input:-ms-input-placeholder,';
	$_style_block .= '.contact-form.classic textarea:-ms-input-placeholder{';
	$_style_block .= NorebroHelper::parse_acf_typo_to_css( $subtitle_typo );
	$_style_block .= '}';
	// --- end of CSS ---
	NorebroLayout::append_to_dynamic_css_buffer( $_style_block );
}

// Post text
if ( NorebroHelper::parse_acf_typo_to_css( $post_text_typo ) ) {
	// --- start of CSS ---
	$_style_block  = '#main .post .entry-content, #main .post .entry-content p{';
	$_style_block .= NorebroHelper::parse_acf_typo_to_css( $post_text_typo );
	$_style_block .= '}';
	// --- end of CSS ---
	NorebroLayout::append_to_dynamic_css_buffer( $_style_block );
}

// Post headings
if ( NorebroHelper::parse_acf_typo_to_css( $post_title_typo ) ) {
	// --- start of CSS ---
	$_style_block  = '#main .post .entry-content h1,';
	$_style_block .= '#main .post .entry-content h2,';
	$_style_block .= '#main .post .entry-content h3,';
	$_style_block .= '#main .post .entry-content h4,';
	$_style_block .= '#main .post .entry-content h5{';
	$_style_block .= NorebroHelper::parse_acf_typo_to_css( $post_title_typo );
	$_style_block .= '}';
	// --- end of CSS ---
	NorebroLayout::append_to_dynamic_css_buffer( $_style_block );
}