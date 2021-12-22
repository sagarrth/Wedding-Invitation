import $ from 'jquery';
import Sakura from './jquery-sakura';
import 'slick-carousel';
import smoothscroll from 'smoothscroll-polyfill';

import './firebase';
import initSaveTheDateCounter from './countdown';
import initConfettiLogic from './confetti';
import initScrollToTopLogic from './scrollToTop';

const params = new URLSearchParams(location.search);

// counter logic
initSaveTheDateCounter();
// slider logic
$('#card-slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  mobileFirst: true,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: screen.width > 900
});
// // leaves falling animation
var sakura = new Sakura('body', {
  colors: [
    {
      gradientColorStart: '#874562',
      gradientColorEnd: '#564861',
      gradientColorDegree: 120
    }
  ]
});
// confetti logic
initConfettiLogic();
// scroll to top logic
initScrollToTopLogic();
// kick off the polyfill!
smoothscroll.polyfill();
// play audio
if (!params.get('stopMusic'))
  document.addEventListener('click', () => document.getElementById('my_audio').play(), {once: true});