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
/*! exports provided: openPrivacyDeclarationLinkInNewTab, previewImage, privacyAcceptText, privacyDeclarationLinkText, privacyDeclarationLinkUrl, privacyNoticeText, useNoCookie, videoAutoplay, videoAllowFullscreen, videoPlayerLanguage, videoRelated, videoId, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"openPrivacyDeclarationLinkInNewTab\\\":false,\\\"previewImage\\\":\\\"\\\",\\\"privacyAcceptText\\\":\\\"Please confirm our data privacy terms.\\\",\\\"privacyDeclarationLinkText\\\":\\\"privacy statement\\\",\\\"privacyDeclarationLinkUrl\\\":\\\"#\\\",\\\"privacyNoticeText\\\":\\\"For more information, please read out data privacy terms.\\\",\\\"useNoCookie\\\":true,\\\"videoAutoplay\\\":false,\\\"videoAllowFullscreen\\\":true,\\\"videoPlayerLanguage\\\":\\\"\\\",\\\"videoRelated\\\":false,\\\"videoId\\\":\\\"\\\"}\");\n\n//# sourceURL=webpack://youtubePrivacyEmbed/./src/config.json?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: parseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseConfig\", function() { return parseConfig; });\n\nfunction unslug(slug) {\n  let words = slug.split(\"-\");\n  let map = words.map(function(word) {\n    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();\n  }).join('');\n  return map.charAt(0).toLowerCase() + map.slice(1)\n}\n\nfunction parseConfig(element, baseConfig) {\n  /** @type NamedNodeMap **/\n  let attributes = element.attributes;\n\n  for(let attribute of attributes) {\n    if(attribute.name.startsWith('data-ype-')) {\n      let name = unslug(attribute.name.substring(9));\n      baseConfig[name] = attribute.value;\n    }\n  }\n\n  return baseConfig;\n}\n\n\n//# sourceURL=webpack://youtubePrivacyEmbed/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: initialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialize\", function() { return initialize; });\n/* harmony import */ var _initializations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initializations */ \"./src/initializations.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.json */ \"./src/config.json\");\nvar _config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config.json */ \"./src/config.json\", 1);\n// import _ from 'lodash';\n// import numRef from './ref.json';\n\n\n\n\nfunction initialize(classname, baseConfig = {}) {\n  if(classname === undefined) {\n    console.error('[Youtube Privacy Embed] Please provide a class name!');\n    return;\n  }\n\n  let elements = document.getElementsByClassName(classname.toString());\n\n  for(let element of elements) {\n    let elementConfig = _helpers__WEBPACK_IMPORTED_MODULE_1__[\"parseConfig\"](element, {..._config_json__WEBPACK_IMPORTED_MODULE_2__, ...baseConfig});\n    console.log(elementConfig);\n    _initializations__WEBPACK_IMPORTED_MODULE_0__[\"initializePreview\"](element, elementConfig);\n  }\n}\n\n//# sourceURL=webpack://youtubePrivacyEmbed/./src/index.js?");

/***/ }),

/***/ "./src/initializations.js":
/*!********************************!*\
  !*** ./src/initializations.js ***!
  \********************************/
/*! exports provided: initializeYoutubeVideo, initializePreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeYoutubeVideo\", function() { return initializeYoutubeVideo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializePreview\", function() { return initializePreview; });\nfunction initializeYoutubeVideo(element, elementConfig) {\n  element.innerHTML = '';\n  let youtubeBaseUrl = (elementConfig.useNoCookie) ? 'https://www.youtube-nocookie.com/embed/' : 'https://www.youtube.com/embed/';\n  let videoUrl = youtubeBaseUrl + elementConfig.videoId;\n  videoUrl += elementConfig.videoAutoplay ? '?autoplay=1' : '?autoplay=0';\n  videoUrl += elementConfig.videoAllowFullscreen ? '&fs=1' : '&fs=0';\n  videoUrl += elementConfig.videoPlayerLanguage !== '' ? '&hl=' + elementConfig.videoPlayerLanguage : '';\n  videoUrl += elementConfig.videoRelated ? '&rel=1' : '&rel=0';\n\n  let include = document.createElement('iframe');\n  include.setAttribute('src', videoUrl);\n  // include.setAttribute('width', '560');\n  // include.setAttribute('height', '315');\n  include.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');\n  include.setAttribute('autoplay', '1');\n\n  element.appendChild(include);\n\n  let link = document.createElement('a');\n  link.setAttribute('href', elementConfig.privacyDeclarationLinkUrl);\n  link.setAttribute('target', elementConfig.openPrivacyDeclarationLinkInNewTab ? '_blank' : '_self');\n  link.appendChild(document.createTextNode(elementConfig.privacyDeclarationLinkText));\n  console.log('link', link);\n\n  let text = document.createElement('p');\n  text.appendChild(document.createTextNode(elementConfig.privacyNoticeText));\n  text.appendChild(link);\n\n  element.appendChild(text);\n}\n\nfunction initializePreview(element, elementConfig) {\n  let image = document.createElement('img');\n  image.setAttribute('src', elementConfig.previewImage);\n\n  /*image.addEventListener('click', () => {\n    initializeYoutubeVideo(element, elementConfig);\n  });*/\n  element.appendChild(image);\n\n  let link = document.createElement('a');\n  link.setAttribute('href', elementConfig.privacyDeclarationLinkUrl);\n  link.setAttribute('target', elementConfig.openPrivacyDeclarationLinkInNewTab ? '_blank' : '_self');\n  link.appendChild(document.createTextNode(elementConfig.privacyDeclarationLinkText));\n  console.log('link', link);\n\n  let text = document.createElement('p');\n  text.appendChild(document.createTextNode(elementConfig.privacyAcceptText));\n  text.appendChild(link);\n\n  let checkbox = document.createElement('input');\n  checkbox.setAttribute('type', 'checkbox');\n  checkbox.addEventListener(\"click\", () => {\n    initializeYoutubeVideo(element, elementConfig);\n  });\n\n\n  let hint = document.createElement('div');\n  hint.appendChild(checkbox);\n  hint.appendChild(text);\n\n\n  element.appendChild(hint);\n}\n\n//# sourceURL=webpack://youtubePrivacyEmbed/./src/initializations.js?");

/***/ })

/******/ });
});