<?php
/**
 * Section who we are
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package femmefab
 */

?>

<section class="who-we-are__contact-us">
	<div class="container-fluid h-100">
		<div class="row h-100">
			<div class="col-2 d-md-block col-md-2 ps-0"></div>

			<div
				class="col-10 col-md-9 who-we-are__contact-us--title-wrapper  d-flex flex-column align-items-start justify-content-start">

				<p class="who-we-are__contact-us--title font-serif" data-scroll-to data-scroll data-scroll-speed=".3">
					<?php the_field( 'page_contact_section_with_big_heading_title' ); ?>
				</p>

				<div class="contact-page-new-pin">


					<div style="<?php echo wp_is_mobile() ? 'margin-top: 20vh; marign-bottom: 20vh;' : '' ?>"
						class="who-we-are__contact-us--subtitle font-green-default text-uppercase font-sans">
						<?php the_field( 'page_contact_section_with_big_heading_subtitle' ); ?>
					</div>

					<?php $page_contact_section_with_big_heading_link_to_section = get_field( 'page_contact_section_with_big_heading_link_to_section' ); ?>
					<?php if ( $page_contact_section_with_big_heading_link_to_section ) : ?>

					<a href="<?php echo esc_url( $page_contact_section_with_big_heading_link_to_section['url'] ); ?>"
						class="d-none d-lg-block link-green-unstyled content-and-arrow col-6 d-flex align-items-center justify-content-start p-0"
						style="margin-top: 80px;">
						<div class="pe-4"><small
								class="cursor-pointer"><?php echo esc_html( $page_contact_section_with_big_heading_link_to_section['title'] ); ?></small>
						</div>
						<div class=" arrow-right-icon">
							<div class="arrow-right--circle"><svg width="58" height="58" viewBox="0 0 58 58" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<circle cx="29" cy="29" r="28.6" stroke="#214C2C" stroke-width="0.8" />
								</svg>
							</div>
							<div class="arrow-right--arrow"><svg width="24" height="6" viewBox="0 0 24 6" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M23.2828 3.28284C23.4391 3.12663 23.4391 2.87337 23.2828 2.71716L20.7373 0.171573C20.581 0.0153632 20.3278 0.0153632 20.1716 0.171573C20.0154 0.327783 20.0154 0.581048 20.1716 0.737258L22.4343 3L20.1716 5.26274C20.0154 5.41895 20.0154 5.67222 20.1716 5.82843C20.3278 5.98464 20.581 5.98464 20.7373 5.82843L23.2828 3.28284ZM0 3.4H23V2.6H0V3.4Z"
										fill="#214C2C" />
								</svg>
							</div>
						</div>
					</a>

					<?php endif; ?>

				</div>

			</div>
		</div>
	</div>
	<!-- ?????? --><?php   get_template_part( 'template-parts/contact/section-manage-gallery' ); ?>
</section>