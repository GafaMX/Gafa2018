<?php
	// Settings
	$is_fixed = NorebroSettings::header_is_fixed();
	$use_wrapper = NorebroSettings::header_use_wrapper();
	$show_subheader = NorebroSettings::subheader_is_displayed();
?>

<header id="masthead" class="site-header light-text header-5<?php if ( $show_subheader ) { echo ' with-subheader'; } ?>"
	<?php if ( $is_fixed ) { echo ' data-header-fixed="true"'; } ?>>
	<div class="header-wrap<?php if ( $use_wrapper ) { echo ' page-container'; }; ?>">
		<?php get_template_part( 'parts/elements/header-menu-logo' ); ?>
		<div class="menu-wrap">
			<div class="wrap">
				<?php get_template_part( 'parts/elements/header-menu-nav' ); ?>
				<div class="menu-other-wrap">
					<?php get_template_part( 'parts/elements/header-menu-optional-nav' ); ?>
					<?php 
						if ( ! NorebroSettings::hamburger_in_panel() ) {
							get_template_part( 'parts/elements/header-menu-hamburger' );
						}
					?>
				</div>
				<div class="close-menu"></div>
			</div>
		</div>
	</div><!-- .header-wrap -->
</header><!-- .header-top -->

<?php get_template_part( 'parts/elements/header-menu-fullscreen-nav' ); ?>