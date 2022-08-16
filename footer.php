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
                    <h4>We are online</h4>
                    <div class="footer-col-content">
                        <ul>
                            <li><a href="#">info@Femmefab.nl</a></li>
                            <li><a href="#">+31 20 7109 700</a></li>
                        </ul>
                    </div>

                </div>
                <div data-scroll data-scroll-speed="1.6"
                    class="col-12 col-sm-6 col-lg-3 d-flex flex-column align-items-center align-items-lg-start  justify-content-start p-0">
                    <h4>We are offline</h4>
                    <div class="footer-col-content">
                        <p>De Hallen - Amsterdam</p>
                        <p> Hannie Dankbaarpassage 14</p>
                        <p>1053 RT Amsterdam</p>
                    </div>

                </div>
                <div data-scroll data-scroll-speed="1"
                    class="col-12 col-sm-6 col-lg-3 d-flex flex-column align-items-center align-items-lg-start  justify-content-start p-0">
                    <h4>Design</h4>
                    <div class="footer-col-content"></div>
                    <div>
                        <p>keplar agency amsterdam © 2022</p>
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
<h1 class="contact-us__hero-gsap">Contact us</h1>
<?php } ?>


</body>

</html>