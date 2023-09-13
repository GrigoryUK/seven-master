import GraphTabs from 'graph-tabs'
import $ from 'jquery'
import { animHeaderOpacity, linksRelocation } from '../base/relocation'
export function StrategyScripts() {
  const container = document.querySelector('.pageStrategy');

  if (container) {
    tabs()
    textareaJSHeight()
    tabsButtonClick()
    animHeaderOpacity();
    linksRelocation('exit-page-opacity');
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

