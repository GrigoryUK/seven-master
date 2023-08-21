import { gsap } from 'gsap/all'
import $ from 'jquery'

export function PolicyScripts() {

  animPolicyPage()
}

const animPolicyPage = () => {
  gsap.to($('.home'))
}
