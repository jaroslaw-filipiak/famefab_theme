<?php /* Template Name: Page Contact Us */ ?>

<?php get_header() ?>

<script type="module" src="<?php echo get_theme_file_uri() ?>/dist/contact.js"></script>

<?php get_template_part( 'template-parts/main-menu' ); ?>
<?php get_template_part( 'template-parts/top-bar' ); ?>

<!-- ✔️ --><?php   get_template_part( 'template-parts/contact/section-contact-us-hero' ); ?>
<!-- ✔️ --><?php   get_template_part( 'template-parts/contact/section-blank-hero' ); ?>
<!-- ✔️ --><?php   get_template_part( 'template-parts/contact/section-who-we-are' ); ?>
<!-- ✔️ --><?php   get_template_part( 'template-parts/contact/section-manage-gallery' ); ?>

<?php get_footer() ?>