import { linksRelocation } from '../base/relocation'



export function AboutScripts() {
    const container = document.querySelector('.pageAbout');

    if (container) {
      linksRelocation('exit-page-opacity');
    }
}


