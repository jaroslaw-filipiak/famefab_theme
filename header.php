<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package femmefab
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<link rel="preload" href="<?php echo get_theme_file_uri() ?>/public/fonts/tiempos/TiemposFine-Light.woff2" as="font"
		type="font/woff2" crossorigin>

	<link rel="preload" href="<?php echo get_theme_file_uri() ?>/public/fonts/helvetica/HelveticaLTW01-Roman.woff2"
		as="font" type="font/woff2" crossorigin>


	<style>
	@font-face {
		font-family: 'mletter';
		src: url('<?php echo get_theme_file_uri() ?>/dist/fonts/m/font/mletter.eot?1439759');
		src: url('<?php echo get_theme_file_uri() ?>/dist/fonts/m/font/mletter.eot?1439759#iefix') format('embedded-opentype'),
			url('<?php echo get_theme_file_uri() ?>/dist/fonts/m/font/mletter.woff2?1439759') format('woff2'),
			url('<?php echo get_theme_file_uri() ?>/dist/fonts/m/font/mletter.woff?1439759') format('woff'),
			url('<?php echo get_theme_file_uri() ?>/dist/fonts/m/font/mletter.ttf?1439759') format('truetype'),
			url('<?php echo get_theme_file_uri() ?>/dist/fonts/m/font/mletter.svg?1439759#mletter') format('svg');
		font-weight: normal;
		font-style: normal;
	}

	/* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */
	/* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */
	/*
@media screen and (-webkit-min-device-pixel-ratio:0) {
  @font-face {
    font-family: 'mletter';
    src: url('../font/mletter.svg?68369927#mletter') format('svg');
  }
}
*/
	[class^="icon-"]:before,
	[class*=" icon-"]:before {
		font-family: "mletter";
		font-style: normal;
		font-weight: normal;
		speak: never;

		display: inline-block;
		text-decoration: inherit;
		/* width: 1em; */
		/* margin-right: .2em; */
		/* text-align: center; */
		/* opacity: .8; */

		/* For safety - reset parent styles, that can break glyph codes*/
		font-variant: normal;
		text-transform: none;

		/* fix buttons height, for twitter bootstrap */
		/* line-height: 1em; */

		/* Animation center compensation - margins should be symmetric */
		/* remove if not needed */
		/* margin-left: .2em; */

		/* you can be more comfortable with increased icons size */
		/* font-size: 120%; */

		/* Font smoothing. That was taken from TWBS */
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		/* Uncomment for 3D effect */
		/* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */
	}

	/* =================== */

	.icon-m-vec:before {
		content: '\e800';
	}

	/* '' */
	.icon-vector-(5):before {
		content: '\e801';
	}

	/* '' */
	.icon-m2:before {
		content: '\e802';
	}

	/* '' */
	.icon-m3:before {
		content: '\e803';
	}

	/* '' */
	.icon-m4:before {
		content: '\e804';
	}

	/* '' */
	.icon-m5:before {
		content: '\e805';
	}

	/* '' */

	/* '' */
	</style>

	<script src="https://code.jquery.com/jquery-3.6.1.slim.js"
		integrity="sha256-tXm+sa1uzsbFnbXt8GJqsgi2Tw+m4BLGDof6eUPjbtk=" crossorigin="anonymous"></script>


	<link rel="stylesheet" href="<?php echo get_theme_file_uri() ?>/inc/yt-video-popup/grt-youtube-popup.css">

	<?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>

	<div class="preloader"></div>

	<script type="module" src="<?php echo get_theme_file_uri() ?>/dist/main.js"></script>