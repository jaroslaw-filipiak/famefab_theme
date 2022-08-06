import './main.scss';

import {
  handleScreenMenuLinksOnHover,
  handleHamburgerClick,
  handleClosemenu,
} from './js/main-menu';

window.addEventListener('DOMContentLoaded', () => {
  function init() {
    handleScreenMenuLinksOnHover();
    handleHamburgerClick();
    handleClosemenu();
  }

  init();
  console.log('init / global scripts');
});
