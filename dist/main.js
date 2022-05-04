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

/***/ "./src/Key.js":
/*!********************!*\
  !*** ./src/Key.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Key\": () => (/* binding */ Key)\n/* harmony export */ });\nclass Key {\n\n\tconstructor({width, code, shiftTitles}) {\n\t\tthis.code = code;\n\t\tthis.width = width;\n\t\tthis.shiftTitles = shiftTitles;\n\t\tthis.element = null;\n\t}\n\n\trender() {\n\t\tlet className = `button-code-${this.code} button-${this.width}`;\n\t\tlet innerHTML = this.shiftTitles[0];\n\t\treturn  `<button class=\"keyboard__button ${className}\" tabindex=\"-1\">${innerHTML}</button>`;\n\t}\n\n\tupdate(shift) {\n\t\tif (this.element == null) {\n\t\t\tthis.element = document.querySelector(`.button-code-${this.code}`)\n\t\t}\n\t\t//shift =0;\n\t\tconsole.log(this.shiftTitles[shift]);\n\t\tthis.element.innerHTML = this.shiftTitles[shift];\n\t}\n\n}\n\n//# sourceURL=webpack://vitual-keyboard/./src/Key.js?");

/***/ }),

/***/ "./src/KeyData.js":
/*!************************!*\
  !*** ./src/KeyData.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"keyData\": () => (/* binding */ keyData)\n/* harmony export */ });\nlet keyData = [\n\t[\n\t\t{'code': 'Escape', 'width': 10, 'shiftTitles': ['Escape', '', '', '', '' ]},\n\t\t{'code': 'F1', 'width': 10, 'shiftTitles': ['F1', '', '', '', '' ]},\n\t\t{'code': 'F2', 'width': 10, 'shiftTitles': ['F2', '', '', '', '' ]},\n\t\t{'code': 'F3', 'width': 10, 'shiftTitles': ['F3', '', '', '', '' ]},\n\t\t{'code': 'F4', 'width': 10, 'shiftTitles': ['F4', '', '', '', '' ]},\n\t\t{'code': 'F5', 'width': 10, 'shiftTitles': ['F5', '', '', '', '' ]},\n\t\t{'code': 'F6', 'width': 10, 'shiftTitles': ['F6', '', '', '', '' ]},\n\t\t{'code': 'F7', 'width': 10, 'shiftTitles': ['F7', '', '', '', '' ]},\n\t\t{'code': 'F8', 'width': 10, 'shiftTitles': ['F8', '', '', '', '' ]},\n\t\t{'code': 'F9', 'width': 10, 'shiftTitles': ['F9', '', '', '', '' ]},\n\t\t{'code': 'F10', 'width': 10, 'shiftTitles': ['F10', '', '', '', '' ]},\n\t\t{'code': 'F11', 'width': 10, 'shiftTitles': ['F11', '', '', '', '' ]},\n\t\t{'code': 'F12', 'width': 10, 'shiftTitles': ['F12', '', '', '', '' ]},\n\t],\n\t[\n\t\t{'code': 'Backquote', 'width': 10, 'shiftTitles': ['Backquote', '`', '', '', '' ]},\n\t\t{'code': 'Digit1', 'width': 10, 'shiftTitles': ['Digit1', '1', '', '1', '' ]},\n\t\t{'code': 'Digit2', 'width': 10, 'shiftTitles': ['Digit2', '2', '', '2', '' ]},\n\t\t{'code': 'Digit3', 'width': 10, 'shiftTitles': ['Digit3', '3', '', '3', '' ]},\n\t\t{'code': 'Digit4', 'width': 10, 'shiftTitles': ['Digit4', '4', '', '4', '' ]},\n\t\t{'code': 'Digit5', 'width': 10, 'shiftTitles': ['Digit5', '5', '', '5', '' ]},\n\t\t{'code': 'Digit6', 'width': 10, 'shiftTitles': ['Digit6', '6', '', '6', '' ]},\n\t\t{'code': 'Digit7', 'width': 10, 'shiftTitles': ['Digit7', '7', '', '7', '' ]},\n\t\t{'code': 'Digit8', 'width': 10, 'shiftTitles': ['Digit8', '8', '', '8', '' ]},\n\t\t{'code': 'Digit9', 'width': 10, 'shiftTitles': ['Digit9', '9', '', '9', '' ]},\n\t\t{'code': 'Digit0', 'width': 10, 'shiftTitles': ['Digit0', '0', '', '0', '' ]},\n\t\t{'code': 'Minus', 'width': 10, 'shiftTitles': ['Minus', '-', '', '', '' ]},\n\t\t{'code': 'Equal', 'width': 10, 'shiftTitles': ['Equal', '=', '', '', '' ]},\n\t\t{'code': 'Backspace', 'width': 10, 'shiftTitles': ['Backspace', '', '', '', '' ]},\n\t],\n\t[\n\t\t{'code': 'Tab', 'width': 10, 'shiftTitles': ['Tab', '', '', '', '' ]},\n\t\t{'code': 'KeyQ', 'width': 10, 'shiftTitles': ['KeyQ', 'q', 'Q', '', '' ]},\n\t\t{'code': 'KeyW', 'width': 10, 'shiftTitles': ['KeyW', 'w', '', '', '' ]},\n\t\t{'code': 'KeyE', 'width': 10, 'shiftTitles': ['KeyE', 'e', '', '', '' ]},\n\t\t{'code': 'KeyR', 'width': 10, 'shiftTitles': ['KeyR', 'r', '', '', '' ]},\n\t\t{'code': 'KeyT', 'width': 10, 'shiftTitles': ['KeyT', 't', '', '', '' ]},\n\t\t{'code': 'KeyY', 'width': 10, 'shiftTitles': ['KeyY', 'y', '', '', '' ]},\n\t\t{'code': 'KeyU', 'width': 10, 'shiftTitles': ['KeyU', 'u', '', '', '' ]},\n\t\t{'code': 'KeyI', 'width': 10, 'shiftTitles': ['KeyI', 'i', '', '', '' ]},\n\t\t{'code': 'KeyO', 'width': 10, 'shiftTitles': ['KeyO', 'o', '', '', '' ]},\n\t\t{'code': 'KeyP', 'width': 10, 'shiftTitles': ['KeyP', 'p', '', '', '' ]},\n\t\t{'code': 'BracketLeft', 'width': 10, 'shiftTitles': ['BracketLeft', '', '', '', '' ]},\n\t\t{'code': 'BracketRight', 'width': 10, 'shiftTitles': ['BracketRight', '', '', '', '' ]},\n\t\t{'code': 'Backslash', 'width': 10, 'shiftTitles': ['Backslash', '', '', '', '' ]},\n\t],\n\t[\n\t\t{'code': 'CapsLock', 'width': 10, 'shiftTitles': ['CapsLock', '', '', '', '' ]},\n\t\t{'code': 'KeyA', 'width': 10, 'shiftTitles': ['KeyA', '', '', '', '' ]},\n\t\t{'code': 'KeyS', 'width': 10, 'shiftTitles': ['KeyS', '', '', '', '' ]},\n\t\t{'code': 'KeyD', 'width': 10, 'shiftTitles': ['KeyD', '', '', '', '' ]},\n\t\t{'code': 'KeyF', 'width': 10, 'shiftTitles': ['KeyF', '', '', '', '' ]},\n\t\t{'code': 'KeyG', 'width': 10, 'shiftTitles': ['KeyG', '', '', '', '' ]},\n\t\t{'code': 'KeyH', 'width': 10, 'shiftTitles': ['KeyH', '', '', '', '' ]},\n\t\t{'code': 'KeyJ', 'width': 10, 'shiftTitles': ['KeyJ', '', '', '', '' ]},\n\t\t{'code': 'KeyK', 'width': 10, 'shiftTitles': ['KeyK', '', '', '', '' ]},\n\t\t{'code': 'KeyL', 'width': 10, 'shiftTitles': ['KeyL', '', '', '', '' ]},\n\t\t{'code': 'Semicolon', 'width': 10, 'shiftTitles': ['Semicolon', '', '', '', '' ]},\n\t\t{'code': 'Quote', 'width': 10, 'shiftTitles': ['Quote', '', '', '', '' ]},\n\t\t{'code': 'Enter', 'width': 10, 'shiftTitles': ['Enter', '', '', '', '' ]},\n\t],\n\t[\n\t\t{'code': 'ShiftLeft', 'width': 10, 'shiftTitles': ['ShiftLeft', '', '', '', '' ]},\n\t\t{'code': 'KeyZ', 'width': 10, 'shiftTitles': ['KeyZ', '', '', '', '' ]},\n\t\t{'code': 'KeyX', 'width': 10, 'shiftTitles': ['KeyX', '', '', '', '' ]},\n\t\t{'code': 'KeyC', 'width': 10, 'shiftTitles': ['KeyC', '', '', '', '' ]},\n\t\t{'code': 'KeyV', 'width': 10, 'shiftTitles': ['KeyV', '', '', '', '' ]},\n\t\t{'code': 'KeyB', 'width': 10, 'shiftTitles': ['KeyB', '', '', '', '' ]},\n\t\t{'code': 'KeyN', 'width': 10, 'shiftTitles': ['KeyN', '', '', '', '' ]},\n\t\t{'code': 'KeyM', 'width': 10, 'shiftTitles': ['KeyM', '', '', '', '' ]},\n\t\t{'code': 'Comma', 'width': 10, 'shiftTitles': ['Comma', '', '', '', '' ]},\n\t\t{'code': 'Period', 'width': 10, 'shiftTitles': ['Period', '', '', '', '' ]},\n\t\t{'code': 'Slash', 'width': 10, 'shiftTitles': ['Slash', '', '', '', '' ]},\n\t\t{'code': 'ShiftRight', 'width': 10, 'shiftTitles': ['ShiftRight', '', '', '', '' ]},\n\t],\n\t[\n\t\t{'code': 'ControlLeft', 'width': 10, 'shiftTitles': ['ControlLeft', '', '', '', '' ]},\n\t\t{'code': 'MetaLeft', 'width': 10, 'shiftTitles': ['MetaLeft', '', '', '', '' ]},\n\t\t{'code': 'Space', 'width': 10, 'shiftTitles': ['Space', '', '', '', '' ]},\n\t\t{'code': 'MetaRight', 'width': 10, 'shiftTitles': ['MetaRight', '', '', '', '' ]},\n\t\t{'code': 'ControlRight', 'width': 10, 'shiftTitles': ['ControlRight', '', '', '', '' ]},\n\t\t{'code': 'AltRight', 'width': 10, 'shiftTitles': ['AltRight', '', '', '', '' ]},\n\t\t{'code': 'ControlRight', 'width': 10, 'shiftTitles': ['ControlRight', '', '', '', '' ]},\n\t\t{'code': 'ArrowLeft', 'width': 10, 'shiftTitles': ['ArrowLeft', '', '', '', '' ]},\n\t\t{'code': 'ArrowDown', 'width': 10, 'shiftTitles': ['ArrowDown', '', '', '', '' ]},\n\t\t{'code': 'ArrowUp', 'width': 10, 'shiftTitles': ['ArrowUp', '', '', '', '' ]},\n\t\t{'code': 'ArrowRight', 'width': 10, 'shiftTitles': ['ArrowRight', '', '', '', '' ]},\n\t]\n\n]\n\n//# sourceURL=webpack://vitual-keyboard/./src/KeyData.js?");

