import gsap from 'gsap';

// const counterWrapper = document.querySelector('#ourReachValue');

// let counter = {
//   value: 0,
// };

// gsap.to(counter, {
//   value: 10,
//   onUpdate: () => {
//     console.log(counter.value);
//     counterWrapper.innerText = Math.round(counter.value);
//   },
// });

// gsap.to('#ourReachValue', { innerText: 200, snap: 'innerText' });
// ourReachValue

gsap.from('.our-reach--counter', {
  opacity: 0,
  scrollTrigger: {
    trigger: '.gsap__reveal-heading',
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

gsap.to('body', {
  '--color': '#e4e1f4',
  immediateRender: false,
  scrollTrigger: {
    trigger: '.hello',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    end: '+=100%',
  },
});

gsap.to('body', {
  '--color': '#f1f0ef',
  immediateRender: false,
  scrollTrigger: {
    trigger: '.who-we-are',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 20%',
    end: '+=100%',
  },
});

// big logo reveal on load
gsap.from('.logo_big', {
  scrollTrigger: {
    trigger: '.hello',
    scroller: '.smooth-scroll',
    // scrub: true,
    markers: false,
  },
  yPercent: 200,
  duration: 1,
  ease: 'easeIn',
});

gsap.from('.gsap__reveal', {
  scrollTrigger: {
    trigger: '.hello',
    scroller: '.smooth-scroll',
    // scrub: true,
    // markers: true,
  },

  opacity: 0,
  duration: 1,
  ease: 'easeIn',
});

gsap.from('.gsap__reveal-heading', {
  scrollTrigger: {
    trigger: '.who-we-are',
    scroller: '.smooth-scroll',
    start: 'top center',
    // scrub: true,
    start: '20px 80%',
    // markers: true,
  },
  yPercent: 20,
  opacity: 0,
  duration: 1,
  ease: 'easeIn',
});

gsap.from('.gsap__title-horizontaly-scrub', {
  scrollTrigger: {
    trigger: '.home-manage',
    scroller: '.smooth-scroll',
    start: 'top center',
    end: '90% top',
    scrub: true,
    start: '20px 80%',
    // markers: true,
  },

  xPercent: -300,
  opacity: 0,
  duration: 1,
  ease: 'easeIn',
});

gsap.from('.manage-gallery-row-2', {
  scrollTrigger: {
    trigger: '.manage-gallery',
    scroller: '.smooth-scroll',
    start: 'top bottom',
    // end: 'top bottom',
    scrub: true,
    // start: '20px 80%',
    // markers: true,
  },

  yPercent: 10,
  scale: 0.8,
  //   opacity: 0,
  //   duration: 1,
  ease: 'easeIn',
});

// manage-gallery-row-2
gsap.from('.manage-gallery-row-1', {
  scrollTrigger: {
    trigger: '.manage-gallery',
    scroller: '.smooth-scroll',
    start: 'top bottom',
    // end: 'top bottom',
    scrub: true,
    // start: '20px 80%',
    // markers: true,
  },

  yPercent: 5,
  scale: 1.4,
  //   opacity: 0,
  //   duration: 1,
  ease: 'easeIn',
});

gsap.from('.gsap__we-love-to-manage-horizontaly__title', {
  scrollTrigger: {
    trigger: '.gsap__we-love-to-manage-horizontaly--trigger',
    scroller: '.smooth-scroll',
    start: 'top center',
    end: '90% top',
    scrub: true,
    start: '20px 80%',
    // markers: true,
  },

  //   yPercent: 200,
  opacity: 0,
  duration: 3,
  ease: 'easeIn',
});

gsap.from('.gsap__we-love-to-manage-horizontaly', {
  scrollTrigger: {
    trigger: '.gsap__we-love-to-manage-horizontaly--trigger',
    scroller: '.smooth-scroll',
    start: 'top center',
    end: '90% top',
    scrub: true,
    start: '20px 80%',
    // markers: true,
  },

  xPercent: 300,
  opacity: 0,
  duration: 1,
  ease: 'easeIn',
});

// make--title
gsap.from('.scale-from-1-5-text', {
  opacity: 0,
  scale: 1.5,
  scrollTrigger: {
    trigger: '.make',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    end: 'top 5%',
  },
});

// make--title
gsap.from('.scale-from-1-5-text__smaller', {
  opacity: 0,
  scale: 2.5,
  scrollTrigger: {
    trigger: '.make',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    end: 'top 5%',
  },
});

// make horizontal
gsap.from('.make-with-bg--title', {
  scrollTrigger: {
    trigger: '.make-with-bg--title__trigger',
    scroller: '.smooth-scroll',
    start: 'top bottom',
    end: '90% top',
    scrub: true,
    pin: true,
    // start: '20px 80%',
    // markers: true,
  },

  xPercent: -300,
  opacity: 0,
  duration: 1,
  ease: 'easeIn',
});

// make-gallery--title_2

// .make-with-bg--title__in-body

gsap.from('.make-with-bg--title__in-body', {
  scrollTrigger: {
    trigger: '.make-with-bg--title__trigger',
    scroller: '.smooth-scroll',
    start: 'top bottom',
    end: '90% top',
    scrub: true,
    pin: true,
    // start: '20px 80%',
    // markers: true,
  },

  xPercent: -300,
  opacity: 0,
  duration: 1,
  ease: 'easeIn',
});

// gsap__mange-bg--scale
gsap.to('.gsap__manage-bg--scale', {
  //   opacity: 0,
  backgroundSize: '100%',
  //   scale: 2.5,
  scrollTrigger: {
    trigger: '.home-manage',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    // end: 'top center',
  },
});

// gsap__make-with-bg--scale
gsap.to('.gsap__make-with-bg--scale', {
  //   opacity: 0,
  backgroundSize: '100%',
  //   scale: 2.5,
  scrollTrigger: {
    trigger: '.gsap__make-with-bg--scale',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    // end: 'top center',
  },
});

// make-gallery-row-1
// make-gallery

gsap.from('.make-gallery-row-1', {
  opacity: 0,
  scale: 1.6,
  scrollTrigger: {
    trigger: '.make-gallery',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    end: 'top 5%',
  },
});

// make horizontal 2
gsap.from('.make-gallery--title_2', {
  scrollTrigger: {
    trigger: '.make-gallery--col-right',
    scroller: '.smooth-scroll',
    start: 'top bottom',
    end: '90% top',
    scrub: true,

    // start: '20px 80%',
    // markers: true,
  },

  xPercent: -300,
  opacity: 0,
  duration: 1,
  ease: 'easeIn',
});

// contact
gsap.from('.contact-us-row-1', {
  opacity: 0,
  scale: 2,
  scrollTrigger: {
    trigger: '.contact-us',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    end: 'top 5%',
  },
});

// contact-us--title

gsap.from('.contact-us--title', {
  scrollTrigger: {
    trigger: '.contact--trigger',
    scroller: '.smooth-scroll',
    start: 'top center',
    end: 'top 95%',
    scrub: true,
    markers: false,
  },
  yPercent: 100,
  duration: 1,
  ease: 'easeIn',
});
