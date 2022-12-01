<?php get_header() ?>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/gsap.min.js"
	integrity="sha512-GQ5/eIhs41UXpG6fGo4xQBpwSEj9RrBvMuKyE2h/2vw3a9x85T1Bt0JglOUVJJLeyIUl/S/kCdDXlE/n7zCjIg=="
	crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script type="module" src="<?php echo get_theme_file_uri() ?>/dist/caseDetail.js"></script>

<script src="https://code.jquery.com/jquery-3.6.1.slim.js"
	integrity="sha256-tXm+sa1uzsbFnbXt8GJqsgi2Tw+m4BLGDof6eUPjbtk=" crossorigin="anonymous"></script>

<?php 

$hasInfluencerValue =  get_field( 'influencers_value' );
$hasTotalReachValue =  get_field( 'total_reach_value' );
$hasEngagementValue =  get_field( 'engagement_value' );
$hasTotalClicksValue = get_field( 'total_clicks_value' );

?>

<script>
window.addEventListener("DOMContentLoaded", () => {
	gsap.to('#InfluencersValue', {
		textContent: <?php echo $hasInfluencerValue ? $hasInfluencerValue : '1'; ?>,
		snap: {
			textContent: .1
		},
		scrollTrigger: {
			trigger: 'body',
			scroller: '.smooth-scroll',
			start: 'top bottom',
			end: 'bottom',
		},
		duration: 2,
	});

	gsap.to('#totalReachValue', {
		innerText: <?php echo $hasTotalReachValue ? $hasTotalReachValue : '1'; ?>,
		snap: 'innerText',
		scrollTrigger: {
			trigger: 'body',
			scroller: '.smooth-scroll',
			scrub: false,
			start: 'top bottom',
			end: 'bottom',
		},
		duration: 2,
	});

	gsap.to('#EngagementValue', {
		innerText: <?php echo $hasEngagementValue ? $hasEngagementValue : '1'; ?>,
		snap: 'innerText',
		scrollTrigger: {
			trigger: 'body',
			scroller: '.smooth-scroll',
			scrub: false,
			start: 'top bottom',
			end: 'bottom',
		},
		duration: 2,
	});

	gsap.to('#ClicksValue', {
		innerText: <?php echo $hasTotalClicksValue ? $hasTotalClicksValue : '1'; ?>,
		snap: 'innerText',
		scrollTrigger: {
			trigger: 'body',
			scroller: '.smooth-scroll',
			start: 'top bottom',
			end: 'bottom',
		},
		duration: 2,
	});

	setTimeout(() => {

		$ = jQuery;

		$(function() {
			$(window).resize();
		});

		scroll.update

	}, 3000)

})
</script>


<div class="counter-items gsap__counter-items-piniata">
	<!-- influencers  24vh-->

	<div
		class="our-reach--counter our-reach--counter__influencers color-green <?php echo $hasInfluencerValue ? '' : 'd-none' ?>">
		<p>Influencers</p>
		<div class="d-flex">
			<div id="InfluencersValue" class="our-reach--counter-value"></div>
			<p class="our-reach-unit"><?php the_field( 'influencers_unit' ); ?></p>
		</div>
	</div>

	<!-- total reach   40vh-->

	<div
		class="our-reach--counter our-reach--counter__total-reach-single_case color-green <?php echo $hasTotalReachValue ? '' : 'd-none' ?>">
		<p>Total reach</p>
		<div class="d-flex">
			<div id="totalReachValue" class="our-reach--counter-value"></div>
			<p class="our-reach-unit"><?php the_field( 'total_reach_unit' ); ?></p>
		</div>
	</div>

	<!-- engagement == tital clicks currently  // https://app.clickup.com/t/35zqd6x  40vh-->

	<div
		class="our-reach--counter our-reach--counter__engagement color-green <?php echo $hasTotalClicksValue ? '' : 'd-none' ?>">
		<p>Total clicks</p>
		<div class="d-flex">
			<div id="ClicksValue" class="our-reach--counter-value"></div>
			<p class="our-reach-unit"><?php the_field( 'total_clicks_unit' ); ?></p>
		</div>
	</div>


</div>


<?php get_template_part( 'template-parts/main-menu' ); ?>
<?php get_template_part( 'template-parts/top-bar' ); ?>

