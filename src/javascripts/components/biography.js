// Scroll beneath header.
const documentBody = document.querySelector('.biography') || document.querySelector('.exhibitions'); // doesn't work on Firefox

const scrollBeneathHeader = function scrollBeneathHeader() {
  window.addEventListener('load', () => {
    setTimeout(() => {
      documentBody.scrollBy({
        top: 1000,
        left: 0,
        behavior: 'smooth',
      });
    }, 750);
  });
};

export default scrollBeneathHeader;
