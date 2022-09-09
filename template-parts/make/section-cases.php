<?php
/**
 * Section cases
 * 
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package femmefab
 */

?>



<section class="cases">

    <div class="container-fluid">
        <div class="row ">

            <!-- case left side -->
            <div
                class="col-2 d-none d-md-flex align-items-center justify-content-end col-md-3  ps-0  case case-area-pinned">
                <div>

                    <div class="d-none d-lg-flex case--info font-green-default">
                        <div>
                            <p><span class="case-hover-output--name"></span></p>
                            <p><span class="case-hover-output"></span></p>
                            <div></div>

                            <a href="#"
                                class="link-green-unstyled case-dynamic-link pt-3 d-none d-lg-flex  content-and-arrow  align-items-center justify-content-start p-0 opacity-0">
                                <div class="pe-4"><small>see profile</small></div>
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

            </div>

            <!-- case right side -->
            <div class="col text-end text-xl-center  cases--list-wrapper case-area-scrollable">
                <div class="cases--list">
                    <div class="d-flex flex-column justify-content-end iterable--wrapper">


                        <!-- desktop -->
                        <div class="iterable d-none d-lg-flex">

                            <?php 

                                    $args = array(
                                        'post_type' => 'case_post_type',
                                        'posts_per_page' => -1,
                                    );
                                    // the query
                                    $the_query = new WP_Query( $args ); ?>

                            <?php if ( $the_query->have_posts() ) : ?>

                            <!-- pagination here -->

                            <!-- the loop -->
                            <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>


                            <div data-index="<?php echo $the_query->current_post +1;  ?>"
                                data-info="<?php the_field( 'page_manage_excerpt' ); ?>"
                                data-link="<?php echo get_permalink() ?>" data-bg="<?php the_field( 'data_bg_img' ); ?>"
                                data-thumb="<?php echo get_the_post_thumbnail_url() ?>" data-name="<?php the_title() ?>"
                                class="cases--list-item cases--list-item-<?php echo $the_query->current_post +1; ?> w-100 color-green">
                                <?php the_title() ?>
                            </div>

                            <?php endwhile; ?>
                            <!-- end of the loop -->

                            <!-- pagination here -->

                            <?php wp_reset_postdata(); ?>

                            <?php else : ?>
                            <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
                            <?php endif; ?>



                        </div>

                        <!-- mobile -->

                        <?php if(wp_is_mobile()) ?>

                        <div class="d-flex">
                            <div class="col-3"></div>

                            <div class="iterable d-block d-lg-none col-9">

                                <?php 

                                    $args = array(
                                        'post_type' => 'case_post_type',
                                        'posts_per_page' => -1,
                                    );
                                    // the query
                                    $the_query = new WP_Query( $args ); ?>

                                <?php if ( $the_query->have_posts() ) : ?>

                                <!-- pagination here -->

                                <!-- the loop -->
                                <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>


                                <a href="<?php echo get_permalink() ?>"
                                    class="cases--list-item cases--list-item__mobile cases--list-item-<?php echo $the_query->current_post +1; ?> w-100 color-green">
                                    <?php the_title() ?>
                                </a>

                                <?php endwhile; ?>
                                <!-- end of the loop -->

                                <!-- pagination here -->

                                <?php wp_reset_postdata(); ?>

                                <?php else : ?>
                                <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
                                <?php endif; ?>


                            </div>

                        </div>
                        <!-- mobile -->

                    </div>
                </div>
            </div>
        </div>
    </div>


</section>