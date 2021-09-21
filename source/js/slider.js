const swiper = new Swiper(".swiper-header", {
  loop: true,
  speed: 500,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".header-pagination__dots-container",
    type: "bullets",
  },
});

const productsSwiper = new Swiper(".products__bottom", {
  speed: 500,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination-products",
    type: "bullets",
  },
  breakpoints: {
    1301: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 2.8,
    },
    860: {
      slidesPerView: 2,
    },
    765: {
      slidesPerView: 1.8,
    },
    600: {
      slidesPerView: 1.3,
      spaceBetween: 30,
    },
    500: {
      slidesPerView: 1.2,
    },

    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});

const videoSwiper = new Swiper(".video__body", {
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination-video",
    type: "bullets",
  },
  breakpoints: {
    1300: {
      speed: 500,
      slidesPerView: 2,
      spaceBetween: 30,
    },
    990: {
      slidesPerView: 1.6,
    },
    765: {
      slidesPerView: 1.4,
    },
    600: {
      slidesPerView: 1.3,
    },
    425: {
      slidesPerView: 1,
    },
  },
});
// const productTitleSwiper = new Swiper(".products__title-container", {
//   speed: 500,
//   spaceBetween: 30,
// });
const productTitleSwiper = new Swiper(".products__title-container", {
  speed: 400,
  spaceBetween: 30,
  freeMode: true,
  slidesPerView: "auto",
});
// const swiper = new Swiper(".swiper-header", {
//   loop: true,
//   speed: 500,
//   autoplay: {
//     delay: 5000,
//   },
//   pagination: {
//     el: ".header-pagination__dots-container",
//     type: "bullets",
//   },
// });
try {
  const swiperProduct = new Swiper(".product-slider", {
    simulateTouch: false,
    thumbs: {
      swiper: {
        el: ".image-mini-slider",
        slidesPerView: 2,
      },
    },
    zoom: {
      maxRatio: 5,
      minRatio: 1,
    },
  });

  const swiperRelated = new Swiper(".related-slider", {
    spaceBetween: 30,

    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
    zoom: {
      maxRatio: 5,
      minRatio: 1,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      500: {
        slidesPerView: 2,
      },
    },
  });

  const swiperPrev = document.getElementById("swiperPrev");
  const swiperNext = document.getElementById("swiperNext");

  swiperPrev.addEventListener("click", () => {
    swiperRelated.slidePrev();
  });
  swiperNext.addEventListener("click", () => {
    swiperRelated.slideNext();
  });
} catch (e) {
  console.log("slider error " + e);
}
