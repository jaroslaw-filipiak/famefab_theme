import gsap from 'gsap';

// big logo reveal on load
gsap.from('.logo_big', {
  scrollTrigger: {
    trigger: '.hello',
    scroller: '.smooth-scroll',
    // scrub: true,
    markers: true,
  },
  yPercent: 200,
  duration: 1,
  ease: 'easeIn',
});

// gsap.from('.gsap__reveal', {
//   scrollTrigger: {
//     trigger: '.hello',
//     scroller: '.smooth-scroll',
//     // scrub: true,
//     markers: true,
//   },
//   yPercent: 20,
//   opacity: 0,
//   duration: 1,
//   ease: 'easeIn',
// });

gsap.from('.gsap__reveal-heading', {
  scrollTrigger: {
    trigger: '.who-we-are',
    scroller: '.smooth-scroll',
    start: 'top center',
    // scrub: true,
    markers: true,
  },
  yPercent: 60,
  xPercent: 2,
  opacity: 0,
  duration: 1,
  ease: 'easeIn',
});
