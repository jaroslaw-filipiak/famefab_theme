import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

function changeMakeClass(className) {
  console.log('change make ons class');
  const title = document.querySelector('.make--fixed-title');
  title.classList = `make--fixed-title ${className}`;
}

if (!isMobile) {
  // title from bottom
  gsap.from('.make--fixed-title', {
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

  // section with bg , content opacity from zero
  gsap.from('.gsap_content_opacity-from-zero', {
    scrollTrigger: {
      trigger: '.total-reach-trigger',
      scroller: '.smooth-scroll',
      // scrub: true,
      start: 'top 30%',
      end: 'top 75%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
  });

  // title change color
} // !isMobile

// title opacity to zero
gsap.to('.make--fixed-title', {
  scrollTrigger: {
    trigger: '.total-reach-trigger',
    scroller: '.smooth-scroll',
    // scrub: true,
    start: 'top 10%',
    end: 'top top',

    toggleActions: 'play none none reset',
  },
  opacity: 0,
});

gsap.from('.our-reach--counter', {
  opacity: 0,
  scrollTrigger: {
    trigger: '.change-make-title-color-trigger',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    end: 'bottom',
  },
});

gsap.to('#totalReachValue', {
  innerText: 137,
  snap: 'innerText',
  scrollTrigger: {
    trigger: 'body',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    end: '48%',
  },
});

// case-hover-output-gsap-pin

export function changeSVGcolors(color) {
  const circle = document.querySelector(
    '.cases .arrow-right--circle svg circle'
  ); //stroke
  const arrow = document.querySelector('.cases .arrow-right--arrow svg path'); //fill

  arrow.setAttribute('fill', color);
  circle.setAttribute('stroke', color);
}

changeSVGcolors('#214c2c');

ScrollTrigger.create({
  trigger: '.cases',
  scroller: '.smooth-scroll',
  start: 'top top',
  end: 'bottom 150px',
  pin: '.case-area-pinned',
});

// ===============

function handleInfluencer(influencer) {
  const casesSection = document.querySelector('.cases'),
    influencersBG = document.querySelector('.cases--dynamic-bg'),
    outputInfo = document.querySelector('.case-hover-output'),
    outputInfluencerName = document.querySelector('.case-hover-output--name');

  const activeIndex = influencer.classList[1];
  const dynamicLink = document.querySelector('.case-dynamic-link');

  outputInfluencerName.innerHTML = influencer.dataset.name
    ? influencer.dataset.name
    : '';

  if ((influencer.dataset.link = !undefined)) {
    dynamicLink.classList.remove('opacity-0');
    dynamicLink.setAttribute('href', influencer.dataset.link);
  }

  if (!isMobile) {
    influencersBG.style.backgroundImage = `url(${influencer.dataset.bg})`;
    influencersBG.classList = `cases--dynamic-bg opacity-0`;
  }

  outputInfluencerName.classList = `case-hover-output--name`;
  outputInfo.classList = `case-hover-output`;

  casesSection.classList = `cases`;

  dynamicLink.classList = `case-dynamic-link pt-3 d-none d-lg-flex content-and-arrow align-items-center justify-content-start p-0 link-green-unstyled`;

  if (!isMobile) {
    gsap.to('.our-reach--counter', {
      '--counter-color': '#214c2c',
      immediateRender: false,
      scrollTrigger: {
        trigger: '.cases',
        scroller: '.smooth-scroll',
        scrub: true,
        start: () => 'top ' + window.innerWidth * 0.17,
        end: () => 'top ' + window.innerWidth * 0.2,
      },
    });
  }

  if (!isMobile) {
    casesSection.classList = `cases cases__is-bg-visible`;
    influencersBG.classList = `cases--dynamic-bg opacity-1`;
    outputInfo.classList = `case-hover-output color-yellow`;
    dynamicLink.classList = `case-dynamic-link pt-3 d-none d-lg-flex content-and-arrow align-items-center justify-content-start p-0 link-yellow-unstyled`;
    outputInfluencerName.classList = `case-hover-output--name color-yellow`;

    gsap.to('.our-reach--counter', {
      '--counter-color': '#e7ffc8',
      immediateRender: false,
      scrollTrigger: {
        trigger: '.cases',
        scroller: '.smooth-scroll',
        scrub: true,
        start: () => 'top ' + window.innerWidth * 0.17,
        end: () => 'top ' + window.innerWidth * 0.2,
      },
    });

    const influencerNamesList = document.querySelectorAll('.cases--list-item');
    console.log('handle influencer..');

    const influencerNamesListArr = [...influencerNamesList];

    console.log(influencer.dataset.bg);

    if (influencer.dataset.bg) {
      // check acvive ..

      influencerNamesListArr.map((item) => {
        item.classList.add('opacity-0');
        item.classList.remove('color-green');
      });

      influencer.classList.add('color-yellow');
      influencer.classList.add('opacity-1');
    }
  }
}

const influencers = gsap.utils.toArray('.cases--list-item');

influencers.forEach((influencer) => {
  gsap.to(influencer, {
    scrollTrigger: {
      scroller: '.smooth-scroll',
      trigger: influencer,
      start: 'top center',
      end: `${isMobile ? '+=20' : '+=120'}`,
      scrub: true,
      markers: false,
      toggleClass: 'influencer-is-active',
      onEnter: () => handleInfluencer(influencer),
      onEnterBack: () => handleInfluencer(influencer),
      // invalidateOnRefresh: true,
    },
  });
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
  snap: 'innerText',
  scrollTrigger: {
    trigger: '.total-reach-trigger',
    scroller: '.smooth-scroll',
    scrub: false,
    start: `top 5%`,
    end: 'top 3%',
    onEnter: () => changeTextAndClass('Make', 'color-yellow'),
    onLeaveBack: () => changeTextAndClass('Make ', 'color-green'),
  },
});

gsap.to('.top-bar--page-title', {
  snap: 'innerText',
  scrollTrigger: {
    trigger: '.cases',
    scroller: '.smooth-scroll',
    scrub: false,
    start: 'top 5%',
    end: 'top 3%',
    start: 'top',
    end: 'bottom',
  },
});

// our reach bg change color

if (!isMobile) {
  gsap.to('.our-reach--counter', {
    '--counter-color': '#e7ffc8',
    immediateRender: false,
    scrollTrigger: {
      trigger: '.total-reach-trigger',
      scroller: '.smooth-scroll',
      scrub: true,
      start: () => 'top ' + window.innerWidth * 0.17,
      end: () => 'top ' + window.innerWidth * 0.2,
      markers: false,
    },
  });
}

if (isMobile) {
  gsap.to('.our-reach--counter', {
    '--counter-color': '#e7ffc8',
    immediateRender: false,
    scrollTrigger: {
      trigger: '.total-reach-trigger',
      scroller: '.smooth-scroll',
      scrub: true,
      start: 'top 68%',
      end: ' top 65%',
    },
  });
}

if (!isMobile) {
  gsap.to('.our-reach--counter', {
    '--counter-color': '#214c2c',
    immediateRender: false,
    scrollTrigger: {
      trigger: '.cases',
      scroller: '.smooth-scroll',
      scrub: true,
      start: () => 'top ' + window.innerWidth * 0.17,
      end: () => 'top ' + window.innerWidth * 0.2,
    },
  });
}

if (isMobile) {
  gsap.to('.our-reach--counter', {
    '--counter-color': '#214c2c',
    immediateRender: false,
    scrollTrigger: {
      trigger: '.cases',
      scroller: '.smooth-scroll',
      scrub: true,
      start: 'top 68%',
      end: ' top 65%',
    },
  });
}

if (!isMobile) {
  gsap.to('.make--fixed-title', {
    scrollTrigger: {
      trigger: '.change-make-title-color-trigger',
      scroller: '.smooth-scroll',
      // scrub: true,
      start: 'top 98%',
      end: 'top 70%',
      onEnter: () => changeMakeClass('color-yellow '),
      onLeaveBack: () => changeMakeClass('color-green '),
      toggleActions: 'play none none reset',
    },
  });
}

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

function disableBG(isBack) {
  const influencersBG = document.querySelector('.cases--dynamic-bg');
  const pin = document.querySelector('.pin-spacer');

  influencersBG.classList.remove('opacity-1');
  influencersBG.classList.add('opacity-0');
  influencersBG.classList.add('h-0');

  // pin.classList.add('d-none');

  isBack ? pin.classList.remove('d-none') : pin.classList.add('d-none');

  console.log('disableBG');
  console.log(influencersBG);
}

gsap.to('.footer', {
  scrollTrigger: {
    scroller: '.smooth-scroll',
    trigger: '.footer',
    start: 'top 60%',
    end: `top 50%`,
    scrub: true,
    markers: false,
    // toggleClass: 'influencer-is-active',
    onEnter: () => disableBG(false),
    onLeaveBack: () => disableBG(true),
  },
});

gsap.to('.top-bar--page-title', {
  snap: 'innerText',
  scrollTrigger: {
    trigger: '.footer',
    scroller: '.smooth-scroll',
    scrub: false,
    start: 'top 60%',
    end: `top 50%`,
    onEnter: () => changeTextAndClass('Make', 'color-green'),
    onLeaveBack: () => changeTextAndClass('Make ', 'color-yellow'),
  },
});
