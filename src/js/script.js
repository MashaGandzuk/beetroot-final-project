const $darkOverlay = $(".dark-overlay");
const $mobileMenu = $(".mobile-menu");
const $navbar = $(".navbar");

// Nav menu

$(document).on("click", ".mobile-menu-toggler", function (e) {
  e.preventDefault();
  $darkOverlay.toggleClass("visible");
  $mobileMenu.toggleClass("visible");
});

// Scroll handling

$(window).on("scroll", function (e) {
  var scrollOffset = $(window).scrollTop();
  var navbarHeight = $navbar.outerHeight();
  if (scrollOffset > navbarHeight) {
    $navbar.addClass("sticky");
  } else {
    $navbar.removeClass("sticky");
  }
});

// Team Carousel Slick

$(".team-carousel").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 670,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// Accordion

$(function () {
  $(".accordion__title").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);

    if (!$this.hasClass("accordion-active")) {
      $(".accordion__content").slideUp(400);
      $(".accordion__title").removeClass("accordion-active");
      $(".accordion__arrow").removeClass("accordion__rotate");
    }

    $this.toggleClass("accordion-active");
    $this.next().slideToggle();
    $(".accordion__arrow", this).toggleClass("accordion__rotate");
  });
});

// Screens carousel

const swiper = new Swiper(".screens-carousel", {
  effect: "coverflow",
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  slidesPerView: 4,
  keyboardControl: true,
  mousewheelControl: true,
  preventClicks: false,
  preventClicksPropagation: false,
  slideToClickedSlide: true,
  nextButton: ".swiper-button-next",
  prevButton: ".swiper-button-prev",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 250,
    modifier: 0.5,
    slideShadows: false,
  },
  breakpoints: {
    575: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 45,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
