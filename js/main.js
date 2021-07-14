  swiper = new Swiper('.channel__channel-content', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints:{
      1900: {
        slidesPerView: 6
      },
      1400: {
        slidesPerView: 5
      },
      1200: {
        slidesPerView: 4
      },
      992: {
        slidesPerView: 3
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
  
  });

  swiper = new Swiper('.channel__recommended-channel-content', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints:{
      1900: {
        slidesPerView: 6
      },
      1400: {
        slidesPerView: 5
      },
      1200: {
        slidesPerView: 4
      },
      992: {
        slidesPerView: 3
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.recomm-channel__button-next',
      prevEl: '.recomm-channel__button-prev',
    },
  
  });

  swiper = new Swiper('.channel__recommended-videos-content', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints:{
      1400: {
        slidesPerView: 3
      },
      860: {
        slidesPerView: 2
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.recommended-videos__button-next',
      prevEl: '.recommended-videos__button-prev',
    },
  
  });