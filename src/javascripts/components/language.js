import pl from './languages/pl';
import en from './languages/en';
import de from './languages/de';

const storagedLanguage = localStorage.getItem('language');
let detectedLanguage = '';

if (storagedLanguage === 'pl') {
  detectedLanguage = pl;
  document.querySelector('.side-nav__languages-buttons-pl').style.color = 'white';
} else if (storagedLanguage === 'de') {
  detectedLanguage = de;
  document.querySelector('.side-nav__languages-buttons-de').style.color = 'white';
} else if (storagedLanguage === 'en') {
  detectedLanguage = en;
  document.querySelector('.side-nav__languages-buttons-en').style.color = 'white';
} else if (navigator.language.includes('pl')) {
  detectedLanguage = pl;
  document.querySelector('.side-nav__languages-buttons-pl').style.color = 'white';
} else if (navigator.language.includes('de')) {
  detectedLanguage = de;
  document.querySelector('.side-nav__languages-buttons-de').style.color = 'white';
} else {
  detectedLanguage = en;
  document.querySelector('.side-nav__languages-buttons-en').style.color = 'white';
}

const chosenLanguage = detectedLanguage;

export default chosenLanguage;
