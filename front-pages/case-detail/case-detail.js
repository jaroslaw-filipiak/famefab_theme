import gsap from 'gsap';

gsap.from('.our-reach--counter', {
  opacity: 0,
  scrollTrigger: {
    trigger: '.gsap__reveal-counter',
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

// detail-hero--title

gsap.from('.detail-hero--title ', {
  scrollTrigger: {
    trigger: '.detail-hero',
    scroller: '.smooth-scroll',
    // scrub: true,
    start: 'top bottom',
    // end: 'bottom',
  },
  opacity: 0,
  scale: 2,
});

gsap.from('.detail-hero--subtitle ', {
  scrollTrigger: {
    trigger: '.detail-hero',
    scroller: '.smooth-scroll',
    // scrub: true,
    start: 'top bottom',
    // end: 'bottom',
  },
  opacity: 0,
  scale: 2,
});

// item-prev

gsap.to('.item-prev', {
  //   opacity: 0,
  backgroundSize: '100%',
  //   scale: 2.5,
  scrollTrigger: {
    trigger: '.detail-pagination',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    // end: 'top center',
  },
});

gsap.to('.item-next', {
  //   opacity: 0,
  backgroundSize: '100%',
  //   scale: 2.5,
  scrollTrigger: {
    trigger: '.detail-pagination',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    // end: 'top center',
  },
});
