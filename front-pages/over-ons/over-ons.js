import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (!isMobile) {
  // title from bottom
  gsap.from('.over-ons--title', {
    scrollTrigger: {
      trigger: 'body',
      scroller: '.smooth-scroll',
      // scrub: true,
      markers: false,
      toggleActions: 'play none none reset',
    },
    left: '-5400',
    duration: 1,
    ease: 'easeIn',
  });

  // title change color
  gsap.to('.over-ons--title__desktop', {
    scrollTrigger: {
      trigger: '.over-ons-title-trigger',
      scroller: '.smooth-scroll',
      // scrub: true,
      start: 'top 80%',
      end: 'top 80%',
      onEnter: () => changeOverOnsClass('color-yellow'),
      onLeaveBack: () => changeOverOnsClass('color-green'),
      toggleActions: 'play none none reset',
      markers: false,
    },
  });

  ScrollTrigger.create({
    trigger: '.over-ons-pin-trigger',
    scroller: '.smooth-scroll',
    start: 'top 5%',
    end: 'bottom 80%',
    pin: '.over-ons-content-pinned',
  });

  //   1. if grid-area-photo4 bottom edge is 90%
  //   photo 1 + 3 go to top
  // start is bottom edge 90 %
  // end anim is if top of grid-area-photo4 20%

  gsap.to('.grid-area-photo4', {
    scrollTrigger: {
      trigger: '.grid-area-photo4',
      scroller: '.smooth-scroll',
      scrub: true,
      markers: false,
      toggleActions: 'play none none reset',
      // endTrigger: 'grid-area-photo2',
      start: 'top 260%',
      end: 'top 15%',
    },
    top: '49%',
    opacity: 1,
  });

  gsap.to('.grid-area-photo5', {
    scrollTrigger: {
      trigger: '.grid-area-photo4',
      scroller: '.smooth-scroll',
      scrub: true,
      markers: false,
      toggleActions: 'play none none reset',
      // endTrigger: 'grid-area-photo2',
      start: 'top 260%',
      end: 'top 15%',
    },
    top: '53%',
    opacity: 1,
  });

  gsap.to('.grid-area-photo1', {
    scrollTrigger: {
      trigger: '.grid-area-photo4',
      scroller: '.smooth-scroll',
      scrub: true,
      markers: false,
      toggleActions: 'play none none reset',
      // endTrigger: 'grid-area-photo2',
      start: 'top 80%',
      end: 'top 25%',
    },
    top: '13%',
    opacity: 1,
  });

  gsap.to('.grid-area-photo3', {
    scrollTrigger: {
      trigger: '.grid-area-photo4',
      scroller: '.smooth-scroll',
      scrub: true,
      markers: false,
      toggleActions: 'play none none reset',
      // endTrigger: 'grid-area-photo2',
      start: 'top 260%',
      end: 'top 15%',
    },
    top: '83%',
    opacity: 1,
  });

  gsap.to('.grid-area-photo2', {
    scrollTrigger: {
      trigger: '.grid-area-photo4',
      scroller: '.smooth-scroll',
      scrub: true,
      markers: false,
      toggleActions: 'play none none reset',
      // endTrigger: 'grid-area-photo2',
      start: 'top 260%',
      end: 'top 15%',
    },
    top: '63%',
    opacity: 1,
  });

  //   gsap.to('.grid-area-photo2', {
  //     scrollTrigger: {
  //       trigger: '.scroll-gallery',
  //       scroller: '.smooth-scroll',
  //       scrub: false,
  //       markers: false,
  //       toggleActions: 'play none none reset',
  //       // endTrigger: 'grid-area-photo2',
  //       start: 'top center',
  //       // end: 'top top',
  //     },
  //     top: -250,
  //     opacity: 1,
  //   });

  //   gsap.to('.grid-area-photo3', {
  //     scrollTrigger: {
  //       trigger: '.scroll-gallery',
  //       scroller: '.smooth-scroll',
  //       scrub: false,
  //       markers: false,
  //       toggleActions: 'play none none reset',
  //       // endTrigger: 'grid-area-photo2',
  //       start: 'top center',
  //       // end: 'top top',
  //     },
  //     top: -150,
  //     opacity: 1,
  //   });

  //   gsap.to('.grid-area-photo4', {
  //     scrollTrigger: {
  //       trigger: '.scroll-gallery',
  //       scroller: '.smooth-scroll',
  //       scrub: false,
  //       markers: false,
  //       toggleActions: 'play none none reset',
  //       // endTrigger: 'grid-area-photo2',
  //       start: 'top center',
  //       // end: 'top top',
  //     },
  //     top: -250,
  //     opacity: 1,
  //   });

  //   gsap.to('.grid-area-photo5', {
  //     scrollTrigger: {
  //       trigger: '.scroll-gallery',
  //       scroller: '.smooth-scroll',
  //       scrub: false,
  //       markers: false,
  //       toggleActions: 'play none none reset',
  //       // endTrigger: 'grid-area-photo2',
  //       start: 'top center',
  //       // end: 'top top',
  //     },
  //     top: -250,
  //     opacity: 1,
  //   });

  //   gsap.to('.grid-area-photo6', {
  //     scrollTrigger: {
  //       trigger: '.scroll-gallery',
  //       scroller: '.smooth-scroll',
  //       scrub: false,
  //       markers: false,
  //       toggleActions: 'play none none reset',
  //       // endTrigger: 'grid-area-photo2',
  //       start: 'top center',
  //       // end: 'top top',
  //     },
  //     top: -250,
  //     opacity: 1,
  //   });
} // !isMobile

function changeOverOnsClass(className) {
  console.log('change over ons class');

  const title = document.querySelector('.over-ons--title__desktop');
  title.classList = `over-ons--title over-ons--title__desktop ${className}`;

  console.log(title);
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

// gsap.to('.work--title', {
//   scrollTrigger: {
//     trigger: '.grid-area-photo2',
//     scroller: '.smooth-scroll',
//     scrub: true,
//     markers: false,
//     toggleActions: 'play none none reset',
//     // endTrigger: 'grid-area-photo2',
//     // end: 'top center',
//     end: 'top bottom',
//   },
//   opacity: 0,
//   duration: 1,
//   ease: 'easeIn',
// });

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

// grid-area-photo-1
