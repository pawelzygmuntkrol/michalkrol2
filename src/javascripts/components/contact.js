// Show e-mail address and send e-mail.
const contactButton = document.querySelector('.contact__button');

const getEmailAddres = function getEmailAddres() {
  contactButton.addEventListener('click', () => {
    contactButton.className = 'contact__button contact__button--clicked';
    setTimeout(() => {
      contactButton.innerText = 'kontakt@michalkrol.eu';
    }, 1000);
  });
};

export default getEmailAddres;
