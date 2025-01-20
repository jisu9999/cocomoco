window.onload = function () {
  const swiper1 = new Swiper(".mainSlide", {
    loop: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  const swiper2 = new Swiper(".instaSlide", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
