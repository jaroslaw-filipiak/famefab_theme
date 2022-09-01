import gsap from 'gsap';

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

function changeContactUsClass(className) {
  console.log('change over ons class');
  const title = document.querySelector('.contact-us__hero-gsap');
  title.classList = `contact-us__hero-gsap ${className}`;
}

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
    end: '54%',
  },
});

gsap.to('.our-reach--counter', {
  '--counter-color': '#e7ffc8',
  immediateRender: false,
  scrollTrigger: {
    trigger: '.gsap__reveal-trigger__contact-us',
    scroller: '.smooth-scroll',
    scrub: true,
    start: () => 'top ' + window.innerWidth * 0.17,
    end: () => 'top ' + window.innerWidth * 0.2,
  },
});

gsap.to('.our-reach--counter', {
  '--counter-color': '#214c2c',
  immediateRender: false,
  scrollTrigger: {
    trigger: '.who-we-are__contact-us',
    scroller: '.smooth-scroll',
    scrub: true,
    start: () => 'top ' + window.innerWidth * 0.17,
    end: () => 'top ' + window.innerWidth * 0.2,
  },
});

gsap.to('.our-reach--counter', {
  left: -300,
  scrollTrigger: {
    trigger: '.footer',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 70%',
    end: 'top 40%',
  },
});

if (!isMobile) {
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
}

// title from bottom
gsap.from('.contact-us__hero-gsap', {
  scrollTrigger: {
    trigger: 'body',
    scroller: '.smooth-scroll',
    // scrub: true,
    markers: false,
    toggleActions: 'play none none reset',
  },
  bottom: '-400',
  duration: 1,
  ease: 'easeIn',
});

// title change color

gsap.to('.contact-us__hero-gsap', {
  scrollTrigger: {
    trigger: '.contact-us-title-change-color-trigger',
    scroller: '.smooth-scroll',
    // scrub: true,
    start: 'top 99%',
    end: 'top 80%',
    onEnter: () => changeContactUsClass('color-yellow'),
    onLeaveBack: () => changeContactUsClass('color-green'),
    toggleActions: 'play none none reset',
  },
});

// title opacity to zero
gsap.to('.contact-us__hero-gsap', {
  scrollTrigger: {
    trigger: '.gsap__reveal-trigger__contact-us',
    scroller: '.smooth-scroll',
    // scrub: true,
    start: 'top 10%',
    end: 'top top',

    toggleActions: 'play none none reset',
  },
  opacity: 0,
});

// content from zero
gsap.from('.gsap__page-contact-content-reveal', {
  scrollTrigger: {
    trigger: '.gsap__reveal-trigger__contact-us',
    scroller: '.smooth-scroll',
    // scrub: true,
    start: 'top 20%',
    end: 'top 45%',

    toggleActions: 'play none none reset',
  },
  opacity: 0,
});

// contact us text
// gsap.from('.contact-us__hero-gsap', {
//   scrollTrigger: {
//     trigger: '.contact-us-hero',
//     scroller: '.smooth-scroll',
//     scrub: true,
//     markers: false,
//     start: 'top bottom',
//   },
//   bottom: -200,
//   duration: 0.8,
//   ease: 'easeIn',
//   opacity: 0,
// });

// gsap.to('.contact-us__hero-gsap', {
//   scrollTrigger: {
//     trigger: '.contact-us-hero',
//     scroller: '.smooth-scroll',
//     scrub: true,
//     // markers: true,
//     start: 'top top',
//   },
//   xPercent: -300,
// });

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

if (!isMobile) {
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
}

if (isMobile) {
  // who-we-are__contact-us--title
  gsap.from('.manage-gallery--title', {
    scrollTrigger: {
      trigger: '.manage-gallery',
      scroller: '.smooth-scroll',
      scrub: true,

      start: 'top bottom',
      end: 'top center',
    },
    xPercent: -300,
    scale: 2,
    opacity: 0,
    ease: 'easeIn',
  });
}

if (isMobile) {
  gsap.from('.mobile__manage-gallery--vaccatures', {
    scrollTrigger: {
      trigger: '.manage-gallery',
      scroller: '.smooth-scroll',
      scrub: true,

      start: 'top bottom',
      end: 'top 30%',
    },
    xPercent: -300,
    ease: 'easeIn',
  });

  gsap.to('.mobile__manage-gallery--vaccatures', {
    scrollTrigger: {
      trigger: '.manage-gallery',
      scroller: '.smooth-scroll',
      scrub: true,
      start: 'bottom 70%',
      end: 'bottom 60%',
    },
    opacity: 0,
    ease: 'easeIn',
  });
}

// change dynamic title and class

function changeTextAndClass(value, addClass) {
  const topBar = document.querySelector('.top-bar');
  const title = document.querySelector('.top-bar--page-title ');
  title.innerHTML = value;
  topBar.classList = 'top-bar ' + addClass;
}

gsap.to('.top-bar--page-title', {
  snap: 'innerText',
  scrollTrigger: {
    trigger: '.gsap__reveal-trigger__contact-us',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 5%',
    end: 'top 3%',
    onEnter: () => changeTextAndClass('Contact', 'color-yellow'),
    onLeaveBack: () => changeTextAndClass('Contact', 'color-green'),
  },
});

gsap.to('.top-bar--page-title', {
  snap: 'innerText',
  scrollTrigger: {
    trigger: '.who-we-are__contact-us',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 5%',
    end: 'top 3%',
    onEnter: () => changeTextAndClass('Contact', 'color-green'),
    onLeaveBack: () => changeTextAndClass('Contact', 'color-yellow'),
  },
});
