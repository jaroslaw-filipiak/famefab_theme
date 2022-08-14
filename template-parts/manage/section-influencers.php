<?php
/**
 * Section influencers
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package femmefab
 */

?>

<section class="influencers">
    <div class="container-fluid h-100">
        <div class="row h-100">
            <div
                class="col-2 d-none  d-md-flex align-items-end justify-content-start col-md-3  ps-0 h-100 influencer  ">
                <div style="position: relative;">
                    <div data-scroll data-scroll-speed="3" class="d-none d-lg-flex influencer--photo"></div>
                    <div class="d-none d-lg-flex influencer--info font-green-default">
                        <div>
                            <p><span class="influencer-hover-output--name"></span></p>
                            <p><span class="influencer-hover-output"></span></p>
                            <div></div>

                            <div
                                class="pt-3 d-none d-lg-flex content-and-arrow  align-items-center justify-content-start p-0">
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
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div class="col-12 col-md-9 text-end text-xl-center h-100 influencers--list-wrapper">
                <div class="influencers--list">
                    <div class="d-inline-flex flex-column justify-content-end">
                        <div class="iterable">

                            <!-- 0 -->
                            <div data-index="0" data-info="Wij werken samen met
                            de leukste influencers
                            & publishers"
                                data-bg="<?php echo get_theme_file_uri() ?>/dist/assets/img/influencers/influencer-1.jpg"
                                data-name="Lady Lemonade" class="influencers--list-item">Lady
                                Lemonade</div>

                            <!-- 1 -->
                            <div data-index="1" data-info="Wij werken samen met
                            de leukste influencers
                            & publishers"
                                data-bg="<?php echo get_theme_file_uri() ?>/dist/assets/img/influencers/influencer-2.jpg"
                                data-name="Rachel Meibergen
                            " class="influencers--list-item">Rachel Meibergen
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <h1 class="d-none d-lg-flex color-green">Influencers</h1>
</section>