<section class="detail-hero">

	<div class="container-fluid">
		<div class="row d-flex align-items-start flex-lg-nowrap">

			<div class="col-3 col-md-2 d-md-block  ps-0">
			</div>

			<div
				class="overflow-visible col col-md-4 d-none d-md-flex justify-content-start justify-content-lg-center  gsap__detail-piniata">
				<div class="col col-lg-8">
					<div class="detail-info">
						<?php echo get_the_title() ?> CASE </br>
					</div>
					<div class="detail-date d-none">
						<?php echo get_the_date() ?>
					</div>
					<div class="detail-link">
						<?php $link_to_external_content = get_field( 'link_to_external_content' ); ?>
						<a style="width: 100%" href="<?php echo esc_url( $link_to_external_content['url'] ); ?>"
							target="<?php echo esc_attr( $link_to_external_content['target'] ); ?>" data-scroll
							data-scroll-speed=".3"
							class="link-green-unstyled d-none d-lg-flex content-and-arrow col-6 align-items-center  justify-content-start p-0">

							<div class="pe-4 <?php echo $link_to_external_content ? '' : 'd-none' ?> "><small
									class="cursor-pointer">GO TO :
									<?php echo esc_html( $link_to_external_content['title'] ); ?></small>
							</div>

							<div class=" arrow-right-icon <?php echo $link_to_external_content ? '' : 'd-none' ?>">
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

			<!-- here start -->

			<div class="col-9 col-md-6 text-center ps-xl-5 ps-xxl-0">

				<div style="margin: 0 auto;">
					<!-- row 1 -->
					<div
						class="d-none d-md-flex row  flex-column align-items-start justify-content-center detail-hero--row-1">
						<div class="col d-flex align-items-start justify-content-end detail-hero--title--wrapper">
							<div
								class="d-none detail-hero--subtitle font-default-green text-uppercase font-sans text-start color-green">
								<?php echo get_the_excerpt() ?></div>
							<div class="font-serif color-green detail-hero--title"><?php echo get_the_title() ?>
							</div>
						</div>


					</div>
					<!-- content from wp  -->

					<div class="row gsap__reveal-counter">
						<div class="d-md-none">
							<p class="text-uppercase" style="text-align: left;">
								<?php echo get_the_title() ?> CASE </br>
							</p>
						</div>

						<?php echo get_post_field('post_content', $post->ID); ?>
					</div>

				</div>

			</div>
			<!-- here END -->
		</div>

	</div>
</section>

<section class="single-case-pagination-and-footer-wrapper" style="position: relative;">
	<section class="detail-pagination">
		<?php

    $next_post = get_adjacent_post( false, '', false);
    $next_post_url = get_the_permalink($next_post);
    $next_post_thumbnail = get_the_post_thumbnail_url($next_post);

    $previous_post = get_adjacent_post( false, '', true);
    $previous_post_url = get_the_permalink($previous_post);
    $previous_post_thumbnail = get_the_post_thumbnail_url($previous_post);

	$args = array(
		'post_type' =>'case_post_type',
		'numberposts' => -1,
		'order' => 'ASC' );
	
	$case_posts = get_posts($args);

	$count = count($case_posts);
	
	$first_case = $case_posts[0] ;
	$first_case_url = get_the_permalink($first_case -> ID);
	$first_case_thumbnail = get_the_post_thumbnail_url($first_case -> ID)
	;
	$last_case = $case_posts[$count-1] ;
	$last_case_url = get_the_permalink($last_case -> ID);
	$last_case_thumbnail = get_the_post_thumbnail_url($last_case -> ID);


	// var_dump($next_post);
	// var_dump($next_post -> ID);
	// var_dump($next_post_url);

    ?>

		<div class="container-fluid h-100">
			<div class="row h-100">

				<div class="bg-cover bg-no-repeat bg-center col  item-prev"
					style="background-image: url('<?php echo $previous_post === "" ? $last_case_thumbnail : $previous_post_thumbnail ?>')">
					<a href="<?php echo $previous_post === "" ? $last_case_url : $previous_post_url ?>"
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
					style="background-image: url('<?php echo $next_post === "" ? $first_case_thumbnail : $next_post_url  ?>')">
					<a href="<?php echo $next_post === "" ? $first_case_url : $next_post_url; ?>"
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

</section>

<?php get_footer('single-case') ?>