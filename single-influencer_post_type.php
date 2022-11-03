<?php get_header() ?>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/gsap.min.js"
	integrity="sha512-GQ5/eIhs41UXpG6fGo4xQBpwSEj9RrBvMuKyE2h/2vw3a9x85T1Bt0JglOUVJJLeyIUl/S/kCdDXlE/n7zCjIg=="
	crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script type="module" src="<?php echo get_theme_file_uri() ?>/dist/singleInfluencer.js"></script>


<!-- facebook -->

<div class="our-reach--counter our-reach--counter__facebook color-yellow">
	<p>Facebook</p>
	<div class="d-flex">
		<div id="FBValue" class="our-reach--counter-value"></div>
		<p class="our-reach-unit">k</p>
	</div>
</div>

<!-- insta -->

<div class="our-reach--counter our-reach--counter__insta color-yellow">
	<p>Instagram</p>
	<div class="d-flex">
		<div id="InstaValue" class="our-reach--counter-value"></div>
		<p class="our-reach-unit">k</p>
	</div>

</div>

<script>
window.addEventListener('DOMContentLoaded', () => {
	gsap.to('#FBValue', {
		innerText: <?php the_field( 'counter_facebook' ); ?>,
		snap: 'innerText',
		scrollTrigger: {
			trigger: 'body',
			scroller: '.influencer-hero',
		},
		duration: 3,
	});

	gsap.to('#InstaValue', {
		innerText: <?php the_field( 'counter_insta' ); ?>,
		snap: 'innerText',
		scrollTrigger: {
			trigger: 'body',
			scroller: '.influencer-hero',
		},
		duration: 3,
	});

	gsap.to('.our-reach--counter', {
		left: -500,
		scrollTrigger: {
			trigger: '.detail-pagination ',
			scroller: '.smooth-scroll',
			scrub: true,
			start: 'top bottom',
			end: 'top 60%',
		},
	});

})
</script>


<?php get_template_part( 'template-parts/main-menu' ); ?>
<?php get_template_part( 'template-parts/top-bar' ); ?>

<section class="influencer-hero" style="background-color: #f1f0ef;">

	<div class="container-fluid first-row bg-cover bg-no-repeat single-influencer--bg"
		style="background-position: center ;background-image: url(<?php the_field( 'influencer_first_section_main_image' ); ?>);">
		<div class="row  influencer-hero--inner">
			<div class="col-3 d-md-block col-md-2  ps-0 h-100"></div>
			<div
				class="influencer-hero--inner--right col-9 col-md-10 text-center h-100  d-flex align-items-center align-items-lg-start justify-content-start">
				<div class="influencer-hero--content color-yellow pl-3">
					<?php the_field( 'influencer_first_section_text_content' ); ?>
				</div>
			</div>
		</div>
	</div>

	<div class="container-fluid second-row">
		<div class="row h-100 d-flex align-items-end">
			<div class=" col-2 d-md-block col-md-3  ps-0 h-100"></div>
			<div data-scroll data-scroll-speed="1"
				class="single-influencer-fixed-heading__gsap-trigger col-10 col-md-9 text-center h-100  d-flex align-items-start justify-content-end">
				<img class="single-influencer--big-photo img-max-w-245__mobile mt-5 mt-lg-0"
					style="border-radius: 30px;" src="<?php the_field( 'first_big_image' ); ?>" alt="">
			</div>
		</div>
	</div>

	<div class="container-fluid third-row">
		<div class="row h-100 d-flex align-items-end">
			<div class="col-2 d-md-block col-md-3  ps-0 h-100" style="border: 1px solid transparent;"></div>
			<div class="influencer--photos-grid col-10 col-md-9 text-center h-100 d-flex aligin-items-start justify-content-end"
				style="border: 1px solid transparent;">
				<div style="max-width: 610px;"
					class="d-flex align-items-start justify-content-end gap-4 flex-wrap single-influencer--img-list">

					<!-- first photo in second row -->
					<?php if(get_field( 'image_#2' )) { ?>
					<img style="border-radius: 30px;"
						class="<?php echo get_field('image_#4') ? '' : 'second-row-image_2' ?>" data-scroll
						data-scroll-speed=".3" src="<?php the_field( 'image_#2' ); ?>" alt="">
					<?php } ?>

					<?php if(get_field( 'image_#3' )) { ?>
					<img style="border-radius: 30px;" data-scroll data-scroll-speed=".3"
						src="<?php the_field( 'image_#3' ); ?>" alt="">
					<?php } ?>

					<!-- if is disable go to 1 and add pos rel -->
					<?php if(get_field( 'image_#4' )) { ?>
					<img style="border-radius: 30px;" data-scroll data-scroll-speed=".3"
						src="<?php the_field( 'image_#4' ); ?>" alt="">
					<?php } ?>

					<?php if(get_field( 'image_#5' )) { ?>
					<img style="border-radius: 30px;" data-scroll data-scroll-speed=".3"
						src="<?php the_field( 'image_#5' ); ?>" alt="">
					<?php } ?>


				</div>

			</div>
		</div>
	</div>

