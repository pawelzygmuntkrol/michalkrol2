import chosenLanguage from './language'; // WORK ON THIS WHEN DEPLOYED !!!

const redirectToCertainUrl = function redirectToCertainUrl() {
  if (Object.keys(chosenLanguage.artworks).includes(window.location.href.slice(-4)) === true) {
    alert('1');
    localStorage.setItem('paintingId', window.location.href.slice(-4));
    window.location.href = 'https://pawelzygmuntkrol.github.io/michalkrol2/artwork.html'; // 'http://www.michalkrol.eu/artworksitem.html';
  } else {
    alert('2');
    window.location.href = 'https://pawelzygmuntkrol.github.io/michalkrol2/index.html'; // 'http://www.michalkrol.eu/index.html';
  }
};

export default redirectToCertainUrl;
