import $ from 'jquery';
var owl = $('.banner__slider');
$(document).ready(function() {
  $('.banner__slider').owlCarousel({
    loop: false,
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
  $('.banner_controls-slider--next').click(function() {
    owl.trigger('next.owl.carousel');
  });
  // Go to the previous item
  $('.banner_controls-slider--prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
  });
});
