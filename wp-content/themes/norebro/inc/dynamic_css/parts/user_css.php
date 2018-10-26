<?php
/*
	Custom user CSS style
	
	Table of contents: (you can use search)
	# 1. Variables
	# 2. Global custom CSS
	# 3. Current page custom CSS
	# 4. Current page custom CSS
	# 5. Current project custom CSS
	# 6. View
*/


# 1. Variables

$global_css		= false;
$page_css 		= false;
$post_css 		= false;
$project_css 	= false;


# 2. Global custom CSS
$global_css = get_field( 'global_page_custom_css', 'option' );

# 3. Current page custom CSS
$page_css = get_field( 'page_custom_css' );

# 4. Current page custom CSS
$post_css = get_field( 'post_custom_css' );

# 5. Current project custom CSS
$project_css = get_field( 'project_custom_css' );


# 6. View

if ( $global_css ) {
	NorebroLayout::append_to_dynamic_css_buffer( $global_css );
}
if ( $page_css ) {
	NorebroLayout::append_to_dynamic_css_buffer( $page_css );
}
if ( $post_css ) {
	NorebroLayout::append_to_dynamic_css_buffer( $post_css );
}
if ( $project_css ) {
	NorebroLayout::append_to_dynamic_css_buffer( $project_css );
}