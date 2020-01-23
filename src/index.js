import * as Initializations from './initializations';
import * as Helpers from './helpers';
import {default as DefaultConfig} from './config.json';

export function initialize(classname, baseConfig = {}) {
  if(classname === undefined) {
    console.error('[Youtube Privacy Embed] Please provide a class name!');
    return;
  }

  let elements = document.getElementsByClassName(classname.toString());

  for(let i = 0; i < elements.length; i++)
  {
    let element = elements.item(i);
    let elementConfig = Helpers.parseConfig(element, {...DefaultConfig, ...baseConfig});
    element.classList.add('ype-wrapper');

    if(localStorage.getItem('ype-accepted-terms') === '1') {
      Initializations.initializeYoutubeVideo(element, elementConfig, false);
    } else {
      Initializations.initializePreview(element, elementConfig);
    }
  }
}