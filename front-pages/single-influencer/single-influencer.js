import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// gsap.from('.our-reach--counter', {
//   opacity: 0,
//   scrollTrigger: {
//     trigger: '.influencer-hero .second-row',
//     scroller: '.smooth-scroll',
//     scrub: true,
//     start: 'top 60%',
//     end: 'bottom',
//   },
// });

gsap.to('#FBValue', {
  innerText: 435,
  snap: 'innerText',
  scrollTrigger: {
    trigger: 'body',
    scroller: '.influencer-hero',
    // scrub: true,
    // start: 'top top',
    // end: 'top top ',
  },
  duration: 6,
});

gsap.to('#InstaValue', {
  innerText: 28945,
  snap: 'innerText',
  scrollTrigger: {
    trigger: 'body',
    scroller: '.influencer-hero',
    // scrub: true,
    // start: 'top top',
    // end: 'top top ',
  },
  duration: 6,
});

ScrollTrigger.create({
  trigger: '.influencer-hero',
  scroller: '.smooth-scroll',
  start: 'top top',
  end: 'bottom center',
  pin: '.influencer-hero--content',
});

ScrollTrigger.create({
  trigger: '.influencer-cases',
  scroller: '.smooth-scroll',
  start: 'top top',
  pin: '.influencer-cases--content',
  // toggleActions: 'play none none none',
});

// influencer-hero--content

let influencerHeroContent = gsap.timeline();

influencerHeroContent.from('.influencer-hero--content', {
  scrollTrigger: {
    trigger: 'body',
    scroller: '.smooth-scroll',
    // scrub: true,
    start: 'top center',
  },
  opacity: 0,
  delay: 0.3,
  top: 60,
});

function changeClass(className) {
  const item = document.querySelector('.influencer-hero--content');
  item.classList = 'influencer-hero--content ' + className;
}

gsap.to('.influencer-hero--content', {
  scrollTrigger: {
    trigger: '.influencer-hero .second-row',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 16%',

    onEnter: () => changeClass('color-green'),
    onLeaveBack: () => changeClass('color-yellow'),
  },
});

// single-influencer-fixed-heading
gsap.to('.single-influencer-fixed-heading', {
  scrollTrigger: {
    trigger: '.single-influencer-fixed-heading__gsap-trigger',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 110%',
    end: 'top bottom',
    toggleActions: 'play none none reset',
  },
  opacity: 0,
});

// about title from right
gsap.from('.single-influencer--title', {
  scrollTrigger: {
    trigger: '.single-influencer-fixed-heading__gsap-trigger',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 80%',
    end: 'top 20%',
    toggleActions: 'play none none reset',
  },
  opacity: 0,
  left: 2000,
});

// about title to opacity zero
gsap.to('.single-influencer--title', {
  scrollTrigger: {
    trigger: '.influencer-cases--content__dynamic',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top center',
    end: 'top 20%',
    toggleActions: 'play none none reset',
  },
  opacity: 0,
});

// cases title to opacity 1
gsap.to('.single-influencer--title-cases', {
  scrollTrigger: {
    trigger: '.influencer-cases--content__dynamic',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top center',
    end: 'top 20%',
    toggleActions: 'play none none reset',
  },
  opacity: 1,
});

gsap.to('.single-influencer--title-cases', {
  scrollTrigger: {
    trigger: '.detail-pagination ',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top bottom',
    end: 'top 80%',
    toggleActions: 'play reset reset reset',
  },
  opacity: 0,
});

// change content on hover on  ==> .single-influencer--case item

const caseItems = document.querySelectorAll('.single-influencer--case'),
  caseItemsArr = [...caseItems];

const title = document.querySelector('.influencer-cases--dynamic-title');
const subtitle = document.querySelector('.influencer-cases--dynamic-subtitle');
const link = document.querySelector('.influencer-cases--dynamic-link');

