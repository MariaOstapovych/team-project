// Iryna
import { fondItems } from './fond-items';
import Swiper from 'swiper';
import Mousewheel from 'swiper/modules/mousewheel/mousewheel';

const supportList = document.querySelector(`.support-list-js`);
const swiperButton = document.querySelector('.swiper-button-next');

  function markupFonds(fondItems) {
    let itemNumber = 0; 

    const markup = fondItems.map(function ({ url, imageFond1, imageFond2, title }) {
    itemNumber++; 
    const formattedNumber = formatNumber(itemNumber); 

    return `<li class="swiper-slide support-items">
      <p class="support-number">${formattedNumber}</p>
      <a href="${url}" target="_blank" rel="noopener noreferrer nofollow">
        <img class="support-image" srcset="${imageFond1} 1x, ${imageFond2} 2x" src="${imageFond1}"
        alt="${title}" loading="lazy" width="129"/>
      </a>
    </li>`;
  }).join("");

  return markup;
}

supportList.innerHTML = markupFonds(fondItems);

const swiper = new Swiper('.swiper', {
 
  direction: 'vertical',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
  },
  speed: 400,

  breakpoints: {
    // when window width is >= 300px
    300: {
      slidesPerView: 3,
    },
     // when window width is >= 768px
    768: {
      slidesPerView: 4,
    } 
  },

  modules: [Mousewheel],
  mousewheel: true,  
});

swiperButton.addEventListener('click', () => {
 swiper.slideNext();
});

function formatNumber(num) {
  return num.toString().padStart(2, '0');
};