</section>

<section class="influencer-cases container-fluid" style="background-color: #f1f0ef;">

	<div class="container-fluid first-row bg-cover bg-no-repeat">
		<div class="row  d-flex align-items-end">
			<div class="col-2 d-md-block col-md-3  ps-0 h-100"></div>
			<div class="col-10 col-md-9 text-center h-100  d-flex align-items-start justtify-content-start ">
				<div class="influencer-cases--content influencer-cases--content__dynamic d-flex flex-column align-items-start justify-content-center color-green"
					style="height: 100%; z-index: 98; padding-top:  20%; opacity: 0;">
					<div class="influencer-cases--dynamic-title">

					</div>
					<div class="influencer-cases--dynamic-subtitle">

					</div>
					<a href="#" data-scroll-to data-scroll data-scroll-speed=".3"
						class="link-green-unstyled  d-none d-lg-flex content-and-arrow  align-items-center justify-content-end influencer-cases--dynamic-link opacity-0">
						<div class="pe-4"><small class="cursor-pointer">Read Case</small>
						</div>
						<div class=" arrow-right-icon">
							<div class="arrow-right--circle"><svg width="58" height="58" viewBox="0 0 58 58"
									fill="none">
									<circle cx="29" cy="29" r="28.6" stroke="#214C2C" stroke-width="0.8" />
								</svg>
							</div>
							<div class="arrow-right--arrow"><svg width="24" height="6" viewBox="0 0 24 6" fill="none">
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

	<div class="container-fluid second-row">
		<div class="row h-100 d-flex align-items-end">
			<div class=" col-2 d-md-block col-md-3  ps-0 h-100"></div>
			<div data-scroll data-scroll-speed="1"
				class=" col-10 col-md-9 text-center h-100 gap-4  d-flex flex-column align-items-end justify-content-start">

				<?php $cases_list = get_field( 'cases_list' ); ?>
				<?php if ( $cases_list ) : ?>
				<?php foreach ( $cases_list as $post ) : ?>
				<?php setup_postdata ( $post ); ?>

				<!-- loop -->
				<div style="background-image: url(<?php echo get_the_post_thumbnail_url($post -> ID , 'full') ?>); background-size: cover; background-repeat: no-repeat; border-radius: 30px;"
					class="single-influencer--case single-influencer--case-1" data-title="<?php echo the_title() ?>"
					data-subtitle="<?php echo the_excerpt() ?>" data-link="<?php echo the_permalink() ?>">
					<a class="text-uppercase color-yellow" href="#"><?php echo the_title() ?></a>
					<!-- <img src="<?php echo get_theme_file_uri() ?>/dist/assets/img/influencer-page--case.png" alt=""> -->
				</div>
				<!-- END loop -->

				<?php endforeach; ?>
				<?php wp_reset_postdata(); ?>
				<?php endif; ?>


			</div>
		</div>
	</div>

