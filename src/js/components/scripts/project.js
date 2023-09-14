import SmoothScroll from 'smooth-scroll'
import { linksRelocation } from '../base/relocation'
import { animationScroll } from '../base/utils'

export function ProjectScripts() {
  const container = document.querySelector('.pageProject');

  if (container) {
    smoothScroll()
    clickVideo();
    animProject();
    linksRelocation('exit-page-scale-opacity-project');
  }
}


const smoothScroll = () => {

  const scroll = new SmoothScroll('a[href*="#top"]', {
    updateURL: false,
    speed: 700,
    speedAsDuration: true,
  });
}

const clickVideo = () => {

  const containerVideo = document.querySelectorAll('.item__video');

  containerVideo.forEach(item => {

    item.addEventListener('click', el => {

      const video = item.querySelector('video');
      const button = item.querySelector('.data-play');

      button.classList.toggle('active');

      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    })
  })

}


const animProject = () => {
  animationScroll('.anim-image');
  animationScroll('.anim-last', 0.5);
  animationScroll('.anim-back');
  animationScroll('.anim-video');
  animationScroll('.anim-text');
  animationScroll('.anim-hashtags');
  animationScroll('.title-main');






}
