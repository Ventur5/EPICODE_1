const swipers = document.querySelectorAll(".swiper");

swipers.forEach((swiperEl) => {
  new Swiper(swiperEl, {
    slidesPerView: "auto",
    spaceBetween: 16,
    freeMode: true,
    navigation: {
      nextEl: swiperEl.querySelector(".swiper-button-next"),
      prevEl: swiperEl.querySelector(".swiper-button-prev"),
    },
  });
});
