<?php
/**
 * Section full service agency
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package femmefab
 */

?>

<section class="full-service-agency bg-yellow">
	<div class="container-fluid h-100">
		<div class="row h-100">
			<div class="col-2 d-md-block col-md-3  ps-0"></div>
			<div class="col-10 col-md-9 full-service-agency--title-wrapper  d-flex flex-column align-items-start justify-content-start"
				style="position: relative;">
				<p data-scroll data-scroll-speed="2" class="full-service-agency--title font-serif">
					<?php the_field( 'page_over_ons_last_section_big_heading' ); ?>

				</p>
				<div data-scroll data-scroll-speed="1.4"
					class="full-service-agency--subtitle font-green-default text-uppercase font-sans">
					<?php the_field( 'page_over_ons_last_section_sub_heading' ); ?>
				</div>

				<div data-scroll data-scroll-speed="2"
					class="full-service-agency--buttons d-flex align-content-center justify-content-start">


					<?php $page_over_ons_last_section_link_to_section = get_field( 'page_over_ons_last_section_link_to_section' ); ?>
					<?php if ( $page_over_ons_last_section_link_to_section ) : ?>

					<a href="<?php echo esc_url( $page_over_ons_last_section_link_to_section['url'] ); ?>" data-scroll
						data-scroll-speed=".3"
						class="link-green-unstyled content-and-arrow col-6 d-none d-md-flex align-items-center justify-content-start p-0"
						style="margin-top: 80px;">
						<div class="pe-4 mb-2"><small
								class="cursor-pointer"><?php echo esc_html( $page_over_ons_last_section_link_to_section['title'] ); ?></small>
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

					<?php $page_over_ons_last_section_link_to_section_2 = get_field( 'page_over_ons_last_section_link_to_section_2' ); ?>

					<?php if ( $page_over_ons_last_section_link_to_section_2 ) : ?>


					<a href="<?php echo esc_url( $page_over_ons_last_section_link_to_section_2['url'] ); ?>" data-scroll
						data-scroll-speed=".3"
						class="link-green-unstyled content-and-arrow col-6 d-none d-md-flex align-items-center justify-content-start p-0"
						style="margin-top: 80px;">
						<div class="pe-4 mb-2">
							<small><?php echo esc_html( $page_over_ons_last_section_link_to_section_2['title'] ); ?></small>
						</div>
						<div class="arrow-right-icon">
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

				<div class="d-flex d-md-none  fsa-mobile-buttons ">

					<?php $page_over_ons_last_section_link_to_section = get_field( 'page_over_ons_last_section_link_to_section' ); ?>
					<?php if ( $page_over_ons_last_section_link_to_section ) : ?>

					<a href="<?php echo esc_url( $page_over_ons_last_section_link_to_section['url'] ); ?>" data-scroll
						data-scroll-speed="2.3"
						class="link-green-unstyled content-and-arrow col-6 d-flex d-md-none align-items-center justify-content-start p-0"
						style="margin-top: 80px;">
						<div class="pe-4 mb-2"><small
								class="cursor-pointer"><?php echo esc_html( $page_over_ons_last_section_link_to_section['title'] ); ?></small>
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

					<?php if ( $page_over_ons_last_section_link_to_section_2 ) : ?>


					<a href="<?php echo esc_url( $page_over_ons_last_section_link_to_section_2['url'] ); ?>" data-scroll
						data-scroll-speed="2.3"
						class="link-green-unstyled content-and-arrow col-6 d-flex d-md-none align-items-center justify-content-start p-0"
						style="margin-top: 80px;">
						<div class="pe-4 mb-2">
							<small><?php echo esc_html( $page_over_ons_last_section_link_to_section_2['title'] ); ?></small>
						</div>
						<div class="arrow-right-icon">
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
				<!-- fsa mobile buttons -->

			</div>
		</div>
	</div>
</section>