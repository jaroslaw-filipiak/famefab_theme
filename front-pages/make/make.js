import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

// title change color

function changeMakeClass(className) {
  console.log('change over ons class');
  const title = document.querySelector('.make--fixed-title');
  title.classList = `make--fixed-title ${className}`;
}

gsap.to('.make--fixed-title', {
  scrollTrigger: {
    trigger: '.total-reach-trigger',
    scroller: '.smooth-scroll',
    // scrub: true,
    start: 'top bottom',
    end: 'top bottom',
    onEnter: () => changeMakeClass('color-yellow'),
    onLeaveBack: () => changeMakeClass('color-green'),
    toggleActions: 'play none none reset',
  },
});

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

gsap.from('.our-reach--counter', {
  opacity: 0,
  scrollTrigger: {
    trigger: '.total-reach-trigger',
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
    end: 'bottom',
  },
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

console.log('make');

ScrollTrigger.create({
  trigger: '.cases',
  scroller: '.smooth-scroll',
  start: 'top top',
  end: 'bottom 150px',
  pin: '.case-area-pinned',
});

// ===============

// TODO: change color to yellow fix

function handleInfluencer(influencer) {
  const influencersBG = document.querySelector('.cases--dynamic-bg');
  // const outputPhoto = document.querySelector('.case--photo');
  const outputInfo = document.querySelector('.case-hover-output');
  const outputInfluencerName = document.querySelector(
    '.case-hover-output--name'
  );

  const activeIndex = influencer.classList[1];
  const influencerTitle = document.querySelector(`.${activeIndex} span`);
  // console.log('title===> ' + influencerTitle);

  const dynamicLink = document.querySelector('.case-dynamic-link');

  outputInfluencerName.innerHTML = influencer.dataset.name;
  outputInfo.innerHTML = influencer.dataset.info;
  // outputPhoto.style.backgroundImage = `url(${influencer.dataset.thumb})`;
  dynamicLink.setAttribute('href', influencer.dataset.link);

  influencersBG.style.backgroundImage = `url(${influencer.dataset.bg})`;

  influencersBG.classList = `cases--dynamic-bg opacity-0`;
  outputInfluencerName.classList = `case-hover-output--name`;
  outputInfo.classList = `case-hover-output`;

  const allInfluencersTitles = document.querySelectorAll('.case--title');

  allInfluencersTitles.forEach((item) => {
    item.classList = `case--title color-green`;
  });

  setTimeout(() => {
    influencersBG.classList = `cases--dynamic-bg opacity-1`;
    outputInfo.classList = `case-hover-output color-yellow`;
    outputInfluencerName.classList = `case-hover-output--name color-yellow`;
  }, 3000);
}

const influencers = gsap.utils.toArray('.cases--list-item');

influencers.forEach((influencer) => {
  gsap.to(influencer, {
    scrollTrigger: {
      scroller: '.smooth-scroll',
      trigger: influencer,
      start: 'top center',
      end: '+=100',
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
  const item = document.querySelector('.top-bar--page-title');
  item.innerHTML = value;
  item.classList = 'top-bar--page-title ' + addClass;
}

gsap.to('.top-bar--page-title', {
  snap: 'innerText',
  scrollTrigger: {
    trigger: '.total-reach-trigger',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 5%',
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
    scrub: true,
    start: 'top 5%',
    end: 'top 3%',
    onEnter: () => changeTextAndClass('', 'color-green'),
    onLeaveBack: () => changeTextAndClass('Make', 'color-yellow'),
  },
});
