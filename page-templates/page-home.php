<?php /* Template Name: Homepage */ ?>

<?php get_header() ?>

<script type="module" src="<?php echo get_theme_file_uri() ?>/dist/homepage.js"></script>

<div class="our-reach--counter">
    <p>our reach</p>
    <div class="d-flex">
        <div id="ourReachValue" class="our-reach--counter-value">-140</div>
        <p class="our-reach-unit">k</p>
    </div>
</div>

<?php get_template_part( 'template-parts/main-menu' ); ?>
<?php get_template_part( 'template-parts/top-bar' ); ?>


<!-- ✔️ --><?php get_template_part( 'template-parts/homepage/section-hello' ); ?>
<!-- ✔️ --><?php get_template_part( 'template-parts/homepage/section-who-we-are' ); ?>
<!-- ✔️ --><?php get_template_part( 'template-parts/homepage/section-home-manage' ); ?>
<!-- ✔️ --><?php get_template_part( 'template-parts/homepage/section-manage-gallery' ); ?>
<!-- ✔️ --><?php get_template_part( 'template-parts/homepage/section-make' ); ?>
<!-- ✔️ --><?php get_template_part( 'template-parts/homepage/section-make-with-bg' ); ?>
<!-- ✔️ --><?php get_template_part( 'template-parts/homepage/section-make-gallery' ); ?>
<!-- ✔️ --><?php get_template_part( 'template-parts/homepage/section-contact-us' ); ?>

<?php get_footer() ?>