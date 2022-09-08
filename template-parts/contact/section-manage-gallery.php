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
                        <?php the_field( 'page_contact_section_with_photos_small_text' ); ?>
                    </div>

                    <?php $page_contact_section_with_photos_link_to_section = get_field( 'page_contact_section_with_photos_link_to_section' ); ?>
                    <?php if ( $page_contact_section_with_photos_link_to_section ) : ?>

                    <a href="<?php echo esc_url( $page_contact_section_with_photos_link_to_section['url'] ); ?>"
                        data-scroll data-scroll-speed=".3"
                        class="d-none d-lg-flex link-green-unstyled content-and-arrow align-items-center justify-content-start p-0">
                        <div class="pe-4 mb-2 mb-md-0"><small
                                class="cursor-pointer"><?php echo esc_html( $page_contact_section_with_photos_link_to_section['title'] ); ?></small>
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

                <!-- persons on right side // grid -->
                <div class="manage-gallery--gallery">

                    <?php if( have_rows('persons') ): ?>

                    <?php while( have_rows('persons') ): the_row(); 
                            $image = get_sub_field('person_photo');
                            $Person_name = get_sub_field('person_name');
                            ?>

                    <!-- person -->
                    <div class="manage-gallery--item manage-gallery--item-<?php echo get_row_index(); ?>"
                        style="background-image: url('<?php echo $image ?>');">
                        <div class="manage-gallery--item--content">
                            <?php echo $Person_name ?>
                        </div>
                    </div>
                    <!-- person -->

                    <?php endwhile; ?>

                    <?php endif; ?>

                </div>

            </div>
            <div style="display: none;" class="manage-gallery--title-wrapper">
                <div class="manage-gallery--title manage-gallery--title__page-contact">
                    <p style="<?php echo wp_is_mobile() ? 'font-size: 60px;' : ''?>">
                        <?php the_field( 'page_contact_section_with_photos_title' ); ?></p>
                </div>
            </div>

        </div>
    </div>

</section>