/* eslint-disable no-unused-expressions */
import chosenLanguage from './language';

// Display exhibitions.
const exhibitionsContainer = document.querySelector('.exhibitions__container');

const displayExhibitions = function displayExhibitions() {
  for (let i = Object.keys(chosenLanguage.exhibitions.exhibitionsContainer).length; i > 0; i -= 1) {
    let exhibitionNum = `000${i}`;
    const {
      exhibitionTitle,
      exhibitionDate,
      exhibitionDescription,
      exhibitionLink1,
      exhibitionLink2,
      exhibitionLink3,
      exhibitionImage,
    } = chosenLanguage.exhibitions.exhibitionsContainer[exhibitionNum];
    exhibitionNum.length > 4
      ? exhibitionNum = exhibitionNum.slice(1)
      : exhibitionNum;
    exhibitionsContainer.innerHTML
      += `
      <div class="exhibitions__item">
        <div class="exhibitions__text">
          <p class="exhibitions__title">
            ${exhibitionTitle}
          </p>
          <p class="exhibitions__date">
            ${exhibitionDate}
          </p>
          <p class="exhibitions__description">
            ${exhibitionDescription}
          </p>
          <div>
            <a href="${exhibitionLink1}" class="exhibitions__link">
              ${exhibitionLink1}
            </a>
            <a href="${exhibitionLink2}" class="exhibitions__link">
              ${exhibitionLink2}
            </a>
            <a href="${exhibitionLink3}" class="exhibitions__link">
              ${exhibitionLink3}
            </a>
          </div>
        </div>
        <img src="${exhibitionImage}" alt=""  class="exhibitions__image" loading="lazy">
      </div>  
    `;
  }
};

export default displayExhibitions;
