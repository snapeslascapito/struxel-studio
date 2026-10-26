const sliderConfigs = [
  {
    selector: '.mySwiper-1',
    options: {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      speed: 600,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.mySwiper-1 .swiper-button-next',
        prevEl: '.mySwiper-1 .swiper-button-prev',
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          const progressBar = document.querySelector('.mySwiper-1 .progress-bar');
          if (progressBar) {
            progressBar.style.width = `${(1 - progress) * 100}%`;
          }
        }
      }
    }
  },
  {
    selector: '.mySwiper-2',
    options: {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
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

const tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input) {
    input.addEventListener('change', function() {
        setTimeout(() => {
            sliderConfigs.forEach((config) => {
                const swiperEl = document.querySelector(config.selector);
                if (swiperEl && swiperEl.swiper) {
                    swiperEl.swiper.update();
                }
            });
        }, 50);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const animarElementos = document.querySelectorAll('.slider-text, .info-txt, .info-img img, .credits-info, .support-container, .footer h4, .logo-4');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    animarElementos.forEach(el => observer.observe(el));
});
