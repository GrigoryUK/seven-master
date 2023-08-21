import GraphTabs from 'graph-tabs'
import $ from 'jquery'

export function ProjectsScripts() {
  tabs()
  themeToggle();
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
