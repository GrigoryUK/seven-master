
import $ from 'jquery'
import { linksRelocation } from '../base/relocation'
import { maskPhone } from '../base/utils'

export function ContactScripts() {
  const container = document.querySelector('.pageContact');

  if (container) {
    maskPhone();
    validate();
    linksRelocation('exit-page-opacity');
  }
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



const animContact = () => {

}
