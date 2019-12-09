// import _ from 'lodash';
// import numRef from './ref.json';
import * as Initializations from './initializations';
import * as Helpers from './helpers';
import {default as DefaultConfig} from './config.json';

export function initialize(classname, baseConfig = {}) {
  if(classname === undefined) {
    console.error('[Youtube Privacy Embed] Please provide a class name!');
    return;
  }

  let elements = document.getElementsByClassName(classname.toString());

  for(let element of elements) {
    let elementConfig = Helpers.parseConfig(element, {...DefaultConfig, ...baseConfig});
    console.log(elementConfig);
    Initializations.initializePreview(element, elementConfig);
  }
}