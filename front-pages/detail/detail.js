import gsap from 'gsap';

// influencer-detail

gsap.from('.our-reach--counter', {
  opacity: 0,
  scrollTrigger: {
    trigger: '.influencer-detail',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    end: 'bottom',
  },
});

gsap.to('#FBValue', {
  innerText: 17,
  snap: 'innerText',
  scrollTrigger: {
    trigger: 'body',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    end: 'bottom',
  },
});

gsap.to('#InstaValue', {
  innerText: 235,
  snap: 'innerText',
  scrollTrigger: {
    trigger: 'body',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    end: 'bottom',
  },
});

// title reveal main-title__single-influencer-page
gsap.from('.main-title__single-influencer-page', {
  scrollTrigger: {
    trigger: '.blank-hero__single-influencer-page',
    scroller: '.smooth-scroll',
    // scrub: true,
    markers: false,
  },
  yPercent: 200,
  //   duration: 1,
  ease: 'easeIn',
});

// blank-hero__single-influencer-page
gsap.to('.blank-hero__single-influencer-page', {
  //   opacity: 0,
  backgroundSize: '100%',
  //   scale: 2.5,
  scrollTrigger: {
    trigger: '.blank-hero__single-influencer-page',
    scroller: '.smooth-scroll',
    scrub: false,
    start: 'top bottom',
    ease: 'easeIn',
    // duration: 1,
    // end: 'top center',
  },
});

// blank-hero--content
gsap.from('.blank-hero--content', {
  scrollTrigger: {
    trigger: '.blank-hero__single-influencer-page',
    scroller: '.smooth-scroll',
    // scrub: true,
    markers: false,
  },
  opacity: 0,
  yPercent: 40,
  ease: 'easeIn',
});

// title reveal main-title__single-influencer-page
gsap.to('.main-title__single-influencer-page', {
  scrollTrigger: {
    trigger: '.influencer-detail',
    scroller: '.smooth-scroll',
    scrub: true,
    markers: false,
    stop: 'top top',
  },
  xPercent: 100,
  //   duration: 1,
  ease: 'easeIn',
});
