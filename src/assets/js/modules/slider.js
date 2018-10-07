import $ from 'jquery';
var owl = $('.owl-carousel');
$(document).ready(function() {
  $('.owl-carousel').owlCarousel();
  // Go to the next item
  $('.hero_slider-btn--next').click(function() {
    owl.trigger('next.owl.carousel');
  });
  // Go to the previous item
  $('.hero_slider-btn--prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
  });
});
