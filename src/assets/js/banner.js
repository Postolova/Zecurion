import './modules/slider';

import $ from 'jquery';
var owl = $('.banner__slider');
$(document).ready(function() {
  $('.banner__slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
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
