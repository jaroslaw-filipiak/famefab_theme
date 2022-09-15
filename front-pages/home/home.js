import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

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
    end: '78%',
  },
});

gsap.to('.our-reach--counter', {
  left: -300,
  scrollTrigger: {
    trigger: '.contact-us',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 80%',
    end: 'top center',
  },
});

// d5d0f3
gsap.to('body', {
  '--color': '#d5d0f3',
  immediateRender: false,
  scrollTrigger: {
    trigger: '.hello',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    end: '+=100%',
  },
});

// #F1F0EF
gsap.to('body', {
  '--color': '#F1F0EF',
  immediateRender: false,
  scrollTrigger: {
    trigger: '.who-we-are',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 80%',
    end: 'top 5%',
  },
});

// d5d0f3
gsap.to('body', {
  '--color': '#d5d0f3',
  immediateRender: false,
  scrollTrigger: {
    trigger: '.make',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    end: '+=100%',
  },
});

// #F1F0EF
gsap.to('body', {
  '--color': '#F1F0EF',
  immediateRender: false,
  scrollTrigger: {
    trigger: '.make-with-bg',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 80%',
    end: 'top 5%',
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
    start: 'top bottom',
    end: 'top top',
    scrub: true,
    markers: false,
    duration: 1,
  },
  left: 2500,
  // top: 0,
});

// manage change color
gsap.to('.gsap__title-horizontaly-scrub', {
  scrollTrigger: {
    trigger: '#home-manage',
    scroller: '.smooth-scroll',
    start: 'top -15%',
    end: 'top -20%',
    scrub: true,
    markers: false,

    // duration: 1,
  },
  color: '#214c2c',
  // top: 0,
});

