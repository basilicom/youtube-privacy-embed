/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["youtubePrivacyEmbed"] = factory();
	else
		root["youtubePrivacyEmbed"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config.json":
/*!*************************!*\
  !*** ./src/config.json ***!
  \*************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"openPrivacyDeclarationLinkInNewTab\":false,\"previewImage\":\"\",\"previewImageOverlayIcon\":\"\",\"privacyAcceptText\":\"Please confirm our data privacy terms.\",\"privacyDeclarationLinkText\":\"privacy statement\",\"privacyDeclarationLinkUrl\":\"#\",\"privacyNoticeText\":\"For more information, please read out data privacy terms.\",\"privacyNoticeTextHighlightColor\":\"#ff0000\",\"saveAcceptanceInCookie\":true,\"useNoCookie\":true,\"useLabelOnCheckbox\":true,\"videoAllowFullscreen\":true,\"videoAutoplay\":false,\"videoId\":\"\",\"videoPlayerLanguage\":\"\",\"videoRelated\":false}');\n\n//# sourceURL=webpack://youtubePrivacyEmbed/./src/config.json?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parseConfig\": () => (/* binding */ parseConfig)\n/* harmony export */ });\nif (!String.prototype.startsWith) {\n  String.prototype.startsWith = function(searchString, position) {\n    position = position || 0;\n    return this.indexOf(searchString, position) === position;\n  };\n}\n\nfunction unslug(slug) {\n  let words = slug.split(\"-\");\n  let map = words.map(function(word) {\n    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();\n  }).join('');\n  return map.charAt(0).toLowerCase() + map.slice(1)\n}\n\nfunction parseConfig(element, baseConfig) {\n  /** @type NamedNodeMap **/\n  let attributes = element.attributes;\n\n  for(let i = 0; i < attributes.length; i++) {\n    let attribute = attributes[i];\n    if(attribute.name.startsWith('data-ype-')) {\n      let name = unslug(attribute.name.substring(9));\n      let value = attribute.value;\n      if(value === 'true') value = true;\n      if(value === 'false') value = false;\n      baseConfig[name] = value;\n    }\n  }\n\n  return baseConfig;\n}\n\n// Custom event polyfill for IE\n(function () {\n\n  if ( typeof window.CustomEvent === \"function\" ) return false;\n\n  function CustomEvent ( event, params ) {\n    params = params || { bubbles: false, cancelable: false, detail: undefined };\n    var evt = document.createEvent( 'CustomEvent' );\n    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );\n    return evt;\n  }\n\n  CustomEvent.prototype = window.Event.prototype;\n\n  window.CustomEvent = CustomEvent;\n})();\n\n//# sourceURL=webpack://youtubePrivacyEmbed/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialize\": () => (/* binding */ initialize)\n/* harmony export */ });\n/* harmony import */ var _initializations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initializations */ \"./src/initializations.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.json */ \"./src/config.json\");\n\n\n\n\nfunction initialize(classname, baseConfig = {}) {\n  if(classname === undefined) {\n    console.error('[Youtube Privacy Embed] Please provide a class name!');\n    return;\n  }\n\n  let elements = document.getElementsByClassName(classname.toString());\n\n  for(let i = 0; i < elements.length; i++)\n  {\n    let element = elements.item(i);\n    let elementConfig = _helpers__WEBPACK_IMPORTED_MODULE_1__.parseConfig(element, {..._config_json__WEBPACK_IMPORTED_MODULE_2__, ...baseConfig});\n    element.classList.add('ype-wrapper');\n\n    if(localStorage.getItem('ype-accepted-terms') === '1') {\n      _initializations__WEBPACK_IMPORTED_MODULE_0__.initializeYoutubeVideo(element, elementConfig, false);\n    } else {\n      _initializations__WEBPACK_IMPORTED_MODULE_0__.initializePreview(element, elementConfig);\n    }\n  }\n}\n\n//# sourceURL=webpack://youtubePrivacyEmbed/./src/index.js?");

/***/ }),

