import SmoothScroll from 'smooth-scroll'

export function ProjectScripts() {
  smoothScroll()
}


const smoothScroll = () => {

  const scroll = new SmoothScroll('a[href*="#top"]', {
    updateURL: false,
    speed: 700,
    speedAsDuration: true,
  });
}
