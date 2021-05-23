// Helper functions used on subpages.
import chosenLanguage from './components/language';
import hideCookieBanner from './components/cookieBanner';
import {
  showPopUpContainer,
  hidePopUpContainer,
} from './components/popUpImage';
import showSideNav from './components/sideNav';
import {
  displayMainPage,
  changeDisplayedCycle,
  observeScrollPostion,
  moveScroll,
} from './components/index';
import {
  getPaintingId,
  displayArtworkData,
  changeMenuButtonColor,
  changeColors,
  setUrl,
} from './components/artwork';
import displayExhibitions from './components/exhibitions';
import scrollBeneathHeader from './components/biography';
import getEmailAddres from './components/contact';
import redirectToCertainUrl from './components/404';

import '@fortawesome/fontawesome-free/js/fontawesome'; // eslint-disable-line import/no-extraneous-dependencies
import '@fortawesome/fontawesome-free/js/brands'; // eslint-disable-line import/no-extraneous-dependencies

const plLanguageButton = document.querySelector('.side-nav__languages-buttons-pl');
const enLanguageButton = document.querySelector('.side-nav__languages-buttons-en');
const deLanguageButton = document.querySelector('.side-nav__languages-buttons-de');

const changeDetectedLanguage = function changeDetectedLanguage() {
  plLanguageButton.addEventListener('click', () => {
    localStorage.setItem('language', 'pl');
    location.reload(); // eslint-disable-line 
  });
  enLanguageButton.addEventListener('click', () => {
    localStorage.setItem('language', 'en');
    location.reload(); // eslint-disable-line 
  });
  deLanguageButton.addEventListener('click', () => {
    localStorage.setItem('language', 'de');
    location.reload(); // eslint-disable-line 
  });
};

const cookieBannerStorage = localStorage.getItem('cookieBannerStorageValue');
const popUpImageStorage = localStorage.getItem('popUpImageStorageValue');

if (cookieBannerStorage === 'clicked') {
  document.querySelector('.cookie-banner').className = 'cookie-banner--deleted';
} else {
  const {
    cookieBannerParagraph,
    cookieBannerLink,
    cookieBannerButton,
  } = chosenLanguage.cookieBanner;
  document.querySelector('.cookie-banner__paragraph').innerText = cookieBannerParagraph;
  document.querySelector('.cookie-banner__link').innerText = cookieBannerLink;
  document.querySelector('.cookie-banner__button').innerText = cookieBannerButton;
}

const {
  menuButton,
  artworksMenuButton,
  exhibitionsMenuButton,
  biographyMenuButton,
  contactMenuButton,
} = chosenLanguage.menu;
document.querySelector('.nav-bar__menu-button').innerText = menuButton;
document.querySelector('.side-nav__subpages-buttons-artworks').innerText = artworksMenuButton;
document.querySelector('.side-nav__subpages-buttons-exhibitions').innerText = exhibitionsMenuButton;
document.querySelector('.side-nav__subpages-buttons-biography').innerText = biographyMenuButton;
document.querySelector('.side-nav__subpages-buttons-contact').innerText = contactMenuButton;

if (window.location.href.includes('index')) {
  // Index
  const {
    goToInterior,
  } = chosenLanguage.menu;
  document.querySelector('.nav-bar__filter-button').innerText = goToInterior;
  if (popUpImageStorage === 'clicked') {
    document.querySelector('.pop-up').className = 'pop-up--deleted';
  } else {
    showPopUpContainer();
    hidePopUpContainer();
  }
  displayMainPage();
  changeDisplayedCycle();
  getPaintingId();
  moveScroll();
  observeScrollPostion();
} else if (window.location.href.includes('artwork')) {
  // Artwork
  const {
    backToMainPage,
  } = chosenLanguage.menu;
  document.querySelector('.nav-bar__back-button').innerText = backToMainPage;
  displayArtworkData();
  changeMenuButtonColor();
  changeColors();
  setUrl();
} else if (window.location.href.includes('exhibitions')) {
  // Exhibitions
  const {
    exhibitionsHeader,
  } = chosenLanguage.exhibitions;
  document.querySelector('.exhibitions__header').innerText = exhibitionsHeader;
  displayExhibitions();
  scrollBeneathHeader();
} else if (window.location.href.includes('biography')) {
  // Biography
  const {
    biographyHeader,
    biographyParagraph,
  } = chosenLanguage.biography;
  document.querySelector('.biography__header').innerText = biographyHeader;
  document.querySelector('.biography__paragraph').innerText = biographyParagraph;
  scrollBeneathHeader();
} else if (window.location.href.includes('contact')) {
  // Contact.
  const {
    contactHeader,
    contactButton,
  } = chosenLanguage.contact;
  document.querySelector('.contact__header').innerText = contactHeader;
  document.querySelector('.contact__button').innerText = contactButton;
  getEmailAddres();
} else if (window.location.href.includes('404')) {
  localStorage.setItem('paintingId', window.location.href.slice(-4));
  redirectToCertainUrl();
}

hideCookieBanner();
showSideNav();
changeDetectedLanguage();
