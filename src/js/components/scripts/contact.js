import { gsap } from 'gsap/all'
import Inputmask from "inputmask"
import $ from 'jquery'

export function ContactScripts() {
  const container = document.querySelector('.pageContact');

  if (container) {
    maskPhone();
    validate();
  }
}

function maskPhone() {
  let tel = document.querySelectorAll('input[type="tel"]');
  let telMask = new Inputmask("+7 (999) 999-99-99");
  telMask.mask(tel);
}

function validate() {
  const form = $('.data-form');
  const inputEmail = form.find('.data-test-email');
  const input = form.find('.data-test-input');
  const error = form.find('.data-warning');
  const success = form.find('.data-success');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const inputs = form.find('input');

  const button = form.find('.data-form-submit');
  const buttonClose = form.find('.data-form-close')

  button.on('click', function(e) {
    e.preventDefault()

    if (!emailRegex.test(inputEmail.val())) {
      inputEmail.addClass('error')
      error.fadeIn('fast')
    } else {
      inputEmail.removeClass('error')
      error.fadeOut('fast')
      success.fadeIn('fast')
    }

  })

  buttonClose.on('click', function(e) {
    e.preventDefault()
    inputs.val('');
    success.fadeOut('fast')

  })

}



const animContactPage = () => {
  gsap.to($('.test'), 1 , {opacity: 1})
}
