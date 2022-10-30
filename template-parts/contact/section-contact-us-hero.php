<?php
/**
 * Section contact us hero
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package femmefab
 */

?>

<section class="contact-us-hero">
	<div class="container-fluid">
		<div class="row row-mobile-grid">
			<div data-scroll data-scroll-speed="1"
				class=" footer-col-xl-fixed-width area-social col-12  col-lg-3 d-flex flex-column align-items-center align-items-lg-start  justify-content-start p-0">
				<?php the_field( 'page_contact_first_section_column_1' ); ?>
			</div>
			<div data-scroll data-scroll-speed="1.3"
				class=" footer-col-xl-fixed-width area-online col-12  col-lg-3 d-flex flex-column align-items-center align-items-lg-start  justify-content-start p-0">
				<?php the_field( 'page_contact_first_section_column_2' ); ?>

			</div>
			<div data-scroll data-scroll-speed="1"
				class=" footer-col-xl-fixed-width area-offline col-12  col-lg-3 d-flex flex-column align-items-center align-items-lg-start  justify-content-start p-0">
				<?php the_field( 'page_contact_first_section_column_3' ); ?>

			</div>
			<div data-scroll data-scroll-speed="1.1"
				class=" footer-col-xl-fixed-width area-designed col-12  col-lg-3 d-flex flex-column align-items-center align-items-lg-start  justify-content-start p-0">
				<?php the_field( 'page_contact_first_section_column_4' ); ?>
			</div>
		</div>

	</div>
</section>