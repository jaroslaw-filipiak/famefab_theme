<?php
/**
 * Section blank hero / two sections // page: make
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package femmefab
 */

?>

<section class="blank-hero bg-violet">
    <div class="container-fluid h-100">
        <div class="row h-100 d-flex align-items-end">
            <div class=" col-2 d-md-block col-md-3  ps-0 h-100"></div>
            <div class=" col-10 col-md-9 text-center h-100  d-flex align-items-start justtify-content-start">
            </div>
        </div>
    </div>

</section>


<section class="blank-hero bg-cover bg-no-repeat bg-center total-reach-trigger change-make-title-color-trigger"
    style="background-size: cover; background-image: url('<?php the_field( 'second_section_with_background_background_image' ); ?>')">
    <div class="container-fluid h-100">
        <div class="row h-100 d-flex flex-nowrap align-items-center">
            <div class="col-3 col-md-2 d-md-block col-md-3  ps-0 h-100"></div>
            <div class="col-9 col-md-10 col-md-8 text-center h-100">
                <div class="gsap_content_opacity-from-zero blank-hero--content blank-hero--content__page-make color-yellow"
                    data-scroll data-scroll-speed="2">
                    <?php the_field( 'second_section_with_background_text_content' ); ?>
                </div>

                <?php $second_section_with_background_link_to_section = get_field( 'second_section_with_background_link_to_section' ); ?>
                <?php if ( $second_section_with_background_link_to_section ) : ?>



                <a href="<?php echo esc_url( $second_section_with_background_link_to_section['url'] ); ?>" data-scroll
                    data-scroll-speed="3"
                    class="gsap_content_opacity-from-zero blank-hero--content link-yellow-unstyled content-and-arrow col-6 d-flex align-items-center justify-content-start p-0"
                    style="margin-top: 80px;">
                    <div class="pe-4 mb-2 color-yellow">
                        <small><?php echo esc_html( $second_section_with_background_link_to_section['title'] ); ?></small>
                    </div>
                    <div class="arrow-right-icon">
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

                <?php endif; ?>
            </div>
        </div>
    </div>


</section>