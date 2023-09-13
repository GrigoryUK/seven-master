import { animHeaderOpacity, linksRelocation } from '../base/relocation'

export function PolicyScripts() {
  const container = document.querySelector('.pagePolicy');

  if (container) {
    animHeaderOpacity()
    linksRelocation('exit-page-opacity');
  }


}




