
import { HomeScripts } from './scripts/home'
import { ProjectsScripts } from './scripts/projects'
import { MenuFunction } from './utils/menu'
document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  HomeScripts()
  MenuFunction()
  ProjectsScripts()
});
