<?php
/**
 * Section blank hero / first section on over ons page // two blank hero sections
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
                <div class="blank-hero--content color-green">
                    <?php the_field( 'page_over_ons_first_section_text_content' ); ?>
                </div>
            </div>
        </div>
    </div>
    <h1 class="color-green">
        <?php the_field( 'page_over_ons_first_section_big_title' ); ?>
    </h1>
</section>

<?php $page_over_ons_second_section_background_image = get_field( 'page_over_ons_second_section_background_image' ); ?>

<section class="blank-hero bg-cover bg-no-repeat bg-center over-ons-title-trigger"
    style="background-size: 140%; background-image: url('<?php echo esc_url( $page_over_ons_second_section_background_image['url'] ); ?>')">
    <div class="container-fluid h-100">
        <div class="row h-100 d-flex align-items-end">
            <div class=" col-2 d-md-block col-md-3  ps-0 h-100"></div>
            <div class=" col-10 col-md-9 text-center h-100  ">
                <div class="blank-hero--content color-yellow">
                    <?php the_field( 'page_over_ons_second_section_text_content' ); ?>
                </div>

                <?php $page_over_ons_second_section_link_to_section = get_field( 'page_over_ons_second_section_link_to_section' ); ?>
                <?php if ( $page_over_ons_second_section_link_to_section ) : ?>


                <a href="<?php echo esc_url( $page_over_ons_second_section_link_to_section['url'] ); ?>" data-scroll-to
                    data-scroll data-scroll-speed=".3"
                    class="link-green-unstyled col-6 d-flex align-items-center justify-content-start p-0"
                    style="margin-top: 80px;">
                    <div class="pe-4 mb-2 color-yellow"><small
                            class="cursor-pointer"><?php echo esc_html( $page_over_ons_second_section_link_to_section['title'] ); ?></small>
                    </div>
                    <div class=" arrow-right-icon">
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

    <h1 class="color-yellow">Over ons</h1>
</section>