import { gsap } from 'gsap/all'
import $ from 'jquery'

export function ContactScripts() {

  animPolicyPage()
}

const animContactPage = () => {
  gsap.to($('.test'), 1 , {opacity: 1})
}
