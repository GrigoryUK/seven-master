import GraphTabs from 'graph-tabs'
import $ from 'jquery'
import { linksRelocation } from '../base/relocation'
import { animationScroll } from '../base/utils'

export function ProjectsScripts() {
  const container = document.querySelector('.pageProjects');

  if (container) {
    tabs()
    themeToggle();
    animScrollProjects();
    linksRelocation('exit-page-opacity');

  }

}

const tabs = () => {
  const cont = document.querySelector('.tabs__projects');

  if (cont) {
    const tabsProfile = new GraphTabs('tabs-projects');
  }

}

const themeToggle = () => {
  const cont = document.querySelector('.pageProjects');
  const time = 1000 * 60;
  if (cont) {
    function autoNext() {
      $('.page__body').toggleClass('theme-dark');
      setTimeout(autoNext, time);
    }
    setTimeout(autoNext, time);
  }


}

const animScrollProjects = () => {
  animationScroll('.anim-item-project');
  animationScroll('.anim-projects-link');
}
