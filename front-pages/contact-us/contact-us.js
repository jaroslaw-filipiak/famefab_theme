import gsap from 'gsap';

gsap.from('.our-reach--counter', {
  opacity: 0,
  scrollTrigger: {
    trigger: '.gsap__reveal-trigger__contact-us',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    end: 'bottom',
  },
});

gsap.to('#ourReachValue', {
  innerText: 435,
  snap: 'innerText',
  scrollTrigger: {
    trigger: 'body',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    end: 'bottom',
  },
});

// contact us text
gsap.from('.contact-us__hero-gsap', {
  scrollTrigger: {
    trigger: '.contact-us-hero',
    scroller: '.smooth-scroll',
    scrub: true,
    markers: false,
    start: 'top bottom',
  },
  bottom: -200,
  duration: 0.8,
  ease: 'easeIn',
  opacity: 0,
});

gsap.to('.contact-us__hero-gsap', {
  scrollTrigger: {
    trigger: '.contact-us-hero',
    scroller: '.smooth-scroll',
    scrub: true,
    // markers: true,
    start: 'top top',
  },
  xPercent: -300,
});

// gsap.to('.contact-us__hero-gsap', {
//   scrollTrigger: {
//     trigger: '.blank-hero',
//     scroller: '.smooth-scroll',
//     scrub: true,
//     // markers: true,
//     start: 'top 90%',
//   },

//   color: '#e7ffc8',
//   ease: 'easeIn',
//   // duration: 0.8,
// });

// gsap.to('.contact-us__hero-gsap', {
//   scrollTrigger: {
//     trigger: '.who-we-are__contact-us',
//     scroller: '.smooth-scroll',
//     scrub: true,
//     // markers: true,
//     start: 'top 120%',
//   },

//   color: '#e7ffc8',
//   ease: 'easeIn',
//   // duration: 0.8,
//   opacity: 0,
//   xPercent: -200,
// });

// blank hero bg scale
gsap.to('.blank-hero', {
  //   opacity: 0,
  backgroundSize: '100%',
  //   scale: 2.5,
  scrollTrigger: {
    trigger: '.blank-hero',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    // end: 'top center',
  },
});

// who-we-are__contact-us--title
gsap.from('.who-we-are__contact-us--title', {
  scrollTrigger: {
    trigger: '.who-we-are__contact-us',
    scroller: '.smooth-scroll',
    scrub: true,
    // markers: true,
    start: 'top bottom',
    end: 'top 20%',
  },
  xPercent: -300,
  yPercent: -30,
  scale: 2,
  opacity: 0,
  ease: 'easeIn',
});

// who-we-are__contact-us--title
gsap.from('.manage-gallery--title', {
  scrollTrigger: {
    trigger: '.manage-gallery',
    scroller: '.smooth-scroll',
    scrub: true,
    // markers: true,
    start: 'top bottom',
  },
  xPercent: -300,
  scale: 2,
  opacity: 0,
  ease: 'easeIn',
});