// manage out from screen
gsap.to('.home-manage--title', {
  scrollTrigger: {
    trigger: '.manage-gallery--gallery',
    scroller: '.smooth-scroll',
    start: 'top 5%',
    end: 'top -10%',
    scrub: true,
    markers: false,
    // duration: 1,
  },
  marginLeft: -500,
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

// manage-gallery--item

gsap.from('.manage-gallery--item', {
  scrollTrigger: {
    trigger: '.manage-gallery--item',
    scroller: '.smooth-scroll',
    start: 'top bottom',
    end: 'top 70%',
    scrub: true,
    markers: false,

    // duration: 1,
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
    markers: false,

    duration: 1,
  },
  // opacity: 0,
  // top: 0,
});

gsap.from('.gsap_reveal_home_manage_slide_content', {
  scrollTrigger: {
    trigger: '.manage-gallery--item-2',
    scroller: '.smooth-scroll',
    start: 'top 60%',
    end: 'top top',
    scrub: true,
    markers: false,

    duration: 1,
  },
  // opacity: 0,
  // top: 0,
});

// gsap.to('.home-manage--title', {
//   scrollTrigger: {
//     trigger: '.manage-gallery--item-2',
//     scroller: '.smooth-scroll',
//     start: 'top 10%',
//     end: 'top -30%',
//     scrub: true,
//     // markers: false,

//     // duration: 1,
//   },
//   opacity: 0,
//   // top: 0,
// });

// .gsap__section-indicator-home-page

// gsap.from('.page-template-page-home .gsap__section-indicator-home-page', {
//   scrollTrigger: {
//     trigger: '.who-we-are .gsap__reveal-heading',
//     scroller: '.smooth-scroll',
//     start: 'top 60%',
//     end: 'top 20%',
//     scrub: false,
//     // markers: false,
//   },
//   opacity: 0,
// });

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

// make horizontal in
gsap.from('.make-with-bg--title', {
  scrollTrigger: {
    trigger: '.make-with-bg',
    scroller: '.smooth-scroll',
    start: 'top bottom',
    end: 'top top',
    scrub: true,

    // start: '20px 80%',
    markers: false,
  },
  xPercent: 800,
  // duration: 1,
  ease: 'easeIn',
});

// make horizontal color
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

// make horizontal out
gsap.to('.make-with-bg--title', {
  scrollTrigger: {
    trigger: '.contact-us',
    scroller: '.smooth-scroll',
    start: 'top bottom',
    end: 'top 80%',
    scrub: true,

    // start: '20px 80%',
    markers: false,
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

// contact-us--title

var contactUsTitleOnHomepage = gsap.timeline();

// contact-us--title
contactUsTitleOnHomepage.from('.contact-us--title', {
  scrollTrigger: {
    trigger: '.contact--trigger',
    scroller: '.smooth-scroll',
    start: 'top bottom',
    end: 'top top',
    scrub: true,
    // start: '20px 80%',
    markers: false,
  },

  xPercent: 1400,
  // opacity: 0,
  duration: 1,
  ease: 'easeIn',
});

// contact-us--title
contactUsTitleOnHomepage.to('.contact-us--title', {
  scrollTrigger: {
    trigger: '.footer',
    scroller: '.smooth-scroll',
    start: 'top 60%',
    end: 'top 10%',
    scrub: true,
    // start: '20px 80%',
    markers: false,
  },

  left: -900,
  // opacity: 0,
  duration: 1,
  ease: 'easeIn',
});

// section make gallery pin left side / on right side images are scrolled

let brandImageBlock = document.getElementById('brand-two-images');
let brandImagePin = document.getElementById('brand-image-pin');

let brandImageNotPin = document.getElementById('brand-image-notPin');

ScrollTrigger.create({
  trigger: '.make-with-bg',
  scroller: '.smooth-scroll',
  start: 'top top',
  end: 'top bottom',
  endTrigger: '.contact-us',
  invalidateOnRefresh: true,
  pin: brandImagePin,
});

// brand image pin change color to green

function changeBrandImagePinContentClass(addClass) {
  const elem = document.querySelector(
    '#brand-image-pin .make-gallery--subtitle'
  );
  elem.classList = `d-none d-lg-block make-gallery--subtitle ${addClass} text-uppercase font-sans`;
}

function changeBrandImagePinLinkClass(addClass) {
  const elem = document.querySelector('#brand-image-pin a');
  elem.classList = `${addClass} content-and-arrow d-none d-lg-flex align-items-center justify-content-start p-0 is-inview`;
}

gsap.to('#brand-image-pin a', {
  scrollTrigger: {
    trigger: '.make-gallery',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 55%',
    end: 'top 45%',
    onEnter: () => changeBrandImagePinLinkClass('link-green-unstyled'),
    onLeaveBack: () => changeBrandImagePinLinkClass('link-yellow-unstyled'),
  },
});

gsap.to('#brand-image-pin .make-gallery--subtitle', {
  scrollTrigger: {
    trigger: '.make-gallery',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 25%',
    end: 'top 15%',
    onEnter: () => changeBrandImagePinContentClass('font-green-default'),
    onLeaveBack: () => changeBrandImagePinContentClass('font-yellow-default'),
  },
});

gsap.to('#brand-image-pin .make-gallery--subtitle', {
  scrollTrigger: {
    trigger: '.make-gallery',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 55%',
    end: 'top 45%',
    onEnter: () => changeBrandImagePinLinkClass('link-green-unstyled'),
    onLeaveBack: () => changeBrandImagePinLinkClass('link-yellow-unstyled'),
  },
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
  const topBar = document.querySelector('.top-bar');
  const title = document.querySelector('.top-bar--page-title ');
  title.innerHTML = value;
  topBar.classList = 'top-bar ' + addClass;
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

//
gsap.from('.mobile__go-to-influencers', {
  opacity: 0,
  scrollTrigger: {
    trigger: '.manage-gallery--row',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 50%',
    end: 'top 45%',
  },
});

gsap.to('.mobile__go-to-influencers', {
  opacity: 0,
  scrollTrigger: {
    trigger: '.make',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 50%',
    end: 'top 45%',
  },
});

gsap.from('.mobile__go-to-make', {
  opacity: 0,
  scrollTrigger: {
    trigger: '.make-with-bg',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 45%',
    end: 'top 45%',
  },
});

function changeGoToMakeClass(newClass) {
  console.log('changeGoToMakeClass');
  const item = document.querySelector('.mobile__go-to-make');
  item.classList = `d-flex flex-column-reverse d-lg-none content-and-arrow align-items-start justify-content-start p-0 mobile__go-to-make ${newClass}`;
}

// change color/class to yellow
gsap.from('.mobile__go-to-make', {
  scrollTrigger: {
    trigger: '.make-with-bg',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top center',
    end: '+=100',
    onEnter: () => changeGoToMakeClass('link-yellow-unstyled'),
    onEnterBack: () => changeGoToMakeClass('link-green-unstyled'),
  },
});

gsap.from('.mobile__go-to-make', {
  scrollTrigger: {
    trigger: '.make-gallery',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top center',
    end: '+=100',
    onEnter: () => changeGoToMakeClass('link-green-unstyled'),
    onEnterBack: () => changeGoToMakeClass('link-yellow-unstyled'),
  },
});

gsap.to('.mobile__go-to-make', {
  opacity: 0,
  scrollTrigger: {
    trigger: '.contact-us',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    end: 'bottom top',
  },
});
