<?php
/**
 * Share template
 *
 * @author Your Inspiration Themes
 * @package YITH WooCommerce Wishlist
 * @version 2.0.13
 */

if ( ! defined( 'YITH_WCWL' ) ) {
    exit;
} // Exit if accessed directly

$facebook_link = 'https://www.facebook.com/sharer/sharer.php?u=' . rawurlencode( get_post_permalink( $share_link_url ) );
$twitter_link = 'https://twitter.com/intent/tweet?text=' . urlencode( $share_twitter_summary ) . ',+' . rawurlencode( get_permalink() );
$google_link = 'https://plus.google.com/share?url=' . esc_url( $share_link_url ) . '&title=' . urlencode( $share_link_title );
$pinterest_link = 'http://pinterest.com/pin/create/button/?url=' . urlencode( $share_link_url ) . '&amp;description=' . urlencode( esc_attr( $share_summary ) ) . '&amp;media=' . esc_url( $share_image_url );
$email_link = 'mailto:?subject=' . urlencode( apply_filters( 'yith_wcwl_email_share_subject', esc_html__( 'I wanted you to see this site', 'norebro'  ) ) ) . '&amp;body=' . apply_filters( 'yith_wcwl_email_share_body', $share_link_url ) . '&amp;title=' . esc_attr( $share_link_title );

?>

<div class="yith-wcwl-share">
    <h3 class="title text-left inline"><?php echo wp_kses( $share_title, 'default' ); ?></h3>
    <div class="socialbar default small">
        <?php if( $share_facebook_enabled ): ?>
            <a target="_blank" class="facebook" href="<?php echo esc_url( $facebook_link ); ?>" title="<?php esc_attr_e( 'Facebook', 'norebro'  ) ?>">
                <span class="icon fa fa-facebook"></span>
            </a>
        <?php endif; ?>

        <?php if( $share_twitter_enabled ): ?>
            <a target="_blank" class="twitter" href="<?php echo esc_url( $twitter_link ); ?>" title="<?php esc_attr_e( 'Twitter', 'norebro'  ) ?>">
                <span class="icon fa fa-twitter"></span>
            </a>
        <?php endif; ?>

        <?php if( $share_pinterest_enabled ): ?>
            <a target="_blank" class="pinterest" href="<?php echo esc_url( $pinterest_link ); ?>" title="<?php esc_attr_e( 'Pinterest', 'norebro'  ) ?>" onclick="window.open(this.href); return false;">
                <span class="icon fa fa-pinterest-p"></span>
            </a>
        <?php endif; ?>

        <?php if( $share_googleplus_enabled ): ?>
            <a target="_blank" class="googleplus" href="<?php echo esc_url( $google_link ); ?>" title="<?php esc_attr_e( 'Google+', 'norebro'  ) ?>" onclick='javascript:window.open(this.href, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");return false;'>
                <span class="icon fa fa-google"></span>
            </a>
        <?php endif; ?>

        <?php if( $share_email_enabled ): ?>
            <a href="<?php esc_url( $email_link ); ?>" title="<?php esc_attr_e( 'Email', 'norebro'  ) ?>">
                <span class="icon fa fa-envelope-o"></span>
            </a>
        <?php endif; ?>
    </div>
</div>