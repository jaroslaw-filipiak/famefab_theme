import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

gsap.registerPlugin(ScrollTrigger);

function changeMakeClass(className) {
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
    left: '-5400',
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

// export function changeSVGcolors(color) {
//   const circle = document.querySelector(
//     '.cases .arrow-right--circle svg circle'
//   ); //stroke
//   const arrow = document.querySelector('.cases .arrow-right--arrow svg path'); //fill

//   arrow.setAttribute('fill', color);
//   circle.setAttribute('stroke', color);
// }

// changeSVGcolors('#214c2c');

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
    trigger: '.influencers',
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
      trigger: '.influencers',
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
      trigger: '.influencers',
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

gsap.to('.footer', {
  scrollTrigger: {
    scroller: '.smooth-scroll',
    trigger: '.footer',
    start: 'top 60%',
    end: `top 50%`,
    scrub: true,
    markers: false,
    // toggleClass: 'influencer-is-active',
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

// =============
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

if (!isMobile) {
  handleInfluencersOnHover();
}

ScrollTrigger.create({
  trigger: '.influencers',
  scroller: '.smooth-scroll',
  start: 'top top',
  end: 'bottom 90%',
  pin: '.influencer-area-pinned',
  markers: false,
});
