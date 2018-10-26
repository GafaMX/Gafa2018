<?php
/**
 * The Template for displaying product archives, including the main shop page which is a post type archive
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/archive-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     3.3.0
 */

	
	if ( ! defined( 'ABSPATH' ) ) {
		exit; // Exit if accessed directly
	}

	global $post;
	$shop_page_id = wc_get_page_id( 'shop' );

	if ( $post && is_object( $post ) ) {
		$postID = $post->ID;
		if ( is_shop() || is_product_category() || is_product_tag() ) {
			$post->ID = get_option( 'woocommerce_shop_page_id' ); // woocomerce wrong post id fix
		}
	}

	$page_wrapped = NorebroSettings::page_is_wrapped();
	$page_container_class = '';
	if ( !$page_wrapped ) { 
		$page_container_class .= ' full';
	}
	$page_content_class = '';
	if ( is_active_sidebar( 'wc_shop' ) ) {
		$page_content_class .= ' with-right-sidebar';
	}

	$products_in_row = NorebroSettings::get( 'woocommerce_products_in_row', 'global' );
	$products_in_row_tablets = NorebroSettings::get( 'woocommerce_products_in_row_tablets', 'global' );
	$products_in_row_mobiles = NorebroSettings::get( 'woocommerce_products_in_row_mobiles', 'global' );

	if ( ! $products_in_row ) {
		$products_in_row = '3';
	}
	if ( ! $products_in_row_tablets ) {
		$products_in_row_tablets = '2';
	}
	if ( ! $products_in_row_mobiles ) {
		$products_in_row_mobiles = '1';
	}

	$product_now = 0;

	$row_class = ' columns-' . $products_in_row;
	$row_class .= ' columns-md-' . $products_in_row_tablets;
	$row_class .= ' columns-sm-' . $products_in_row_mobiles;


	get_header( 'shop' );
?>

<?php get_template_part( 'parts/elements/header-title' ); ?>

<?php get_template_part( 'parts/elements/breadcrumbs' ); ?>

<?php
	/**
	 * woocommerce_before_main_content hook.
	 *
	 * @hooked woocommerce_output_content_wrapper - 10 (outputs opening divs for the content)
	 * @hooked woocommerce_breadcrumb - 20
	 */
	do_action( 'woocommerce_before_main_content' );
?>

<div class="page-container<?php echo esc_attr( $page_container_class ); ?> woo-shop-container bottom-offset">

	<div class="page-content<?php echo esc_attr( $page_content_class ); ?><?php echo $row_class; ?>">
		<?php if ( have_posts() ) : ?>
		<?php 
			wc_print_notices();
			do_action( 'woocommerce_archive_description' );

			if ( is_shop() || is_product_category() || is_product_tag() ) {
				$post->ID = $postID;
			}

			woocommerce_product_loop_start();
			woocommerce_product_subcategories();

			while ( have_posts() ) {
				the_post();
				do_action( 'woocommerce_shop_loop' );
				wc_get_template_part( 'content', 'product' );
			}

			woocommerce_product_loop_end(); 
			do_action( 'woocommerce_after_shop_loop' );
		?>
		<?php elseif ( ! woocommerce_product_subcategories( array( 'before' => woocommerce_product_loop_start( false ), 'after' => woocommerce_product_loop_end( false ) ) ) ) : ?>
			<?php wc_get_template( 'loop/no-products-found.php' ); ?>
		<?php endif; ?>
	</div>
	<?php if ( is_active_sidebar( 'wc_shop' ) ) : ?>
	<div class="page-sidebar sidebar-right woo-sidebar">
		<ul class="sidebar-widgets">
			<?php dynamic_sidebar( 'wc_shop' ); ?>
		</ul>
	</div>
	<?php endif; ?>
	<div class="clear"></div>

</div><!--.page-container-->

<?php
	do_action( 'woocommerce_after_main_content' );
?>

<?php get_footer( 'shop' ); ?>
