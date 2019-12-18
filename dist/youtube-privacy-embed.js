(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["youtubePrivacyEmbed"] = factory();
	else
		root["youtubePrivacyEmbed"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config.json":
/*!*************************!*\
  !*** ./src/config.json ***!
  \*************************/
/*! exports provided: openPrivacyDeclarationLinkInNewTab, previewImage, previewImageOverlayIcon, privacyAcceptText, privacyDeclarationLinkText, privacyDeclarationLinkUrl, privacyNoticeText, privacyNoticeTextHighlightColor, saveAcceptanceInCookie, useNoCookie, videoAllowFullscreen, videoAutoplay, videoId, videoPlayerLanguage, videoRelated, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"openPrivacyDeclarationLinkInNewTab\\\":false,\\\"previewImage\\\":\\\"\\\",\\\"previewImageOverlayIcon\\\":\\\"\\\",\\\"privacyAcceptText\\\":\\\"Please confirm our data privacy terms.\\\",\\\"privacyDeclarationLinkText\\\":\\\"privacy statement\\\",\\\"privacyDeclarationLinkUrl\\\":\\\"#\\\",\\\"privacyNoticeText\\\":\\\"For more information, please read out data privacy terms.\\\",\\\"privacyNoticeTextHighlightColor\\\":\\\"#ff0000\\\",\\\"saveAcceptanceInCookie\\\":true,\\\"useNoCookie\\\":true,\\\"videoAllowFullscreen\\\":true,\\\"videoAutoplay\\\":false,\\\"videoId\\\":\\\"\\\",\\\"videoPlayerLanguage\\\":\\\"\\\",\\\"videoRelated\\\":false}\");\n\n//# sourceURL=webpack://youtubePrivacyEmbed/./src/config.json?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: parseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseConfig\", function() { return parseConfig; });\nif (!String.prototype.startsWith) {\n  String.prototype.startsWith = function(searchString, position) {\n    position = position || 0;\n    return this.indexOf(searchString, position) === position;\n  };\n}\n\nfunction unslug(slug) {\n  let words = slug.split(\"-\");\n  let map = words.map(function(word) {\n    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();\n  }).join('');\n  return map.charAt(0).toLowerCase() + map.slice(1)\n}\n\nfunction parseConfig(element, baseConfig) {\n  /** @type NamedNodeMap **/\n  let attributes = element.attributes;\n\n  for(let i = 0; i < attributes.length; i++) {\n    let attribute = attributes[i];\n    if(attribute.name.startsWith('data-ype-')) {\n      let name = unslug(attribute.name.substring(9));\n      let value = attribute.value;\n      if(value === 'true') value = true;\n      if(value === 'false') value = false;\n      baseConfig[name] = value;\n    }\n  }\n\n  return baseConfig;\n}\n\n// Custom event polyfill for IE\n(function () {\n\n  if ( typeof window.CustomEvent === \"function\" ) return false;\n\n  function CustomEvent ( event, params ) {\n    params = params || { bubbles: false, cancelable: false, detail: undefined };\n    var evt = document.createEvent( 'CustomEvent' );\n    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );\n    return evt;\n  }\n\n  CustomEvent.prototype = window.Event.prototype;\n\n  window.CustomEvent = CustomEvent;\n})();\n\n//# sourceURL=webpack://youtubePrivacyEmbed/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: initialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialize\", function() { return initialize; });\n/* harmony import */ var _initializations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initializations */ \"./src/initializations.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.json */ \"./src/config.json\");\nvar _config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config.json */ \"./src/config.json\", 1);\n\n\n\n\nfunction initialize(classname, baseConfig = {}) {\n  if(classname === undefined) {\n    console.error('[Youtube Privacy Embed] Please provide a class name!');\n    return;\n  }\n\n  let elements = document.getElementsByClassName(classname.toString());\n\n  for(let i = 0; i < elements.length; i++)\n  {\n    let element = elements.item(i);\n    let elementConfig = _helpers__WEBPACK_IMPORTED_MODULE_1__[\"parseConfig\"](element, {..._config_json__WEBPACK_IMPORTED_MODULE_2__, ...baseConfig});\n    element.classList.add('ype-wrapper');\n\n    if(localStorage.getItem('ype-accepted-terms') === '1') {\n      _initializations__WEBPACK_IMPORTED_MODULE_0__[\"initializeYoutubeVideo\"](element, elementConfig, false);\n    } else {\n      _initializations__WEBPACK_IMPORTED_MODULE_0__[\"initializePreview\"](element, elementConfig);\n    }\n  }\n}\n\n//# sourceURL=webpack://youtubePrivacyEmbed/./src/index.js?");

/***/ }),

/***/ "./src/initializations.js":
/*!********************************!*\
  !*** ./src/initializations.js ***!
  \********************************/
