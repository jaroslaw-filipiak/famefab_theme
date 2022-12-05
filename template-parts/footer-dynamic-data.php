<!-- title has position fixed on page contact
 + gsap triggers , have to be before closing body  -->
<?php if(is_page_template( 'page-templates/page-contact.php' )) { ?>
<h1 class="contact-us__hero-gsap"><?php the_field( 'page_contact_first_section_title' ); ?></h1>


<!-- manage-gallery--title-wrapper is-contact-title-pinned -->
<div class="manage-gallery--title-wrapper " style="z-index: 999; overflow: visible !important;">
	<div class="manage-gallery--title manage-gallery--title__page-contact"
		style="z-index: 99; overflow: visible !important;">
		<p style="<?php echo wp_is_mobile() ? 'font-size: 60px;' : ''?>">
			<?php the_field( 'page_contact_section_with_photos_title' ); ?></p>
	</div>
</div>


<!-- vaccatures /  -->

<a href="#"
	class="link-green-unstyled d-flex flex-column-reverse d-lg-none content-and-arrow align-items-start justify-content-start p-0 mobile__manage-gallery--vaccatures"
	style="position: fixed; left: 0px; top: 50vh; transform: scale(.8); transform-origin: center;">
	<div class="pe-4" style="width: 140px; margin-top: 10px;"><small class="cursor-pointer">vaccatures</small>
	</div>
	<div class="arrow-right-icon">
		<div class="arrow-right--circle home-manage-arrow-right__circle"><svg width="58" height="58" viewBox="0 0 58 58"
				fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="29" cy="29" r="28.6" stroke="#e7ffc8" stroke-width="0.8" />
			</svg>
		</div>
		<div class="arrow-right--arrow home-manage-arrow-right__arrow"><svg width="24" height="6" viewBox="0 0 24 6"
				fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M23.2828 3.28284C23.4391 3.12663 23.4391 2.87337 23.2828 2.71716L20.7373 0.171573C20.581 0.0153632 20.3278 0.0153632 20.1716 0.171573C20.0154 0.327783 20.0154 0.581048 20.1716 0.737258L22.4343 3L20.1716 5.26274C20.0154 5.41895 20.0154 5.67222 20.1716 5.82843C20.3278 5.98464 20.581 5.98464 20.7373 5.82843L23.2828 3.28284ZM0 3.4H23V2.6H0V3.4Z"
					fill="#e7ffc8" />
			</svg>
		</div>
	</div>
</a>

<?php } ?>

