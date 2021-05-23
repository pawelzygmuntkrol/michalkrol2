// Show side-nav.
const cookieBanner = document.querySelector('.cookie-banner');
const cookieBannerButton = document.querySelector('.cookie-banner__button');

// Hide cookie banner.

const hideCookieBanner = function hideCookieBanner() {
  cookieBannerButton.addEventListener('click', () => {
    cookieBanner.className = 'cookie-banner cookie-banner--hidden';
    setTimeout(() => {
      cookieBanner.className = 'cookie-banner cookie-banner--deleted';
    }, 1000);
    localStorage.setItem('cookieBannerStorageValue', 'clicked');
  });
};

export default hideCookieBanner;
