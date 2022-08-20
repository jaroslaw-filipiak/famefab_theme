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
                class="col-4 col-md-3 d-flex align-items-center justify-content-start ps-0 top-bar--logo gsap__section-indicator-home-page">
                <a href="<?php echo get_home_url() ?>"> <svg width="120" height="20" viewBox="0 0 120 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.3521 3.35864V1.34473H0V18.7988H2.1482V11.1134H10.499V9.09946H2.1482V3.35273L12.3521 3.35864Z"
                            fill="#214D2C" />
                        <path
                            d="M24.394 8.52614C23.9543 7.40778 23.283 6.55745 22.3801 5.97516C21.4771 5.39286 20.3715 5.10222 19.0633 5.10321C17.8892 5.08598 16.7344 5.40269 15.7333 6.01647C14.7488 6.62457 13.9465 7.48698 13.4111 8.51285C12.8344 9.62339 12.5439 10.8602 12.5657 12.1114C12.5429 13.3616 12.8432 14.5965 13.4376 15.6966C13.9979 16.7299 14.8302 17.5902 15.8445 18.1842C16.8588 18.7783 18.0164 19.0833 19.1917 19.0664C20.1443 19.0853 21.0878 18.878 21.9448 18.4615C22.7132 18.0817 23.3768 17.5194 23.8776 16.8238C24.3737 16.1257 24.7001 15.3214 24.8307 14.475H22.8168C22.5988 15.2227 22.1411 15.878 21.514 16.3399C20.8399 16.8275 20.0233 17.0781 19.1917 17.0525C18.4222 17.0665 17.6628 16.8766 16.9904 16.5022C16.3441 16.1334 15.8067 15.6005 15.4324 14.9574C15.0238 14.2505 14.7765 13.462 14.708 12.6484H24.9118C25.0043 11.0196 24.8317 9.64548 24.394 8.52614ZM14.8481 10.7157C15.097 9.60516 15.5981 8.72778 16.3515 8.08352C17.105 7.43926 18.0359 7.11712 19.1445 7.11712C20.0407 7.10413 20.9087 7.43038 21.5745 8.03042C22.263 8.63829 22.6432 9.53336 22.715 10.7157H14.8481Z"
                            fill="#214D2C" />
                        <path
                            d="M80.4619 8.52612C80.0242 7.40776 79.3529 6.55743 78.4479 5.97514C77.543 5.39284 76.4375 5.1022 75.1312 5.10319C73.9576 5.08624 72.8033 5.40294 71.8027 6.01645C70.8177 6.62446 70.0149 7.48686 69.479 8.51283C68.9023 9.62337 68.6118 10.8602 68.6336 12.1114C68.6105 13.3618 68.9114 14.5969 69.507 15.6966C70.0669 16.7302 70.8992 17.5908 71.9136 18.1849C72.9279 18.7789 74.0856 19.0838 75.2611 19.0664C76.2137 19.0854 77.1572 18.8781 78.0141 18.4615C78.7828 18.0821 79.4465 17.5197 79.9469 16.8238C80.4431 16.1257 80.7694 15.3214 80.9001 14.475H78.8861C78.6692 15.2228 78.2118 15.8782 77.5848 16.3399C76.9101 16.8272 76.0931 17.0778 75.2611 17.0525C74.4916 17.0663 73.7322 16.8764 73.0598 16.5022C72.4135 16.1334 71.8761 15.6005 71.5017 14.9574C71.0939 14.2502 70.8466 13.4619 70.7773 12.6484H80.9812C81.0756 11.0195 80.9025 9.64546 80.4619 8.52612ZM70.916 10.7156C71.1668 9.60514 71.668 8.72776 72.4194 8.0835C73.1709 7.43924 74.1019 7.1171 75.2124 7.1171C76.1086 7.10381 76.9767 7.4301 77.6423 8.0304C78.3309 8.63827 78.7115 9.53334 78.7843 10.7156H70.916Z"
                            fill="#214D2C" />
                        <path
                            d="M86.4416 4.56596V5.37156H89.7982V7.38548H86.4416V18.7977H84.2993V7.38548H81.9106V5.37156H84.2993V4.56596C84.2993 3.49187 84.4921 2.61892 84.8777 1.94712C85.2424 1.29508 85.8073 0.777766 86.4888 0.471714C87.2378 0.146642 88.0479 -0.0133661 88.8642 0.00254518H90.1006V2.15074H88.8642C88.4489 2.12767 88.0333 2.19149 87.644 2.33812C87.278 2.47911 86.9699 2.73889 86.7691 3.07582C86.5464 3.42402 86.4416 3.92121 86.4416 4.56596Z"
                            fill="#214D2C" />
                        <path
                            d="M117.803 8.51308C117.349 7.51226 116.636 6.6506 115.738 6.01671C114.855 5.40586 113.804 5.08651 112.731 5.10344C111.727 5.10344 110.909 5.28688 110.274 5.65376C109.938 5.84593 109.632 6.08876 109.37 6.37374C109.152 6.61622 108.965 6.88369 108.811 7.17048C108.49 7.75711 108.273 8.39519 108.172 9.05605H108.033L108.166 0H106.018V18.8188H108.2L108.052 17.9483L107.558 15.0521H107.927C107.968 15.5114 108.086 15.9604 108.278 16.3799C108.503 16.8584 108.815 17.2907 109.199 17.6547C109.656 18.1239 110.207 18.4921 110.815 18.7358C111.423 18.9794 112.076 19.0932 112.731 19.0696C113.337 19.0736 113.939 18.9738 114.511 18.7745C114.927 18.6251 115.321 18.4228 115.684 18.1726C116.585 17.545 117.307 16.6938 117.779 15.7028C118.313 14.5842 118.58 13.3567 118.557 12.1175C118.578 10.8748 118.321 9.64306 117.803 8.51308ZM115.856 14.6493C115.522 15.3528 115.008 15.9552 114.365 16.3947C113.721 16.8206 112.963 17.0408 112.191 17.0262C111.278 17.0262 110.526 16.8024 109.935 16.3549C109.462 15.9947 109.075 15.5329 108.805 15.0034C108.731 14.8618 108.664 14.7165 108.605 14.5681C108.325 13.8484 108.175 13.0845 108.163 12.3122C108.163 12.2459 108.163 12.1795 108.163 12.1116C108.145 11.2278 108.295 10.3486 108.605 9.52079C108.869 8.81837 109.337 8.21065 109.948 7.77538C110.549 7.35538 111.297 7.14492 112.191 7.14393C113.533 7.14393 114.571 7.61407 115.305 8.55439C116.039 9.49472 116.406 10.6805 116.406 12.1116C116.423 12.9903 116.234 13.8607 115.856 14.6537V14.6493Z"
                            fill="#214D2C" />
                        <path
                            d="M100.85 5.37391L100.906 5.7044L101.496 9.13915H101.127C101.091 8.50867 100.917 7.8938 100.617 7.33801C100.317 6.78222 99.899 6.29908 99.3919 5.92276C98.306 5.12752 97.164 5.11276 96.5886 5.1039C95.4876 5.09083 94.4081 5.40901 93.4902 6.01717C92.5535 6.6418 91.7987 7.50304 91.3022 8.51354C90.7742 9.63691 90.4991 10.8625 90.4966 12.1038C90.4941 13.3451 90.764 14.5718 91.2874 15.6973C91.7695 16.69 92.5004 17.5409 93.4091 18.1671C93.8674 18.4819 94.3736 18.7205 94.9081 18.8739C95.3691 19.0008 95.8449 19.0658 96.323 19.0671C96.7332 19.0671 97.9268 19.0834 98.9669 18.4991C100.737 17.5076 101.08 15.3521 101.127 15.0319H101.496L101.003 17.9178L100.855 18.803H103.035V5.37687L100.85 5.37391ZM100.883 12.2906C100.875 13.0691 100.73 13.84 100.456 14.5686C100.394 14.7289 100.323 14.8856 100.243 15.0378C99.9754 15.5559 99.5935 16.0064 99.1263 16.3553C98.5253 16.8019 97.7689 17.0257 96.8571 17.0267C96.0896 17.0377 95.3365 16.8177 94.6956 16.3952C94.0465 15.9593 93.5271 15.3563 93.1922 14.6498C92.8142 13.8581 92.6257 12.9892 92.6419 12.1121C92.6419 10.679 93.0088 9.49322 93.7425 8.55486C94.4763 7.6165 95.5145 7.14637 96.8571 7.1444C97.7522 7.1444 98.4997 7.35486 99.0997 7.77584C99.5803 8.11535 99.9724 8.56516 100.243 9.0875C100.317 9.22846 100.384 9.37324 100.442 9.52126C100.729 10.2756 100.879 11.075 100.885 11.8819C100.885 11.9571 100.885 12.0295 100.885 12.1121C100.885 12.1947 100.885 12.2316 100.883 12.2935V12.2906Z"
                            fill="#214D2C" />
                        <path
                            d="M47.4503 9.82887V18.7979H45.3021V10.3659C45.3021 9.32721 45.0606 8.54872 44.5777 8.03036C44.0947 7.512 43.3698 7.25232 42.4029 7.25134C41.6833 7.24696 40.9765 7.44202 40.361 7.81492C40.1853 7.92074 40.0173 8.03858 39.8579 8.16756C39.4373 8.5202 39.0994 8.96091 38.8679 9.45854C38.612 10.0272 38.4903 10.6471 38.5123 11.2703C38.5211 12.6307 38.468 15.2834 38.4282 18.7949H36.28V10.3629C36.28 9.32426 36.0385 8.54576 35.5556 8.0274C35.0726 7.50904 34.3472 7.24937 33.3794 7.24839C32.6602 7.2442 31.9539 7.43926 31.3389 7.81196C30.7261 8.18145 30.2098 8.69118 29.8325 9.29918C29.8192 9.31836 29.8074 9.33756 29.7956 9.35674C29.5871 9.67627 29.4257 10.0241 29.3161 10.3895C29.2117 10.7587 29.1693 11.1426 29.1907 11.5256V18.7919H27.0425V5.36577H29.2261L28.5828 9.131H28.9517C28.9702 8.44726 29.1665 7.78011 29.5212 7.19526C29.7554 6.82612 30.045 6.49522 30.3799 6.21413C30.6845 5.94651 31.0228 5.71983 31.3861 5.53986C31.7883 5.34189 32.218 5.20561 32.6608 5.1356C33.0413 5.07948 33.4268 5.06661 33.8102 5.09723C34.5346 5.13264 35.0805 5.16952 35.7429 5.41886C36.2913 5.61821 36.7873 5.9396 37.1933 6.35871C37.5972 6.78715 37.9081 7.29447 38.1065 7.84885C38.2096 8.13131 38.2861 8.42274 38.3352 8.71936C38.4098 8.48242 38.499 8.25034 38.6023 8.02445C38.8599 7.44508 39.2141 6.91371 39.6498 6.45312C40.0594 6.02153 40.5531 5.67852 41.1005 5.4453C41.6479 5.21209 42.2373 5.09363 42.8323 5.09723C43.4906 5.08771 44.1453 5.19665 44.7651 5.41886C45.3135 5.61821 45.8094 5.9396 46.2154 6.35871C46.6193 6.78715 46.9302 7.29447 47.1287 7.84885C47.3521 8.48464 47.461 9.15504 47.4503 9.82887Z"
                            fill="#214D2C" />
                        <path
                            d="M67.8457 6.22446C67.8457 6.25987 67.8457 6.29676 67.8457 6.33512C67.8117 6.74336 67.7541 7.14928 67.6731 7.55085L64.9067 17.6352L64.6116 18.7329C64.6063 18.8254 64.5644 18.9121 64.4953 18.9738C64.4261 19.0355 64.3353 19.0672 64.2428 19.0619H62.8234C62.7777 19.0619 62.7113 19.0487 62.6523 18.9395C62.6032 18.7952 62.6079 18.638 62.6655 18.4969L65.544 9.0823C65.6471 8.76304 65.7154 8.43361 65.7477 8.09969C65.7477 7.90051 65.6444 7.78541 65.4673 7.78541C65.2903 7.78541 65.0764 7.95658 64.7621 8.32544C64.2687 8.95438 63.8167 9.61477 63.4091 10.3025C62.7526 11.3559 62.1403 12.3282 61.5354 13.2739C60.8714 14.3067 60.4303 15.009 60.1898 15.397C59.5111 16.4627 58.901 17.5705 58.3632 18.7137C58.2688 18.9439 58.1375 19.0561 57.9634 19.0561H56.5603C56.5385 19.0584 56.5164 19.0554 56.4961 19.0471C56.4757 19.0389 56.4578 19.0257 56.4437 19.0088C56.398 18.9542 56.3567 18.82 56.4157 18.4969L59.2942 9.0823C59.3973 8.76304 59.4655 8.43361 59.4978 8.09969C59.4978 7.82674 59.3341 7.78541 59.2367 7.78541C59.0891 7.78541 58.9254 7.87543 58.7365 8.05985C58.4703 8.34258 58.2275 8.64653 58.0106 8.96869C57.6344 9.52935 57.2036 10.1992 56.7314 10.9605C56.2593 11.7218 55.6588 12.6616 54.8901 13.8567C53.5401 15.9562 52.6874 17.3195 52.3584 17.9097C52.0839 18.3995 51.867 18.7875 51.8375 18.8288C51.8172 18.8612 51.7934 18.8914 51.7667 18.9188C51.7473 18.9399 51.7255 18.9588 51.7018 18.9749C51.6753 18.9911 51.6502 19.0059 51.6266 19.0177C51.6045 19.0293 51.5819 19.0396 51.5587 19.0487C51.5439 19.0535 51.5285 19.056 51.513 19.0561H50.7103C50.6445 19.0635 50.5779 19.0561 50.5153 19.0344C50.4528 19.0127 50.3959 18.9772 50.3488 18.9306C50.2736 18.8333 50.2648 18.6665 50.3252 18.4393L52.7523 9.2918L52.6047 9.38329C52.1535 9.64981 51.6445 9.80311 51.1211 9.83009C50.5977 9.85707 50.0756 9.75693 49.5994 9.53821L49.1567 7.75148L49.1759 7.74262C50.8239 6.99459 52.2477 6.34691 53.4885 4.81396C54.1273 4.92334 54.7723 4.99182 55.4198 5.01903C55.5197 5.01044 55.6189 5.04175 55.6957 5.10609C55.8034 5.23298 55.7208 5.49266 55.681 5.59741V5.61953C55.6713 5.73911 55.651 5.85759 55.6205 5.97361L53.4074 13.4303L56.5544 8.22804C57.0296 7.40448 57.6476 6.67209 58.3795 6.06511C59.036 5.54281 59.5805 5.27723 60.0024 5.27723H60.5778C60.9378 5.27723 61.2064 5.38495 61.3731 5.59594C61.649 5.94856 61.6682 6.60215 61.4424 7.54051L59.8741 13.2252L62.8087 8.20001C63.3619 7.23215 63.9698 6.49443 64.6175 6.00607C65.2652 5.51771 65.8052 5.27723 66.2522 5.27723H66.8291C66.9786 5.2744 67.1277 5.2933 67.2718 5.33331C67.4558 5.38091 67.6144 5.49771 67.7144 5.65937C67.8112 5.83131 67.8568 6.02742 67.8457 6.22446Z"
                            fill="#214D2C" />
                        <path
                            d="M115.755 1.61143C115.755 0.664217 116.27 0.0283203 117.378 0.0283203C118.486 0.0283203 119.001 0.664217 119.001 1.61143C119.001 2.55864 118.494 3.20188 117.378 3.20188C116.263 3.20188 115.755 2.55569 115.755 1.61143ZM118.736 1.61143C118.736 0.792577 118.346 0.256979 117.372 0.256979C116.399 0.256979 116.011 0.792577 116.011 1.61143C116.011 2.43028 116.391 2.97322 117.372 2.97322C118.354 2.97322 118.736 2.42585 118.736 1.61143ZM117.361 1.78699H116.934V2.40665H116.676V0.807302H117.486C117.908 0.807302 118.091 0.975503 118.091 1.29124C118.091 1.55976 117.929 1.73387 117.632 1.77518L118.188 2.38306V2.40665H117.893L117.361 1.78699ZM116.934 1.02422V1.59075H117.465C117.693 1.59075 117.827 1.49486 117.827 1.30748C117.827 1.12011 117.737 1.02422 117.462 1.02422H116.934Z"
                            fill="#214D2C" />
                    </svg></a>


            </div>



            <?php if(is_page_template( 'page-templates/page-home.php' )) { ?>
            <!-- section-indicator on homepage -->
            <div
                class="col-4 col-md-3 d-flex align-items-center justify-content-center justify-content-md-start gsap__section-indicator-home-page">
                <span class="top-bar--page-title ">Who we are</span>
            </div>
            <?php } ?>


            <?php if(is_page_template( 'page-templates/page-over-ons.php' )) { ?>
            <!-- section-indicator on over ons page -->
            <div class="col-4 col-md-3 d-flex align-items-center justify-content-center justify-content-md-start ">
                <span class="top-bar--page-title ">Over ons</span>
            </div>
            <?php } ?>


            <?php if(is_page_template( 'page-templates/page-manage.php' )) { ?>
            <!-- section-indicator on manage page -->
            <div class="col-4 col-md-3 d-flex align-items-center justify-content-center justify-content-md-start ">
                <span class="top-bar--page-title ">Manage</span>
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