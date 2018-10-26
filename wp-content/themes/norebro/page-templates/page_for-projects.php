<?php /* Template Name: Portfolio page */ ?>

<?php
	$GLOBALS['norebro_icon_fonts'][] = 'my-icon-arr-out';

	get_header();

	$show_breadcrumbs = NorebroSettings::breadcrumbs_is_displayed();
	$page_wrapped = NorebroSettings::page_is_wrapped();
	$add_content_padding = NorebroSettings::page_add_top_padding();

	// projects count
	$count_projects = wp_count_posts( 'norebro_portfolio' );
	$published_projects = $count_projects->publish;

	if ( get_query_var( 'paged' ) ) { 
		$pagination_page = get_query_var( 'paged' ); 
	} elseif ( get_query_var( 'page' ) ) {
		$pagination_page = get_query_var( 'page' ); 
	} else { 
		$pagination_page = 1;
	}

	// pagination settings
	$projects_per_page = get_field( 'portfolio_projects_per_page' );
	if ( ! $projects_per_page || $projects_per_page < 1 ) {
		$projects_per_page = 24;
	}

	$projects_offset = ( $pagination_page - 1 ) * $projects_per_page;

	$paginator_current = $pagination_page;
	if ( ! $projects_per_page || $projects_per_page < 1 ) {
		$projects_per_page = 1;
	}
	$paginator_all = ceil( $published_projects / $projects_per_page );

	$pagination_type = get_field( 'portfolio_pagination_type' );
	if ( $pagination_type == NULL ){
		$pagination_type = 'simple';
	}

	// show filter
	$show_filter = (bool) get_field( 'project_show_filter' );
	$filter_align = get_field( 'portfolio_filter_align' );
	if ( ! $filter_align ) {
		$filter_align = 'center';
	}
	switch ( $filter_align ) {
		case 'left':
			$filter_align_class = ' text-left';
			break;
		case 'right':
			$filter_align_class = ' text-right';
			break;
		default:
			$filter_align_class = '';
			break;
	}

	// Slider pagination
	$slider_pagination_show = get_field( 'project_show_slider_pagination' );
	if ( is_null( $slider_pagination_show ) ) {
		$slider_pagination_show = true;
	}

	$slider_pagination_type = get_field( 'portfolio_slider_pagination_type' );
	if ( $slider_pagination_type == NULL ){
		$slider_pagination_type = 'numbers';
	}

	// Popup
	$open_in_popup = (bool) get_field( 'portfolio_projects_in_popup' );
	$hide_view_link_in_popup = (bool) get_field( 'portfolio_projects_hide_view_link_in_popup' );
	$popup_autoplay = (bool) get_field( 'portfolio_projects_popup_gallery_autoplay' );
	$popup_navigation = (bool) get_field( 'portfolio_projects_popup_gallery_navigation' );
	$popup_mouse_scrolling = (bool) get_field( 'portfolio_projects_popup_mouse_scrolling' );
	$popup_autoplay_time = get_field( 'portfolio_projects_popup_gallery_autoplay_time' );

	if ( is_null( $popup_autoplay_time ) ) {
		$popup_autoplay_time = '5';
	}

	$metro_style = false;

	// Results
	$projects_show_from = ( $projects_offset + 1 <= $published_projects ) ? $projects_offset + 1 : $published_projects ;
	$projects_show_to = $projects_offset + $projects_per_page;
	if ( $projects_show_to > $published_projects ) {
		$projects_show_to = $published_projects;
	}

	$args = array(
		'posts_per_page'	=> $projects_per_page,
		'offset'			=> $projects_offset,
		'category'			=> '',
		'category_name'		=> '',
		'orderby'			=> 'date',
		'order'				=> 'DESC',
		'include'			=> '',
		'exclude'			=> '',
		'meta_key'			=> '',
		'meta_value'		=> '',
		'post_type'			=> 'norebro_portfolio',
		'post_mime_type' 	=> '',
		'post_parent'		=> '',
		'author'			=> '',
		'author_name'		=> '',
		'post_status'		=> 'publish',
		'suppress_filters' 	=> false 
	);
	$projects_array = get_posts( $args );

	// sidebar and layout
	$sidebar_position = get_field( 'portfolio_sidebar' );
	if ( $sidebar_position == 'inherit' ) {
		$sidebar_position = get_field( 'global_portfolio_sidebar', 'option' );
	}
	$sidebar_page_class = '';
	if ( $sidebar_position == 'left' ) {
		$sidebar_page_class = ' with-left-sidebar';
	}
	if ( $sidebar_position == 'right' ) {
		$sidebar_page_class = ' with-right-sidebar';
	}

	$animation_type = NorebroSettings::get( 'portfolio_animation_type' );
	$animation_effect = NorebroSettings::get( 'portfolio_animation_effect' );

	$grid_item_style_class = '';
	$posts_without_paddings = get_field( 'portfolio_items_without_padding' );
	if ( $posts_without_paddings ) {
		$grid_item_style_class .= ' post-offset ';
	} else {
		$grid_item_style_class .= ' with-padding ';
	}

	$columns_num = NorebroSettings::get( 'portfolio_columns_in_row' );
	if ( ! isset( $columns_num ) ) {
		$columns_num = '4-3-2-1';
	}

	$columns_class = NorebroHelper::parse_columns_to_css( $columns_num, false );
	$columns_double_class = NorebroHelper::parse_columns_to_css( $columns_num, true );

	$page_container_class = '';
	if ( !$show_breadcrumbs && $add_content_padding ) {
		$page_container_class .= ' without-breadcrumbs'; 
	}
	if ( !$page_wrapped ) {
		$page_container_class .= ' full';
	}
	if ( $add_content_padding ) {
		$page_container_class .= ' bottom-offset';
	}


	$projects_layout_item = get_field( 'portfolio_item_layout_type' );
	if ( ! $projects_layout_item || $projects_layout_item == 'inherit' ) {
		$projects_layout_item = get_field( 'global_portfolio_item_layout_type', 'option' );
	}

	$is_slider = $is_splitscreen = $is_onepage = false;

	switch ( $projects_layout_item ) {
		case 'grid_4':
		case 'grid_6':
			$is_slider = true;
			break;
		case 'grid_5':
			$is_splitscreen = true;
			break;
		case 'grid_7':
		case 'grid_8':
			$is_onepage = true;
			break;
	}

	if ( $is_onepage ) {
		$onepage_object = (object) array();
		$onepage_object->nav = true;
		$onepage_object->navContainerClass = 'slider-nav';
		$onepage_object->dots = $slider_pagination_show;
		$onepage_object->dotsClass = 'slider-vertical-' . $slider_pagination_type;
		$onepage_object->navClass = array( 'up', 'down' );
		if ( $projects_layout_item == 'grid_8' ) {
			$onepage_object->vertical = true;
		}
		$onepage_json = json_encode( $onepage_object );

		$onepage_class = '';
		if ( $projects_layout_item == 'grid_7' ) {
			$onepage_class .= ' portfolio-grid-7';
		}
		if ( $projects_layout_item == 'grid_8' ) {
			$onepage_class .= ' horizontal portfolio-grid-8';
		}
	}
	if ( $is_slider ){
		$slider_object = (object) array();
		$slider_object->loop = NorebroSettings::get( 'portfolio_sliderloop' );
		$slider_object->dots = true;
		$slider_object->nav = true;
		$slider_object->navContainerClass = 'slider-nav';
		$slider_object->itemsDesktop = 3;
		$slider_object->itemsTablet = 3;
		$slider_object->itemsMobile = 1;
		if ( $projects_layout_item == 'grid_4' ) {
			$slider_object->dotsClass = 'slider-vertical-numbers';
			$mousewheel = NorebroSettings::get( 'portfolio_mousewheel' );
			if ( $mousewheel !== false ) {
				$slider_object->mousewheel = true;
			}
		}
		if ( $projects_layout_item == 'grid_5' ) {
			$slider_object->vertical = true;
		}
		if ( $projects_layout_item == 'grid_6' ) {
			$slider_object->autoHeight = true;
		}
		$slider_json = json_encode( $slider_object );

		$slider_wrap_class = '';
		switch ( $projects_layout_item ) {
			case 'grid_4':
				$slider_wrap_class .= ' portfolio-grid-4 full-vh';
				break;
			case 'grid_6':
				$slider_wrap_class .= ' portfolio-grid-6';
				break;
		}
	}

	if ( $is_splitscreen ) {
		NorebroHelper::add_required_script( 'multiscroll' );
		
		$multiscroll_object = (object) array();
		$multiscroll_object->nav = true;
		$multiscroll_object->navContainerClass = 'slider-nav';
		$multiscroll_object->dots = $slider_pagination_show;
		$multiscroll_object->dotsClass = 'slider-vertical-' . $slider_pagination_type;
		$multiscroll_object->navClass = array( 'up', 'down' );
		$multiscroll_json = json_encode( $multiscroll_object );

		$splitscreen_class = '';
		switch ( $projects_layout_item ) {
			case 'grid_5':
				$splitscreen_class .= ' portfolio-grid-5';
				break;
		}
	}
