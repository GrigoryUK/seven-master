import GraphTabs from 'graph-tabs'
import $ from 'jquery'
import { animHeaderOpacity, linksRelocation } from '../base/relocation'
import { maskPhone } from '../base/utils'
export function StrategyScripts() {
  const container = document.querySelector('.pageStrategy');

  if (container) {
    tabs()
    textareaJSHeight()
    tabsButtonClick()
    animHeaderOpacity();
    linksRelocation('exit-page-opacity');
    maskPhone();
    validate();
  }
}

const tabs = () => {
  const cont = document.querySelector('.tabs__strategy');

  if (cont) {
    const tabsProfile = new GraphTabs('tabs-strategy');
  }

}




const tabsButtonClick = () => {
  $('.tabs__strategy--btn').on('click', function() {
    textareaJSHeight()
  })
}


const textareaJSHeight = () => {

    $("textarea").each(function () {
      this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
    }).on("input", function () {
      this.style.height = 0;
      this.style.height = (this.scrollHeight) + "px";
    });

}


const validate = () => {

  const form = $('.pageStrategy__form');
  const success = $('.data-strategy-success');
  const content = $('.tabs__strategy--content');
  const buttonClose = $('.data-success-close');
  const inputs = $('input');
  const textarea = $('textarea');
  form.each(function (){
    const self = $(this);
    const button = self.find('button[type="submit"]');
    const input = self.find('.test-email');
    const inputContainer = input.closest('.pageStrategy__form--input');
    const warning = inputContainer.find('.data-strategy-warning');
    const error = self.find('.data-strategy-error');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    button.on('click', function (e) {
      e.preventDefault()


      if (!emailRegex.test(input.val())) {
        input.addClass('error')
        warning.fadeIn('fast')
        error.fadeIn('fast')
      } else {
        input.removeClass('error')
        warning.fadeOut('fast')
        error.fadeOut('fast')
        content.css({height: '50vh'})
        success.fadeIn('fast')

      }
    })
    input.on('input', function () {

      if (!emailRegex.test(input.val())) {
        input.addClass('error')
        warning.fadeIn('fast')
        error.fadeIn('fast')
      } else {
        input.removeClass('error')
        warning.fadeOut('fast')
        error.fadeOut('fast')
      }
    })
  })

  buttonClose.on('click', function(e) {
    e.preventDefault()
    inputs.val('');
    textarea.val('');
    content.css({height: 'auto'})
    textareaJSHeight();
    success.fadeOut('slow')


  })

}

