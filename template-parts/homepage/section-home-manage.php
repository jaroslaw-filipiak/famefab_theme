<?php
/**
 * Section home manage
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package femmefab
 */

?>


<section class="home-manage-and-manage-gallery-wrapper">
	<!-- home manage -->
	<div class="container-fluid ">

		<div id="home-manage" class="home-manage row bg-cover bg-no-repeat bg-center gsap__manage-bg--scale"
			style="background-size: cover;background-image: url('<?php the_field( 'home_section_manage_with_bg_background_image' ); ?>');">
			<div class="d-flex flex-nowrap flex-row align-items-start ">
				<div class="col-2 d-md-block col-md-2 ps-0"></div>
				<div class="col-10 col-md-10 home-manage-elem-is-pinned ps-1" style="position: relative;">

					<div>
						<p class="home-manage--text-block gsap-home-manage-reveal-timeline-after-title color-yellow">
							<?php the_field( 'home_section_manage_with_bg_text_content' ); ?>
						</p>
					</div>

					<?php $home_section_manage_with_bg_link_to_section = get_field( 'home_section_manage_with_bg_link_to_section' ); ?>
					<?php if ( $home_section_manage_with_bg_link_to_section ) : ?>

					<a href="<?php echo esc_url( $home_section_manage_with_bg_link_to_section['url'] ); ?>" data-scroll
						data-scroll-speed=".3"
						class="link-yellow-unstyled d-none d-lg-flex content-and-arrow col-6 align-items-center justify-content-start p-0 gsap-home-manage-reveal-timeline-after-title__link">
						<div class="pe-4"><small
								class="cursor-pointer"><?php echo esc_html( $home_section_manage_with_bg_link_to_section['title'] ); ?></small>
						</div>
						<div class="arrow-right-icon">
							<div class="arrow-right--circle home-manage-arrow-right__circle"><svg width="58" height="58"
									viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="29" cy="29" r="28.6" stroke="#e7ffc8" stroke-width="0.8" />
								</svg>
							</div>
							<div class="arrow-right--arrow home-manage-arrow-right__arrow"><svg width="24" height="6"
									viewBox="0 0 24 6" fill="none" xmlns="http://www.w3.org/2000/svg">
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

		<div id="home-influencers" class="row manage-gallery--row">
			<div class="col-2 d-md-block col-md-2 ps-0"></div>
			<div class="col-10 col-md-10 d-flex justify-content-between">
				<!-- text + arrow button -->
				<div>

				</div>

				<!-- gallery on right side // grid -->
				<div class="manage-gallery--gallery">

					<?php $influencers_3items_on_the_right = get_field( 'influencers_3items_on_the_right' ); ?>
					<?php if ( $influencers_3items_on_the_right ) : ?>

					<?php foreach ( $influencers_3items_on_the_right as $key=>$post_ids ) : 
                        
                        $bgImg = get_the_post_thumbnail_url($post_ids);
                        $bgPlaceholder = get_theme_file_uri() .'/dist/assets/img/img-placeholder.jpg';
						$permalink = get_the_permalink($post_ids);
						
                        
                        ?>



					<a data-scroll data-scroll-speed="<?php echo $key ?>" href="<?php echo $permalink ?>"
						class="manage-gallery--item br-30 manage-gallery--item-<?php echo $key +1 ?>"
						style="text-decoration: none; background-image: url('<?php echo $bgImg ? $bgImg : $bgPlaceholder ?>');">
						<div class="manage-gallery--item--content">
							<?php echo get_the_title($post_ids) ?>
						</div>
					</a>


					<?php endforeach; ?>
					<?php endif; ?>

				</div>

			</div>
		</div>
	</div>
</section>