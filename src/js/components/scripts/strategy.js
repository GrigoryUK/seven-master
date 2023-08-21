import GraphTabs from 'graph-tabs'
import $ from 'jquery'
export function StrategyScripts() {
  tabs()
  textareaJSHeight()
  // tabsMutation()
  tabsButtonClick()
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


const tabsMutation = () => {
  const cont = document.querySelector('.tabs__strategy');
  let observer = new MutationObserver(() => {
    textareaJSHeight();

  });


  observer.observe(cont, {
    childList: true,
    subtree: true,
    characterDataOldValue: true
  });
}
