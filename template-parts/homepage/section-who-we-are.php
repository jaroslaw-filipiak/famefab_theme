<?php
/**
 * Section who we are
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package femmefab
 */

?>

<section id="who-we-are" class="who-we-are">
	<div class="container-fluid h-100">
		<div class="row h-100">
			<div class="col-2 d-md-block col-md-2 ps-0"></div>
			<div data-scroll data-scroll-speed="1.5"
				class="col-10 col-md-10 who-we-are--title-wrapper  d-flex flex-column align-items-start justify-content-start">
				<p class="who-we-are--title font-serif gsap__reveal-heading">
					<?php the_field( 'home_second_section_main_heading' ); ?>

					<!-- <span class="who-we-are--title who-we-are--title-row-2 font-serif m-sign-before"> et een grote
                        impact
                    </span> -->

				</p>
				<div data-scroll data-scroll-speed="1"
					class="mt-5 who-we-are--subtitle font-green-default text-uppercase font-sans">
					<?php the_field( 'home_second_section_subheading' ); ?>
				</div>

				<?php $home_second_section_link_to_section = get_field( 'home_second_section_link_to_section' ); ?>

				<?php if ( $home_second_section_link_to_section ) : ?>

				<!-- video yt popup play btn -->
				<div youtubeid="<?php echo $home_second_section_link_to_section ?>" data-scroll data-scroll-speed=".3"
					class="youtube-link link-green-unstyled link-to-who-we-are d-none d-lg-flex content-and-arrow align-items-center justify-content-start p-0 content-and-arrow__who-we-are-section">
					<div class="pe-4"><small class="cursor-pointer"><?php the_field( 'yt_button_text' ); ?></small>
					</div>
					<div class="yt-play">
						<div class="yt-play--circle"><svg width="58" height="58" viewBox="0 0 58 58" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<circle cx="29" cy="29" r="28.6" stroke="#214C2C" stroke-width="0.8" />
							</svg>
						</div>
						<div class="yt-play--play">
							<svg width="12" height="14" viewBox="0 0 12 14" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M12 7L-6.52533e-07 13.9282L-4.68497e-08 0.0717964L12 7Z" fill="#214C2C" />
							</svg>

						</div>
					</div>
				</div>

				<?php endif; ?>
			</div>
		</div>
	</div>
</section>