/***/ }),

/***/ "./src/Keyboard.js":
/*!*************************!*\
  !*** ./src/Keyboard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Keyboard\": () => (/* binding */ Keyboard)\n/* harmony export */ });\n/* harmony import */ var _Key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Key */ \"./src/Key.js\");\n/* harmony import */ var _KeyData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KeyData */ \"./src/KeyData.js\");\n\n\n\n\nclass Keyboard {\n\tconstructor(width, height) {\n\t\tthis.width = width;\n\t\tthis.height = height;\n\t\tthis.buttons = null;\n\t\tthis.keys = [];\n\t\tthis.shift = 1;\n\n\t\tfor (let l = 0; l < _KeyData__WEBPACK_IMPORTED_MODULE_1__.keyData.length; l++) {\n\t\t\tlet line = [];\n\t\t\tfor (let k = 0; k < _KeyData__WEBPACK_IMPORTED_MODULE_1__.keyData[l].length; k++) {\n\t\t\t\tlet key = new _Key__WEBPACK_IMPORTED_MODULE_0__.Key(_KeyData__WEBPACK_IMPORTED_MODULE_1__.keyData[l][k]);\n\t\t\t\tline.push(key);\n\t\t\t}\n\t\t\tthis.keys.push(line);\n\t\t}\n\t\tconsole.log(this.keys);\n\n\t}\n\n\t/*widths() {\n\t\treturn [\n\t\t\t[15, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],\n\t\t\t[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 15],\n\t\t\t[15, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],\n\t\t\t[17, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 17],\n\t\t\t[20, 10, 10, 10, 10, 10, 10, 10, 10, 10, 12, 10, 10],\n\t\t\t[10, 10, 10, 12, 50, 12, 10, 10, 10, 10],\n\t\t\t\n\t\t]\n\t}\n\n\tbuttonCaptions() {\n\t\treturn [\n\t\t\t// english default\n\t\t\t[\n\t\t\t\t['_esc', '_F1', '_F2', '_F3', '_F4', '_F5', '_F6', '_F7', '_F8', '_F9', '_F10', '_F11', '_F12', ''],\n\t\t\t\t['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '_delete'],\n\t\t\t\t['_tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\\\'],\n\t\t\t\t['_caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', `'`, '_return'],\n\t\t\t\t['_shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<<br>,', '><br>.', '/<br>?', '_⯅', '_shift'],\n\t\t\t\t['_fn', '_control', '_option', '_command', '', '_command', '_option', '_⯇', '_⯆', '_⯈'],\t//⯆\n\t\t\t],\n\t\t]\n\t}*/\n\n\trender() {\n\t\tlet innerHTML = '';\n\t\tfor (let l = 0; l < this.keys.length; l++)\n\t\t\tinnerHTML+=this.renderline(l);\n\t\treturn `<div class=\"keyboard__wrapper\">${innerHTML}</div>`;\n\n\t}\n\n\trenderline(l) {\n\t\tlet innerHTML = '';\n\t\tfor (let k = 0; k < this.keys[l].length; k++) {\n\t\t\tinnerHTML += this.keys[l][k].render();\n\t\t}\n\t\treturn `<div class=\"keyboard__line\">${innerHTML}</div>`;\n\t}\n\n\tupdate() {\n\t\tfor (let l = 0; l < this.keys.length; l++)\n\t\t\tfor (let k = 0; k < this.keys[l].length; k++) {\n\t\t\t\tthis.keys[l][k].update(this.shift);\n\t\t}\n\n\t}\n\n\tonKeyDown(e) {\n\t\tlet elem = this.findKeyElementByCode(e.code);\n\t\tif (e.code.toString().includes('Shift')) {\n\t\t\tthis.shift = 2;\n\t\t\tthis.update();\n\t\t}\n\t\t\t\n\t}\n\n\tonKeyUp(e) {\n\t\tif (e.code.toString().includes('Shift')) {\n\t\t\tthis.shift = 1;\n\t\t\tthis.update();\n\t\t}\n\t}\n\n\tfindKeyElementByCode(code) {\n\t\tfor (let l = 0; l < this.keys.length; l++)\n\t\tfor (let k = 0; k < this.keys[l].length; k++) \n\t\t\tif (this.keys[l][k].code==code)\n\t\t\t\treturn this.keys[l][k];\n\t\treturn null;\n\t}\n\n\n\tkeyDownEvent(code) {\n\t\tif (this.buttons == null) {\n\t\t\tlet buttons = document.querySelectorAll('.keyboard__button');\n\t\t\tfor (let i = 0; i < buttons.length; i++)\n\t\t\t\tbuttons[i].addEventListener('click', this.onButtonClick)\n\t\t}\n\t}\n\n\tonButtonClick = (e) => {\n\t\tconsole.log(e);\n\t}\n}\n\n//# sourceURL=webpack://vitual-keyboard/./src/Keyboard.js?");

