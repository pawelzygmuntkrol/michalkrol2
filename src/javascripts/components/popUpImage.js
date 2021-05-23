import chosenLanguage from './language';

const popUpContainer = document.querySelector('.pop-up');
const showPopUpContainer = function showPopUpContainer() {
  let popUpImage = `000${Object.keys(chosenLanguage.artworks).length}`;
  if (popUpImage.length > 4) {
    popUpImage = popUpImage.slice(1);
  }
  window.addEventListener('load', () => {
    popUpContainer.innerHTML = `
      <div class="pop-up__container">
        <img src="./images/${popUpImage}-1.jpg" alt="" class="pop-up__image">
      </div>
    `;
  });
}; // "./images/${popUpImage}/${popUpImage}-1.jpg"

const hidePopUpContainer = function hidePopUpContainer() {
  popUpContainer.addEventListener('click', () => {
    popUpContainer.className = 'pop-up pop-up--hidden';
    setTimeout(() => {
      popUpContainer.className = 'pop-up pop-up--deleted';
    }, 1000);
    localStorage.setItem('popUpImageStorageValue', 'clicked');
  });
};

export {
  showPopUpContainer,
  hidePopUpContainer,
};
