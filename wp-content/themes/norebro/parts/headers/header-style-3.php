<?php
	// Settings
	$is_fixed = NorebroSettings::header_is_fixed();
	$add_header_cap = NorebroSettings::header_cap_is_displayed();
	$show_subheader = NorebroSettings::subheader_is_displayed();
?>

<header id="masthead" class="site-header dark-text header-3<?php if ( $show_subheader ) { echo ' with-subheader'; } ?><?php if ( $add_header_cap ) { echo ' with-header-cap'; } ?>"<?php if ( $is_fixed ) { echo ' data-header-fixed="true"'; } ?>>
	<div class="page-container">
		<div class="header-wrap">
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
		</div>
	</div><!-- .header-wrap -->
</header><!-- #masthead -->

<?php get_template_part( 'parts/elements/header-menu-fullscreen-nav' ); ?>