/* eslint-disable no-unused-expressions */
import chosenLanguage from './language';

const menuButton = document.querySelector('.nav-bar__menu-button--unclicked');
const sideNav = document.querySelector('.side-nav');

const showSideNav = function showSideNav() {
  menuButton.addEventListener('click', () => {
    if (menuButton.className.includes('nav-bar__menu-button--unclicked') === true) {
      menuButton.className = 'nav-bar__menu-button nav-bar__menu-button--clicked nav-bar__menu-button--hidden';
      sideNav.className = 'side-nav side-nav--shown';
      setTimeout(() => {
        menuButton.className = 'nav-bar__menu-button nav-bar__menu-button--clicked';
      }, 550);
      menuButton.innerText = chosenLanguage.menu.closeMenuButton;
    } else if (menuButton.className.includes('nav-bar__menu-button--clicked') === true) {
      menuButton.className = 'nav-bar__menu-button nav-bar__menu-button--clicked nav-bar__menu-button--hidden';
      sideNav.className = 'side-nav side-nav--hidden';
      setTimeout(() => {
        menuButton.className = 'nav-bar__menu-button nav-bar__menu-button--unclicked';
      }, 550);
      menuButton.innerText = chosenLanguage.menu.menuButton;
    }
  });
};

export default showSideNav;
