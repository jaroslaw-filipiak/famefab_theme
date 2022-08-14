<?php /* Template Name: Page Contact Us */ ?>

<?php get_header() ?>

<script type="module" src="<?php echo get_theme_file_uri() ?>/dist/contact.js"></script>

<div class="our-reach--counter">
    <p>our reach</p>
    <div class="d-flex">
        <div id="ourReachValue" class="our-reach--counter-value">-140</div>
        <p class="our-reach-unit">k</p>
    </div>
</div>

<?php get_template_part( 'template-parts/main-menu' ); ?>
<?php get_template_part( 'template-parts/top-bar' ); ?>

<?php get_template_part( 'template-parts/contact/section-contact-us-hero' ); ?>
<?php get_template_part( 'template-parts/contact/section-blank-hero' ); ?>
<?php get_template_part( 'template-parts/contact/section-who-we-are' ); ?>
<?php get_template_part( 'template-parts/contact/section-manage-gallery' ); ?>

<?php get_footer() ?>