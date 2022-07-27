// // Swiper 7.4.1
import './vendor/swiper';

const initSwiper = () => {
  let swiper = new Swiper('.coaches__swiper', {
    navigation: {
      nextEl: '.coaches__button--next',
      prevEl: '.coaches__button--prev',
    },
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        allowTouchMove: true,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: false,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
        allowTouchMove: false,
      },
    },
  });
};

const feedbackSwiper = () => {
  let swiper = new Swiper('.feedback__swiper', {
    navigation: {
      nextEl: '.feedback__button--next',
      prevEl: '.feedback__button--prev',
    },
    slidesPerView: 1,
    allowTouchMove: false,
  });
};
export {initSwiper, feedbackSwiper};
