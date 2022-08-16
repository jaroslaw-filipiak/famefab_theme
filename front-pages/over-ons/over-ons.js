import gsap from 'gsap';

// blank-hero--content color-green
// make title
gsap.from('.blank-hero--content', {
  scrollTrigger: {
    trigger: '.blank-hero',
    scroller: '.smooth-scroll',
    // scrub: true,
    markers: false,
  },

  yPercent: -150,
  duration: 1,
  ease: 'easeIn',
});

// make title
gsap.from('.blank-hero h1', {
  scrollTrigger: {
    trigger: '.blank-hero',
    scroller: '.smooth-scroll',
    // scrub: true,
    markers: false,
  },
  yPercent: 200,
  duration: 1,
  ease: 'easeIn',
});

// make title
gsap.to('.blank-hero h1', {
  scrollTrigger: {
    trigger: '.over-ons-title-trigger',
    scroller: '.smooth-scroll',
    scrub: true,
    markers: false,
  },
  xPercent: 200,
  duration: 1,
  ease: 'easeIn',
});

// bg scale
gsap.to('.over-ons-title-trigger', {
  //   opacity: 0,
  backgroundSize: '100%',
  //   scale: 2.5,
  scrollTrigger: {
    trigger: '.over-ons-title-trigger',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    // end: 'top center',
  },
});

// gallery / wp / opacity + scale bg size

gsap.to('.grid-area-photo1', {
  opacity: 1,
  scrollTrigger: {
    trigger: '.grid-area-photo1',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    end: 'top center',
  },
});

gsap.to('.grid-area-photo2', {
  opacity: 1,
  scrollTrigger: {
    trigger: '.grid-area-photo2',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    end: 'top center',
  },
});

gsap.to('.grid-area-photo3', {
  opacity: 1,
  scrollTrigger: {
    trigger: '.grid-area-photo3',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    end: 'top center',
  },
});

gsap.to('.grid-area-photo4', {
  opacity: 1,
  scrollTrigger: {
    trigger: '.grid-area-photo4',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    end: 'top center',
  },
});

gsap.to('.grid-area-photo5', {
  opacity: 1,
  scrollTrigger: {
    trigger: '.grid-area-photo5',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    end: 'top center',
  },
});

gsap.to('.grid-area-photo6', {
  opacity: 1,
  scrollTrigger: {
    trigger: '.grid-area-photo6',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    end: 'top center',
  },
});
