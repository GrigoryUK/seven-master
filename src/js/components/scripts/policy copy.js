import { gsap } from 'gsap/all'
import $ from 'jquery'

export function PolicyScripts() {

  animPolicyPage()
}

const animPolicyPage = () => {
  gsap.to($('.home'))

  const link = $('.headerHome__link');

  // link.on('click', function() {
  //   const tl = gsap.timeline({default: {ease: Power3.easeIn}}, onComplite);
  //   tl.fromTo(body, 1, {opacity: 1}, {opacity: 0})
  // })


  function opacityPage() {
    const body = $('.page__body');
    const tl = gsap.timeline({default: {ease: Power3.easeIn}});
    tl.fromTo(body, 1, {opacity: 0}, {opacity: 1, }, 0.3);

    return tl
  }

  function headerAnim() {
    const header = $('.headerHome__container');
    const tl = gsap.timeline({default: {ease: Power3.easeIn}});
    tl.fromTo(header, 1, {opacity: 0, translateY: '20%'}, {opacity: 1, translateY: 0});

    return tl

  }
  // const master = gsap.timeline({default: {ease: Power1.easeInOut, duration: 2}});
  const master = gsap.timeline();
  master.add(opacityPage());
  master.add(headerAnim(), 0.2);
  master.progress(0)
}
