<?php /* Template Name: Page Make */ ?>

<?php get_header() ?>

<script type="module" src="<?php echo get_theme_file_uri() ?>/dist/make.js"></script>

<!-- total reach -->
<div class="our-reach--counter our-reach--counter__make-page">
    <p>Total reach</p>
    <div class="d-flex">
        <div id="totalReachValue" class="our-reach--counter-value">-0</div>
        <p class="our-reach-unit">k</p>
    </div>
</div>

<?php get_template_part( 'template-parts/main-menu' ); ?>
<?php get_template_part( 'template-parts/top-bar' ); ?>



<?php get_template_part( 'template-parts/make/section-blank-hero' ); ?>
<?php get_template_part( 'template-parts/make/section-cases' ); ?>


<?php get_footer() ?>