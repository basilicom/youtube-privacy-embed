
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
      baseConfig[name] = attribute.value;
    }
  }

  return baseConfig;
}
