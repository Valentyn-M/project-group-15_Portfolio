import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
Swiper.use([Navigation, Keyboard]);

import 'swiper/css';
import 'swiper/css/navigation';
import iziToast from 'izitoast';
const reviewsWrap = document.querySelector('#reviewsWrap');
const errorReviews = `<div class='reviewError'>Not found!</div>`;
let apiErrorOccurred = false;

const swiper = new Swiper('.swiper', {
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1280: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

import axios from 'axios';
axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/apis';

async function getReviews() {
  try {
    const response = await axios.get('/reviews');
    return response.data;
  } catch (error) {
    console.log('Error fetching reviews');
    reviewsWrap.insertAdjacentHTML('beforeend', errorReviews);
    iziToast.error({
      class: 'izitoast-error',
      title: `${error.code}`,
      titleSize: '16px',
      titleLineHeight: '1.3',
      message: `${error.message}. ${error.response.data.message}`,
      messageSize: '16px',
      messageLineHeight: '1.4',
      close: true,
      closeOnEscape: true,
      position: 'topRight',
      timeout: 10000,
      animateInside: false,
      transitionIn: 'bounceInLeft',
    });
  }
}

function renderReviews(reviews) {
  const markup = reviews
    .map(review => {
      return `
        <li class="swiper-slide reviewbox">
          
            <div class='reviewtext'>${review.review}</div>
            <div class='author'>
              <img src="${review.avatar_url}" alt="avatar" class='avatar' loading="lazy">
              <div>${review.author}</div>
            
          </div>
        </li>
      `;
    })
    .join('');

  reviewsWrap.insertAdjacentHTML('beforeend', markup);
  swiper.update();
}

async function displayReviews() {
  const reviews = await getReviews();
  if (reviews) {
    renderReviews(reviews);
  }
}

displayReviews();
