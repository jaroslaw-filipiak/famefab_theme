import './main.scss';

import { handleScreenMenuLinksOnHover } from './js/main-menu';

window.addEventListener('DOMContentLoaded', () => {
  function init() {
    handleScreenMenuLinksOnHover();
  }

  init();
});