?>

<?php get_template_part( 'parts/elements/header-title' ); ?>

<?php get_template_part( 'parts/elements/breadcrumbs' ); ?>

<div class="page-container<?php echo esc_attr( $page_container_class ); ?>">
	<div id="primary" class="content-area">

		<?php if ( $sidebar_position == 'left' ) : ?>
		<div class="page-sidebar sidebar-left">
			<aside id="secondary" class="widget-area">
				<?php dynamic_sidebar( 'norebro-sidebar-blog' ); ?>
			</aside>
		</div>
		<?php endif; ?>

		<div class="page-content<?php echo esc_attr( $sidebar_page_class ); ?>">
			<main id="main" class="site-main" data-norebro-portfolio-grid="true">

				<?php if ( ! $is_slider && ! $is_splitscreen && ! $is_onepage ) : ?>
					<div data-norebro-portfolio-grid="true">
						<?php if ( $show_filter ) : ?>
							<?php $cat_ids = get_terms( array( 'taxonomy' => 'norebro_portfolio_category' ) ); ?>
							<?php if ( is_array( $cat_ids ) && $cat_ids ) : ?>
								<div class="portfolio-sorting<?php echo esc_attr( $filter_align_class ); ?>" data-filter="portfolio">
									<ul class="unstyled">
										<li>
											<a class="active" href="#all" data-isotope-filter="*">
												<span class="name"><?php esc_html_e( 'All', 'norebro' ); ?></span>
												<span class="num"></span>
											</a>
										</li>
										<?php foreach ( $cat_ids as $cat_obj ) : ?>
											<li>
												<a href="#<?php echo esc_attr( $cat_obj->slug ); ?>" data-isotope-filter=".norebro-filter-project-<?php echo hash( 'md4', $cat_obj->slug, false ); ?>">
													<span class="name"><?php echo esc_html( $cat_obj->name ); ?></span>
													<span class="num"></span>
												</a>
											</li>
										<?php endforeach; ?>
									</ul>
								</div>
							<?php endif; ?>
						<?php endif; ?>
						<div class="vc_row" data-isotope-grid="true" data-lazy-container="true">
						<?php

						$_post_i = 0;
						foreach ( $projects_array as $_project_index => $_project_object ) {
							$norebro_project = NorebroObjectParser::parse_to_project_object( $_project_object );
							$norebro_project['in_popup'] = $open_in_popup;
							$norebro_project['metro_style'] = $metro_style;
							NorebroHelper::set_storage_item_data( $norebro_project );

							$col_class = $columns_class;
							if ( $norebro_project['grid_style'] == '2col' ) {
								$col_class = $columns_double_class;
							}
							// Animation calculating
							$_anim_attrs = '';
							if ( in_array( $animation_type, array( 'sync', 'async', 'default' ) ) ) {
								$_anim_attrs .= ' data-aos-once="true"';
								$_anim_attrs .= ' data-aos="' . $animation_effect . '"';
								if ( $animation_type == 'async' ) {
									$columns_num = (int) substr( $columns_num, 0, 1);
									$_delay = ( 400 / $columns_num ) * ( $_post_i % $columns_num );
									$_delay = (int) $_delay - ( $_delay % 50 );
									$_anim_attrs .= ' data-aos-delay="' . $_delay . '"';
								}
							}
							echo '<div class="portfolio-item-wrap' . esc_attr( $col_class ) . ' norebro-project-item ' . (( $norebro_project['grid_style'] != '2col' ) ? ' grid-item' : '') . ' ' . esc_attr( $grid_item_style_class  . $norebro_project['categories_group'] ) . '" data-lazy-item="true">';
							if ( $_anim_attrs ) {
								echo '<div' . $_anim_attrs . '>';
							}

							switch ( $projects_layout_item ) {
								case 'grid_1_hover_1':
									get_template_part( 'parts/portfolio-cards/grid_1_hover_1' );
									break;
						     case 'grid_1_hover_2':
									get_template_part( 'parts/portfolio-cards/grid_1_hover_2' );
									break;
						     case 'grid_1_hover_3':
									get_template_part( 'parts/portfolio-cards/grid_1_hover_3' );
									break;
						     case 'grid_2_hover_1':
									get_template_part( 'parts/portfolio-cards/grid_2_hover_1' );
									break;
						     case 'grid_2_hover_2':
									get_template_part( 'parts/portfolio-cards/grid_2_hover_2' );
									break;
						     case 'grid_2_hover_3':
									get_template_part( 'parts/portfolio-cards/grid_2_hover_3' );
									break;
						     case 'grid_4':
									get_template_part( 'parts/portfolio-cards/grid_4' );
									break;
						     case 'grid_5':
									get_template_part( 'parts/portfolio-cards/grid_5' );
									break;
						     case 'grid_6':
									get_template_part( 'parts/portfolio-cards/grid_6' );
									break;
						     case 'grid_7':
									get_template_part( 'parts/portfolio-cards/grid_7' );
									break;
						     case 'grid_8':
									get_template_part( 'parts/portfolio-cards/grid_8' );
									break;
								default:
									get_template_part(  'parts/portfolio-cards/grid_1_hover_1' );
									break;
							}
							echo '<div class="clear"></div>';
							echo '</div>';

							$_post_i++;

							if ( $open_in_popup ) {
								$norebro_project['hide_view_link_in_popup'] = $hide_view_link_in_popup; 
								$norebro_project['popup_autoplay'] = $popup_autoplay;
								$norebro_project['popup_navigation'] = $popup_navigation;
								$norebro_project['popup_mouse_scrolling'] = $popup_mouse_scrolling;
								$norebro_project['popup_autoplay_time'] = $popup_autoplay_time;
								
								ob_start();
								NorebroHelper::set_storage_item_data( $norebro_project );
								get_template_part( 'parts/portfolio-cards/_popup' );
								NorebroLayout::append_to_footer_buffer_content( ob_get_clean() );
							}

							if ( $_anim_attrs ) {
								echo '</div>';
							}
						}

						?>
						</div>
						<?php
							if ( $paginator_all > 1 ) {

								switch ( $pagination_type ) {
									case 'simple':
										NorebroLayout::the_paginator_layout( $pagination_page, $paginator_all );
										break;
								 	case 'lazy_scroll':
										echo '<div class="lazy-load loading font-titles" data-lazy-load="scroll" data-lazy-pages-count="' . esc_attr( $paginator_all ) . '">';
										echo '<span class="loading-text">' . esc_html__( 'Loading', 'norebro-extra' ) . '</span>';
										echo '<span class="icon ion-refresh"></span>';
										echo '</div>';
										break;
									case 'lazy_button':
										echo '<div class="lazy-load load-more font-titles" data-lazy-load="click" data-lazy-pages-count="' . esc_attr( $paginator_all ) . '">';
										echo '<span class="loadmore-text">' . esc_html__( 'Load More', 'norebro-extra' ) . '</span>';
										echo '<span class="loading-text">' . esc_html__( 'Loading', 'norebro-extra' ) . '</span>';
										echo '<span class="icon ion-refresh"></span>';
										echo '</div>';
										break;
								}
							}
						?>

					</div>
				<?php endif; ?>

				<?php if ( $is_slider ) : ?>
					<div class="vc_row wpb_row vc_row-fluid vc_row-no-padding" data-vc-full-width="true" data-vc-stretch-content="true">
						<div class="norebro-recent-projects-sc <?php echo esc_attr( $slider_wrap_class ); ?>" 
							id="<?php echo esc_attr( $recent_projects_uniqid ); ?>"
							<?php if ( $appearance_effect != 'none' ) { echo ' data-aos="' . esc_attr( $appearance_effect ) . '"'; } ?> 
							<?php if ( $appearance_duration ) { echo ' data-aos-duration="' . esc_attr( intval( $appearance_duration ) ) . '"'; } ?>>
							
							<div class="slider full-height<?php echo esc_attr( $slider_class . $css_class ); ?>" data-norebro-slider='<?php echo esc_attr( $slider_json ); ?>'>
								<?php 
									$_post_i = 0;
									foreach ( $projects_array as $_project_index => $_project_object ) {
										$norebro_project = NorebroObjectParser::parse_to_project_object( $_project_object );
										$norebro_project['in_popup'] = $open_in_popup;
										NorebroHelper::set_storage_item_data( $norebro_project );
										$_columns_num_class = $columns_num_class; // reserve
										if ( $norebro_project['grid_style'] == '2col' && $columns_num_class != '12' ) {
											$columns_num_class = intval( $columns_num_class ) * 2; // wide grid item
										}
										// Animation calculating
										$_anim_attrs = '';
										if ( in_array( $animation_type, array( 'sync', 'async' ) ) ) {
											$_anim_attrs .= ' data-aos-once="true"';
											$_anim_attrs .= ' data-aos="' . $animation_effect . '"';
											if ( $animation_type == 'async' ) {
												$columns_num = (int) substr( $columns_num, 0, 1);
												$_delay = ( 400 / $columns_num ) * ( $_post_i % $columns_num );
												$_delay = (int) $_delay - ( $_delay % 50 );
												$_anim_attrs .= ' data-aos-delay="' . $_delay . '"';
											}
										}
										$norebro_project = NorExtraParser::project_object( $_project_object );
										$norebro_project['in_popup'] = $open_in_popup;
										$norebro_project['metro_style'] = $metro_style;

										NorebroHelper::set_storage_item_data( $norebro_project );
										echo '<div class="slider-wrap portfolio-item-wrap">';
										
										switch ( $projects_layout_item ) {
											case 'grid_4':
												include get_template_directory() . '/parts/portfolio-cards/grid_4.php';
												break;
											case 'grid_6':
												include get_template_directory() . '/parts/portfolio-cards/grid_6.php';
												break;
										}

										echo '</div>';

										if ( $open_in_popup ) {
											$norebro_project['hide_view_link_in_popup'] = $hide_view_link_in_popup; 
											$norebro_project['popup_autoplay'] = $popup_autoplay;
											$norebro_project['popup_navigation'] = $popup_navigation;
											$norebro_project['popup_mouse_scrolling'] = $popup_mouse_scrolling;
											$norebro_project['popup_autoplay_time'] = $popup_autoplay_time;
											
											ob_start();
											NorebroHelper::set_storage_item_data( $norebro_project );
											get_template_part( 'parts/portfolio-cards/_popup' );
											NorebroLayout::append_to_footer_buffer_content( ob_get_clean() );
										}
									}
								?>
							</div>

							<?php if ( $card_layout == 'grid_4' ) : ?>
							<div class="scroll<?php echo esc_attr( $scroll_desc_class ); ?>">
								<?php echo esc_html__( 'Scroll', 'norebro' ) ?>
							</div>
							<?php endif; ?>
						</div>
					</div>
				<?php endif; ?>

				<?php if ( $is_splitscreen ) : ?>
					<div class="vc_row wpb_row vc_row-fluid vc_row-no-padding" data-vc-full-width="true" data-vc-stretch-content="true">
						<div class="norebro-recent-projects-sc norebro-splitscreen full-vh <?php echo esc_attr( $splitscreen_class ); ?>" 
							data-norebro-splitscreen="true" data-options='<?php echo esc_attr( $multiscroll_json ); ?>'>
							
							<div class="ms-left">
								<?php
									$_post_i = 0;
									foreach ( $projects_array as $_project_index => $_project_object ) {
										$norebro_project = NorebroObjectParser::parse_to_project_object( $_project_object );
										$norebro_project['in_popup'] = $open_in_popup;
										$norebro_project['hide_view_link_in_popup'] = $hide_view_link_in_popup; 
										NorebroHelper::set_storage_item_data( $norebro_project );

										echo '<div class="ms-section portfolio-item-wrap">';
										
										switch ( $projects_layout_item ) {
											case 'grid_5':
												include get_template_directory() . '/parts/portfolio-cards/grid_5_left.php';
												break;
										}

										echo '</div>';
									}
								?>
							</div>
							<div class="ms-right">
								<?php
									$_post_i = 0;
									foreach ( $projects_array as $_project_index => $_project_object ) {
										$norebro_project = NorebroObjectParser::parse_to_project_object( $_project_object );
										$norebro_project['in_popup'] = $open_in_popup;
										NorebroHelper::set_storage_item_data( $norebro_project );

										echo '<div class="ms-section portfolio-item-wrap">';
										
										switch ( $projects_layout_item ) {
											case 'grid_5':
												include get_template_directory() . '/parts/portfolio-cards/grid_5_right.php';
												break;
										}

										echo '</div>';

										if ( $open_in_popup ) {
											$norebro_project['hide_view_link_in_popup'] = $hide_view_link_in_popup; 
											$norebro_project['popup_autoplay'] = $popup_autoplay;
											$norebro_project['popup_navigation'] = $popup_navigation;
											$norebro_project['popup_mouse_scrolling'] = $popup_mouse_scrolling;
											$norebro_project['popup_autoplay_time'] = $popup_autoplay_time;
											
											ob_start();
											NorebroHelper::set_storage_item_data( $norebro_project );
											get_template_part( 'parts/portfolio-cards/_popup' );
											NorebroLayout::append_to_footer_buffer_content( ob_get_clean() );
										}
									}
								?>
							</div>
							<div class="scroll<?php echo esc_attr( $scroll_desc_class ); ?>">
								<?php esc_html_e( 'Scroll', 'norebro' ) ?>
							</div>
						</div>
					</div>
				<?php endif; ?>

				<?php if ( $is_onepage ) : ?>
					<div class="vc_row wpb_row vc_row-fluid vc_row-no-padding" data-vc-full-width="true" data-vc-stretch-content="true">
						<div class="norebro-recent-projects-sc norebro-onepage<?php echo esc_attr( $onepage_class ); ?>" data-norebro-onepage="true" data-options='<?php echo esc_attr( $onepage_json ); ?>'>
							<div class="onepage-stage">
								<?php 
									$_post_i = 0;
									foreach ( $projects_array as $_project_index => $_project_object ) {
										$norebro_project = NorebroObjectParser::parse_to_project_object( $_project_object );
										$norebro_project['in_popup'] = $open_in_popup;
										NorebroHelper::set_storage_item_data( $norebro_project );

										echo '<section class="onepage-section portfolio-item-wrap">';
									
										switch ( $projects_layout_item ) {
											case 'grid_7':
												include get_template_directory() . '/parts/portfolio-cards/grid_7.php';
												break;
											case 'grid_8':
												include get_template_directory() . '/parts/portfolio-cards/grid_8.php';
												break;
										}

										echo '</section>';

										if ( $open_in_popup ) {
											$norebro_project['hide_view_link_in_popup'] = $hide_view_link_in_popup; 
											$norebro_project['popup_autoplay'] = $popup_autoplay;
											$norebro_project['popup_navigation'] = $popup_navigation;
											$norebro_project['popup_mouse_scrolling'] = $popup_mouse_scrolling;
											$norebro_project['popup_autoplay_time'] = $popup_autoplay_time;
											
											ob_start();
											NorebroHelper::set_storage_item_data( $norebro_project );
											get_template_part( 'parts/portfolio-cards/_popup' );
											NorebroLayout::append_to_footer_buffer_content( ob_get_clean() );
										}
									}
								?>
							</div>
							<div class="scroll font-titles<?php echo esc_attr( $scroll_desc_class ); ?>">
								<?php esc_html_e( 'Scroll', 'norebro' ) ?>
							</div>
						</div>
					</div>
				<?php endif; ?>

			</main><!-- #main -->
		</div>

		<?php if ( $sidebar_position == 'right' ) : ?>
		<div class="page-sidebar sidebar-right">
			<aside id="secondary" class="widget-area">
				<?php dynamic_sidebar( 'norebro-sidebar-blog' ); ?>
			</aside>
		</div>
		<?php endif; ?>

	</div><!-- #primary -->
</div><!--.page-container-->
	
<?php
	get_footer();