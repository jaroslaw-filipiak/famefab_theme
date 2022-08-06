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
