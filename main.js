import './main.scss';

import {
  handleScreenMenuLinksOnHover,
  handleHamburgerClick,
  handleClosemenu,
} from './js/main-menu';

import { checkUserZoomValue } from './js/zoom';

window.addEventListener('DOMContentLoaded', () => {
  function init() {
    handleScreenMenuLinksOnHover();
    handleHamburgerClick();
    handleClosemenu();
    checkUserZoomValue();
  }

  init();
});
