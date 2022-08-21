import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

// cases title to opacity zero
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

function handleHoverInfluencerCase() {}
