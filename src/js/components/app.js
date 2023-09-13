
import { AboutScripts } from './scripts/about'
import { ContactScripts } from './scripts/contact'
import { HomeScripts } from './scripts/home'
import { PolicyScripts } from './scripts/policy'
import { ProjectScripts } from './scripts/project'
import { ProjectsScripts } from './scripts/projects'
import { StrategyScripts } from './scripts/strategy'
import { MenuFunction } from './utils/menu'
document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  HomeScripts()
  MenuFunction()
  ProjectsScripts()
  StrategyScripts()
  PolicyScripts()
  ContactScripts()
  ProjectScripts()
  AboutScripts()
});
