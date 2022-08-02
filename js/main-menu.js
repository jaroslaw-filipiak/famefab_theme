// screen menu handle action on hover on Li element

export function handleScreenMenuLinksOnHover() {
  const menuItems = document.querySelectorAll('.main-menu li');
  const DynamicInfoWrapper = document.querySelector('.main-menu--dynamic-info');

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
      DynamicInfoWrapper.classList.add('main-menu--dynamic-info__visible');
    });

    link.addEventListener('mouseleave', () => {
      DynamicInfoWrapper.classList.remove('main-menu--dynamic-info__visible');
    });
  });
}
