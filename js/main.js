const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 1500,
  },
  slidesPerView: 'auto',
  spaceBetween: 150,
  speed: 2000,
  centeredSlides: true,
  loop: true,
  allowTouchMove: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
