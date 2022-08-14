<?php
/**
 * Section manage gallery / contact page
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package femmefab
 */

?>

<section class="manage-gallery">
    <div class="container-fluid h-100">
        <div class="row h-100" style="position: relative">
            <div class=" col-2 d-md-block col-md-3  ps-0"></div>
            <div class=" col-10 col-md-9 d-flex justify-content-between">
                <!-- text + arrow button -->
                <div>
                    <div data-scroll data-scroll-speed="2"
                        class="d-none d-lg-block manage-gallery--subtitle font-green-default text-uppercase font-sans">
                        Want to be part of a strong team? See our latest jobs & Be part of the journey
                    </div>
                    <div data-scroll data-scroll-speed="1"
                        class="content-and-arrow d-flex align-items-center justify-content-start p-0">
                        <div class="pe-4 mb-2 mb-md-0"><small>vaccature</small></div>
                        <div class="arrow-right-icon ">
                            <div class="arrow-right--circle"><svg width="58" height="58" viewBox="0 0 58 58" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="29" cy="29" r="28.6" stroke="#214c2c" stroke-width="0.8" />
                                </svg>
                            </div>
                            <div class="arrow-right--arrow"><svg width="24" height="6" viewBox="0 0 24 6" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M23.2828 3.28284C23.4391 3.12663 23.4391 2.87337 23.2828 2.71716L20.7373 0.171573C20.581 0.0153632 20.3278 0.0153632 20.1716 0.171573C20.0154 0.327783 20.0154 0.581048 20.1716 0.737258L22.4343 3L20.1716 5.26274C20.0154 5.41895 20.0154 5.67222 20.1716 5.82843C20.3278 5.98464 20.581 5.98464 20.7373 5.82843L23.2828 3.28284ZM0 3.4H23V2.6H0V3.4Z"
                                        fill="#214c2c" />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- gallery on right side -->
                <div class="manage-gallery--gallery  d-flex flex-column flex-lg-row align-items-center justify-content-center align-items-lg-center justify-content-lg-center"
                    style="width:100%">
                    <div data-scroll data-scroll-speed="4" class="manage-gallery-row-1">
                        <div class="manage-gallery--item"
                            style="background-image: url('<?php echo get_theme_file_uri() ?>/dist/assets/img/contact-us-person-2.jpg');">
                            <div class="manage-gallery--item--content">
                                emily taylor
                            </div>
                        </div>

                    </div>
                    <div data-scroll data-scroll-speed="2" class="manage-gallery-row-2">
                        <div class="manage-gallery--item"
                            style="background-image: url('<?php echo get_theme_file_uri() ?>/dist/assets/img/contact-us-person-1.jpg');">
                            <div class="manage-gallery--item--content">emily taylor</div>
                        </div>
                        <div class="manage-gallery--item"
                            style="background-image: url('<?php echo get_theme_file_uri() ?>/dist/assets/img/contact-us-person-3.jpg');">
                            <div class="manage-gallery--item--content">emily taylor</div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="manage-gallery--title-wrapper">
                <div class="manage-gallery--title">
                    <p>Contact us</p>
                </div>
            </div>

        </div>
    </div>

</section>