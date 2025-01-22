window.onload = function () {
  const swiper1 = new Swiper(".mainSlide", {
    loop: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    autoplay: {
      delay: 2200,
      disableOnInteraction: false,
    },
  });
  const swiper2 = new Swiper(".instaSlide", {
    slidesPerView: 1.5,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
        
      768: {
        slidesPerView: 2.5,  //브라우저가 768보다 클 때
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3.5,  //브라우저가 1024보다 클 때
        spaceBetween: 20,
      },
    },
  });
};
