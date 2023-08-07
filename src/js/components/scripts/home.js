import $ from 'jquery'
import Swiper, { Autoplay, EffectFade, Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

export function HomeScripts() {
  sliderHome()
  cookieClose()
}

const sliderHome = () => {

    const swiper = new Swiper('.pageHome-slider', {
      slidesPerView: '1',
      loop: true,
      effect: 'fade',
      crossFade: false,
      speed: 1500,
      autoplay: {
        delay: 5000,

      }
    });
}

const cookieClose = () => {
  $('.btn-close-cookieHome').on('click', function() {
      $(this).closest('.cookieHome').fadeOut();
  })
}