/***/ "./src/initializations.js":
/*!********************************!*\
  !*** ./src/initializations.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeYoutubeVideo\": () => (/* binding */ initializeYoutubeVideo),\n/* harmony export */   \"initializePreview\": () => (/* binding */ initializePreview)\n/* harmony export */ });\n/**\n * Initialize the video iframe (SECOND STEP)\n * @param element The DOM Element which is an instance of YPE\n * @param elementConfig The configuration for this element\n * @param autoplay Should the video autostart (as it is the click target, generally only possible if activated in config)\n */\nfunction initializeYoutubeVideo(element, elementConfig, autoplay) {\n  let youtubeBaseUrl = (elementConfig.useNoCookie) ? 'https://www.youtube-nocookie.com/embed/' : 'https://www.youtube.com/embed/';\n  let videoUrl = youtubeBaseUrl + elementConfig.videoId;\n  videoUrl += (elementConfig.videoAutoplay && autoplay) ? '?autoplay=1' : '?autoplay=0';\n  videoUrl += elementConfig.videoAllowFullscreen ? '&fs=1' : '&fs=0';\n  videoUrl += elementConfig.videoPlayerLanguage !== '' ? '&hl=' + elementConfig.videoPlayerLanguage : '';\n  videoUrl += elementConfig.videoRelated ? '&rel=1' : '&rel=0';\n\n  let iframe = document.createElement('iframe');\n  iframe.setAttribute('src', videoUrl);\n  iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');\n  iframe.setAttribute('frameborder', 'no');\n\n  let wrapper = document.createElement('div');\n  wrapper.classList.add('ype-video');\n  wrapper.appendChild(iframe);\n\n  let link = document.createElement('a');\n  link.setAttribute('href', elementConfig.privacyDeclarationLinkUrl);\n  link.setAttribute('target', elementConfig.openPrivacyDeclarationLinkInNewTab ? '_blank' : '_self');\n  link.classList.add('ype-link');\n  link.appendChild(document.createTextNode(elementConfig.privacyDeclarationLinkText));\n\n  let text = document.createElement('p');\n  text.classList.add('ype-hint');\n  text.appendChild(document.createTextNode(elementConfig.privacyNoticeText));\n  text.appendChild(link);\n\n  element.innerHTML = '';\n  element.appendChild(wrapper);\n  element.appendChild(text);\n\n  if(elementConfig.saveAcceptanceInCookie) {\n    localStorage.setItem('ype-accepted-terms', '1');\n  }\n}\n\n/**\n * Initialize the preview of the video (FIRST STEP)\n * @param element The DOM Element which is an instance of YPE\n * @param elementConfig The configuration for this element\n */\nfunction initializePreview(element, elementConfig) {\n  let image = document.createElement('img');\n  let previewImage = (elementConfig.previewImage === '') ? 'https://i.ytimg.com/vi/' + elementConfig.videoId + '/maxresdefault.jpg' : elementConfig.previewImage;\n  image.setAttribute('src', previewImage);\n  image.classList.add('ype-image');\n  let overlay = document.createElement('div');\n  overlay.classList.add('ype-image-overlay');\n\n  if(elementConfig.previewImageOverlayIcon !== '') {\n    let overlayIcon = document.createElement('img');\n    overlayIcon.setAttribute('src', elementConfig.previewImageOverlayIcon);\n    overlayIcon.classList.add('ype-image-overlay-icon');\n    overlay.appendChild(overlayIcon);\n  }\n\n  let imageWrapper = document.createElement('div');\n  imageWrapper.classList.add('ype-image-wrapper');\n  imageWrapper.appendChild(image);\n  imageWrapper.appendChild(overlay);\n  imageWrapper.addEventListener(\"click\", () => {\n    highlightHint(element, elementConfig);\n  });\n  element.appendChild(imageWrapper);\n\n  let link = document.createElement('a');\n  link.setAttribute('href', elementConfig.privacyDeclarationLinkUrl);\n  link.setAttribute('target', elementConfig.openPrivacyDeclarationLinkInNewTab ? '_blank' : '_self');\n  link.classList.add('ype-link');\n  link.appendChild(document.createTextNode(elementConfig.privacyDeclarationLinkText));\n\n  let text = document.createElement('span');\n  text.appendChild(document.createTextNode(elementConfig.privacyAcceptText));\n  text.classList.add('ype-text');\n  text.appendChild(link);\n\n  let id = 'ype-' + Math.ceil(Math.random() * 1000);\n\n  let checkbox = document.createElement('input');\n  checkbox.setAttribute('type', 'checkbox');\n  checkbox.setAttribute('id', id);\n  checkbox.classList.add('ype-checkbox');\n\n  let hint = document.createElement('div');\n  hint.classList.add('ype-hint');\n  hint.appendChild(checkbox);\n\n  if(elementConfig.useLabelOnCheckbox) {\n    let label = document.createElement('label');\n    label.classList.add('ype-checkbox-label');\n    label.setAttribute('for', id);\n    hint.appendChild(label)\n  }\n\n  hint.appendChild(text);\n  element.appendChild(hint);\n\n  document.addEventListener(\"click\", (event) => {\n    if(event.target.classList.contains('ype-checkbox')) {\n      initializeYoutubeVideo(element, elementConfig, (event.target === checkbox));\n    }\n  });\n}\n\nfunction highlightHint(element, elementConfig) {\n  let hint = element.querySelector('.ype-hint');\n  hint.style.color = elementConfig.privacyNoticeTextHighlightColor;\n}\n\n\n//# sourceURL=webpack://youtubePrivacyEmbed/./src/initializations.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});