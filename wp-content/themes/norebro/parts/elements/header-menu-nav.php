<?php
	// Settings
	$menu_type = NorebroSettings::menu_type();
	$have_woocomerce = function_exists( 'WC' );
	$have_woocomerce_wl = function_exists( 'YITH_WCWL' );
	$have_wpml = function_exists( 'icl_get_languages' );
	$wpml_show_in_header = get_field( 'global_wpml_show_in_header', 'option' );
	$wpml_show_in_header = ( $wpml_show_in_header === false ) ? false : true;
	$header_have_social = have_rows( 'global_header_menu_social_links', 'option' );

	$site_navigation_class = '';
	if ( $menu_type != 'full' ) { 
		$site_navigation_class .= ' hidden'; 
	}
?>

<nav id="site-navigation" class="main-nav<?php echo esc_attr( $site_navigation_class ); ?>">
	<div class="close">
		<span class="icon ion-android-close"></span>
	</div>
	<div id="mega-menu-wrap">
		<?php
			if ( has_nav_menu( 'primary' ) ) {
				wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu' ) );
			} else {
				echo '<span class="menu-not-assigned">' . sprintf( esc_html__( 'Please %1$s assign a menu %2$s to the primary menu location', 'norebro' ), '<a href="' . esc_url( home_url( '/' ) ) . 'wp-admin/nav-menus.php">', '</a>' ) . '</span>';
			}
		?>
	</div>

	<ul class="phone-menu-bottom">

		<!-- Languages -->
		<?php if ( $have_wpml && $wpml_show_in_header ) : ?>
		<li class="mega-menu-item has-submenu mobile-wpml-select">
			<a class="menu-link uppercase">
				<span class="icon ion-ios-world-outline"></span>
				<?php
					$selected_language = icl_get_languages( 'active=true' );
					if ( defined( ICL_LANGUAGE_NAME_EN ) ) {
						echo ICL_LANGUAGE_NAME_EN;
					}
				?>
			</a>
			<div class="sub-nav no-paddings">
				<ul class="sub-menu sub-nav-group">
					<?php
						$languages = icl_get_languages( 'orderby=code' );

						foreach( $languages as $language ) {
							$class = ( $language['active'] ) ? ' active' : '';

							printf( 
								'<li class="class="mega-menu-item%1$s"><a href="%2$s" class="menu-link"><img src="%3$s" alt=""> %4$s</a></li>', 
								$class, 
								$language['url'],
								$language['country_flag_url'], 
								$language['native_name'] 
							);
						} 
					?>
				</ul>
			</div>
		</li>
		<?php endif; ?>

		<!-- Contact info  -->
		<li class="contact">
			
		</li>

		<?php if ( $header_have_social ) : ?>
		<li class="socialbar small outline">
			<?php while( have_rows( 'global_header_menu_social_links', 'option' ) ): the_row(); ?>
				<?php switch ( get_sub_field( 'social_network' ) ) {
					case 'facebook':
						echo '<a href="' . esc_url( get_sub_field( 'url' ) ) . '" class="facebook"><span class="icon fa fa-facebook"></span></a>';
						break;
					case 'twitter':
						echo '<a href="' . esc_url( get_sub_field( 'url' ) ) . '" class="twitter"><span class="icon fa fa-twitter"></span></a>';
						break;
					case 'googleplus':
						echo '<a href="' . esc_url( get_sub_field( 'url' ) ) . '" class="googleplus"><span class="icon fa fa-google-plus"></span></a>';
						break;
					case 'instagram':
						echo '<a href="' . esc_url( get_sub_field( 'url' ) ) . '" class="instagram"><span class="icon fa fa-instagram"></span></a>';
						break;
					case 'dribbble':
						echo '<a href="' . esc_url( get_sub_field( 'url' ) ) . '" class="dribbble"><span class="icon fa fa-dribbble"></span></a>';
						break;
					case 'github':
						echo '<a href="' . esc_url( get_sub_field( 'url' ) ) . '" class="github"><span class="icon fa fa-github-alt"></span></a>';
						break;
					case 'linkedin':
						echo '<a href="' . esc_url( get_sub_field( 'url' ) ) . '" class="linkedin"><span class="icon fa fa-linkedin"></span></a>';
						break;
					case 'vimeo':
						echo '<a href="' . esc_url( get_sub_field( 'url' ) ) . '" class="vimeo"><span class="icon fa fa-vimeo"></span></a>';
						break;
					case 'youtube':
						echo '<a href="' . esc_url( get_sub_field( 'url' ) ) . '" class="youtube"><span class="icon fa fa-youtube"></span></a>';
						break;
					case 'vk':
						echo '<a href="' . esc_url( get_sub_field( 'url' ) ) . '" class="vk"><span class="icon fa fa-vk"></span></a>';
						break;
					case 'behance':
						echo '<a href="' . esc_url( get_sub_field( 'url' ) ) . '" class="behance"><span class="icon fa fa-behance"></span></a>';
						break;
				} ?>
			<?php endwhile; ?>
		</li>
		<?php endif; ?>

	</ul>
</nav>