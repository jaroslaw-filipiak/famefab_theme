import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

//  title from bottom
gsap.from('.manage--title', {
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
gsap.to('.manage--title', {
  scrollTrigger: {
    trigger: '.blank-hero-title-trigger',
    scroller: '.smooth-scroll',
    // scrub: true,
    start: 'top 80%',
    end: 'top bottom',
    onEnter: () => changeOverOnsClass('color-yellow'),
    onLeaveBack: () => changeOverOnsClass('color-green'),
    toggleActions: 'play none none reset',
  },
});

function changeOverOnsClass(className) {
  console.log('change over ons class');
  const title = document.querySelector('.manage--title');
  title.classList = `manage--title ${className}`;
}

// title opacity to zero
gsap.to('.manage--title', {
  scrollTrigger: {
    trigger: '.blank-hero--content',
    scroller: '.smooth-scroll',
    // scrub: true,
    start: 'top 30%',
    end: 'top 20%',

    toggleActions: 'play none none reverse',
  },
  opacity: 0,
  display: 'none',
});

// blank-hero--content

gsap.from('.gsap_opacity-reveal__blank-hero', {
  scrollTrigger: {
    trigger: '.blank-hero-title-trigger',
    scroller: '.smooth-scroll',
    // scrub: true,
    start: 'top 30%',
    end: 'top 75%',
    toggleActions: 'play none none reverse',
  },
  opacity: 0,
});

// bg scale
gsap.to('.blank-hero-title-trigger', {
  //   opacity: 0,
  backgroundSize: '100%',
  //   scale: 2.5,
  scrollTrigger: {
    trigger: '.blank-hero-title-trigger',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    // end: 'top center',
  },
});

export default function handleInfluencersOnHover() {
  const influencersWrapper = document.querySelector('.influencers');
  const influencersList = document.querySelectorAll('.influencers--list-item');
  const influencersListArr = [...influencersList];

  const outputPhoto = document.querySelector('.influencer--photo');
  const outputInfo = document.querySelector('.influencer-hover-output');
  const outputInfluencerName = document.querySelector(
    '.influencer-hover-output--name'
  );

  const dynamicLink = document.querySelector('.influencer-dynamic-link');

  influencersListArr.map((item) => {
    item.addEventListener('mouseover', () => {
      outputInfluencerName.innerHTML = item.dataset.name;
      outputInfo.innerHTML = item.dataset.info;
      outputPhoto.style.backgroundImage = `url(${item.dataset.bg})`;
      dynamicLink.setAttribute('href', item.dataset.link);
    });

    // item.addEventListener('click', () => {
    //   influencersWrapper.style.backgroundImage = `url(${item.dataset.bg})`;
    // });
  });
}

// handleInfluencersOnHover();
console.log('manage');

// container element as trigger

// make it stick in place while the scroll position is between the start and end elements/values

// influencer-area-pinned
// influencer-area-scrollable
// influencers
// .influencers

ScrollTrigger.create({
  trigger: '.influencers',
  scroller: '.smooth-scroll',
  start: 'top top',
  end: 'bottom 150px',
  pin: '.influencer-area-pinned',
});

//  title from bottom
gsap.from('.influencers--title', {
  scrollTrigger: {
    trigger: '.influencer--info',
    scroller: '.smooth-scroll',
    scrub: true,

    toggleActions: 'play none none reset',
    start: 'top 65%',
    end: 'top 50%',
  },
  left: '-800',
  duration: 1,
  ease: 'easeIn',
});

gsap.to('.influencers--title', {
  scrollTrigger: {
    trigger: '.footer',
    scroller: '.smooth-scroll',
    scrub: true,
    toggleActions: 'play none none reset',
    start: 'top 120%',
    end: 'top 90%',
  },
  opacity: 0,
  // left: '-800',
  duration: 1,
  ease: 'easeIn',
});

// ==============

// TODO: change color to yellow fix

function handleInfluencer(influencer) {
  const influencersBG = document.querySelector('.influencers--dynamic-bg');
  const outputPhoto = document.querySelector('.influencer--photo');
  const outputInfo = document.querySelector('.influencer-hover-output');
  const outputInfluencerName = document.querySelector(
    '.influencer-hover-output--name'
  );

  const activeIndex = influencer.classList[1];
  const influencerTitle = document.querySelector(`.${activeIndex} span`);
  // console.log('title===> ' + influencerTitle);

  const dynamicLink = document.querySelector('.influencer-dynamic-link');

  outputInfluencerName.innerHTML = influencer.dataset.name;
  outputInfo.innerHTML = influencer.dataset.info;
  outputPhoto.style.backgroundImage = `url(${influencer.dataset.thumb})`;
  dynamicLink.classList.remove('opacity-0');
  dynamicLink.setAttribute('href', influencer.dataset.link);

  // influencersBG.style.backgroundImage = `url(${influencer.dataset.bg})`;

  influencersBG.classList = `influencers--dynamic-bg opacity-0`;
  outputInfluencerName.classList = `influencer-hover-output--name`;
  outputInfo.classList = `influencer-hover-output`;

  const allInfluencersTitles = document.querySelectorAll('.influencer--title');

  // allInfluencersTitles.forEach((item) => {
  //   item.classList = `influencer--title color-green`;
  // });

  setTimeout(() => {
    // influencersBG.classList = `influencers--dynamic-bg opacity-1`;
    // outputInfo.classList = `influencer-hover-output color-yellow`;
    // outputInfluencerName.classList = `influencer-hover-output--name color-yellow`;
  }, 3000);
}

const influencers = gsap.utils.toArray('.influencers--list-item');

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

gsap.to('.influencers--dynamic-bg', {
  scrollTrigger: {
    trigger: '.footer',
    scroller: '.smooth-scroll',
    scrub: true,
    toggleActions: 'play play play play',
    start: 'top 90%',
    end: 'top 80%',
  },
  opacity: 0,
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
    trigger: '.blank-hero-title-trigger',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 5%',
    end: 'top 3%',
    onEnter: () => changeTextAndClass('Manage', 'color-yellow'),
    onLeaveBack: () => changeTextAndClass('Manage ', 'color-green'),
  },
});

gsap.to('.top-bar--page-title', {
  snap: 'innerText',
  scrollTrigger: {
    trigger: '.influencers',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 5%',
    end: 'top 3%',
    onEnter: () => changeTextAndClass('Manage', 'color-green'),
    onLeaveBack: () => changeTextAndClass('Manage ', 'color-yellow'),
  },
});

// page-manage-piniata

ScrollTrigger.create({
  trigger: '.page-manage-blank-hero__gsap-trigger',
  scroller: '.smooth-scroll',
  start: 'top top',
  end: 'bottom 60%',
  pin: '.page-manage-piniata',
});
