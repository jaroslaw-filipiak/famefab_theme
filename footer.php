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

?>

<footer id="end">
    <section class="footer">
        <div class="container-fluid">
            <div class="row">
                <div data-scroll data-scroll-speed="1"
                    class="col-12 col-sm-6 col-lg-3 d-flex flex-column align-items-center align-items-lg-start  justify-content-start p-0">

                    <div class="footer-col-content">
                        <?php dynamic_sidebar( 'sidebar-footer-col-1' ); ?>
                    </div>

                </div>
                <div data-scroll data-scroll-speed="1.3"
                    class="col-12 col-sm-6 col-lg-3 d-flex flex-column align-items-center align-items-lg-start  justify-content-start p-0">
                    <div class="footer-col-content">
                        <?php dynamic_sidebar( 'sidebar-footer-col-2' ); ?>
                    </div>


                </div>
                <div data-scroll data-scroll-speed="1.6"
                    class="col-12 col-sm-6 col-lg-3 d-flex flex-column align-items-center align-items-lg-start  justify-content-start p-0">
                    <div class="footer-col-content">
                        <?php dynamic_sidebar( 'sidebar-footer-col-3' ); ?>
                    </div>

                </div>
                <div data-scroll data-scroll-speed="1"
                    class="col-12 col-sm-6 col-lg-3 d-flex flex-column align-items-center align-items-lg-start  justify-content-start p-0">
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


<!-- title has position fixed on page contact
 + gsap triggers , have to be before closing body  -->
<?php if(is_page_template( 'page-templates/page-contact.php' )) { ?>
<h1 class="contact-us__hero-gsap"><?php the_field( 'page_contact_first_section_title' ); ?></h1>
<?php } ?>

<!-- manage title on homepage  -->
<?php if(is_page_template( 'page-templates/page-home.php' )) { ?>
<div class="home-manage--title gsap__title-horizontaly-scrub">
    <?php the_field( 'home_section_manage_with_bg_title' ); ?></div>
<?php } ?>

<!-- make title on homepage / section make with bg  -->
<?php if(is_page_template( 'page-templates/page-home.php' )) { ?>
<div class="make-with-bg--title">
    <?php the_field( 'home_section_make_with_bg_big_title' ); ?>
</div>
<?php } ?>

<div class="cursor">
    <div class="cursor__ball cursor__ball--big ">
        <svg height="30" width="30">
            <circle cx="15" cy="15" r="12" stroke-width="0"></circle>
        </svg>
    </div>

    <div class="cursor__ball cursor__ball--small">
        <svg height="10" width="10">
            <circle cx="5" cy="5" r="4" stroke-width="0"></circle>
        </svg>
    </div>
</div>
</body>

</html>