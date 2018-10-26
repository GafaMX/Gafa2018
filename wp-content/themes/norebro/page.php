<?php
	get_header();

	// Settings
	$show_breadcrumbs = NorebroSettings::breadcrumbs_is_displayed();
	$page_wrapped = NorebroSettings::page_is_wrapped();
	$no_ecommerce = ! NorebroSettings::page_is( 'ecommerce' );
	$add_content_padding = NorebroSettings::page_add_top_padding();
	$sidebar_position = NorebroSettings::page_sidebar_position();

?>
	
<?php get_template_part( 'parts/elements/header-title' ); ?>

<?php get_template_part( 'parts/elements/breadcrumbs' ); ?>


<?php 
	$page_container_class = '';
	$sidebar_container_class = '';

	if ( !$show_breadcrumbs && $add_content_padding ) {
		$page_container_class .= ' without-breadcrumbs'; 
	}
	if ( ! $page_wrapped ) {
		$page_container_class .= ' full';
	}
	if ( $add_content_padding ) {
		$page_container_class .= ' bottom-offset';
	}

	if ( is_active_sidebar( 'norebro-sidebar-page' ) ) {	
		if ( $no_ecommerce && $sidebar_position == 'left' ) {
			$sidebar_container_class = 'with-left-sidebar';
		}
		if ( $no_ecommerce && $sidebar_position == 'right' ) {
			$sidebar_container_class = 'with-right-sidebar';
		}
	}

?>

<div class="page-container<?php echo esc_attr( $page_container_class ); ?>">
	<div id="primary" class="content-area">

		<?php if ( is_active_sidebar( 'norebro-sidebar-page' ) && $no_ecommerce && $sidebar_position == 'left' ) : ?>
		<div class="page-sidebar sidebar-left">
			<aside id="secondary" class="widget-area">
				<?php dynamic_sidebar( 'norebro-sidebar-page' ); ?>
			</aside>
		</div>
		<?php endif; ?>

		<div class="page-content <?php echo esc_attr( $sidebar_container_class ); ?>">
			<main id="main" class="site-main">
			<?php
				while ( have_posts() ) : the_post();
					get_template_part( 'parts/content', 'page' );
					if ( comments_open() || get_comments_number() ) :
						comments_template();
					endif;
				endwhile;
			?>
			</main><!-- #main -->
		</div>

		<?php if ( is_active_sidebar( 'norebro-sidebar-page' ) && $no_ecommerce && $sidebar_position == 'right' ) : ?>
		<div class="page-sidebar sidebar-right">
			<aside id="secondary" class="widget-area">
				<?php dynamic_sidebar( 'norebro-sidebar-page' ); ?>
			</aside>
		</div>
		<?php endif; ?>
	</div><!-- #primary -->

</div><!--.page-container-->

<?php
	get_footer();
?>
