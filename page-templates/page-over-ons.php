<?php /* Template Name: Page Over ons */ ?>

<?php get_header() ?>
<script type="module" src="<?php echo get_theme_file_uri() ?>/dist/overOns.js"></script>

<div class="our-reach--counter">
    <p>our reach</p>
    <div class="d-flex">
        <div id="ourReachValue" class="our-reach--counter-value">0</div>
        <p class="our-reach-unit">k</p>
    </div>
</div>

<?php get_template_part( 'template-parts/main-menu' ); ?>
<?php get_template_part( 'template-parts/top-bar' ); ?>

<!-- ✔️ --><?php get_template_part( 'template-parts/over-ons/section-blank-hero' ); ?>
<!-- ✔️ --><?php get_template_part( 'template-parts/over-ons/section-scroll-gallery' ); ?>
<!-- ✔️ --><?php get_template_part( 'template-parts/over-ons/section-full-service-agency' ); ?>

<?php get_footer() ?>