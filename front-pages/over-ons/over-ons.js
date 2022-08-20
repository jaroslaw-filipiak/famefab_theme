import gsap from 'gsap';

// title from bottom
gsap.from('.over-ons--title', {
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
gsap.to('.over-ons--title', {
  scrollTrigger: {
    trigger: '.blank-hero--content',
    scroller: '.smooth-scroll',
    // scrub: true,
    start: 'top bottom',
    end: 'top bottom',
    onEnter: () => changeOverOnsClass('color-yellow'),
    onLeaveBack: () => changeOverOnsClass('color-green'),
    toggleActions: 'play none none reset',
  },
});

function changeOverOnsClass(className) {
  console.log('change over ons class');
  const title = document.querySelector('.over-ons--title');
  title.classList = `over-ons--title ${className}`;
}

// title opacity to zero
gsap.to('.over-ons--title', {
  scrollTrigger: {
    trigger: '.blank-hero--content',
    scroller: '.smooth-scroll',
    // scrub: true,
    start: 'top 10%',
    end: 'top top',

    toggleActions: 'play none none reset',
  },
  opacity: 0,
});

// title opacity to zero
gsap.from('.blank-hero--content', {
  scrollTrigger: {
    trigger: '.over-ons-pin-trigger',
    scroller: '.smooth-scroll',
    // scrub: true,
    start: 'top 20%',
    end: 'top 45%',

    toggleActions: 'play none none reset',
  },
  opacity: 0,
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

// work title
gsap.to('.work--title', {
  scrollTrigger: {
    trigger: '.grid-area-photo4',
    scroller: '.smooth-scroll',
    scrub: true,
    markers: false,
    toggleActions: 'play none none reset',
    // endTrigger: 'grid-area-photo2',
    // end: 'top center',
    end: 'top top',
    markers: false,
  },
  left: '20',
  duration: 1,
  ease: 'easeIn',
});

gsap.to('.work--title', {
  scrollTrigger: {
    trigger: '.grid-area-photo2',
    scroller: '.smooth-scroll',
    scrub: true,
    markers: false,
    toggleActions: 'play none none reset',
    // endTrigger: 'grid-area-photo2',
    // end: 'top center',
    end: 'top top',
  },
  opacity: 0,
  duration: 1,
  ease: 'easeIn',
});

// change dynamic title and class

function changeTextAndClass(value, addClass) {
  const item = document.querySelector('.top-bar--page-title');
  item.innerHTML = value;
  item.classList = 'top-bar--page-title ' + addClass;
}

gsap.to('.top-bar--page-title', {
  snap: 'innerText',
  scrollTrigger: {
    trigger: '.over-ons-title-trigger',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 5%',
    end: 'top 3%',
    onEnter: () => changeTextAndClass('Over ons', 'color-yellow'),
    onLeaveBack: () => changeTextAndClass('Over ons', 'color-green'),
  },
});

gsap.to('.top-bar--page-title', {
  snap: 'innerText',
  scrollTrigger: {
    trigger: '.scroll-gallery',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 5%',
    end: 'top 3%',
    onEnter: () => changeTextAndClass('Over ons', 'color-green'),
    onLeaveBack: () => changeTextAndClass('Over ons', 'color-yellow'),
  },
});
