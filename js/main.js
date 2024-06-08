const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 1500,
  },
  slidesPerView: 'auto',
  spaceBetween: 150,
  speed: 2000,
  centeredSlides: true,
  loop: true,
  // allowTouchMove: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      spaceBetween: 50,
    },
    800: {
      spaceBetween: 100,
    },
    1024: {
      spaceBetween: 150,
    },
  },
});
