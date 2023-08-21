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
      speed: 1500,
      autoplay: {
        delay: 5000,

      }
    });
}

const cookieClose = () => {
  const cookie = $('.data-cookie');
  if (sessionStorage.getItem('cookie') !== 'cookie-id') {
    cookie.fadeIn('slow');
  }
  $('.btn-close-cookieHome').on('click', function() {
      $(this).closest('.cookieHome').fadeOut();
      sessionStorage.setItem('cookie', 'cookie-id')
  })
}