<!-- manage title on homepage  -->
<?php if(is_page_template( 'page-templates/page-home.php' )) { ?>
<div class="home-manage--title gsap__title-horizontaly-scrub">
	<?php the_field( 'home_section_manage_with_bg_title' ); ?></div>


<!-- go to influencers -->
<a href="<?php echo get_home_url('', 'manage'); ?>"
	class="link-green-unstyled d-flex flex-column-reverse d-lg-none content-and-arrow align-items-start justify-content-start p-0 mobile__go-to-influencers"
	style="position: fixed; left: 0px; top: 50vh; transform: scale(.8); transform-origin: center; z-index: 22">
	<div class="pe-4" style="width: 140px; margin-top: 10px;"><small class="cursor-pointer">go to influencers</small>
	</div>
	<div class="arrow-right-icon">
		<div class="arrow-right--circle home-manage-arrow-right__circle"><svg width="58" height="58" viewBox="0 0 58 58"
				fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="29" cy="29" r="28.6" stroke="#e7ffc8" stroke-width="0.8" />
			</svg>
		</div>
		<div class="arrow-right--arrow home-manage-arrow-right__arrow"><svg width="24" height="6" viewBox="0 0 24 6"
				fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M23.2828 3.28284C23.4391 3.12663 23.4391 2.87337 23.2828 2.71716L20.7373 0.171573C20.581 0.0153632 20.3278 0.0153632 20.1716 0.171573C20.0154 0.327783 20.0154 0.581048 20.1716 0.737258L22.4343 3L20.1716 5.26274C20.0154 5.41895 20.0154 5.67222 20.1716 5.82843C20.3278 5.98464 20.581 5.98464 20.7373 5.82843L23.2828 3.28284ZM0 3.4H23V2.6H0V3.4Z"
					fill="#e7ffc8" />
			</svg>
		</div>
	</div>
</a>

<!-- go to cases -->
<a href="<?php echo get_home_url('' ,'make') ?>"
	class="link-yellow-unstyled d-flex flex-column-reverse d-lg-none content-and-arrow align-items-start justify-content-start p-0 mobile__go-to-make"
	style="position: fixed; left: 0px; top: 50vh; transform: scale(.8); transform-origin: center;">
	<div class="pe-4" style="width: 140px; margin-top: 10px;"><small class="cursor-pointer">go to cases</small>
	</div>
	<div class="arrow-right-icon">
		<div class="arrow-right--circle home-manage-arrow-right__circle"><svg width="58" height="58" viewBox="0 0 58 58"
				fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="29" cy="29" r="28.6" stroke="#e7ffc8" stroke-width="0.8" />
			</svg>
		</div>
		<div class="arrow-right--arrow home-manage-arrow-right__arrow"><svg width="24" height="6" viewBox="0 0 24 6"
				fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M23.2828 3.28284C23.4391 3.12663 23.4391 2.87337 23.2828 2.71716L20.7373 0.171573C20.581 0.0153632 20.3278 0.0153632 20.1716 0.171573C20.0154 0.327783 20.0154 0.581048 20.1716 0.737258L22.4343 3L20.1716 5.26274C20.0154 5.41895 20.0154 5.67222 20.1716 5.82843C20.3278 5.98464 20.581 5.98464 20.7373 5.82843L23.2828 3.28284ZM0 3.4H23V2.6H0V3.4Z"
					fill="#e7ffc8" />
			</svg>
		</div>
	</div>
</a>

<?php } ?>

<!-- make title on homepage / section make with bg  -->
<?php if(is_page_template( 'page-templates/page-home.php' )) { ?>
<div class="make-with-bg--title">
	<?php the_field( 'home_section_make_with_bg_big_title' ); ?>
</div>
<?php } ?>

<!--  contact us title on homepage / section make with bg  -->
<?php if(is_page_template( 'page-templates/page-home.php' )) { ?>
<div class="contact-us--title" style="opacity: 1;">
	<p><?php the_field( 'home_section_contact_title' ); ?></p>
</div>
<?php } ?>

<!--  over ons title on over ons page first slide  -->
<?php if(is_page_template( 'page-templates/page-over-ons.php' )) { ?>

<h1 class="over-ons--title color-green">
	<?php the_field( 'page_over_ons_first_section_big_title' ); ?>
</h1>
<?php } ?>

<!--  work title / over ons page  -->
<?php if(is_page_template( 'page-templates/page-over-ons.php' )) { ?>

<!-- <h1 class="work--title color-green">
    Work
</h1> -->
<?php } ?>

<!--  make title /  page: make -->
<?php if(is_page_template( 'page-templates/page-make.php' )) { ?>
<h1 class="make--fixed-title color-green"><?php the_field( 'page_make_first_section_title' ); ?></h1>
<div class="cases--dynamic-bg"></div>
<?php } ?>


<!-- page manage stuff -->

<?php if(is_page_template( 'page-templates/page-manage.php' )) { ?>

<h1 class="manage--title color-green"><?php the_field( 'page_manage_first_section_title' ); ?></h1>
<div class="influencers--dynamic-bg"></div>

<?php } ?>

<!-- end page manage stuff -->




<?php if('influencer_post_type' == get_post_type()) { ?>

<span class="influencer_first_section_tags"
	style="opacity: <?php echo get_field('influencer_first_section_tags_opacity') ?>"><?php echo get_field('influencer_first_section_tags') ?></span>

<div class="single-influencer--title color-green ">
	About</div>


<div class="single-influencer--title-cases color-green">
	Cases</div>

<?php } ?>

<?php if('case_post_type' == get_post_type()) { ?>

<div class="d-none d-xl-flex single-case--title color-green">
	Cases</div>
<?php } ?>