// screen menu handle action on hover on Li element

export function handleScreenMenuLinksOnHover() {
  const menuItems = document.querySelectorAll('.main-menu li');
  const dynamicInfoWrapper = document.querySelector('.main-menu--dynamic-info');

  const dynamicInfoTitle = document.querySelector(
    '.main-menu--dynamic-info--title'
  );
  const dynamicInfoSubtitle = document.querySelector(
    '.main-menu--dynamic-info--subtitle'
  );

  menuItems.forEach((link) => {
    link.addEventListener('mouseover', () => {
      dynamicInfoTitle.innerHTML = link.dataset.title;
      dynamicInfoSubtitle.innerHTML = link.dataset.content;
      dynamicInfoWrapper.classList.add('main-menu--dynamic-info__visible');
    });

    link.addEventListener('mouseleave', () => {
      dynamicInfoWrapper.classList.remove('main-menu--dynamic-info__visible');
    });
  });
}

export function handleHamburgerClick() {
  const hamburger = document.querySelector('.hamburger');
  const mainMenu = document.querySelector('.main-menu');
  hamburger.addEventListener('click', () => {
    mainMenu.classList.toggle('main-menu__visible');
  });
}

export function handleClosemenu() {
  const closeBtn = document.querySelector('.main-menu--close-btn');
  const mainMenu = document.querySelector('.main-menu');

  closeBtn.addEventListener('click', () => {
    mainMenu.classList.remove('main-menu__visible');
  });
}
