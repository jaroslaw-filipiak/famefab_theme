<?php
/**
 * Template part for displaying top bar
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package femmefab
 */

?>

<section class="top-bar" data-scroll data-scroll-sticky>
    <div class="container-fluid">
        <div class="row">
            <div
                class="col-4 col-md-2 d-flex align-items-center justify-content-start ps-0 top-bar--logo gsap__section-indicator-home-page">
                <a href="<?php echo get_home_url() ?>">
                    <svg width="118" height="19" viewBox="0 0 118 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.2888 3.33764V1.33154H0V18.7178H2.13717V11.0682H10.4452V9.0694H2.13717V3.33764H12.2888Z"
                            fill="#214C2C" />
                        <path
                            d="M24.2708 8.49186C23.8334 7.37784 23.1656 6.53081 22.2672 5.95078C21.3689 5.37074 20.269 5.08123 18.9675 5.08221C17.7994 5.06505 16.6505 5.38053 15.6546 5.99193C14.6751 6.59767 13.877 7.45674 13.3442 8.47862C12.7706 9.58486 12.4815 10.8169 12.5032 12.0632C12.4805 13.3086 12.7793 14.5387 13.3707 15.6345C13.928 16.6638 14.7562 17.5208 15.7653 18.1125C16.7744 18.7042 17.9259 19.0081 19.0952 18.9913C20.043 19.0101 20.9817 18.8035 21.8342 18.3887C22.5987 18.0104 23.2589 17.4503 23.7571 16.7573C24.2507 16.0619 24.5754 15.2608 24.7053 14.4176H22.7017C22.4849 15.1624 22.0295 15.8152 21.4056 16.2753C20.735 16.761 19.9225 17.0106 19.0952 16.9852C18.3297 16.9991 17.5741 16.8099 16.9052 16.4369C16.2623 16.0696 15.7276 15.5388 15.3552 14.8982C14.9487 14.194 14.7026 13.4086 14.6345 12.5981H24.7861C24.878 10.9756 24.7063 9.60686 24.2708 8.49186ZM14.7739 10.6728C15.0215 9.56667 15.5201 8.69272 16.2696 8.05096C17.0192 7.4092 17.9454 7.08831 19.0483 7.08831C19.9399 7.07537 20.8034 7.40031 21.4658 7.99803C22.1508 8.60354 22.529 9.49514 22.6004 10.6728H14.7739Z"
                            fill="#214C2C" />
                        <path
                            d="M80.0516 8.49184C79.6162 7.37782 78.9483 6.53079 78.048 5.95076C77.1477 5.37072 76.0478 5.08121 74.7483 5.08219C73.5807 5.0653 72.4323 5.38078 71.4369 5.99191C70.4569 6.59756 69.6583 7.45662 69.125 8.4786C68.5513 9.58484 68.2623 10.8169 68.2839 12.0632C68.261 13.3087 68.5604 14.539 69.1529 15.6345C69.7099 16.6641 70.5379 17.5213 71.5471 18.1131C72.5563 18.7049 73.7081 19.0086 74.8775 18.9912C75.8252 19.0102 76.764 18.8037 77.6165 18.3887C78.3812 18.0108 79.0415 17.4506 79.5393 16.7573C80.0329 16.0619 80.3577 15.2607 80.4876 14.4176H78.484C78.2682 15.1625 77.8131 15.8154 77.1893 16.2753C76.518 16.7608 75.7052 17.0104 74.8775 16.9851C74.112 16.9989 73.3565 16.8097 72.6875 16.4369C72.0445 16.0695 71.5098 15.5387 71.1374 14.8982C70.7316 14.1937 70.4856 13.4084 70.4167 12.5981H80.5683C80.6613 10.9756 80.489 9.60684 80.0516 8.49184ZM70.5547 10.6728C70.8042 9.56665 71.3028 8.6927 72.0504 8.05094C72.798 7.40918 73.7243 7.08829 74.8291 7.08829C75.7207 7.07505 76.5844 7.40004 77.2466 7.99801C77.9316 8.60352 78.3103 9.49512 78.3827 10.6728H70.5547Z"
                            fill="#214C2C" />
                        <path
                            d="M85.998 4.54728V5.34972H89.3373V7.35586H85.998V18.7238H83.8594V7.35586H81.4829V5.34972H83.8594V4.54728C83.8594 3.47735 84.0512 2.60779 84.4348 1.9386C84.7976 1.28909 85.3596 0.773778 86.0376 0.468913C86.7827 0.145103 87.5888 -0.0142851 88.4009 0.00156443H89.6309V2.14143H88.4009C87.9877 2.11844 87.5742 2.18198 87.187 2.32805C86.8228 2.46849 86.5163 2.72726 86.3165 3.06289C86.1022 3.40973 85.998 3.90503 85.998 4.54728Z"
                            fill="#214C2C" />
                        <path
                            d="M117.204 8.48152C116.752 7.48458 116.043 6.62626 115.149 5.99483C114.271 5.38635 113.225 5.06821 112.158 5.08507C111.16 5.08507 110.345 5.26783 109.714 5.6333C109.379 5.8251 109.076 6.06694 108.814 6.35048C108.598 6.59242 108.412 6.85876 108.258 7.1441C107.938 7.72845 107.723 8.36405 107.622 9.02235H107.484L107.616 0.00146484H105.479V18.7473H107.651L107.505 17.8801L107.013 14.9952H107.38C107.421 15.4527 107.539 15.9 107.729 16.3179C107.953 16.7945 108.264 17.2251 108.645 17.5877C109.101 18.0545 109.648 18.421 110.254 18.6637C110.859 18.9064 111.508 19.0199 112.159 18.9971C112.763 19.0012 113.362 18.9018 113.932 18.7032C114.345 18.554 114.736 18.3525 115.098 18.1035C115.994 17.4784 116.712 16.6305 117.182 15.6433C117.713 14.5291 117.978 13.3064 117.956 12.0719C117.976 10.8339 117.72 9.607 117.204 8.48152ZM115.267 14.5939C114.935 15.2948 114.423 15.8947 113.784 16.3326C113.143 16.7568 112.389 16.9762 111.62 16.9616C110.712 16.9616 109.964 16.7387 109.376 16.2929C108.905 15.9347 108.52 15.4752 108.25 14.9481C108.177 14.8071 108.111 14.6624 108.052 14.5146C107.773 13.7977 107.624 13.0367 107.612 12.2674C107.612 12.2013 107.612 12.1351 107.612 12.0675C107.594 11.1871 107.744 10.3114 108.052 9.4868C108.315 8.7871 108.78 8.18173 109.388 7.74815C109.986 7.3288 110.729 7.11912 111.619 7.11912C112.955 7.11912 113.988 7.58747 114.718 8.52415C115.448 9.46082 115.813 10.6419 115.813 12.0675C115.827 12.9402 115.638 13.8041 115.261 14.591L115.267 14.5939Z"
                            fill="#214C2C" />
                        <path
                            d="M100.333 5.35081L100.388 5.68002L100.976 9.10145H100.609C100.574 8.47338 100.401 7.86073 100.103 7.30701C99.8048 6.75328 99.3886 6.27204 98.8838 5.89753C97.802 5.10537 96.6674 5.09071 96.0949 5.08189C95.4271 5.0744 94.7636 5.18893 94.1369 5.41989C93.7401 5.56589 93.3618 5.75777 93.0095 5.99161C92.0776 6.61382 91.3267 7.47171 90.8327 8.4783C90.3074 9.59731 90.0338 10.8182 90.0313 12.0546C90.0287 13.2911 90.2973 14.513 90.818 15.6342C91.2976 16.623 92.0248 17.4706 92.9288 18.0944C93.3853 18.4081 93.8894 18.6458 94.4216 18.7984C94.8797 18.925 95.3526 18.9898 95.8278 18.9909C96.2359 18.9909 97.4233 19.0071 98.4582 18.4251C100.22 17.4375 100.562 15.2903 100.607 14.9713H100.974L100.484 17.8461L100.337 18.7279H102.509V5.35376L100.333 5.35081ZM100.366 12.2407C100.358 13.0161 100.214 13.7841 99.9407 14.5099C99.8791 14.6696 99.8086 14.8256 99.7293 14.9772C99.463 15.4933 99.083 15.9421 98.6181 16.2896C98.0202 16.7345 97.2677 16.9574 96.3606 16.9584C95.597 16.9693 94.8478 16.7502 94.2102 16.3293C93.5645 15.8951 93.0477 15.2945 92.7145 14.5907C92.3384 13.8021 92.1509 12.9366 92.167 12.0629C92.167 10.6353 92.532 9.45417 93.262 8.51946C93.992 7.58474 95.0249 7.11639 96.3606 7.11443C97.2521 7.11443 97.9958 7.32411 98.5917 7.74346C99.0698 8.08165 99.4599 8.52971 99.7293 9.05003C99.803 9.19044 99.8691 9.33467 99.9275 9.48211C100.213 10.2335 100.362 11.0298 100.368 11.8336C100.368 11.9085 100.368 11.9806 100.368 12.0629C100.368 12.1452 100.368 12.1819 100.366 12.2407Z"
                            fill="#214C2C" />
                        <path
                            d="M47.2045 9.78941V18.7236H45.0674V10.3244C45.0674 9.28974 44.8271 8.51423 44.3467 7.99788C43.8662 7.48153 43.145 7.22286 42.1831 7.22188C41.4671 7.21752 40.7639 7.41186 40.1516 7.78331C39.9769 7.88872 39.8096 8.00607 39.651 8.13455C39.2331 8.48628 38.897 8.92517 38.6661 9.42052C38.4124 9.98675 38.2914 10.6036 38.3124 11.2238C38.3212 12.5803 38.2698 15.2228 38.2287 18.7192H36.0915V10.32C36.0915 9.28533 35.8513 8.50981 35.3708 7.99346C34.8903 7.47712 34.1686 7.21845 33.2057 7.21747C32.4903 7.2133 31.7876 7.40763 31.1757 7.7789C30.5661 8.14695 30.0524 8.6547 29.677 9.26035C29.6638 9.27945 29.6521 9.29854 29.6403 9.31765C29.4336 9.63629 29.273 9.98266 29.1633 10.3464C29.0601 10.7143 29.018 11.0966 29.0385 11.4781V18.7163H26.9014V5.34215H29.0738L28.4338 9.09278H28.8007C28.82 8.41181 29.0152 7.74747 29.3673 7.16458C29.6008 6.79721 29.8889 6.46762 30.2216 6.18722C30.5249 5.92097 30.8614 5.69523 31.2227 5.5156C31.6229 5.31863 32.0504 5.18289 32.4909 5.11291C32.8693 5.05633 33.253 5.0435 33.6344 5.0747C34.3551 5.10997 34.8982 5.1467 35.5572 5.39508C36.1028 5.59365 36.5962 5.91379 37.0001 6.33128C37.402 6.75805 37.7113 7.26341 37.9087 7.81564C38.0112 8.097 38.0874 8.38731 38.1362 8.68277C38.2104 8.44675 38.2991 8.21553 38.4019 7.99052C38.6582 7.4134 39.0106 6.88413 39.4441 6.42532C39.8515 5.9954 40.3427 5.65372 40.8873 5.42141C41.4319 5.1891 42.0183 5.07111 42.6102 5.0747C43.2652 5.06521 43.9165 5.17373 44.5331 5.39508C45.0787 5.59365 45.5721 5.91379 45.976 6.33128C46.3778 6.75805 46.6872 7.26341 46.8846 7.81564C47.107 8.44943 47.2154 9.11771 47.2045 9.78941Z"
                            fill="#214C2C" />
                        <path
                            d="M67.4974 6.19897C67.4974 6.23424 67.4974 6.27098 67.4974 6.3092C67.4636 6.71585 67.4062 7.1202 67.3257 7.52021L64.5735 17.5655L64.2799 18.6589C64.2746 18.7511 64.233 18.8374 64.1642 18.8988C64.0954 18.9603 64.005 18.9919 63.9129 18.9867H62.5009C62.4554 18.9867 62.3893 18.9734 62.3306 18.8647C62.2818 18.7209 62.2866 18.5644 62.3438 18.4238L65.2076 9.04576C65.3101 8.72774 65.378 8.39955 65.4101 8.06693C65.4101 7.86852 65.3074 7.7539 65.1313 7.7539C64.9551 7.7539 64.7423 7.92437 64.4296 8.2918C63.9387 8.9183 63.4891 9.57617 63.0836 10.2612C62.4304 11.3105 61.8213 12.279 61.2195 13.2211C60.5589 14.2572 60.12 14.9494 59.8808 15.336C59.2056 16.3975 58.5986 17.501 58.0636 18.6398C57.9697 18.8691 57.839 18.9808 57.6658 18.9808H56.2816C56.2599 18.9832 56.238 18.9801 56.2177 18.9719C56.1975 18.9637 56.1796 18.9506 56.1657 18.9338C56.1202 18.8794 56.0791 18.7456 56.1378 18.4238L59.0016 9.04576C59.1041 8.72774 59.172 8.39955 59.2041 8.06693C59.2041 7.79504 59.0412 7.7539 58.9443 7.7539C58.7975 7.7539 58.6346 7.84353 58.4467 8.02725C58.1818 8.30888 57.9403 8.61168 57.7245 8.93259C57.3502 9.49107 56.9216 10.1583 56.4519 10.9167C55.9822 11.675 55.3848 12.6112 54.62 13.8016C53.277 15.893 52.4286 17.251 52.1012 17.8388C51.8282 18.3268 51.6124 18.7133 51.5831 18.7545C51.5628 18.7867 51.5392 18.8168 51.5126 18.8441C51.4933 18.8651 51.4716 18.8839 51.448 18.8999C51.4216 18.9161 51.3967 18.9308 51.3732 18.9426C51.3513 18.9541 51.3287 18.9644 51.3057 18.9734C51.291 18.9783 51.2756 18.9808 51.2602 18.9808H50.4617C50.3962 18.9882 50.3299 18.9809 50.2677 18.9593C50.2054 18.9376 50.1488 18.9023 50.102 18.8559C50.0272 18.7589 50.0184 18.5928 50.0785 18.3665L52.4931 9.25444L52.3464 9.34555C51.8974 9.61103 51.391 9.76377 50.8703 9.79065C50.3496 9.81752 49.8302 9.71774 49.3564 9.49987L48.916 7.7201L48.9351 7.71128C50.5747 6.96615 51.9911 6.32094 53.2256 4.79395C53.8611 4.9029 54.5028 4.97115 55.147 4.99825C55.1963 4.99216 55.2463 4.99675 55.2937 5.01171C55.341 5.02667 55.3846 5.05163 55.4215 5.08494C55.4538 5.12462 55.4934 5.20693 55.3833 5.75807C55.3672 5.83743 55.3525 5.90504 55.3422 5.94913L53.1405 13.3769L56.2714 8.19481C56.7441 7.37445 57.359 6.64487 58.0871 6.04023C58.7403 5.51997 59.2819 5.25545 59.7017 5.25545H60.2742C60.6323 5.25545 60.8995 5.36272 61.0653 5.57288C61.3398 5.92414 61.3589 6.5752 61.1343 7.50991L59.5564 13.1844L62.4759 8.17863C63.0264 7.21452 63.6311 6.47969 64.2755 5.99323C64.9199 5.50676 65.4571 5.26718 65.9019 5.26718H66.4758C66.6245 5.26436 66.7728 5.28319 66.9161 5.32305C67.0992 5.37046 67.257 5.48681 67.3565 5.64784C67.4543 5.81464 67.5031 6.00565 67.4974 6.19897Z"
                            fill="#214C2C" />
                        <path
                            d="M117.219 1.9576C117.124 2.49257 116.779 2.77619 116.219 2.77619C115.579 2.77619 115.176 2.38084 115.176 1.74741C115.176 1.11398 115.582 0.718634 116.225 0.718634C116.361 0.711612 116.498 0.732063 116.626 0.77877C116.754 0.825477 116.871 0.897503 116.971 0.990539C117.097 1.12074 117.178 1.28827 117.201 1.46819H116.898C116.832 1.14926 116.588 0.972886 116.222 0.972886C115.782 0.972886 115.477 1.28005 115.477 1.74594C115.47 1.84705 115.485 1.94842 115.52 2.0435C115.555 2.13858 115.609 2.22525 115.68 2.29786C115.75 2.37047 115.835 2.4274 115.929 2.46499C116.023 2.50258 116.124 2.51998 116.225 2.51605C116.331 2.52065 116.437 2.50092 116.535 2.45839C116.632 2.41586 116.719 2.35165 116.787 2.27063C116.857 2.17724 116.901 2.06733 116.915 1.95172L117.219 1.9576Z"
                            fill="#214C2C" />
                        <path
                            d="M116.197 3.50081C115.852 3.50081 115.514 3.39813 115.226 3.20579C114.939 3.01346 114.715 2.74009 114.582 2.42025C114.45 2.10041 114.415 1.74846 114.483 1.40891C114.55 1.06937 114.717 0.757477 114.961 0.51268C115.206 0.267884 115.517 0.101174 115.856 0.0336346C116.195 -0.0339047 116.547 0.000756994 116.866 0.13324C117.186 0.265723 117.459 0.490098 117.651 0.777948C117.843 1.0658 117.946 1.4042 117.946 1.75039C117.945 2.21439 117.76 2.65915 117.433 2.98724C117.105 3.31534 116.661 3.50003 116.197 3.50081ZM116.197 0.29395C115.91 0.29395 115.628 0.379374 115.389 0.539412C115.15 0.699449 114.964 0.926922 114.854 1.19305C114.743 1.45919 114.715 1.75201 114.771 2.03453C114.827 2.31706 114.965 2.57659 115.169 2.78028C115.372 2.98397 115.631 3.12268 115.914 3.17888C116.196 3.23508 116.488 3.20623 116.754 3.096C117.02 2.98576 117.247 2.79909 117.407 2.55958C117.567 2.32007 117.652 2.03845 117.652 1.75039C117.651 1.36436 117.498 0.99437 117.225 0.7214C116.953 0.44843 116.583 0.294727 116.197 0.29395Z"
                            fill="#214C2C" />
                    </svg>


                </a>

            </div>



            <?php if(is_page_template( 'page-templates/page-home.php' )) { ?>
            <!-- section-indicator on homepage -->
            <div
                class="col-4 col-md-4 d-flex align-items-center justify-content-center justify-content-md-start gsap__section-indicator-home-page">
                <span class="top-bar--page-title ">Who we are</span>
            </div>
            <?php } ?>

            <?php if('influencer_post_type' === get_post_type()) { ?>
            <!-- section-indicator on single influencers -->
            <div
                class="col-4 col-md-4 d-flex align-items-center justify-content-center justify-content-md-start gsap__section-indicator-home-page">
                <span class="top-bar--page-title color-yellow">Influencers</span>
            </div>
            <?php } ?>



            <?php if(is_page_template( 'page-templates/page-over-ons.php' )) { ?>
            <!-- section-indicator on over ons page -->
            <div class="col-4 col-md-4 d-flex align-items-center justify-content-center justify-content-md-start ">
                <span class="top-bar--page-title ">Over ons</span>
            </div>
            <?php } ?>


            <?php if(is_page_template( 'page-templates/page-manage.php' )) { ?>
            <!-- section-indicator on manage page -->
            <div class="col-4 col-md-4 d-flex align-items-center justify-content-center justify-content-md-start ">
                <span class="top-bar--page-title ">Manage</span>
            </div>
            <?php } ?>

            <?php if(is_page_template( 'page-templates/page-make.php' )) { ?>
            <!-- section-indicator on page: make-->
            <div class="col-4 col-md-4 d-flex align-items-center justify-content-center justify-content-md-start ">
                <span class="top-bar--page-title ">Make</span>
            </div>
            <?php } ?>

            <?php if(is_page_template( 'page-templates/page-contact.php' )) { ?>
            <!-- section-indicator on page: contact us-->
            <div class="col-4 col-md-4 d-flex align-items-center justify-content-center justify-content-md-start ">
                <span class="top-bar--page-title ">Contact</span>
            </div>
            <?php } ?>


            <div class="col-4 col-md-6 d-flex align-items-center justify-content-end pe-0">
                <a class="top-bar--contact-link d-none d-lg-inline-flex gsap__section-indicator-home-page"
                    href="<?php echo get_home_url('', 'contact') ?>">Contact us</a>
                <div class="hamburger gsap__section-indicator-home-page">
                    <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="19.9474" y1="0.5" x2="1.90735e-05" y2="0.5" stroke="#214D2C" />
                        <line x1="19.9474" y1="8.10693" x2="1.90735e-05" y2="8.10693" stroke="#214D2C" />
                        <line x1="19.9474" y1="15.7144" x2="1.90735e-05" y2="15.7144" stroke="#214D2C" />
                    </svg>
                </div>


            </div>
        </div>
    </div>

</section>

<div class="smooth-scroll">
    <!-- open smooth scroll -->