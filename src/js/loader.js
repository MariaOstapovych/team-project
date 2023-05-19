import Notiflix from 'notiflix';

class Loader {
  constructor() {
    this.loadingText = 'Loading...';
    this.loadingOptions = {
      clickToClose: true,
      svgSize: '200px',
      svgColor: '#2db023',
    };
  }

  show() {
    Notiflix.Loading.pulse(this.loadingText, this.loadingOptions);
  }

  hide() {
    Notiflix.Loading.remove();
  }
}
export const loader = new Loader();