/*! exports provided: initializeYoutubeVideo, initializePreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeYoutubeVideo\", function() { return initializeYoutubeVideo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializePreview\", function() { return initializePreview; });\n/**\n * Initialize the video iframe (SECOND STEP)\n * @param element The DOM Element which is an instance of YPE\n * @param elementConfig The configuration for this element\n * @param autoplay Should the video autostart (as it is the click target, generally only possible if activated in config)\n */\nfunction initializeYoutubeVideo(element, elementConfig, autoplay) {\n  let youtubeBaseUrl = (elementConfig.useNoCookie) ? 'https://www.youtube-nocookie.com/embed/' : 'https://www.youtube.com/embed/';\n  let videoUrl = youtubeBaseUrl + elementConfig.videoId;\n  videoUrl += (elementConfig.videoAutoplay && autoplay) ? '?autoplay=1' : '?autoplay=0';\n  videoUrl += elementConfig.videoAllowFullscreen ? '&fs=1' : '&fs=0';\n  videoUrl += elementConfig.videoPlayerLanguage !== '' ? '&hl=' + elementConfig.videoPlayerLanguage : '';\n  videoUrl += elementConfig.videoRelated ? '&rel=1' : '&rel=0';\n\n  let iframe = document.createElement('iframe');\n  iframe.setAttribute('src', videoUrl);\n  iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');\n  // iframe.setAttribute('autoplay', '1');\n  iframe.setAttribute('frameborder', 'no');\n\n  let wrapper = document.createElement('div');\n  wrapper.classList.add('ype-video');\n  wrapper.appendChild(iframe);\n\n  let link = document.createElement('a');\n  link.setAttribute('href', elementConfig.privacyDeclarationLinkUrl);\n  link.setAttribute('target', elementConfig.openPrivacyDeclarationLinkInNewTab ? '_blank' : '_self');\n  link.classList.add('ype-link');\n  link.appendChild(document.createTextNode(elementConfig.privacyDeclarationLinkText));\n\n  let text = document.createElement('p');\n  text.classList.add('ype-hint');\n  text.appendChild(document.createTextNode(elementConfig.privacyNoticeText));\n  text.appendChild(link);\n\n  element.innerHTML = '';\n  element.appendChild(wrapper);\n  element.appendChild(text);\n\n  if(elementConfig.saveAcceptanceInCookie) {\n    localStorage.setItem('ype-accepted-terms', '1');\n  }\n}\n\n/**\n * Initialize the preview of the video (FIRST STEP)\n * @param element The DOM Element which is an instance of YPE\n * @param elementConfig The configuration for this element\n */\nfunction initializePreview(element, elementConfig) {\n  let image = document.createElement('img');\n  let previewImage = (elementConfig.previewImage === '') ? 'https://i.ytimg.com/vi/' + elementConfig.videoId + '/maxresdefault.jpg' : elementConfig.previewImage;\n  image.setAttribute('src', previewImage);\n  image.classList.add('ype-image');\n  let overlay = document.createElement('div');\n  overlay.classList.add('ype-image-overlay');\n\n  if(elementConfig.previewImageOverlayIcon !== '') {\n    let overlayIcon = document.createElement('img');\n    overlayIcon.setAttribute('src', elementConfig.previewImageOverlayIcon);\n    overlayIcon.classList.add('ype-image-overlay-icon');\n    overlay.appendChild(overlayIcon);\n  }\n\n  let imageWrapper = document.createElement('div');\n  imageWrapper.classList.add('ype-image-wrapper');\n  imageWrapper.appendChild(image);\n  imageWrapper.appendChild(overlay);\n  imageWrapper.addEventListener(\"click\", () => {\n    highlightHint(element, elementConfig);\n  });\n  element.appendChild(imageWrapper);\n\n  let link = document.createElement('a');\n  link.setAttribute('href', elementConfig.privacyDeclarationLinkUrl);\n  link.setAttribute('target', elementConfig.openPrivacyDeclarationLinkInNewTab ? '_blank' : '_self');\n  link.classList.add('ype-link');\n  link.appendChild(document.createTextNode(elementConfig.privacyDeclarationLinkText));\n\n  let text = document.createElement('span');\n  text.appendChild(document.createTextNode(elementConfig.privacyAcceptText));\n  text.classList.add('ype-text');\n  text.appendChild(link);\n\n  let checkbox = document.createElement('input');\n  checkbox.setAttribute('type', 'checkbox');\n  checkbox.classList.add('ype-checkbox');\n\n  let hint = document.createElement('div');\n  hint.classList.add('ype-hint');\n  hint.appendChild(checkbox);\n  hint.appendChild(text);\n  element.appendChild(hint);\n\n  document.addEventListener(\"click\", (event) => {\n    if(event.target.classList.contains('ype-checkbox')) {\n      initializeYoutubeVideo(element, elementConfig, (event.target === checkbox));\n    }\n  });\n}\n\nfunction highlightHint(element, elementConfig) {\n  let hint = element.querySelector('.ype-hint');\n  hint.style.color = elementConfig.privacyNoticeTextHighlightColor;\n}\n\n\n//# sourceURL=webpack://youtubePrivacyEmbed/./src/initializations.js?");

/***/ })

/******/ });
});