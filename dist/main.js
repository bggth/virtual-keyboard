/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Container.js":
/*!**************************!*\
  !*** ./src/Container.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container)\n/* harmony export */ });\nclass Container {\r\n\tconstructor () {\r\n\t\tthis.components = []\r\n\t}\r\n\r\n\tpushComponent(component) {\r\n\t\tthis.components.push(component);\r\n\t}\r\n\r\n\trender() {\r\n\t\tlet innerHTML = '';\r\n\t\tfor (let i = 0; i < this.components.length; i++)\r\n\t\t\tinnerHTML += this.components[i].render();\r\n\t\tdocument.body.innerHTML = `<div class=\"container\">${innerHTML}<div>`;\r\n\t}\r\n}\n\n//# sourceURL=webpack://vitual-keyboard/./src/Container.js?");

/***/ }),

/***/ "./src/Keyboard.js":
/*!*************************!*\
  !*** ./src/Keyboard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Keyboard\": () => (/* binding */ Keyboard)\n/* harmony export */ });\nclass Keyboard {\r\n\tconstructor(width, height) {\r\n\t\tthis.width = width;\r\n\t\tthis.height = height;\r\n\t\tthis.buttons = null;\r\n\t}\r\n\r\n\twidths() {\r\n\t\treturn [\r\n\t\t\t[15, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],\r\n\t\t\t[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 15],\r\n\t\t\t[15, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],\r\n\t\t\t[17, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 17],\r\n\t\t\t[20, 10, 10, 10, 10, 10, 10, 10, 10, 10, 12, 10, 10],\r\n\t\t\t[10, 10, 10, 12, 50, 12, 10, 10, 10, 10],\r\n\t\t\t\r\n\t\t]\r\n\t}\r\n\r\n\tbuttonCaptions() {\r\n\t\treturn [\r\n\t\t\t// english default\r\n\t\t\t[\r\n\t\t\t\t['_esq', '_F1', '_F2', '_F3', '_F4', '_F5', '_F6', '_F7', '_F8', '_F9', '_F10', '_F11', '_F12', ''],\r\n\t\t\t\t['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '_delete'],\r\n\t\t\t\t['_tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\\\'],\r\n\t\t\t\t['_caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', `'`, '_return'],\r\n\t\t\t\t['_shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<<br>,', '><br>.', '/<br>?', '_⯅', '_shift'],\r\n\t\t\t\t['_fn', '_control', '_option', '_command', '', '_command', '_option', '_⯇', '_⯆', '_⯈'],\t//⯆\r\n\t\t\t],\r\n\t\t]\r\n\t}\r\n\r\n\trender() {\r\n\t\tlet innerHTML = '';\r\n\t\tfor (let i = 0; i < this.height; i++)\r\n\t\t\tinnerHTML+=this.renderLine(i);\r\n\t\treturn `<div class=\"keyboard__wrapper\">${innerHTML}</div>`;\r\n\t}\r\n\r\n\trenderLine(line) {\r\n\t\tlet innerHTML = '';\r\n\t\tfor (let i = 0; i < this.width; i++)\r\n\t\t{\r\n\t\t\tlet className = '';\r\n\t\t\tclassName = `button-${this.widths()[line][i]}`;\r\n\t\t\tlet caption = `${this.buttonCaptions()[0][line][i]}`;\r\n\r\n\t\t\tif (caption[0] == '_'){\r\n\t\t\t\tcaption = caption.substring(1);\r\n\t\t\t\tclassName += ' button-small-title';\r\n\t\t\t\tif (i == 0) {\r\n\t\t\t\t\tclassName += ' button-caption-start';\r\n\t\t\t\t}\r\n\t\t\t\tif (i == this.buttonCaptions()[0][line].length-1) {\r\n\t\t\t\t\tclassName += ' button-caption-end';\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t// /if i\r\n\r\n\t\t\tif (caption=='10') {\r\n\t\t\t\tcaption = '';\r\n\t\t\t}\r\n\t\t\tif (this.widths()[line][i] != undefined)\r\n\t\t\t\tinnerHTML+=this.renderButton(caption, className);\r\n\t\t}\r\n\t\t\t\r\n\t\treturn `<div class=\"keyboard__line\">${innerHTML}</div>`;\r\n\t}\r\n\r\n\trenderButton(text, className='') {\r\n\t\tlet innerHTML = text;\r\n\t\treturn  `<button class=\"keyboard__button ${className}\" tabindex=\"-1\">${innerHTML}</button>`;\r\n\t}\r\n\r\n\tkeyDownEvent(code) {\r\n\t\tif (this.buttons == null) {\r\n\t\t\tlet buttons = document.querySelectorAll('.keyboard__button');\r\n\t\t\tfor (let i = 0; i < buttons.length; i++)\r\n\t\t\t\tbuttons[i].addEventListener('click', this.onButtonClick)\r\n\t\t}\r\n\t}\r\n\r\n\tonButtonClick = (e) => {\r\n\t\tconsole.log(e);\r\n\t}\r\n}\n\n//# sourceURL=webpack://vitual-keyboard/./src/Keyboard.js?");

/***/ }),

/***/ "./src/Statusbar.js":
/*!**************************!*\
  !*** ./src/Statusbar.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Statusbar\": () => (/* binding */ Statusbar)\n/* harmony export */ });\nclass Statusbar{\r\n\r\n\trender() {\r\n\t\treturn `<div class=\"body__statusbar\"></div>`;\r\n\t}\r\n}\n\n//# sourceURL=webpack://vitual-keyboard/./src/Statusbar.js?");

