import gsap from 'gsap';

// blank-hero--content color-green
// make title
gsap.from('.blank-hero--content', {
  scrollTrigger: {
    trigger: '.blank-hero',
    scroller: '.smooth-scroll',
    // scrub: true,
    markers: false,
  },

  yPercent: -150,
  duration: 1,
  ease: 'easeIn',
});

// make title
gsap.from('.blank-hero h1', {
  scrollTrigger: {
    trigger: '.blank-hero',
    scroller: '.smooth-scroll',
    // scrub: true,
    markers: false,
  },
  yPercent: 200,
  duration: 1,
  ease: 'easeIn',
});

// make title
gsap.to('.blank-hero h1', {
  scrollTrigger: {
    trigger: '.blank-hero-title-trigger',
    scroller: '.smooth-scroll',
    scrub: true,
    markers: false,
  },
  xPercent: 200,
  duration: 1,
  ease: 'easeIn',
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

handleInfluencersOnHover();
console.log('manage');