/***/ }),

/***/ "./src/KeyboardListener.js":
/*!*********************************!*\
  !*** ./src/KeyboardListener.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KeyboardListener\": () => (/* binding */ KeyboardListener)\n/* harmony export */ });\nclass KeyboardListener {\n\tconstructor(keyboard, textarea) {\n\t\tthis.keyboard = keyboard;\n\t\tthis.textarea = textarea;\n\t}\n\n\tinstallListeners() {\n\t\tconst input = document.querySelector('body');\n\t\tinput.addEventListener('keydown', (e) => {\n\t\t\tthis.keyboard.onKeyDown(e);\n\t\t\t//this.textarea.appendText(`{'code': '${e.code}', 'width': 10, 'shiftTitles': ['${e.code}', ,'', '', '', '' ]},\\n`);\n\t\t});\n\n\t\tinput.addEventListener('keyup', (e) => {\n\t\t\tthis.keyboard.onKeyUp(e);\n\t\t});\n\n\n\t}\n}\n\n//# sourceURL=webpack://vitual-keyboard/./src/KeyboardListener.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ \"./src/Container.js\");\n/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Keyboard */ \"./src/Keyboard.js\");\n/* harmony import */ var _KeyboardListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KeyboardListener */ \"./src/KeyboardListener.js\");\n/* harmony import */ var _Statusbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Statusbar */ \"./src/Statusbar.js\");\n/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Textarea */ \"./src/Textarea.js\");\n/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Title */ \"./src/Title.js\");\n\n\n\n\n\n\n\nwindow.onload = () => {\n\n\tlet container = new _Container__WEBPACK_IMPORTED_MODULE_0__.Container();\n\tlet title = new _Title__WEBPACK_IMPORTED_MODULE_5__.Title();\n\tlet textarea = new _Textarea__WEBPACK_IMPORTED_MODULE_4__.Textarea();\n\tlet keyboard = new _Keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard(14, 6);\n\tlet statusbar = new _Statusbar__WEBPACK_IMPORTED_MODULE_3__.Statusbar();\n\n\tlet keyboardListener = new _KeyboardListener__WEBPACK_IMPORTED_MODULE_2__.KeyboardListener(keyboard, textarea);\n\tkeyboardListener.installListeners();\n\n\tcontainer.pushComponent(title);\n\tcontainer.pushComponent(textarea);\n\tcontainer.pushComponent(keyboard);\n\tcontainer.pushComponent(statusbar);\n\n\tcontainer.render();\n\tkeyboard.update();\n\tkeyboard.keyDownEvent(0);\n}\n\n//# sourceURL=webpack://vitual-keyboard/./src/index.js?");

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