/* eslint-disable no-unused-expressions */
import chosenLanguage from './language';

// Display paintings on main page.
const mainPaintingsContainer = document.querySelector('.main-container');
const filterButton = document.querySelector('.nav-bar__filter-button');
const structuralCollageButton = document.querySelector('.side-nav__subpages-buttons-structural-collage');
const InteriorButton = document.querySelector('.side-nav__subpages-buttons-interior');

const loaderContainer = document.querySelector('.loader-container');
const showLoader = function showLoader() {
  loaderContainer.style.display = 'flex';
};

const hideLoader = function hideLoader() {
  /* const num = document.querySelectorAll('img').length - 1;
  document.querySelectorAll('img')[num].addEventListener('load', () => {
    loaderContainer.style.display = 'none'; */
  loaderContainer.style.display = 'none';
};

const displayStructuralCollage = function displayStructuralCollage() {
  showLoader();
  mainPaintingsContainer.innerHTML = '';
  for (let i = Object.keys(chosenLanguage.artworks).length; i > 0; i -= 1) {
    let paintingNum = `000${i}`;
    paintingNum.length > 4
      ? paintingNum = paintingNum.slice(1)
      : paintingNum;
    chosenLanguage.artworks[paintingNum].paintingDataCycle === 'Structural Collage'
      ? mainPaintingsContainer.innerHTML
      += `
      <a href="./artwork.html" class="main-container__item" id="${paintingNum}">
        <img src="./images/${paintingNum}-1-min.jpg" alt="" class="main-container__image" loading="lazy">
        <p class="main-container__avaliability">
          ${chosenLanguage.artworks[paintingNum].paintingStatus}
        </p>
        <p class="main-container__cycle">
          ${chosenLanguage.artworks[paintingNum].paintingDataCycle}
        </p>
        <p class="main-container__title">
          ${chosenLanguage.artworks[paintingNum].paintingDataTitle}
        </p>
      </a>
      `
      : '';
  } // "./../../images/${paintingNum}/${paintingNum}-1.jpg"
  filterButton.innerText = chosenLanguage.menu.goToInterior;
  structuralCollageButton.className = 'side-nav__subpages-buttons-structural-collage--active';
  InteriorButton.className = 'side-nav__subpages-buttons-interior';
  hideLoader();
};

const displayInterior = function displayInterior() {
  showLoader();
  mainPaintingsContainer.innerHTML = '';
  for (let i = Object.keys(chosenLanguage.artworks).length; i > 0; i -= 1) {
    let paintingNum = `000${i}`;
    paintingNum.length > 4 ? paintingNum = paintingNum.slice(1) : paintingNum;
    chosenLanguage.artworks[paintingNum].paintingDataCycle === 'Interior'
      ? mainPaintingsContainer.innerHTML
      += `
      <a href="./artwork.html" class="main-container__item" id="${paintingNum}">
        <img src="./images/${paintingNum}-1-min.jpg" alt="" class="main-container__image" loading="lazy">
        <p class="main-container__avaliability">
          ${chosenLanguage.artworks[paintingNum].paintingStatus}
        </p>
        <p class="main-container__cycle">
          ${chosenLanguage.artworks[paintingNum].paintingDataCycle}
        </p>
        <p class="main-container__title">
          ${chosenLanguage.artworks[paintingNum].paintingDataTitle}
        </p>
      </a>
      `
      : '';
  } // "./../../images/${paintingNum}/${paintingNum}-1.jpg"
  filterButton.innerText = chosenLanguage.menu.goToStructuralCollage;
  InteriorButton.className = 'side-nav__subpages-buttons-interior--active';
  structuralCollageButton.className = 'side-nav__subpages-buttons-structural-collage';
  hideLoader();
};

const rememberedCycle = localStorage.getItem('rememberedCycle') || 'structuralCollage';

const displayMainPage = function displayMainPage() {
  window.addEventListener('load', () => {
    if (rememberedCycle === 'structuralCollage') {
      displayStructuralCollage();
    } else if (rememberedCycle === 'interior') {
      displayInterior();
    }
  });
};

const changeDisplayedCycle = function changeDisplayedCycle() {
  filterButton.addEventListener('click', () => {
    if (filterButton.innerText.includes('Interior')) {
      localStorage.setItem('rememberedCycle', 'interior');
      displayInterior();
      window.scroll(0, 0);
    } else if (filterButton.innerText.includes('Structural Collage')) {
      localStorage.setItem('rememberedCycle', 'structuralCollage');
      displayStructuralCollage();
      window.scroll(0, 0);
    }
  });
  structuralCollageButton.addEventListener('click', () => {
    localStorage.setItem('rememberedCycle', 'structuralCollage');
    displayStructuralCollage();
    window.scroll(0, 0);
  });

  InteriorButton.addEventListener('click', () => {
    localStorage.setItem('rememberedCycle', 'interior');
    displayInterior();
    window.scroll(0, 0);
  });
};

const moveScroll = function moveScroll() {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const scrollPostion = localStorage.getItem('scrollPosition');
      window.scroll(0, Math.abs(scrollPostion));
    }, 50);
  });
};

const observeScrollPostion = function observeScrollPostion() {
  window.addEventListener('scroll', () => {
    localStorage.setItem('scrollPosition', document.body.getBoundingClientRect().top);
  });
};

export {
  displayMainPage,
  changeDisplayedCycle,
  observeScrollPostion,
  moveScroll,
};
