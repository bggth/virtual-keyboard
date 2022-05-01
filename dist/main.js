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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container)\n/* harmony export */ });\nclass Container {\n\tconstructor () {\n\t\tthis.components = []\n\t}\n\n\tpushComponent(component) {\n\t\tthis.components.push(component);\n\t}\n\n\trender() {\n\t\tlet innerHTML = '';\n\t\tfor (let i = 0; i < this.components.length; i++)\n\t\t\tinnerHTML += this.components[i].render();\n\t\tdocument.body.innerHTML = `<div class=\"container\">${innerHTML}<div>`;\n\t}\n}\n\n//# sourceURL=webpack://vitual-keyboard/./src/Container.js?");

/***/ }),

/***/ "./src/Keyboard.js":
/*!*************************!*\
  !*** ./src/Keyboard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Keyboard\": () => (/* binding */ Keyboard)\n/* harmony export */ });\nclass Keyboard {\n\tconstructor(width, height) {\n\t\tthis.width = width;\n\t\tthis.height = height;\n\t\tthis.buttons = null;\n\t}\n\n\twidths() {\n\t\treturn [\n\t\t\t[15, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],\n\t\t\t[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 15],\n\t\t\t[15, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],\n\t\t\t[17, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 17],\n\t\t\t[20, 10, 10, 10, 10, 10, 10, 10, 10, 10, 12, 10, 10],\n\t\t\t[10, 10, 10, 12, 50, 12, 10, 10, 10, 10],\n\t\t\t\n\t\t]\n\t}\n\n\tbuttonCaptions() {\n\t\treturn [\n\t\t\t// english default\n\t\t\t[\n\t\t\t\t['_esc', '_F1', '_F2', '_F3', '_F4', '_F5', '_F6', '_F7', '_F8', '_F9', '_F10', '_F11', '_F12', ''],\n\t\t\t\t['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '_delete'],\n\t\t\t\t['_tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\\\'],\n\t\t\t\t['_caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', `'`, '_return'],\n\t\t\t\t['_shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<<br>,', '><br>.', '/<br>?', '_⯅', '_shift'],\n\t\t\t\t['_fn', '_control', '_option', '_command', '', '_command', '_option', '_⯇', '_⯆', '_⯈'],\t//⯆\n\t\t\t],\n\t\t]\n\t}\n\n\trender() {\n\t\tlet innerHTML = '';\n\t\tfor (let i = 0; i < this.height; i++)\n\t\t\tinnerHTML+=this.renderLine(i);\n\t\treturn `<div class=\"keyboard__wrapper\">${innerHTML}</div>`;\n\t}\n\n\trenderLine(line) {\n\t\tlet innerHTML = '';\n\t\tfor (let i = 0; i < this.width; i++)\n\t\t{\n\t\t\tlet className = '';\n\t\t\tclassName = `button-${this.widths()[line][i]}`;\n\t\t\tlet caption = `${this.buttonCaptions()[0][line][i]}`;\n\n\t\t\tif (caption[0] == '_'){\n\t\t\t\tcaption = caption.substring(1);\n\t\t\t\tclassName += ' button-small-title';\n\t\t\t\tif (i == 0) {\n\t\t\t\t\tclassName += ' button-caption-start';\n\t\t\t\t}\n\t\t\t\tif (i == this.buttonCaptions()[0][line].length-1) {\n\t\t\t\t\tclassName += ' button-caption-end';\n\t\t\t\t}\n\t\t\t}\n\t\t\t\n\t\t\t// /if i\n\n\t\t\tif (caption=='10') {\n\t\t\t\tcaption = '';\n\t\t\t}\n\t\t\tif (this.widths()[line][i] != undefined)\n\t\t\t\tinnerHTML+=this.renderButton(caption, className);\n\t\t}\n\t\t\t\n\t\treturn `<div class=\"keyboard__line\">${innerHTML}</div>`;\n\t}\n\n\trenderButton(text, className='') {\n\t\tlet innerHTML = text;\n\t\treturn  `<button class=\"keyboard__button ${className}\" tabindex=\"-1\">${innerHTML}</button>`;\n\t}\n\n\tkeyDownEvent(code) {\n\t\tif (this.buttons == null) {\n\t\t\tlet buttons = document.querySelectorAll('.keyboard__button');\n\t\t\tfor (let i = 0; i < buttons.length; i++)\n\t\t\t\tbuttons[i].addEventListener('click', this.onButtonClick)\n\t\t}\n\t}\n\n\tonButtonClick = (e) => {\n\t\tconsole.log(e);\n\t}\n}\n\n//# sourceURL=webpack://vitual-keyboard/./src/Keyboard.js?");

/***/ }),

/***/ "./src/KeyboardListener.js":
/*!*********************************!*\
  !*** ./src/KeyboardListener.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KeyboardListener\": () => (/* binding */ KeyboardListener)\n/* harmony export */ });\nclass KeyboardListener {\n\tconstructor(keyboard, textarea) {\n\t\tthis.keyboard = keyboard;\n\t\tthis.textarea = textarea;\n\t}\n\n\tinstallListeners() {\n\t\tconst input = document.querySelector('body');\n\t\tinput.addEventListener('keydown', (e) => {\n\t\t\tthis.textarea.setText(`${e.code}`);\n\t\t});\n\t}\n}\n\n//# sourceURL=webpack://vitual-keyboard/./src/KeyboardListener.js?");

