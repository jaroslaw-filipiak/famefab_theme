import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

gsap.registerPlugin(ScrollTrigger);

gsap.from('.our-reach--counter', {
  opacity: 0,
  scrollTrigger: {
    trigger: '.influencers',
    scroller: '.smooth-scroll',
    scrub: true,
    start: 'top center',
    end: 'top top',
  },
});

// gsap.from('#ourReachValue', {
//   innerText: 0,
//   snap: 'innerText',
//   scrollTrigger: {
//     trigger: '.influencers',
//     scroller: '.smooth-scroll',
//     scrub: true,
//     start: 'top 200%',
//     end: 'top -120%',
//   },
// });

// gsap.to('.our-reach--counter', {
//   left: -300,
//   scrollTrigger: {
//     trigger: '.footer',
//     scroller: '.smooth-scroll',
//     scrub: true,
//     start: 'top 70%',
//     end: 'top 40%',
//   },
// });

if (!isMobile) {
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

  // page-manage-piniata

  ScrollTrigger.create({
    trigger: '.page-manage-blank-hero__gsap-trigger',
    scroller: '.smooth-scroll',
    start: 'top top',
    end: 'bottom 60%',
    pin: '.page-manage-piniata',
  });
} // !wp_is_mobile

// if(isMobile) {

//   ScrollTrigger.create({
//     trigger: '.gsap__blank-hero-mobile-piniata--trigger',
//     scroller: '.smooth-scroll',
//     start: 'top bottom',
//     end: 'bottom 70%',
//     pin: '.gsap__blank-hero-mobile-piniata',
//     markers: true
//   });

// }

// gsap__blank-hero-mobile-piniata

function changeOverOnsClass(className) {
  console.log('change over ons class');
  const title = document.querySelector('.manage--title');
  title.classList = `manage--title ${className}`;
}

if (!isMobile) {
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
}

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

export default function handleInfluencersOnHover() {
  const outputPhoto = document.querySelector('.influencer--photo');
  const outputInfo = document.querySelector('.influencer-hover-output');
  const outputInfluencerName = document.querySelector(
    '.influencer-hover-output--name'
  );
  const dynamicLink = document.querySelector('.influencer-dynamic-link');

  const list = document.querySelectorAll(
    '#influencers .iterable__desktop .influencers--list-item'
  );

  const listArr = [...list];
  listArr.map((item) => {
    // mouseover start
    item.addEventListener('mouseover', (e) => {
      // remove all active classes
      listArr.map((item) => {
        item.classList.remove('influencer-is-active');
      });

      e.target.classList.add('influencer-is-active');
      outputInfluencerName.innerHTML = e.target.dataset.name;
      outputInfo.innerHTML = e.target.dataset.info;
      outputPhoto.style.backgroundImage = `url(${e.target.dataset.thumb})`;
      dynamicLink.setAttribute('href', e.target.dataset.link);
    });
    // mouseover end

    // click start
    item.addEventListener('click', (e) => {
      window.location.href = e.target.dataset.link;
    });
    // click end
  });
}

handleInfluencersOnHover();
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
  end: 'bottom 90%',
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

  const outputInfluencerReach = document.querySelector('.our-reach__dynamic');
  const reachWrapper = document.querySelector('.our-reach--counter');
  const reachUnit = document.querySelector('.our-reach-unit');
  const reachTitle = document.querySelector('.our-reach-title');

  if (!isMobile) {
    // reachWrapper.classList = `our-reach--counter opacity-1`;
    outputInfluencerReach.classList = `our-reach--counter-value our-reach__dynamic `;
    outputInfluencerReach.innerHTML = influencer.dataset.reach
      ? influencer.dataset.reach
      : '';
    reachUnit.innerHTML = influencer.dataset.reach ? 'k' : '';
    reachTitle.innerHTML = influencer.dataset.reach ? 'our reach' : '';
    outputInfluencerName.innerHTML = influencer.dataset.name;
    outputInfo.innerHTML = influencer.dataset.info;
    outputPhoto.style.backgroundImage = `url(${influencer.dataset.thumb})`;
    dynamicLink.classList.remove('opacity-0');
    dynamicLink.setAttribute('href', influencer.dataset.link);

    // influencersBG.style.backgroundImage = `url(${influencer.dataset.bg})`;

    influencersBG.classList = `influencers--dynamic-bg opacity-0`;
    outputInfluencerName.classList = `influencer-hover-output--name`;
    outputInfo.classList = `influencer-hover-output`;

    const allInfluencersTitles =
      document.querySelectorAll('.influencer--title');

    // allInfluencersTitles.forEach((item) => {
    //   item.classList = `influencer--title color-green`;
    // });

    setTimeout(() => {
      // influencersBG.classList = `influencers--dynamic-bg opacity-1`;
      // outputInfo.classList = `influencer-hover-output color-yellow`;
      // outputInfluencerName.classList = `influencer-hover-output--name color-yellow`;
    }, 3000);
  }
}

const influencers = gsap.utils.toArray('.influencers--list-item');

if (!isMobile) {
  influencers.forEach((influencer) => {
    gsap.to(influencer, {
      scrollTrigger: {
        scroller: '.smooth-scroll',
        trigger: influencer,
        start: 'top center',
        end: '+=120',
        scrub: false,
        toggleClass: 'influencer-is-active',
        onEnter: () => handleInfluencer(influencer),
        onEnterBack: () => handleInfluencer(influencer),
      },
    });
  });
} else if (isMobile) {
  influencers.forEach((influencer) => {
    gsap.to(influencer, {
      scrollTrigger: {
        scroller: '.smooth-scroll',
        trigger: influencer,
        start: 'top center',
        end: '+=40',
        scrub: false,
        toggleClass: 'influencer-is-active',
        onEnter: () => handleInfluencer(influencer),
        onEnterBack: () => handleInfluencer(influencer),
      },
    });
  });
}

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
  const topBar = document.querySelector('.top-bar');
  const title = document.querySelector('.top-bar--page-title ');
  title.innerHTML = value;
  topBar.classList = 'top-bar ' + addClass;
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

// / our reach bg change color

gsap.to('.our-reach--counter', {
  '--counter-color': '#e7ffc8',
  immediateRender: false,
  scrollTrigger: {
    trigger: '.page-manage-blank-hero__gsap-trigger',
    scroller: '.smooth-scroll',
    scrub: true,
    start: () => 'top ' + window.innerWidth * 0.17,
    end: () => 'top ' + window.innerWidth * 0.2,
  },
});

gsap.to('.our-reach--counter', {
  '--counter-color': '#214c2c',
  immediateRender: false,
  scrollTrigger: {
    trigger: '.influencers',
    scroller: '.smooth-scroll',
    scrub: true,
    start: () => 'top ' + window.innerWidth * 0.17,
    end: () => 'top ' + window.innerWidth * 0.2,
  },
});
