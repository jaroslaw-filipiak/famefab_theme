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

  // bg scale
  gsap.to('.total-reach-trigger', {
    //   opacity: 0,
    backgroundSize: '100%',
    //   scale: 2.5,
    scrollTrigger: {
      trigger: '.total-reach-trigger',
      scroller: '.smooth-scroll',
      scrub: true,
      start: 'top bottom',
      // end: 'top center',
    },
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
    trigger: '.total-reach-trigger',
    scroller: '.smooth-scroll',
    scrub: false,
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

export function handleCasesOnHover() {
  const casesList = document.querySelectorAll('.cases--list-item');
  const casesListArr = [...casesList];

  casesListArr.map((item) => {
    const name = document.querySelector('.case-name');
    const section = document.querySelector('.cases');
    const caseInfo = document.querySelector('.case-hover-output');
    const text = document.querySelector('.cases .content-and-arrow');
    const link = document.querySelector('.cases .case-dynamic-link');

    item.addEventListener('mouseover', () => {
      name.innerHTML = item.dataset.name;
      section.style.backgroundImage = `url(${item.dataset.bg})`;
      caseInfo.classList.add('color-yellow');
      text.classList.add('color-yellow');
      item.classList.add('color-yellow');
      link.setAttribute('href', item.dataset.link);

      changeSVGcolors('#e7ffc8');
    });

    item.addEventListener('mouseleave', () => {
      caseInfo.classList.remove('color-yellow');
      text.classList.remove('color-yellow');
      item.classList.remove('color-yellow');
      changeSVGcolors('#214c2c');
      section.style.backgroundImage = `none`;
    });
  });
}

handleCasesOnHover();
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
  const casesSection = document.querySelector('.cases');
  const influencersBG = document.querySelector('.cases--dynamic-bg');
  const outputInfo = document.querySelector('.case-hover-output');
  const outputInfluencerName = document.querySelector(
    '.case-hover-output--name'
  );

  const activeIndex = influencer.classList[1];
  const dynamicLink = document.querySelector('.case-dynamic-link');

  outputInfluencerName.innerHTML = influencer.dataset.name;
  dynamicLink.classList.remove('opacity-0');
  dynamicLink.setAttribute('href', influencer.dataset.link);

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
    setTimeout(() => {
      casesSection.classList = `cases cases__is-bg-visible`;
    }, 1800);

    setTimeout(() => {
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
    }, 2000);
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
      scrub: false,
      toggleClass: 'influencer-is-active',
      onEnter: () => handleInfluencer(influencer),
      onEnterBack: () => handleInfluencer(influencer),
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
