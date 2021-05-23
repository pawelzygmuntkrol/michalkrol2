import chosenLanguage from './language';

let paintingId = '';
const getPaintingId = function getPaintingId() {
  window.addEventListener('click', (event) => {
    if (event.target.className.includes('main-container') === true && event.target.className !== 'main-container') {
      paintingId = event.target.parentNode.id;
      localStorage.setItem('paintingId', paintingId);
    }
  });
};

paintingId = localStorage.getItem('paintingId');

function setUrl() {
  // window.history.replaceState('http://michalkrol.eu/', '', `http://michalkrol.eu/artwork/${paintingId}`);
  window.history.replaceState('https://pawelzygmuntkrol.github.io/michalkrol2/index.html', '', `https://pawelzygmuntkrol.github.io/michalkrol2/artwork/${paintingId}`);
}

const mainContainer = document.querySelector('.artwork-container');
const displayArtworkData = function displayArtworkData() {
  window.addEventListener('load', () => {
  // paintingId = localStorage.getItem('paintingId');
    let paintingsHTML = '';
    const {
      paintingImages,
      paintingTitle,
      paintingYearOfCreation,
      paintingStatus,
      paintingDescription,
      paintingDataCycle,
      paintingDimensionsWidth,
      paintingDimensionsHeight,
    } = chosenLanguage.artworks[paintingId];
    for (let i = 1; i < Object.keys(paintingImages).length + 1; i += 1) {
      paintingsHTML += `
        <div class="artwork-container__image-item-container">
          <img src="./../images/${paintingId}-${i}.jpg" alt="" class="artwork-container__image" loading="lazy">
        </div>
        `;
    } // "./../images/${paintingId}/${paintingId}-${i}.jpg"
    mainContainer.innerHTML = `
    <div class="artwork-container__images-container">
      ${paintingsHTML}
      <div class="artwork-container__description-container">
          <h1 class="artwork-container__description-title">
            ${paintingTitle}
          </h1>
          <p class="artwork-container__description-date">
            ${paintingYearOfCreation}
          </p>
          <p class="artwork-container__description-status">
            ${paintingStatus}
          </p>
          <p class="artwork-container__description-text">
            ${paintingDescription}
          </p>
      </div>
    </div>
    <div class="artwork-container__painting-information">
      <p class="artwork-container__title">
        ${paintingTitle}
      </p>
      <p class="artwork-container__cycle">
        ${paintingDataCycle}
      </p>
    </div>
    <div class="artwork-container__painting-dimensions">
      <p class="artwork-container__width">
        ${paintingDimensionsWidth}
      </p>
      <p class="artwork-container__height">
        ${paintingDimensionsHeight}
      </p>
    </div>
    `;
  });
};

const changeMenuButtonColor = function changeColors() {
  window.addEventListener('load', () => {
    document.querySelector('.nav-bar__menu-button').style.color = 'gray';
  });
};

const changeColors = function changeColors() {
  mainContainer.addEventListener('scroll', () => {
    if (mainContainer.scrollTop + mainContainer.offsetHeight === mainContainer.scrollHeight) {
      document.querySelector('.nav-bar__menu-button').style.color = 'black';
      document.querySelector('.nav-bar__back-button').style.color = 'black';
      document.querySelector('.artwork-container__description-container').style.backgroundColor = 'white';
      document.querySelector('.artwork-container__painting-information').style.color = 'white';
      document.querySelector('.artwork-container__painting-dimensions').style.color = 'white';
    } else {
      document.querySelector('.nav-bar__menu-button').style.color = 'gray';
      document.querySelector('.nav-bar__back-button').style.color = 'gray';
      document.querySelector('.artwork-container__description-container').style.backgroundColor = 'black';
      document.querySelector('.artwork-container__painting-information').style.color = 'gray';
      document.querySelector('.artwork-container__painting-dimensions').style.color = 'gray';
    }
  });
};

export {
  getPaintingId,
  displayArtworkData,
  changeMenuButtonColor,
  changeColors,
  setUrl,
};
