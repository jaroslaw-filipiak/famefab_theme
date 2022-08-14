<?php
/**
 * Section scroll gallery 
 * TODO: add isotope library for gallery 
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package femmefab
 */

?>

<section class="scroll-gallery bg-yellow">
    <div class="container-fluid h-100">
        <div class="row h-100">
            <div data-scroll data-scroll-speed="1"
                class="scroll-gallery--col scroll-gallery--col-1 justify-content-between col-6 col-xl-3 h-100 ">
                <img class="img-fluid"
                    src="<?php echo get_theme_file_uri() ?>/dist/assets/img/scroll-gallery/scroll-gallery-1.jpg" alt="">
                <img class="img-fluid"
                    src="<?php echo get_theme_file_uri() ?>/dist/assets/img/scroll-gallery/scroll-gallery-2.jpg" alt="">
            </div>
            <div data-scroll data-scroll-speed="1.3"
                class="d-none d-lg-flex scroll-gallery--col scroll-gallery--col-2 justify-content-between col-6 col-xl-3 h-100 ">
                <img class="img-fluid"
                    src="<?php echo get_theme_file_uri() ?>/dist/assets/img/scroll-gallery/scroll-gallery-3.jpg" alt="">

            </div>
            <div data-scroll data-scroll-speed="3"
                class="scroll-gallery--col scroll-gallery--col-3 justify-content-between col-6 col-xl-3 h-100 ">
                <img class="img-fluid"
                    src="<?php echo get_theme_file_uri() ?>/dist/assets/img/scroll-gallery/scroll-gallery-4.jpg" alt="">
                <img class="img-fluid"
                    src="<?php echo get_theme_file_uri() ?>/dist/assets/img/scroll-gallery/scroll-gallery-5.jpg" alt="">

            </div>
            <div data-scroll data-scroll-speed="2"
                class="d-none d-lg-flex scroll-gallery--col scroll-gallery--col-4 justify-content-start col-6 col-xl-3 h-100 ">
                <img class="img-fluid"
                    src="<?php echo get_theme_file_uri() ?>/dist/assets/img/scroll-gallery/scroll-gallery-6.jpg" alt="">
            </div>
        </div>
    </div>
</section>