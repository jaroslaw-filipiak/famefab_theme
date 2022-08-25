import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

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

var heroFirstScreenTimeline = gsap.timeline();

// big logo reveal on load
heroFirstScreenTimeline.from('.logo_big', {
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

// subtitle
heroFirstScreenTimeline.from('.hello--get-started-area', {
  scrollTrigger: {
    trigger: '.hello',
    scroller: '.smooth-scroll',
    // scrub: true,
    // markers: false,
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
    // markers: false,
    onEnter: () => console.log('enter'),
  },
  yPercent: 20,
  opacity: 0,
  duration: 1,
  ease: 'easeIn',
});

gsap.from('.gsap__title-horizontaly-scrub', {
  scrollTrigger: {
    trigger: '#home-manage',
    scroller: '.smooth-scroll',
    start: 'top 70%',
    end: 'top 10%',
    scrub: true,
    markers: false,
    duration: 1,
  },
  left: 2500,
  // top: 0,
});

gsap.to('.gsap__title-horizontaly-scrub', {
  scrollTrigger: {
    trigger: '#home-manage',
    scroller: '.smooth-scroll',
    start: 'top -20%',
    end: 'top -40%',
    scrub: true,
    markers: false,

    duration: 1,
  },
  color: '#214c2c',
  // top: 0,
});

gsap.from('.gsap-home-manage-reveal-timeline-after-title', {
  scrollTrigger: {
    trigger: '#home-manage',
    scroller: '.smooth-scroll',
    start: 'top 10%',
    end: 'top top',
    scrub: true,
    markers: false,

    duration: 1,
  },
  opacity: 0,
  // top: 0,
});

gsap.from('.gsap-home-manage-reveal-timeline-after-title__link', {
  scrollTrigger: {
    trigger: '#home-manage',
    scroller: '.smooth-scroll',
    start: 'top 10%',
    end: 'top top',
    scrub: true,
    markers: false,

    duration: 1,
  },
  opacity: 0,
  // top: 0,
});

gsap.from('.gsap_reveal_home_manage_slide_content', {
  scrollTrigger: {
    trigger: '.manage-gallery--item-2',
    scroller: '.smooth-scroll',
    start: 'top 60%',
    end: 'top top',
    scrub: true,
    // markers: false,

    duration: 1,
  },
  opacity: 0,
  // top: 0,
});

gsap.to('.home-manage--title', {
  scrollTrigger: {
    trigger: '.manage-gallery--item-2',
    scroller: '.smooth-scroll',
    start: 'top 10%',
    end: 'top -30%',
    scrub: true,
    // markers: false,

    // duration: 1,
  },
  opacity: 0,
  // top: 0,
});

// .gsap__section-indicator-home-page

gsap.from('.page-template-page-home .gsap__section-indicator-home-page', {
  scrollTrigger: {
    trigger: '.who-we-are .gsap__reveal-heading',
    scroller: '.smooth-scroll',
    start: 'top 60%',
    end: 'top 20%',
    scrub: true,
    // markers: false,
  },
  opacity: 0,
});

gsap.from('.manage-gallery-row-2', {
  scrollTrigger: {
    trigger: '.manage-gallery',
    scroller: '.smooth-scroll',
    start: 'top bottom',
    // end: 'top bottom',
    scrub: true,
    // start: '20px 80%',
    // markers: false,
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
    // markers: false,
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
    // markers: false,
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
    // markers: false,
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

// gsap__make-with-bg-reveal

gsap.from('.gsap__make-with-bg-reveal', {
  opacity: 0,
  scrollTrigger: {
    trigger: '.make-with-bg',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 40%',
    end: 'top 20%',
  },
});

// make horizontal
gsap.from('.make-with-bg--title', {
  scrollTrigger: {
    trigger: '.make-with-bg',
    scroller: '.smooth-scroll',
    start: 'top bottom',
    end: 'top 20%',
    scrub: true,

    // start: '20px 80%',
    // markers: false,
  },

  xPercent: 1400,
  opacity: 0,
  duration: 1,
  ease: 'easeIn',
});

// make horizontal
gsap.to('.make-with-bg--title', {
  scrollTrigger: {
    trigger: '.make-with-bg',
    scroller: '.smooth-scroll',
    start: 'top -10%',
    end: 'top -40%',
    scrub: true,

    // start: '20px 80%',
    // markers: false,
  },
  color: '#214c2c',
  ease: 'easeIn',
});

// make gallery section pin to top
// make-with-bg

// make horizontal
gsap.to('.make-with-bg--title', {
  scrollTrigger: {
    trigger: '.make-gallery-row-1',
    scroller: '.smooth-scroll',
    start: 'top 70%',
    end: 'top 3%',
    scrub: true,

    // start: '20px 80%',
    // markers: false,
  },
  // color: 'red',
  // ease: 'easeIn',
  left: -900,
  // opacity: 1,
});

// make-gallery--title_2

gsap.from('.make-with-bg--title__in-body', {
  scrollTrigger: {
    trigger: '.make-with-bg--title__trigger',
    scroller: '.smooth-scroll',
    start: 'top bottom',
    end: '90% top',
    scrub: true,
    pin: true,
    // start: '20px 80%',
    // markers: false,
  },

  xPercent: -300,
  opacity: 0,
  duration: 1,
  ease: 'easeIn',
});

if (!isMobile) {
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
}

// make-gallery-row-1
// make-gallery

// gsap.from('.make-gallery-row-1', {
//   opacity: 0,
//   scale: 1.6,
//   scrollTrigger: {
//     trigger: '.make-gallery',
//     scroller: '.smooth-scroll',
//     scrub: true,
//     start: 'top bottom',
//     end: 'top 5%',
//   },
// });

// make horizontal 2
gsap.from('.make-gallery--title_2', {
  scrollTrigger: {
    trigger: '.make-gallery--col-right',
    scroller: '.smooth-scroll',
    start: 'top bottom',
    end: '90% top',
    scrub: true,

    // start: '20px 80%',
    // markers: false,
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

var contactUsTitleOnHomepage = gsap.timeline();

// contact-us--title
contactUsTitleOnHomepage.from('.contact-us--title', {
  scrollTrigger: {
    trigger: '.contact--trigger',
    scroller: '.smooth-scroll',
    start: 'top bottom',
    end: 'top 50%',
    scrub: true,
    // start: '20px 80%',
    markers: false,
  },

  xPercent: 1400,
  // opacity: 0,
  duration: 1,
  ease: 'easeIn',
});

contactUsTitleOnHomepage.to('.contact-us--title', {
  scrollTrigger: {
    trigger: '.contact-us--item',
    scroller: '.smooth-scroll',
    start: 'top 60%',
    end: 'top 10%',
    scrub: true,
    // start: '20px 80%',
    markers: true,
  },

  // xPercent: 1400,
  opacity: 0,
  // duration: 1,
  ease: 'easeIn',
});

// section make gallery pin left side / on right side images are scrolled

let brandImageBlock = document.getElementById('brand-two-images');
let brandImagePin = document.getElementById('brand-image-pin');

let brandImageNotPin = document.getElementById('brand-image-notPin');

ScrollTrigger.create({
  trigger: '.make-gallery--col-right',
  scroller: '.smooth-scroll',
  start: 'top 10%',
  end: 'bottom 20%',
  // the nect line (with the arrow function) is 'a functional value' () =>
  // end: () =>
  //   `${brandImageNotPin.offsetHeight - brandImagePin.offsetHeight}px 20%`,
  // this line ensures the functional value gets recalculated on resize
  invalidateOnRefresh: true,
  pin: brandImagePin,
  // pinSpacing: true,
  // markers: {
  //   startColor: 'purple',
  //   endColor: 'fuschia',
  //   fontSize: '20px',
  //   indent: 200,
  // },
});

// our reach bg change color

gsap.to('.our-reach--counter', {
  '--counter-color': '#e7ffc8',
  immediateRender: false,
  scrollTrigger: {
    trigger: '.home-manage',
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
    trigger: '.manage-gallery--row',
    scroller: '.smooth-scroll',
    scrub: true,
    start: () => 'top ' + window.innerWidth * 0.17,
    end: () => 'top ' + window.innerWidth * 0.2,
  },
});

// make-with-bg
gsap.to('.our-reach--counter', {
  '--counter-color': '#e7ffc8',
  immediateRender: false,
  scrollTrigger: {
    trigger: '.make-with-bg',
    scroller: '.smooth-scroll',
    scrub: true,
    start: () => 'top ' + window.innerWidth * 0.17,
    end: () => 'top ' + window.innerWidth * 0.2,
  },
});

//
gsap.to('.our-reach--counter', {
  '--counter-color': '#214c2c',
  immediateRender: false,
  scrollTrigger: {
    trigger: '.make-gallery',
    scroller: '.smooth-scroll',
    scrub: true,
    start: () => 'top ' + window.innerWidth * 0.17,
    end: () => 'top ' + window.innerWidth * 0.2,
  },
});

// top-bar--page-title
// dynamic change content / innerHTML

function changeTextAndClass(value, addClass) {
  const item = document.querySelector('.top-bar--page-title');
  item.innerHTML = value;
  item.classList = 'top-bar--page-title ' + addClass;
}

gsap.to('.top-bar--page-title', {
  text: 'Manage',
  snap: 'innerText',
  scrollTrigger: {
    trigger: '.home-manage',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 5%',
    end: 'top 3%',
    onEnter: () => changeTextAndClass('Manage', 'color-yellow'),
    onLeaveBack: () => changeTextAndClass('Who we are ', 'color-green'),
  },
});

// manage-gallery--row"

gsap.to('.top-bar--page-title', {
  text: 'Manage',
  snap: 'innerText',
  scrollTrigger: {
    trigger: '.manage-gallery--row',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 5%',
    end: 'top 3%',
    onEnter: () => changeTextAndClass('Manage', 'color-green'),
    onLeaveBack: () => changeTextAndClass('Manage', 'color-yellow'),
  },
});

gsap.to('.top-bar--page-title', {
  text: 'Manage',
  snap: 'innerText',
  scrollTrigger: {
    trigger: '.make',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 5%',
    end: 'top 3%',
    onEnter: () => changeTextAndClass('Make', 'color-green'),
    onLeaveBack: () => changeTextAndClass('Manage', 'color-green'),
  },
});

gsap.to('.top-bar--page-title', {
  text: 'Manage',
  snap: 'innerText',
  scrollTrigger: {
    trigger: '.make-with-bg',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 5%',
    end: 'top 3%',
    onEnter: () => changeTextAndClass('Make', 'color-yellow'),
    onLeaveBack: () => changeTextAndClass('Make', 'color-green'),
  },
});

gsap.to('.top-bar--page-title', {
  text: 'Manage',
  snap: 'innerText',
  scrollTrigger: {
    trigger: '.make-gallery',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 5%',
    end: 'top 3%',
    onEnter: () => changeTextAndClass('Make', 'color-green'),
    onLeaveBack: () => changeTextAndClass('Make', 'color-yellow'),
  },
});

gsap.to('.top-bar--page-title', {
  text: 'Manage',
  snap: 'innerText',
  scrollTrigger: {
    trigger: '.contact-us',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 5%',
    end: 'top 3%',
    onEnter: () => changeTextAndClass('Contact us', 'color-green'),
    onLeaveBack: () => changeTextAndClass('Make', 'color-green'),
  },
});

// contact us title horizontal
// gsap.from('.contact-us--title', {
//   scrollTrigger: {
//     trigger: '.contact-us-row-1',
//     scroller: '.smooth-scroll',
//     start: 'top bottom',
//     end: 'top 20%',
//     scrub: true,
//     markers: true,
//   },

//   xPercent: 1400,
//   opacity: 0,
//   duration: 1,
//   ease: 'easeIn',
// });

if (!isMobile) {
  ScrollTrigger.create({
    trigger: '.home-manage-and-manage-gallery-wrapper',
    scroller: '.smooth-scroll',
    start: 'top top',
    end: 'bottom 70%',
    pin: '.home-manage-elem-is-pinned',
  });
}

function changeHomeManageContentClass(addClass) {
  const item = document.querySelector(
    '.gsap-home-manage-reveal-timeline-after-title'
  );
  item.classList =
    'home-manage--text-block gsap-home-manage-reveal-timeline-after-title ' +
    addClass;
}

function changeArrowColor(addClass) {
  const item = document.querySelector(
    '.gsap-home-manage-reveal-timeline-after-title__link'
  );
  item.classList =
    'd-none d-lg-flex content-and-arrow col-6 align-items-center justify-content-start p-0 gsap-home-manage-reveal-timeline-after-title__link ' +
    addClass;
}

// home-manage--text-block gsap-home-manage-reveal-timeline-after-title color-green
gsap.to('.home-manage--text-block', {
  scrollTrigger: {
    trigger: '.manage-gallery--row',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 25%',
    end: 'top 8%',
    onEnter: () => changeHomeManageContentClass('color-green'),
    onLeaveBack: () => changeHomeManageContentClass('color-yellow'),
  },
});

// link-green-unstyled d-none d-lg-flex content-and-arrow col-6 align-items-center justify-content-start p-0 gsap-home-manage-reveal-timeline-after-title

gsap.to('.home-manage--text-block', {
  scrollTrigger: {
    trigger: '.manage-gallery--row',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 45%',
    end: 'top 48%',
    onEnter: () => changeArrowColor('link-green-unstyled'),
    onLeaveBack: () => changeArrowColor('link-yellow-unstyled'),
  },
});
