<?php
/**
 * Section scroll gallery 
 * 
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package femmefab
 */

?>

<section class="scroll-gallery bg-yellow" style=" overflow: visible">
	<div class="container-fluid h-100 d-flex align-items-center justify-content-between">
		<div class="row scroll-gallery--grid h-100 mx-auto w-100">

			<?php if( have_rows('page_over_ons_gallery_repeater') ): ?>

			<?php while( have_rows('page_over_ons_gallery_repeater') ): the_row(); 
                    $image = get_sub_field('img'); ?>

			<!-- loop -->
			<div data-scroll data-scroll-speed="1"
				class="grid-area-photo<?php echo get_row_index() ?> bg-cover bg-no-repeat bg-center br-30"
				style="<?php echo wp_is_mobile() ? 'opacity: 1;' : 'opacity: 1;' ?>background-image: url('<?php echo $image ?>')">
			</div>
			<!-- loop -->

			<?php endwhile; ?>

			<?php endif; ?>

		</div>

	</div>
</section>