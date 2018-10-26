<?php
	// Settings
	$is_fixed = NorebroSettings::header_is_fixed();
	$use_wrapper = NorebroSettings::header_use_wrapper();
	$show_subheader = NorebroSettings::subheader_is_displayed();
?>

<header id="masthead" class="site-header light-text header-1<?php if ( $show_subheader ) { echo ' with-subheader'; } ?>"
	<?php if ( $is_fixed ) { echo ' data-header-fixed="true"'; } ?>>
	<div class="header-wrap<?php if ( $use_wrapper ) { echo ' page-container'; } ?>">
		<?php get_template_part( 'parts/elements/header-menu-logo' ); ?>
		<div class="right">
			<?php get_template_part( 'parts/elements/header-menu-nav' ); ?>
			<?php get_template_part( 'parts/elements/header-menu-optional-nav' ); ?>
			<?php 
				if ( ! NorebroSettings::hamburger_in_panel() ) {
					get_template_part( 'parts/elements/header-menu-hamburger' );
				}
			?>
			<div class="close-menu"></div>
		</div>
	</div><!-- .header-wrap -->
</header><!-- #masthead -->

<?php get_template_part( 'parts/elements/header-menu-fullscreen-nav' ); ?>