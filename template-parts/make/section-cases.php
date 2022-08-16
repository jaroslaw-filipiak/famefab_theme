<?php
/**
 * Section cases
 * 
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package femmefab
 */

?>

<section class="cases bg-cover bg-no-repeat bg-center">
    <div class="container-fluid h-100">
        <div class="row h-100">
            <div class="col-2 d-none  d-md-flex align-items-end justify-content-start col-md-3  ps-0 h-100 case  ">
                <div style="position: relative;">
                    <div class="d-none d-lg-flex case--photo" style="visibility: hidden"></div>
                    <div class="d-none d-lg-flex case--info font-green-default">
                        <div data-scroll data-scroll-speed="1">
                            <p><span class="case-hover-output--name"></span></p>
                            <p><span class="case-hover-output case-hover-output-gsap-pin">
                                    <?php the_field( 'page_make_section_with_cases_text_content' ); ?></span></p>
                            <div></div>

                            <a href="#"
                                class="case-dynamic-link link-green-unstyled pt-3 d-none d-lg-flex content-and-arrow  align-items-center justify-content-start p-0">
                                <div class="pe-4"><small>see profile <div class="case-name"></div></small></div>
                                <div class="arrow-right-icon">
                                    <div class="arrow-right--circle"><svg width="58" height="58" viewBox="0 0 58 58"
                                            fill="none">
                                            <circle cx="29" cy="29" r="28.6" stroke="#214C2C" stroke-width="0.8" />
                                        </svg>
                                    </div>
                                    <div class="arrow-right--arrow"><svg width="24" height="6" viewBox="0 0 24 6"
                                            fill="none">
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
            <div class="col-12 col-md-9 text-end text-xl-center h-100 cases--list-wrapper">
                <div class="cases--list">
                    <div class="d-inline-flex flex-column justify-content-end">
                        <div class="iterable">


                            <?php 

                                    $args = array(
                                        'post_type' => 'case_post_type',
                                        'posts_per_page' => 5,
                                    );
                                // the query
                                $the_query = new WP_Query( $args ); ?>

                            <?php if ( $the_query->have_posts() ) : ?>

                            <!-- pagination here -->

                            <!-- the loop -->
                            <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>

                            <!-- 0 -->
                            <div data-scroll data-scroll-speed="1"
                                data-index="<?php echo $the_query->current_post +1;  ?>" data-info="Wij werken samen met
                            de leukste cases
                            & publishers" data-bg="<?php echo get_the_post_thumbnail_url() ?>"
                                data-link="<?php echo get_permalink() ?>" data-name="<?php the_title() ?>"
                                class="cases--list-item">
                                <?php the_title() ?> </div>

                            <?php endwhile; ?>
                            <!-- end of the loop -->

                            <!-- pagination here -->

                            <?php wp_reset_postdata(); ?>

                            <?php else : ?>
                            <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
                            <?php endif; ?>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <h1 class=" d-none d-lg-flex color-green">cases</h1>
</section>