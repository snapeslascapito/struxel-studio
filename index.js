const sliderConfigs = [
  {
    selector: '.mySwiper-1',
    options: {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.mySwiper-1 .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.mySwiper-1 .swiper-button-next',
        prevEl: '.mySwiper-1 .swiper-button-prev',
      }
    }
  },
  {
    selector: '.mySwiper-2',
    options: {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.mySwiper-2 .swiper-button-next',
        prevEl: '.mySwiper-2 .swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        850: {
          slidesPerView: 3,
        },
      }
    }
  }
];

sliderConfigs.forEach((config) => {
  new Swiper(config.selector, config.options);
});

let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input){
    input.addEventListener('change', function(){
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id);
        if (thisSwiper && thisSwiper.swiper) {
            thisSwiper.swiper.update();
        }
    });
});
