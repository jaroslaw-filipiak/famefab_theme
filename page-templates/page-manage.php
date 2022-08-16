<?php /* Template Name: Page Manage */ ?>

<?php get_header() ?>

<script type="module" src="<?php echo get_theme_file_uri() ?>/dist/manage.js"></script>

<?php get_template_part( 'template-parts/main-menu' ); ?>
<?php get_template_part( 'template-parts/top-bar' ); ?>

<!-- ✔️ --><?php get_template_part( 'template-parts/manage/section-blank-hero' ); ?>
<?php get_template_part( 'template-parts/manage/section-influencers' ); ?>

<?php get_footer() ?>