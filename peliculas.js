const SliderMovies = new Swiper(".swiper_movies", {
    loop: false,
    allowTouchMove: false,
    // autoplay: {
    //   delay: 3000,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init: function () {
        toggleButton(this);
      },
      slideChange: function () {
        toggleButton(this);
      },
    },
    slidesPerView: 2,
    spaceBetween: 8,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 12,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 6,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1280: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
      1440: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
    },
    effect: "slide",
  });
  
  function toggleButton(swiper) {
    const nextButton = swiper.el.querySelector(".swiper-button-next");
    const prevButton = swiper.el.querySelector(".swiper-button-prev");
  
    if (swiper.isBeginning) {
      prevButton.classList.add("swiper_button_hidden");
    } else {
      prevButton.classList.remove("swiper_button_hidden");
    }
  
    if (swiper.isEnd) {
      nextButton.classList.add("swiper_button_hidden");
    } else {
      nextButton.classList.remove("swiper_button_hidden");
    }
  }
  
  function toggleMenu() {
    const menu = document.querySelector(".menu");
    const hamburger = document.querySelector(".hamburger");
    menu.classList.toggle("active"); // Activa/desactiva el menú
    hamburger.classList.toggle("active"); // Activa/desactiva la animación del icono
  }
  