// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

gsap.to('.single-case--title', {
  left: -350,
  opacity: 0,
  scrollTrigger: {
    trigger: '.detail-pagination ',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    end: 'top 90%',
  },
});

gsap.to('.our-reach--counter', {
  left: -150,
  scrollTrigger: {
    trigger: '.detail-pagination ',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    end: 'top 80%',
  },
});

gsap.from('.our-reach--counter', {
  opacity: 0,
  scrollTrigger: {
    trigger: '.gsap__reveal-counter',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    end: 'top top',
  },
  duration: 0.3,
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

// gsap.to('.item-prev', {
//   //   opacity: 0,
//   backgroundSize: '100%',
//   //   scale: 2.5,
//   scrollTrigger: {
//     trigger: '.detail-pagination',
//     scroller: '.smooth-scroll',
//     scrub: true,
//     start: 'top bottom',
//     // end: 'top center',
//   },
// });

// gsap.to('.item-next', {
//   //   opacity: 0,
//   backgroundSize: '100%',
//   //   scale: 2.5,
//   scrollTrigger: {
//     trigger: '.detail-pagination',
//     scroller: '.smooth-scroll',
//     scrub: true,
//     start: 'top bottom',
//     // end: 'top center',
//   },
// });

if (!isMobile) {
  ScrollTrigger.create({
    trigger: '.detail-hero',
    scroller: '.smooth-scroll',
    start: 'top top',
    end: 'bottom 99%',
    pin: '.gsap__detail-piniata',
  });
}

function changeTextAndClass(value, addClass) {
  const topBar = document.querySelector('.top-bar');
  const title = document.querySelector('.top-bar--page-title ');
  title.innerHTML = value;
  topBar.classList = 'top-bar ' + addClass;
}

gsap.to('.top-bar--page-title', {
  snap: 'innerText',
  scrollTrigger: {
    trigger: '.detail-pagination ',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 5%',
    end: 'top 3%',
    onEnter: () => changeTextAndClass('', 'color-yellow'),
    onLeaveBack: () => changeTextAndClass('', 'color-green'),
  },
});
