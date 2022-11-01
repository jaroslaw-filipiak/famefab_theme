<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package femmefab
 */

?>

<div class="footer__single-case d-none d-lg-flex">

	<div class="container-fluid ">
		<div class="row footer--columns-wrapper d-flex align-items-start justify-content-between">

			<div data-scroll data-scroll-speed="1"
				class=" col-6 col-sm-6 col-lg-3 footer-col-xl-fixed-width d-flex flex-column align-items-start  align-items-lg-start  justify-content-start ">

				<div class="footer-col-content ">
					<?php dynamic_sidebar( 'sidebar-footer-col-1' ); ?>
				</div>

			</div>

			<div data-scroll data-scroll-speed="1"
				class=" col-6 col-sm-6 col-lg-3 footer-col-xl-fixed-width d-flex flex-column align-items-start align-items-lg-start  justify-content-start">
				<div class="footer-col-content">
					<?php dynamic_sidebar( 'sidebar-footer-col-2' ); ?>
				</div>


			</div>
			<div data-scroll data-scroll-speed="1"
				class=" col-6 col-sm-6 col-lg-3 footer-col-xl-fixed-width d-flex flex-column align-items-start  align-items-lg-center  justify-content-start ">
				<div class="footer-col-content">
					<?php dynamic_sidebar( 'sidebar-footer-col-3' ); ?>
				</div>

			</div>
			<div data-scroll data-scroll-speed="1"
				class=" col-6 col-sm-6 col-lg-3 footer-col-xl-fixed-width d-flex flex-column align-items-start  align-items-lg-end  justify-content-start ">
				<div class="footer-col-content">
					<?php dynamic_sidebar( 'sidebar-footer-col-4' ); ?>
					<a href="<?php echo get_page_link(481) ?>" data-scroll-speed=".3"
						class="col-12 mt-4 link-yellow-unstyled link-to-who-we-are d-flex content-and-arrow  align-items-center justify-content-center justify-content-xxl-end p-0">
						<div class="pe-4"><small class="cursor-pointer">terms & conditions</small>
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

				</div>
			</div>
		</div>

	</div>
</div>

<!-- footer on  mobile -->

<footer id="end" class="d-lg-none" role="content">
	<section class="footer">
		<div class="container-fluid">
			<div class="row footer--columns-wrapper d-flex align-items-start justify-content-between">

				<div data-scroll data-scroll-speed="1"
					class=" col-6 col-sm-6 col-lg-3 footer-col-xl-fixed-width d-flex flex-column align-items-start  align-items-lg-start  justify-content-start ">

					<div class="footer-col-content ">
						<?php dynamic_sidebar( 'sidebar-footer-col-1' ); ?>
					</div>

				</div>

				<div data-scroll data-scroll-speed="1"
					class=" col-6 col-sm-6 col-lg-3 footer-col-xl-fixed-width d-flex flex-column align-items-start align-items-lg-start  justify-content-start">
					<div class="footer-col-content">
						<?php dynamic_sidebar( 'sidebar-footer-col-2' ); ?>
					</div>


				</div>
				<div data-scroll data-scroll-speed="1"
					class=" col-6 col-sm-6 col-lg-3 footer-col-xl-fixed-width d-flex flex-column align-items-start  align-items-lg-center  justify-content-start ">
					<div class="footer-col-content">
						<?php dynamic_sidebar( 'sidebar-footer-col-3' ); ?>
					</div>

				</div>
				<div data-scroll data-scroll-speed="1"
					class=" col-6 col-sm-6 col-lg-3 footer-col-xl-fixed-width d-flex flex-column align-items-start  align-items-lg-end  justify-content-start ">
					<div class="footer-col-content">
						<?php dynamic_sidebar( 'sidebar-footer-col-4' ); ?>
						<a href="<?php echo get_page_link(481) ?>" data-scroll-speed=".3"
							class="col-12 mt-4 link-green-unstyled link-to-who-we-are d-flex content-and-arrow  align-items-center justify-content-center justify-content-xxl-end p-0">
							<div class="pe-4"><small class="cursor-pointer">terms & conditions</small>
							</div>
							<div class=" arrow-right-icon">
								<div class="arrow-right--circle"><svg width="58" height="58" viewBox="0 0 58 58"
										fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="29" cy="29" r="28.6" stroke="#214C2C" stroke-width="0.8" />
									</svg>
								</div>
								<div class="arrow-right--arrow"><svg width="24" height="6" viewBox="0 0 24 6"
										fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M23.2828 3.28284C23.4391 3.12663 23.4391 2.87337 23.2828 2.71716L20.7373 0.171573C20.581 0.0153632 20.3278 0.0153632 20.1716 0.171573C20.0154 0.327783 20.0154 0.581048 20.1716 0.737258L22.4343 3L20.1716 5.26274C20.0154 5.41895 20.0154 5.67222 20.1716 5.82843C20.3278 5.98464 20.581 5.98464 20.7373 5.82843L23.2828 3.28284ZM0 3.4H23V2.6H0V3.4Z"
											fill="#214C2C" />
									</svg>
								</div>
							</div>
						</a>

					</div>
				</div>
			</div>
			<div data-scroll data-scroll-speed="1" class="row footer--logo">
				<div class="col d-flex flex-column align-items-center justify-content-end">
					<img class="img-fluid"
						src="<?php echo get_theme_file_uri() ?>/dist/assets/img/logo/big-2k/logo-big-2k.svg" alt="">
				</div>
			</div>
		</div>
	</section>

</footer>

<!-- footer on mobile END -->

<?php wp_footer(); ?>

</div> <!-- <---- close smooth scroll -->
<?php get_template_part( 'template-parts/footer-dynamic-data'); ?>
<?php get_template_part( 'template-parts/cookies'); ?>



</body>

</html>