/***/ }),

/***/ "./src/Textarea.js":
/*!*************************!*\
  !*** ./src/Textarea.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Textarea\": () => (/* binding */ Textarea)\n/* harmony export */ });\nclass Textarea {\r\n\tconstructor() {\r\n\t\tthis.text = '';\r\n\t\tthis.element = null;\r\n\t}\r\n\trender() {\r\n\t\treturn `<textarea class=\"body__textarea\" rows=\"10\" cols=\"80\"></textarea>`;\r\n\t}\r\n\r\n\tappendText(text) {\r\n\t\tif (this.element == null)\r\n\t\t\tthis.element = document.querySelector('.body__textarea');\r\n\t\tthis.text += text;\r\n\t\tthis.element.innerHTML = this.text;\r\n\t}\r\n\r\n\tsetText(text) {\r\n\tif (this.element == null)\r\n\t\tthis.element = document.querySelector('.body__textarea');\r\n\tthis.text = text;\r\n\tthis.element.innerHTML = this.text;\t\r\n\t}\r\n\t\r\n}\n\n//# sourceURL=webpack://vitual-keyboard/./src/Textarea.js?");

/***/ }),

/***/ "./src/Title.js":
/*!**********************!*\
  !*** ./src/Title.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Title\": () => (/* binding */ Title)\n/* harmony export */ });\nclass Title {\r\n\trender() {\r\n\t\treturn `<h1 class=body__title>RSS Virtual Keyboard</h1>`\r\n\t}\r\n}\n\n//# sourceURL=webpack://vitual-keyboard/./src/Title.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ \"./src/Container.js\");\n/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Keyboard */ \"./src/Keyboard.js\");\n/* harmony import */ var _Statusbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Statusbar */ \"./src/Statusbar.js\");\n/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Textarea */ \"./src/Textarea.js\");\n/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Title */ \"./src/Title.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.onload = () => {\r\n\r\n\tlet container = new _Container__WEBPACK_IMPORTED_MODULE_0__.Container();\r\n\tlet title = new _Title__WEBPACK_IMPORTED_MODULE_4__.Title();\r\n\tlet textarea = new _Textarea__WEBPACK_IMPORTED_MODULE_3__.Textarea();\r\n\tlet keyboard = new _Keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard(14, 6);\r\n\tlet statusbar = new _Statusbar__WEBPACK_IMPORTED_MODULE_2__.Statusbar();\r\n\r\n\tcontainer.pushComponent(title);\r\n\tcontainer.pushComponent(textarea);\r\n\tcontainer.pushComponent(keyboard);\r\n\tcontainer.pushComponent(statusbar);\r\n\r\n\tcontainer.render();\r\n\r\n\tconst input = document.querySelector('body');\r\n\tinput.addEventListener('keydown', (e) => {\r\n\t\tconsole.log(e);\r\n\t\ttextarea.setText(`${e.code}`);\r\n\t});\r\n\tkeyboard.keyDownEvent(0);\r\n}\n\n//# sourceURL=webpack://vitual-keyboard/./src/index.js?");

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
/******/ })()
;