import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.create({
//   trigger: '.influencers',
//   scroller: '.smooth-scroll',
//   start: 'top top',
//   end: 'bottom 150px',
//   pin: '.influencer-area-pinned',
// });

gsap.to('.influencers--title', {
  scrollTrigger: {
    trigger: '.influencer--info',
    scroller: '.smooth-scroll',
    scrub: true,

    toggleActions: 'play none none reset',
    start: 'top 65%',
    end: 'top 50%',
  },
  left: '40',
  duration: 1,
  ease: 'easeIn',
});

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
