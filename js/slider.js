var swiper1 = new Swiper('#Header .swiper-container', {
    nextButton: '#Header .swiper-button-next',
    prevButton: '#Header .swiper-button-prev',
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        1024: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        375: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    },
    pagination: {
        el: "#Header .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "#Header .swiper-button-next",
        prevEl: "#Header .swiper-button-prev",
    }
});


var swiper1 = new Swiper('#How .swiper-container', {
    nextButton: '#How .swiper-button-next',
    prevButton: '#How .swiper-button-prev',
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        1024: {
            slidesPerView: 6,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        375: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    },
    pagination: {
        el: "#How .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "#How .swiper-button-next",
        prevEl: "#How .swiper-button-prev",
    }
});



var swiper1 = new Swiper('#Our .swiper-container', {
    nextButton: '#Our .swiper-button-next',
    prevButton: '#Our .swiper-button-prev',
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        375: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    },
    pagination: {
        el: "#Our .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "#Our .swiper-button-next",
        prevEl: "#Our .swiper-button-prev",
    }
});


var swiper = new Swiper("#Before1 .swiper-container", {
    nextButton: '#Our .swiper-button-next',
    prevButton: '#Our .swiper-button-prev',
    loop: true,
    loopFillGroupWithBlank: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 230,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: "#Before .swiper-pagitaniton",
      clickable: true,
    },
    navigation: {
      nextEl: "#Before .swiper-button-next",
      prevEl: "#Before .swiper-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      676: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });


  



var swiper1 = new Swiper('#Bef .swiper-container', {
    nextButton: '#Bef .swiper-button-next',
    prevButton: '#Bef .swiper-button-prev',
    loop: true,
    loopFillGroupWithBlank: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 45,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        375: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    },
    pagination: {
        el: "#Bef .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "#Bef .swiper-button-next",
        prevEl: "#Bef .swiper-button-prev",
    }
});







var swiper = new Swiper("#Before .mySwiper", {
    nextButton: '#Before .swiper-button-next',
    prevButton: '#Before .swiper-button-prev',
    loop: true,
    loopFillGroupWithBlank: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 230,
      modifier: 1,
      slideShadows: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        375: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    },
    pagination: {
        el: "#Before .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "#Before .swiper-button-next",
        prevEl: "#Before .swiper-button-prev",
    }
});