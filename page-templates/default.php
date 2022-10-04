<?php /* Template Name: Simple text page */ ?>

<?php get_header() ?>

<!-- <script type="module" src="<?php echo get_theme_file_uri() ?>/dist/contact.js"></script> -->

<?php get_template_part( 'template-parts/main-menu' ); ?>
<?php get_template_part( 'template-parts/top-bar' ); ?>

<section class="content-page-hero">
    <div class="container-fluid h-100">
        <div class="row h-100">
            <div class="col-2 d-md-block col-md-2  ps-0"></div>
            <div class="col-10 col-md-10 content-page-hero--title-wrapper  d-flex flex-column align-items-start justify-content-start"
                style="position: relative;">
                <h1 class="font-serif font-green mb-4"><?php echo get_the_title() ?></h1>

                <div class="font-green-default text-uppercase font-sans content-page-hero--excerpt ">
                    Voor het adverteren op het Medianetwerk van Femmefab</div>
            </div>
        </div>
    </div>
</section>

<section class="content-page--content">
    <div class="container-fluid h-100">
        <div class="row h-100">
            <div class="col-2 d-md-block col-md-2  ps-0"></div>
            <div class="col-10 col-md-10 d-flex flex-column align-items-start justify-content-start"
                style="position: relative;">
                <div class="font-green-default font-sans mw-80">
                    <?php echo get_the_content() ?>
                </div>
            </div>
        </div>
    </div>
</section>




<?php get_footer() ?>