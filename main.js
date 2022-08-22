import './main.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger);

const scroll = new LocomotiveScroll({
  el: document.querySelector('.smooth-scroll'),
  smooth: true,
});

scroll.on('scroll', ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy('.smooth-scroll', {
  scrollTop(value) {
    return arguments.length
      ? scroll.scrollTo(value, 0, 0)
      : scroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector('.smooth-scroll').style.transform
    ? 'transform'
    : 'fixed',
});

const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  gsap.to($bigBall, 0.4, {
    x: e.pageX - 15,
    y: e.pageY - 15,
  });
  gsap.to($smallBall, 0.1, {
    x: e.pageX - 5,
    y: e.pageY - 7,
  });
}

import {
  handleScreenMenuLinksOnHover,
  handleHamburgerClick,
  handleClosemenu,
} from './js/main-menu';

import { checkUserZoomValue } from './js/zoom';

window.addEventListener('DOMContentLoaded', () => {
  function init() {
    handleScreenMenuLinksOnHover();
    handleHamburgerClick();
    handleClosemenu();
    checkUserZoomValue();
  }

  init();
});

// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.logo_big',
//     scroller: '.smooth-scroll',
//     scrub: true,
//     markers: true,
//     start: '20px 95%',
//     end: 'bottom 40px',
//   },
// });

// ScrollTrigger.create({
//   animation: tl,
//   trigger: '.hello__logo-trigger',
// });

// scrollTrigger: {
//   trigger: '.logo_big',
//   scroller: '.smooth-scroll',
//   scrub: true,
//   markers: true,
//   start: '20px 95%',
//   end: 'bottom 40px',
// },

// footer change bg

gsap.to('.footer', {
  '--footer-bg-color': '#e4e1f4',
  immediateRender: false,
  scrollTrigger: {
    trigger: '.footer',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 60%',
    end: '+=100%',
  },
});

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

console.log('isMobile' + isMobile);
