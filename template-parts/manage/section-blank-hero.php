<?php
/**
 * Section blank hero / two sections
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package femmefab
 */

?>

<section class="blank-hero bg-second-violet safari_only">
	<div class="container-fluid h-100">
		<div class="row h-100 d-flex align-items-end">
			<div class="col-3 col-md-2 d-md-block col-md-3  ps-0 h-100"></div>
			<div class="col-9 col-md-10 col-md-9 text-center h-100  d-flex align-items-start justify-content-start blank-hero--manage__mobile-content color-green"
				style="<?php echo wp_is_mobile() ? 'padding-right: 30px;' : ''; ?>">

				<div style="<?php echo wp_is_mobile() ? 'z-index: 22;' : '' ?>"
					class="gsap__blank-hero-mobile-piniata flex flex-column  align-items-start justify-content-start  ">
					<div class="d-flex flex-column d-none">
						<?php the_field( 'page_manage_second_section_text_content' ); ?>
					</div>

					<div class="d-none">
						<?php $page_manage_second_section_link_to_section = get_field( 'page_manage_second_section_link_to_section' ); ?>
						<?php if ( $page_manage_second_section_link_to_section ) : ?>

						<a href="<?php echo esc_url( $page_manage_second_section_link_to_section['url'] ); ?>"
							data-scroll data-scroll-speed="1"
							class="link-green-unstyled content-and-arrow col-12 col-md-6 d-flex align-items-center justify-content-start p-0"
							style="margin-top: 80px;">
							<div class="pe-4 mb-2 color-green">
								<small><?php echo esc_html( $page_manage_second_section_link_to_section['title'] ); ?></small>
							</div>
							<div class="arrow-right-icon">
								<div class="arrow-right--circle"><svg width="58" height="58" viewBox="0 0 58 58"
										fill="none">
										<circle cx="29" cy="29" r="28.6" stroke="#e7ffc8" stroke-width="0.8" />
									</svg>
								</div>
								<div class="arrow-right--arrow"><svg width="24" height="6" viewBox="0 0 24 6"
										fill="none">
										<path
											d="M23.2828 3.28284C23.4391 3.12663 23.4391 2.87337 23.2828 2.71716L20.7373 0.171573C20.581 0.0153632 20.3278 0.0153632 20.1716 0.171573C20.0154 0.327783 20.0154 0.581048 20.1716 0.737258L22.4343 3L20.1716 5.26274C20.0154 5.41895 20.0154 5.67222 20.1716 5.82843C20.3278 5.98464 20.581 5.98464 20.7373 5.82843L23.2828 3.28284ZM0 3.4H23V2.6H0V3.4Z"
											fill="#e7ffc8" />
									</svg>
								</div>
							</div>
						</a>

						<?php endif; ?>

					</div>

				</div>


			</div>
		</div>
	</div>
</section>

<section
	class="gsap__blank-hero-mobile-piniata--trigger blank-hero page-manage-blank-hero__gsap-trigger bg-cover bg-no-repeat bg-center blank-hero-title-trigger "
	style="background-size; cover; background-image: url('<?php the_field( 'page_manage_second_section_background_image' ); ?>')">
	<div class="container-fluid h-100">
		<div class="row h-100 d-flex align-items-end">
			<div class="col-3 col-sm-2 d-md-block col-md-2  ps-0 h-100"></div>
			<div class="col-9 col-sm-10 col-md-9 text-center h-100 page-manage-piniata ">
				<div
					class="d-md-block gsap_opacity-reveal__blank-hero blank-hero--content blank-hero--content__page-manage color-yellow ">
					<?php the_field( 'page_manage_second_section_text_content' ); ?>
				</div>

				<div class="d-none d-md-block">
					<?php $page_manage_second_section_link_to_section = get_field( 'page_manage_second_section_link_to_section' ); ?>
					<?php if ( $page_manage_second_section_link_to_section ) : ?>

					<a href="<?php echo esc_url( $page_manage_second_section_link_to_section['url'] ); ?>" data-scroll
						data-scroll-speed="1"
						class="gsap_opacity-reveal__blank-hero link-yellow-unstyled content-and-arrow col-12 col-md-6 d-flex align-items-center justify-content-start p-0"
						style="margin-top: 80px;">
						<div class="pe-4 mb-2 color-yellow">
							<small><?php echo esc_html( $page_manage_second_section_link_to_section['title'] ); ?></small>
						</div>
						<div class="arrow-right-icon">
							<div class="arrow-right--circle"><svg width="58" height="58" viewBox="0 0 58 58"
									fill="none">
									<circle cx="29" cy="29" r="28.6" stroke="#e7ffc8" stroke-width="0.8" />
								</svg>
							</div>
							<div class="arrow-right--arrow"><svg width="24" height="6" viewBox="0 0 24 6" fill="none">
									<path
										d="M23.2828 3.28284C23.4391 3.12663 23.4391 2.87337 23.2828 2.71716L20.7373 0.171573C20.581 0.0153632 20.3278 0.0153632 20.1716 0.171573C20.0154 0.327783 20.0154 0.581048 20.1716 0.737258L22.4343 3L20.1716 5.26274C20.0154 5.41895 20.0154 5.67222 20.1716 5.82843C20.3278 5.98464 20.581 5.98464 20.7373 5.82843L23.2828 3.28284ZM0 3.4H23V2.6H0V3.4Z"
										fill="#e7ffc8" />
								</svg>
							</div>
						</div>
					</a>

					<?php endif; ?>

				</div>

			</div>
		</div>
	</div>


</section>