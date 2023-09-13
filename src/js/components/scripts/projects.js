import GraphTabs from 'graph-tabs'
import $ from 'jquery'
import { linksRelocation } from '../base/relocation'

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
  animationItems();
  animationLinks();


  function animationItems() {
    function onEntry(entry) {
      entry.forEach((change) => {
        if (change.isIntersecting) {

          change.target.classList.add("animate");
        } else {
        }
      });
    }

    let options = {
      threshold: [0.15],
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll(".anim-item-project");

    for (let elm of elements) {
      observer.observe(elm);
    }
  }

  function animationLinks() {
    function onEntry(entry) {
      entry.forEach((change) => {
        if (change.isIntersecting) {

          change.target.classList.add("animate");
        } else {
        }
      });
    }

    let options = {
      threshold: [0.15],
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll(".anim-projects-link");

    for (let elm of elements) {
      observer.observe(elm);
    }
  }

}
