<?php
	// Settings
	$subheader_have_social = have_rows( 'global_header_menu_contacts_bar_social_links', 'option' );
	$show_subheader = NorebroSettings::subheader_is_displayed();
?>

<header id="masthead" class="site-header dark-text header-6<?php if ( $show_subheader ) { echo ' with-subheader'; } ?>">
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
		</div>
		<div class="close-menu"></div>
	</div><!-- .header-wrap -->

	<div class="header-bottom">
		<p class="copyright">
			<?php echo NorebroSettings::get( 'footer_copyright_left', 'global' ); ?>
		</p>
	</div>
</header><!-- #masthead -->