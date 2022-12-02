<?php
/**
 * Section contact us
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package femmefab
 */

?>

<section class="contact-us">
	<div class="container-fluid h-100">
		<div class="row h-100" style="position: relative">
			<div class=" col-2 d-md-block col-md-2  ps-0"></div>
			<div class=" col-10 col-md-10 d-flex flex-column flex-lg-row justify-content-between">
				<!-- text + arrow button -->
				<div>
					<div data-scroll data-scroll-speed="1"
						class="d-block contact-us--subtitle font-green-default text-uppercase font-sans">
						<?php the_field( 'home_section_contact_small_text' ); ?>
					</div>
					<div class="contact--trigger" style="width: 1px ;height: 1px;"></div>

					<?php $home_section_contact_link_to_section = get_field( 'home_section_contact_link_to_section' ); ?>
					<?php if ( $home_section_contact_link_to_section ) : ?>
					<a href="<?php echo esc_url( $home_section_contact_link_to_section['url'] ); ?>" data-scroll
						data-scroll-speed=".3"
						class="link-green-unstyled link-to-who-we-are d-lg-flex content-and-arrow col-6 align-items-center justify-content-start justify-content-lg-end p-0">
						<div class="pe-4"><small
								class="cursor-pointer"><?php echo esc_html( $home_section_contact_link_to_section['title'] ); ?></small>
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
				<!-- img on right side -->
				<?php $home_section_contact_image = get_field( 'home_section_contact_image' ); ?>
				<div data-scroll data-scroll-speed="1"
					class="contact-us--gallery  d-flex flex-column flex-lg-row align-items-center justify-content-center align-items-lg-center justify-content-lg-center"
					style="width:100%">
					<div class="contact-us-row-1">
						<div class="contact-us--item"
							style="background-image: url('<?php echo esc_url( $home_section_contact_image['url'] ); ?>');">
							<div class="contact-us--item--content" style="display: none;">
								emily taylor
							</div>
						</div>

					</div>
				</div>

			</div>
		</div>
	</div>
	<div class="contact-us--title-wrapper">


	</div>
</section>