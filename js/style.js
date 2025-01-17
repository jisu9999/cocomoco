window.onload = function () {
  const swiper = new Swiper(".mainSlide", {
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
};
