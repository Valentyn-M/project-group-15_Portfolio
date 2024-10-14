import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
Swiper.use([Navigation, Pagination]);

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const reviewsWrap = document.querySelector('#reviewsWrap');

const swiper = new Swiper('.swiper', {
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
axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

async function getReviews() {
  try {
    const response = await axios.get('/reviews');
    return response.data;
  } catch (error) {
    console.log('Error fetching reviews:', error);
    alert('Failed to fetch reviews. Please, try again later.');
    reviewsWrap.insertAdjacentHTML('beforeend', 'Not found');
  }
}

function renderReviews(reviews) {
  const markup = reviews
    .map(review => {
      return `
        <li class="swiper-slide">
          <div class='reviewbox'>
            <div class='reviewtext'>${review.review}</div>
            <div class='author'>
              <img src="${review.avatar_url}" alt="avatar" class='avatar'>
              <div>${review.author}</div>
            </div>
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