</section>


<section class="detail-pagination ">

	<?php
    
    $prevPost = get_previous_post();
    $prevThumbnail = get_the_post_thumbnail_url( $prevPost->ID );

    $nextPost = get_next_post();
    $nextThumbnail = get_the_post_thumbnail_url( $nextPost->ID );

?>

	<div class="container-fluid h-100">
		<div class="row h-100">

			<div class="bg-cover bg-no-repeat bg-center col  item-prev"
				style="background-image: url('<?php echo $prevThumbnail ?>'); background-color: #d5d0f3;">
				<a href="<?php echo get_permalink($prevPost->ID) ?>"
					class="content-and-arrow col-6 d-flex flex-row-reverse align-items-center justify-content-start p-0"
					style="margin-top: 80px; text-decoration: none;">
					<div data-scroll data-scroll-speed="1" class="ps-4 mb-2 mb-lg-0 color-yellow">
						<small>Prev</small>
					</div>
					<div data-scroll data-scroll-speed="1" class="arrow-right-icon">
						<div class="arrow-right--circle"><svg width="58" height="58" viewBox="0 0 58 58" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<circle cx="29" cy="29" r="28.6" stroke="#e7ffc8" stroke-width="0.8" />
							</svg>
						</div>
						<div class="arrow-left--arrow"><svg width="24" height="6" viewBox="0 0 24 6" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M0.717159 2.71716C0.560949 2.87336 0.560949 3.12663 0.717159 3.28284L3.26274 5.82843C3.41895 5.98463 3.67222 5.98464 3.82843 5.82843C3.98464 5.67222 3.98464 5.41895 3.82843 5.26274L1.56569 3L3.82843 0.737256C3.98464 0.581047 3.98464 0.327781 3.82843 0.171571C3.67222 0.0153614 3.41895 0.0153614 3.26274 0.171571L0.717159 2.71716ZM24 2.6L1 2.6L1 3.4L24 3.4L24 2.6Z"
									fill="#E7FFC8" />
							</svg>

						</div>
					</div>
				</a>
			</div>

			<div class="bg-cover bg-no-repeat bg-center col item-next"
				style="background-image: url('<?php echo $nextThumbnail ?>'); background-color: #214c2c;">
				<a href="<?php echo get_permalink($nextPost->ID) ?>"
					class="content-and-arrow col-6 d-flex align-items-center justify-content-start p-0"
					style="margin-top: 80px; text-decoration: none">
					<div data-scroll data-scroll-speed="1" class="pe-4 mb-2 mb-lg-0 color-yellow">
						<small>next </small>
					</div>
					<div data-scroll data-scroll-speed="1" class="arrow-right-icon">
						<div class="arrow-right--circle"><svg width="58" height="58" viewBox="0 0 58 58" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<circle cx="29" cy="29" r="28.6" stroke="#e7ffc8" stroke-width="0.8" />
							</svg>
						</div>
						<div class="arrow-right--arrow"><svg width="24" height="6" viewBox="0 0 24 6" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M23.2828 3.28284C23.4391 3.12663 23.4391 2.87337 23.2828 2.71716L20.7373 0.171573C20.581 0.0153632 20.3278 0.0153632 20.1716 0.171573C20.0154 0.327783 20.0154 0.581048 20.1716 0.737258L22.4343 3L20.1716 5.26274C20.0154 5.41895 20.0154 5.67222 20.1716 5.82843C20.3278 5.98464 20.581 5.98464 20.7373 5.82843L23.2828 3.28284ZM0 3.4H23V2.6H0V3.4Z"
									fill="#e7ffc8" />
							</svg>
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>
</section>


<?php get_footer() ?>