$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $(".scroll-top-button").fadeIn();
    } else {
      $(".scroll-top-button").fadeOut();
    }
  });

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  });

  $(".scroll-top-button").on("click", function () {
    $("html , body").animate(
      {
        scrollTop: 0,
      },
      100
    );
  });

  $(".hamburger").click(function () {
    $(".hamburger").toggleClass("active");
    $(".navbar-nav").toggleClass("active-nav");
    $("body").toggleClass("overflowNone");
  });

  var swiper = new Swiper(".swiper-header", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".swiper-partners", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 3,
        spaceBetween: 18,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 8,
        spaceBetween: 18,
      },
    },
  });

  var swiper = new Swiper(".swiper-testimonials", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 18,
      },
    },
  });

  $("[data-fancybox]").fancybox({
    selector: '[data-fancybox="images"]',
    loop: true,
  });
});


function startCounter() {
  const counters = document.querySelectorAll('.count');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const increment = target / 100;
    let value = 0;
    
    const updateCounter = () => {
      value += increment;
      if (value < target) {
        counter.innerText = `+ ${Math.floor(value)}`;
        setTimeout(updateCounter, 20);
      } else {
        counter.innerText = `+ ${target}`;
      }
    };
    
    updateCounter();
  });
}

window.addEventListener('load', startCounter);