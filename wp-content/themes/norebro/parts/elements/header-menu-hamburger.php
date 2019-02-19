<?php
	// Settings
	$menu_type = NorebroSettings::menu_type();
?>

<!-- Fullscreen -->
<?php if ( $menu_type == 'hamburger' ) : ?>
	<div class="gafa__logo-side">
		<a href="<?php echo get_home_url(); ?>"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logo--gafa.svg" /></a>
	</div>
	<div class="hamburger-menu xx" id="hamburger-fullscreen-menu">
		<a class="hamburger" aria-controls="site-navigation" aria-expanded="false"></a>
	</div>
<?php endif; ?>
