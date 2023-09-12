import $ from 'jquery'
import Swiper, { Autoplay, EffectFade, Navigation, Pagination } from 'swiper'
import { linksRelocation } from '../base/relocation'
Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

export function HomeScripts() {
  const container = document.querySelector('.pageHome');

  if (container) {
    sliderHome()
    cookieClose()
    linksRelocation('exit-page-scale-opacity');
    homeAnim();
  }

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

const homeAnim = () => {

  const container = $('.pageHome');
  const footer = $('.footerHome__container');
  const header = $('.headerHome__container');

  container.addClass('anim-page-home');
  header.addClass('anim-header-home');
  footer.addClass('anim-footer-home');
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


