
import { HomeScripts } from './scripts/home'
import { MenuFunction } from './utils/menu'
document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  HomeScripts()
  MenuFunction()
});