caseItemsArr.forEach((item) => {
  item.addEventListener('mouseover', (e) => {
    const thisItem = e.target.parentNode;

    title.innerHTML = thisItem.dataset.title;
    subtitle.innerHTML = thisItem.dataset.subtitle;
    link.setAttribute('href', thisItem.dataset.link);
    link.classList.remove('opacity-0');
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
    trigger: '.influencer-hero .second-row',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 5%',
    end: 'top 3%',
    onEnter: () => changeTextAndClass('Influencers', 'color-green'),
    onLeaveBack: () => changeTextAndClass('Influencers', 'color-yellow'),
  },
});

gsap.to('.top-bar--page-title', {
  snap: 'innerText',
  scrollTrigger: {
    trigger: '.detail-pagination',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 5%',
    end: 'top 3%',
    onEnter: () => changeTextAndClass('Influencers', 'color-yellow'),
    onLeaveBack: () => changeTextAndClass('Influencers', 'color-green'),
  },
});

gsap.to('.top-bar--page-title', {
  snap: 'innerText',
  scrollTrigger: {
    trigger: '.footer',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top 5%',
    end: 'top 3%',
    onEnter: () => changeTextAndClass('', 'color-yellow'),
    onLeaveBack: () => changeTextAndClass('Influencers', 'color-yellow'),
  },
});

// Facebook counter colors // our-reach--counter our-reach--counter__facebook color-yellow

function changeFBclass(ColorClass) {
  const item = document.querySelector('.our-reach--counter__facebook');
  item.classList =
    'our-reach--counter our-reach--counter__facebook ' + ColorClass;
}

gsap.to('.our-reach--counter__facebook', {
  snap: 'innerText',
  scrollTrigger: {
    trigger: '.influencer-hero .second-row',
    scroller: '.smooth-scroll',
    // scrub: true,
    start: 'top 30%',
    end: 'top 30%',
    onEnter: () => changeFBclass('color-green '),
    onLeaveBack: () => changeFBclass('color-yellow'),
  },
});

gsap.to('.our-reach--counter__facebook', {
  snap: 'innerText',
  scrollTrigger: {
    trigger: '.detail-pagination ',
    scroller: '.smooth-scroll',
    // scrub: true,
    start: 'top 30%',
    end: 'top 30%',
    onEnter: () => changeFBclass('color-yellow'),
    onLeaveBack: () => changeFBclass('color-green'),
  },
});

gsap.to('.our-reach--counter__facebook', {
  snap: 'innerText',
  scrollTrigger: {
    trigger: '.footer',
    scroller: '.smooth-scroll',
    // scrub: true,
    start: 'top 30%',
    end: 'top 30%',
    onEnter: () => changeFBclass('opacity-0'),
    onLeaveBack: () => changeFBclass('opacity-100 color-yellow'),
  },
});

// Instagram counter colors // our-reach--counter our-reach--counter__insta color-yellow

function changeInstaClass(ColorClass) {
  const item = document.querySelector('.our-reach--counter__insta');
  item.classList = 'our-reach--counter our-reach--counter__insta ' + ColorClass;
}

gsap.to('.our-reach--counter__insta', {
  snap: 'innerText',
  scrollTrigger: {
    trigger: '.influencer-hero .second-row',
    scroller: '.smooth-scroll',
    // scrub: true,
    start: 'top 50%',
    end: 'top 50%',
    onEnter: () => changeInstaClass('color-green '),
    onLeaveBack: () => changeInstaClass('color-yellow'),
  },
});

gsap.to('.our-reach--counter__insta', {
  snap: 'innerText',
  scrollTrigger: {
    trigger: '.detail-pagination ',
    scroller: '.smooth-scroll',
    // scrub: true,
    start: 'top 50%',
    end: 'top 50%',
    onEnter: () => changeInstaClass('color-yellow'),
    onLeaveBack: () => changeInstaClass('color-green'),
  },
});

gsap.to('.our-reach--counter__insta', {
  snap: 'innerText',
  scrollTrigger: {
    trigger: '.footer',
    scroller: '.smooth-scroll',
    // scrub: true,
    start: 'top 50%',
    end: 'top 50%',
    onEnter: () => changeInstaClass('opacity-0'),
    onLeaveBack: () => changeInstaClass('opacity-100 color-yellow'),
  },
});
