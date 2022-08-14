import gsap from 'gsap';

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
    trigger: '.total-reach-trigger',
    scroller: '.smooth-scroll',
    scrub: true,
    markers: false,
  },
  xPercent: 200,
  duration: 1,
  ease: 'easeIn',
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

    item.addEventListener('mouseover', () => {
      name.innerHTML = item.dataset.name;
      section.style.backgroundImage = `url(${item.dataset.bg})`;
      caseInfo.classList.add('color-yellow');
      text.classList.add('color-yellow');
      item.classList.add('color-yellow');

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
changeSVGcolors();

console.log('make');
