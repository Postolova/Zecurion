import $ from 'jquery';
var owl = $('.owl-carousel');
var banner = $('.banner__slider');
$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    touchDrag: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      1000: {
        items: 6
      }
    }
  });
  $('.banner__slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    touchDrag: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      }
    }
  });
  // Go to the next item
  $('.hero_slider-btn--next').click(function() {
    owl.trigger('next.owl.carousel');
  });
  $('.banner_slider--next').click(function() {
    banner.trigger('next.owl.carousel');
  });
  // Go to the previous item
  $('.hero_slider-btn--prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
  });
  $('.banner_slider--prev').click(function() {
    banner.trigger('prev.owl.carousel', [300]);
  });
});