/***/ }),

/***/ "./src/Statusbar.js":
/*!**************************!*\
  !*** ./src/Statusbar.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Statusbar\": () => (/* binding */ Statusbar)\n/* harmony export */ });\nclass Statusbar{\n\n\trender() {\n\t\treturn `<div class=\"body__statusbar\"></div>`;\n\t}\n}\n\n//# sourceURL=webpack://vitual-keyboard/./src/Statusbar.js?");

/***/ }),

/***/ "./src/Textarea.js":
/*!*************************!*\
  !*** ./src/Textarea.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Textarea\": () => (/* binding */ Textarea)\n/* harmony export */ });\nclass Textarea {\n\tconstructor() {\n\t\tthis.text = '';\n\t\tthis.element = null;\n\t}\n\trender() {\n\t\treturn `<textarea class=\"body__textarea\" rows=\"5\" cols=\"80\" tabindex=\"-1\"></textarea>`;\n\t}\n\n\tappendText(text) {\n\t\tif (this.element == null)\n\t\t\tthis.element = document.querySelector('.body__textarea');\n\t\tthis.text += text;\n\t\tthis.element.innerHTML = this.text;\n\t}\n\n\tsetText(text) {\n\tif (this.element == null)\n\t\tthis.element = document.querySelector('.body__textarea');\n\tthis.text = text;\n\tthis.element.innerHTML = this.text;\t\n\t}\n\t\n}\n\n//# sourceURL=webpack://vitual-keyboard/./src/Textarea.js?");

/***/ }),

/***/ "./src/Title.js":
/*!**********************!*\
  !*** ./src/Title.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Title\": () => (/* binding */ Title)\n/* harmony export */ });\nclass Title {\n\trender() {\n\t\treturn `<h1 class=body__title>RSS Virtual Keyboard</h1>`\n\t}\n}\n\n//# sourceURL=webpack://vitual-keyboard/./src/Title.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ \"./src/Container.js\");\n/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Keyboard */ \"./src/Keyboard.js\");\n/* harmony import */ var _KeyboardListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KeyboardListener */ \"./src/KeyboardListener.js\");\n/* harmony import */ var _Statusbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Statusbar */ \"./src/Statusbar.js\");\n/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Textarea */ \"./src/Textarea.js\");\n/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Title */ \"./src/Title.js\");\n\n\n\n\n\n\n\nwindow.onload = () => {\n\n\tlet container = new _Container__WEBPACK_IMPORTED_MODULE_0__.Container();\n\tlet title = new _Title__WEBPACK_IMPORTED_MODULE_5__.Title();\n\tlet textarea = new _Textarea__WEBPACK_IMPORTED_MODULE_4__.Textarea();\n\tlet keyboard = new _Keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard(14, 6);\n\tlet statusbar = new _Statusbar__WEBPACK_IMPORTED_MODULE_3__.Statusbar();\n\n\tlet keyboardListener = new _KeyboardListener__WEBPACK_IMPORTED_MODULE_2__.KeyboardListener(keyboard, textarea);\n\tkeyboardListener.installListeners();\n\n\tcontainer.pushComponent(title);\n\tcontainer.pushComponent(textarea);\n\tcontainer.pushComponent(keyboard);\n\tcontainer.pushComponent(statusbar);\n\n\tcontainer.render();\n\n\n\tkeyboard.keyDownEvent(0);\n}\n\n//# sourceURL=webpack://vitual-keyboard/./src/index.js?");

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