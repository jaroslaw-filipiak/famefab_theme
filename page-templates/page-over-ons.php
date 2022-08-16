<?php /* Template Name: Page Over ons */ ?>

<?php get_header() ?>
<script type="module" src="<?php echo get_theme_file_uri() ?>/dist/overOns.js"></script>

<?php get_template_part( 'template-parts/main-menu' ); ?>
<?php get_template_part( 'template-parts/top-bar' ); ?>

<!-- ✔️ --><?php get_template_part( 'template-parts/over-ons/section-blank-hero' ); ?>
<!-- ✔️ --><?php get_template_part( 'template-parts/over-ons/section-scroll-gallery' ); ?>
<?php get_template_part( 'template-parts/over-ons/section-full-service-agency' ); ?>

<?php get_footer() ?>