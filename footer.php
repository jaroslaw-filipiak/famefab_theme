<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package femmefab
 */

$isInfluencerPostType = 'influencer_post_type' == get_post_type();


?>

<footer id="end" class="<?php echo $isInfluencerPostType ? 'd-none' : ''; ?>" role="content">
    <section class="footer">
        <div class="container-fluid">
            <div class="row footer--columns-wrapper">
                <div data-scroll data-scroll-speed="1"
                    class="col-6 col-sm-6 col-lg-3 d-flex flex-column align-items-start align-items-sm-center align-items-lg-start  justify-content-start ">

                    <div class="footer-col-content">
                        <?php dynamic_sidebar( 'sidebar-footer-col-1' ); ?>
                    </div>

                </div>
                <div data-scroll data-scroll-speed="1.3"
                    class="col-6 col-sm-6 col-lg-3 d-flex flex-column align-items-start align-items-sm-center align-items-lg-start  justify-content-start ">
                    <div class="footer-col-content">
                        <?php dynamic_sidebar( 'sidebar-footer-col-2' ); ?>
                    </div>


                </div>
                <div data-scroll data-scroll-speed="1.6"
                    class="col-6 col-sm-6 col-lg-3 d-flex flex-column align-items-start align-items-sm-center align-items-lg-start  justify-content-start ">
                    <div class="footer-col-content">
                        <?php dynamic_sidebar( 'sidebar-footer-col-3' ); ?>
                    </div>

                </div>
                <div data-scroll data-scroll-speed="1"
                    class="col-6 col-sm-6 col-lg-3 d-flex flex-column align-items-start align-items-sm-center align-items-lg-start  justify-content-start ">
                    <div class="footer-col-content">
                        <?php dynamic_sidebar( 'sidebar-footer-col-4' ); ?>
                    </div>
                </div>
            </div>
            <div data-scroll data-scroll-speed="1" class="row footer--logo">
                <div class="col d-flex flex-column align-items-center justify-content-end">
                    <img class="img-fluid"
                        src="<?php echo get_theme_file_uri() ?>/dist/assets/img/logo/big-2k/logo-big-2k.svg" alt="">
                </div>
            </div>
        </div>
    </section>

</footer>


<?php wp_footer(); ?>

</div> <!-- <---- close smooth scroll -->
<?php get_template_part( 'template-parts/footer-dynamic-data'); ?>
<?php get_template_part( 'template-parts/cookies'); ?>


</body>

</html>