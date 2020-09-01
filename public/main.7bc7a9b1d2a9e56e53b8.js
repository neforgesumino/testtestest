/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ \"./style/style.css\");\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_style_css__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nfunction getClassnameWithoutDot(className) {\r\n   return className.split('.')[1];\r\n}\r\n\r\nconst ClassNames = {\r\n   cardDesc: '.product-card__desc',\r\n   cardHoverDesc: '.product-card__desc--focus',\r\n   cardLeft: '.product-card__desc--left',\r\n   card: '.for-purchase__item-card',\r\n   selected: '.for-purchase__item-card--selected',\r\n   disabled: '.for-purchase__item-card--disabled',\r\n   buyButton: '.for-purchase__button-text',\r\n   itemWrapper: '.for-purchase__item',\r\n   secondCard: '.product-card-second',\r\n   hidden: '.hidden'\r\n}\r\n\r\nfunction toggleDescription(card, showNormal) {\r\n   const cardDesc = card.querySelector(ClassNames.cardDesc);\r\n   const cardHoverDesc = card.querySelector(ClassNames.cardHoverDesc);\r\n\r\n   if (showNormal) {\r\n      cardDesc.classList.remove(getClassnameWithoutDot(ClassNames.hidden));\r\n      cardHoverDesc.classList.add(getClassnameWithoutDot(ClassNames.hidden));\r\n   } else {\r\n      cardDesc.classList.add(getClassnameWithoutDot(ClassNames.hidden));\r\n      cardHoverDesc.classList.remove(getClassnameWithoutDot(ClassNames.hidden));\r\n   }\r\n}\r\n\r\nfunction onCardClick() {\r\n   let onMouseEnter;\r\n   let onMouseLeave;\r\n\r\n   return (e) => {\r\n      const { target } = e;\r\n      const card = target.closest(ClassNames.card);\r\n\r\n      onMouseEnter = onMouseEnter || toggleDescription.bind(null, card, false);\r\n      onMouseLeave = onMouseLeave || toggleDescription.bind(null, card, true);\r\n\r\n      card.classList.toggle(getClassnameWithoutDot(ClassNames.selected));\r\n\r\n      const isSelected = card.classList.contains(getClassnameWithoutDot(ClassNames.selected));\r\n\r\n      if (isSelected) {\r\n         card.addEventListener('mouseenter', onMouseEnter);\r\n         card.addEventListener('mouseleave', onMouseLeave);\r\n      } else {\r\n         onMouseLeave();\r\n\r\n         card.removeEventListener('mouseenter', onMouseEnter);\r\n         card.removeEventListener('mouseleave', onMouseLeave);\r\n      }\r\n   };\r\n}\r\nfunction onBuyButtonClick(button) {\r\n   const card = button.closest(ClassNames.itemWrapper).querySelector(ClassNames.card);\r\n\r\n   card.click();\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n   const cards = document.querySelectorAll(`${ClassNames.card}:not(${ClassNames.disabled})`);\r\n   const buyButtons = document.querySelectorAll(ClassNames.buyButton);\r\n\r\n   cards.forEach(card => {\r\n      card.addEventListener('click', onCardClick());\r\n\r\n      if (card.matches(ClassNames.secondCard)) {\r\n         card.click();\r\n      }\r\n   });\r\n   buyButtons.forEach(b => b.addEventListener('click', () => onBuyButtonClick(b)));\r\n});\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./style/style.css":
/*!*************************!*\
  !*** ./style/style.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./style/style.css?");

/***/ })

/******/ });