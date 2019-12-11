
function unslug(slug) {
  let words = slug.split("-");
  let map = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
  }).join('');
  return map.charAt(0).toLowerCase() + map.slice(1)
}

export function parseConfig(element, baseConfig) {
  /** @type NamedNodeMap **/
  let attributes = element.attributes;

  for(let attribute of attributes) {
    if(attribute.name.startsWith('data-ype-')) {
      let name = unslug(attribute.name.substring(9));
      let value = attribute.value;
      if(value === 'true') value = true;
      if(value === 'false') value = false;
      baseConfig[name] = value;
    }
  }

  return baseConfig;
}

// Custom event polyfill for IE
(function () {

  if ( typeof window.CustomEvent === "function" ) return false;

  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
})();