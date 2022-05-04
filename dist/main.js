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

/***/ "./src/Key.js":
/*!********************!*\
  !*** ./src/Key.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Key\": () => (/* binding */ Key)\n/* harmony export */ });\nclass Key {\r\n\r\n\tconstructor({width, code, shiftTitles}) {\r\n\t\tthis.code = code;\r\n\t\tthis.width = width;\r\n\t\tthis.shiftTitles = shiftTitles;\r\n\t\tthis.element = null;\r\n\t}\r\n\r\n\trender() {\r\n\t\tlet className = `button-code-${this.code} button-${this.width}`;\r\n\t\tlet innerHTML = this.shiftTitles[0];\r\n\t\treturn  `<button class=\"keyboard__button ${className}\" tabindex=\"-1\">${innerHTML}</button>`;\r\n\t}\r\n\r\n\tupdate(shift) {\r\n\t\tif (this.element == null) {\r\n\t\t\tthis.element = document.querySelector(`.button-code-${this.code}`)\r\n\t\t}\r\n\t\t//shift =0;\r\n\t\tconsole.log(this.shiftTitles[shift]);\r\n\t\tthis.element.innerHTML = this.shiftTitles[shift];\r\n\t}\r\n\r\n}\n\n//# sourceURL=webpack://vitual-keyboard/./src/Key.js?");

/***/ }),

/***/ "./src/KeyData.js":
/*!************************!*\
  !*** ./src/KeyData.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"keyData\": () => (/* binding */ keyData)\n/* harmony export */ });\nlet keyData = [\r\n\t[\r\n\t\t{'code': 'Escape', 'width': 10, 'shiftTitles': ['Escape', '', '', '', '' ]},\r\n\t\t{'code': 'F1', 'width': 10, 'shiftTitles': ['F1', '', '', '', '' ]},\r\n\t\t{'code': 'F2', 'width': 10, 'shiftTitles': ['F2', '', '', '', '' ]},\r\n\t\t{'code': 'F3', 'width': 10, 'shiftTitles': ['F3', '', '', '', '' ]},\r\n\t\t{'code': 'F4', 'width': 10, 'shiftTitles': ['F4', '', '', '', '' ]},\r\n\t\t{'code': 'F5', 'width': 10, 'shiftTitles': ['F5', '', '', '', '' ]},\r\n\t\t{'code': 'F6', 'width': 10, 'shiftTitles': ['F6', '', '', '', '' ]},\r\n\t\t{'code': 'F7', 'width': 10, 'shiftTitles': ['F7', '', '', '', '' ]},\r\n\t\t{'code': 'F8', 'width': 10, 'shiftTitles': ['F8', '', '', '', '' ]},\r\n\t\t{'code': 'F9', 'width': 10, 'shiftTitles': ['F9', '', '', '', '' ]},\r\n\t\t{'code': 'F10', 'width': 10, 'shiftTitles': ['F10', '', '', '', '' ]},\r\n\t\t{'code': 'F11', 'width': 10, 'shiftTitles': ['F11', '', '', '', '' ]},\r\n\t\t{'code': 'F12', 'width': 10, 'shiftTitles': ['F12', '', '', '', '' ]},\r\n\t],\r\n\t[\r\n\t\t{'code': 'Backquote', 'width': 10, 'shiftTitles': ['Backquote', '`', '', '', '' ]},\r\n\t\t{'code': 'Digit1', 'width': 10, 'shiftTitles': ['Digit1', '1', '', '1', '' ]},\r\n\t\t{'code': 'Digit2', 'width': 10, 'shiftTitles': ['Digit2', '2', '', '2', '' ]},\r\n\t\t{'code': 'Digit3', 'width': 10, 'shiftTitles': ['Digit3', '3', '', '3', '' ]},\r\n\t\t{'code': 'Digit4', 'width': 10, 'shiftTitles': ['Digit4', '4', '', '4', '' ]},\r\n\t\t{'code': 'Digit5', 'width': 10, 'shiftTitles': ['Digit5', '5', '', '5', '' ]},\r\n\t\t{'code': 'Digit6', 'width': 10, 'shiftTitles': ['Digit6', '6', '', '6', '' ]},\r\n\t\t{'code': 'Digit7', 'width': 10, 'shiftTitles': ['Digit7', '7', '', '7', '' ]},\r\n\t\t{'code': 'Digit8', 'width': 10, 'shiftTitles': ['Digit8', '8', '', '8', '' ]},\r\n\t\t{'code': 'Digit9', 'width': 10, 'shiftTitles': ['Digit9', '9', '', '9', '' ]},\r\n\t\t{'code': 'Digit0', 'width': 10, 'shiftTitles': ['Digit0', '0', '', '0', '' ]},\r\n\t\t{'code': 'Minus', 'width': 10, 'shiftTitles': ['Minus', '-', '', '', '' ]},\r\n\t\t{'code': 'Equal', 'width': 10, 'shiftTitles': ['Equal', '=', '', '', '' ]},\r\n\t\t{'code': 'Backspace', 'width': 10, 'shiftTitles': ['Backspace', '', '', '', '' ]},\r\n\t],\r\n\t[\r\n\t\t{'code': 'Tab', 'width': 10, 'shiftTitles': ['Tab', '', '', '', '' ]},\r\n\t\t{'code': 'KeyQ', 'width': 10, 'shiftTitles': ['KeyQ', 'q', 'Q', '', '' ]},\r\n\t\t{'code': 'KeyW', 'width': 10, 'shiftTitles': ['KeyW', 'w', '', '', '' ]},\r\n\t\t{'code': 'KeyE', 'width': 10, 'shiftTitles': ['KeyE', 'e', '', '', '' ]},\r\n\t\t{'code': 'KeyR', 'width': 10, 'shiftTitles': ['KeyR', 'r', '', '', '' ]},\r\n\t\t{'code': 'KeyT', 'width': 10, 'shiftTitles': ['KeyT', 't', '', '', '' ]},\r\n\t\t{'code': 'KeyY', 'width': 10, 'shiftTitles': ['KeyY', 'y', '', '', '' ]},\r\n\t\t{'code': 'KeyU', 'width': 10, 'shiftTitles': ['KeyU', 'u', '', '', '' ]},\r\n\t\t{'code': 'KeyI', 'width': 10, 'shiftTitles': ['KeyI', 'i', '', '', '' ]},\r\n\t\t{'code': 'KeyO', 'width': 10, 'shiftTitles': ['KeyO', 'o', '', '', '' ]},\r\n\t\t{'code': 'KeyP', 'width': 10, 'shiftTitles': ['KeyP', 'p', '', '', '' ]},\r\n\t\t{'code': 'BracketLeft', 'width': 10, 'shiftTitles': ['BracketLeft', '', '', '', '' ]},\r\n\t\t{'code': 'BracketRight', 'width': 10, 'shiftTitles': ['BracketRight', '', '', '', '' ]},\r\n\t\t{'code': 'Backslash', 'width': 10, 'shiftTitles': ['Backslash', '', '', '', '' ]},\r\n\t],\r\n\t[\r\n\t\t{'code': 'CapsLock', 'width': 10, 'shiftTitles': ['CapsLock', '', '', '', '' ]},\r\n\t\t{'code': 'KeyA', 'width': 10, 'shiftTitles': ['KeyA', '', '', '', '' ]},\r\n\t\t{'code': 'KeyS', 'width': 10, 'shiftTitles': ['KeyS', '', '', '', '' ]},\r\n\t\t{'code': 'KeyD', 'width': 10, 'shiftTitles': ['KeyD', '', '', '', '' ]},\r\n\t\t{'code': 'KeyF', 'width': 10, 'shiftTitles': ['KeyF', '', '', '', '' ]},\r\n\t\t{'code': 'KeyG', 'width': 10, 'shiftTitles': ['KeyG', '', '', '', '' ]},\r\n\t\t{'code': 'KeyH', 'width': 10, 'shiftTitles': ['KeyH', '', '', '', '' ]},\r\n\t\t{'code': 'KeyJ', 'width': 10, 'shiftTitles': ['KeyJ', '', '', '', '' ]},\r\n\t\t{'code': 'KeyK', 'width': 10, 'shiftTitles': ['KeyK', '', '', '', '' ]},\r\n\t\t{'code': 'KeyL', 'width': 10, 'shiftTitles': ['KeyL', '', '', '', '' ]},\r\n\t\t{'code': 'Semicolon', 'width': 10, 'shiftTitles': ['Semicolon', '', '', '', '' ]},\r\n\t\t{'code': 'Quote', 'width': 10, 'shiftTitles': ['Quote', '', '', '', '' ]},\r\n\t\t{'code': 'Enter', 'width': 10, 'shiftTitles': ['Enter', '', '', '', '' ]},\r\n\t],\r\n\t[\r\n\t\t{'code': 'ShiftLeft', 'width': 10, 'shiftTitles': ['ShiftLeft', '', '', '', '' ]},\r\n\t\t{'code': 'KeyZ', 'width': 10, 'shiftTitles': ['KeyZ', '', '', '', '' ]},\r\n\t\t{'code': 'KeyX', 'width': 10, 'shiftTitles': ['KeyX', '', '', '', '' ]},\r\n\t\t{'code': 'KeyC', 'width': 10, 'shiftTitles': ['KeyC', '', '', '', '' ]},\r\n\t\t{'code': 'KeyV', 'width': 10, 'shiftTitles': ['KeyV', '', '', '', '' ]},\r\n\t\t{'code': 'KeyB', 'width': 10, 'shiftTitles': ['KeyB', '', '', '', '' ]},\r\n\t\t{'code': 'KeyN', 'width': 10, 'shiftTitles': ['KeyN', '', '', '', '' ]},\r\n\t\t{'code': 'KeyM', 'width': 10, 'shiftTitles': ['KeyM', '', '', '', '' ]},\r\n\t\t{'code': 'Comma', 'width': 10, 'shiftTitles': ['Comma', '', '', '', '' ]},\r\n\t\t{'code': 'Period', 'width': 10, 'shiftTitles': ['Period', '', '', '', '' ]},\r\n\t\t{'code': 'Slash', 'width': 10, 'shiftTitles': ['Slash', '', '', '', '' ]},\r\n\t\t{'code': 'ShiftRight', 'width': 10, 'shiftTitles': ['ShiftRight', '', '', '', '' ]},\r\n\t],\r\n\t[\r\n\t\t{'code': 'ControlLeft', 'width': 10, 'shiftTitles': ['ControlLeft', '', '', '', '' ]},\r\n\t\t{'code': 'MetaLeft', 'width': 10, 'shiftTitles': ['MetaLeft', '', '', '', '' ]},\r\n\t\t{'code': 'Space', 'width': 10, 'shiftTitles': ['Space', '', '', '', '' ]},\r\n\t\t{'code': 'MetaRight', 'width': 10, 'shiftTitles': ['MetaRight', '', '', '', '' ]},\r\n\t\t{'code': 'ControlRight', 'width': 10, 'shiftTitles': ['ControlRight', '', '', '', '' ]},\r\n\t\t{'code': 'AltRight', 'width': 10, 'shiftTitles': ['AltRight', '', '', '', '' ]},\r\n\t\t{'code': 'ControlRight', 'width': 10, 'shiftTitles': ['ControlRight', '', '', '', '' ]},\r\n\t\t{'code': 'ArrowLeft', 'width': 10, 'shiftTitles': ['ArrowLeft', '', '', '', '' ]},\r\n\t\t{'code': 'ArrowDown', 'width': 10, 'shiftTitles': ['ArrowDown', '', '', '', '' ]},\r\n\t\t{'code': 'ArrowUp', 'width': 10, 'shiftTitles': ['ArrowUp', '', '', '', '' ]},\r\n\t\t{'code': 'ArrowRight', 'width': 10, 'shiftTitles': ['ArrowRight', '', '', '', '' ]},\r\n\t]\r\n\r\n]\n\n//# sourceURL=webpack://vitual-keyboard/./src/KeyData.js?");

/***/ }),

/***/ "./src/Keyboard.js":
/*!*************************!*\
  !*** ./src/Keyboard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Keyboard\": () => (/* binding */ Keyboard)\n/* harmony export */ });\n/* harmony import */ var _Key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Key */ \"./src/Key.js\");\n/* harmony import */ var _KeyData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KeyData */ \"./src/KeyData.js\");\n\r\n\r\n\r\n\r\nclass Keyboard {\r\n\tconstructor(width, height) {\r\n\t\tthis.width = width;\r\n\t\tthis.height = height;\r\n\t\tthis.buttons = null;\r\n\t\tthis.keys = [];\r\n\t\tthis.shift = 1;\r\n\r\n\t\tfor (let l = 0; l < _KeyData__WEBPACK_IMPORTED_MODULE_1__.keyData.length; l++) {\r\n\t\t\tlet line = [];\r\n\t\t\tfor (let k = 0; k < _KeyData__WEBPACK_IMPORTED_MODULE_1__.keyData[l].length; k++) {\r\n\t\t\t\tlet key = new _Key__WEBPACK_IMPORTED_MODULE_0__.Key(_KeyData__WEBPACK_IMPORTED_MODULE_1__.keyData[l][k]);\r\n\t\t\t\tline.push(key);\r\n\t\t\t}\r\n\t\t\tthis.keys.push(line);\r\n\t\t}\r\n\t\tconsole.log(this.keys);\r\n\r\n\t}\r\n\r\n\t/*widths() {\r\n\t\treturn [\r\n\t\t\t[15, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],\r\n\t\t\t[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 15],\r\n\t\t\t[15, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],\r\n\t\t\t[17, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 17],\r\n\t\t\t[20, 10, 10, 10, 10, 10, 10, 10, 10, 10, 12, 10, 10],\r\n\t\t\t[10, 10, 10, 12, 50, 12, 10, 10, 10, 10],\r\n\t\t\t\r\n\t\t]\r\n\t}\r\n\r\n\tbuttonCaptions() {\r\n\t\treturn [\r\n\t\t\t// english default\r\n\t\t\t[\r\n\t\t\t\t['_esc', '_F1', '_F2', '_F3', '_F4', '_F5', '_F6', '_F7', '_F8', '_F9', '_F10', '_F11', '_F12', ''],\r\n\t\t\t\t['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '_delete'],\r\n\t\t\t\t['_tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\\\'],\r\n\t\t\t\t['_caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', `'`, '_return'],\r\n\t\t\t\t['_shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<<br>,', '><br>.', '/<br>?', '_⯅', '_shift'],\r\n\t\t\t\t['_fn', '_control', '_option', '_command', '', '_command', '_option', '_⯇', '_⯆', '_⯈'],\t//⯆\r\n\t\t\t],\r\n\t\t]\r\n\t}*/\r\n\r\n\trender() {\r\n\t\tlet innerHTML = '';\r\n\t\tfor (let l = 0; l < this.keys.length; l++)\r\n\t\t\tinnerHTML+=this.renderline(l);\r\n\t\treturn `<div class=\"keyboard__wrapper\">${innerHTML}</div>`;\r\n\r\n\t}\r\n\r\n\trenderline(l) {\r\n\t\tlet innerHTML = '';\r\n\t\tfor (let k = 0; k < this.keys[l].length; k++) {\r\n\t\t\tinnerHTML += this.keys[l][k].render();\r\n\t\t}\r\n\t\treturn `<div class=\"keyboard__line\">${innerHTML}</div>`;\r\n\t}\r\n\r\n\tupdate() {\r\n\t\tfor (let l = 0; l < this.keys.length; l++)\r\n\t\t\tfor (let k = 0; k < this.keys[l].length; k++) {\r\n\t\t\t\tthis.keys[l][k].update(this.shift);\r\n\t\t}\r\n\r\n\t}\r\n\r\n\tonKeyDown(e) {\r\n\t\tlet elem = this.findKeyElementByCode(e.code);\r\n\t\tif (e.code.toString().includes('Shift')) {\r\n\t\t\tthis.shift = 2;\r\n\t\t\tthis.update();\r\n\t\t}\r\n\t\t\t\r\n\t}\r\n\r\n\tonKeyUp(e) {\r\n\t\tif (e.code.toString().includes('Shift')) {\r\n\t\t\tthis.shift = 1;\r\n\t\t\tthis.update();\r\n\t\t}\r\n\t}\r\n\r\n\tfindKeyElementByCode(code) {\r\n\t\tfor (let l = 0; l < this.keys.length; l++)\r\n\t\tfor (let k = 0; k < this.keys[l].length; k++) \r\n\t\t\tif (this.keys[l][k].code==code)\r\n\t\t\t\treturn this.keys[l][k];\r\n\t\treturn null;\r\n\t}\r\n\r\n\r\n\tkeyDownEvent(code) {\r\n\t\tif (this.buttons == null) {\r\n\t\t\tlet buttons = document.querySelectorAll('.keyboard__button');\r\n\t\t\tfor (let i = 0; i < buttons.length; i++)\r\n\t\t\t\tbuttons[i].addEventListener('click', this.onButtonClick)\r\n\t\t}\r\n\t}\r\n\r\n\tonButtonClick = (e) => {\r\n\t\tconsole.log(e);\r\n\t}\r\n}\n\n//# sourceURL=webpack://vitual-keyboard/./src/Keyboard.js?");

/***/ }),

/***/ "./src/KeyboardListener.js":
/*!*********************************!*\
  !*** ./src/KeyboardListener.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KeyboardListener\": () => (/* binding */ KeyboardListener)\n/* harmony export */ });\nclass KeyboardListener {\r\n\tconstructor(keyboard, textarea) {\r\n\t\tthis.keyboard = keyboard;\r\n\t\tthis.textarea = textarea;\r\n\t}\r\n\r\n\tinstallListeners() {\r\n\t\tconst input = document.querySelector('body');\r\n\t\tinput.addEventListener('keydown', (e) => {\r\n\t\t\tthis.keyboard.onKeyDown(e);\r\n\t\t\t//this.textarea.appendText(`{'code': '${e.code}', 'width': 10, 'shiftTitles': ['${e.code}', ,'', '', '', '' ]},\\n`);\r\n\t\t});\r\n\r\n\t\tinput.addEventListener('keyup', (e) => {\r\n\t\t\tthis.keyboard.onKeyUp(e);\r\n\t\t});\r\n\r\n\r\n\t}\r\n}\n\n//# sourceURL=webpack://vitual-keyboard/./src/KeyboardListener.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Textarea\": () => (/* binding */ Textarea)\n/* harmony export */ });\nclass Textarea {\r\n\tconstructor() {\r\n\t\tthis.text = '';\r\n\t\tthis.element = null;\r\n\t}\r\n\trender() {\r\n\t\treturn `<textarea class=\"body__textarea\" rows=\"5\" cols=\"80\" tabindex=\"-1\"></textarea>`;\r\n\t}\r\n\r\n\tappendText(text) {\r\n\t\tif (this.element == null)\r\n\t\t\tthis.element = document.querySelector('.body__textarea');\r\n\t\tthis.text += text;\r\n\t\tthis.element.innerHTML = this.text;\r\n\t}\r\n\r\n\tsetText(text) {\r\n\tif (this.element == null)\r\n\t\tthis.element = document.querySelector('.body__textarea');\r\n\tthis.text = text;\r\n\tthis.element.innerHTML = this.text;\t\r\n\t}\r\n\t\r\n}\n\n//# sourceURL=webpack://vitual-keyboard/./src/Textarea.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ \"./src/Container.js\");\n/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Keyboard */ \"./src/Keyboard.js\");\n/* harmony import */ var _KeyboardListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KeyboardListener */ \"./src/KeyboardListener.js\");\n/* harmony import */ var _Statusbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Statusbar */ \"./src/Statusbar.js\");\n/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Textarea */ \"./src/Textarea.js\");\n/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Title */ \"./src/Title.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.onload = () => {\r\n\r\n\tlet container = new _Container__WEBPACK_IMPORTED_MODULE_0__.Container();\r\n\tlet title = new _Title__WEBPACK_IMPORTED_MODULE_5__.Title();\r\n\tlet textarea = new _Textarea__WEBPACK_IMPORTED_MODULE_4__.Textarea();\r\n\tlet keyboard = new _Keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard(14, 6);\r\n\tlet statusbar = new _Statusbar__WEBPACK_IMPORTED_MODULE_3__.Statusbar();\r\n\r\n\tlet keyboardListener = new _KeyboardListener__WEBPACK_IMPORTED_MODULE_2__.KeyboardListener(keyboard, textarea);\r\n\tkeyboardListener.installListeners();\r\n\r\n\tcontainer.pushComponent(title);\r\n\tcontainer.pushComponent(textarea);\r\n\tcontainer.pushComponent(keyboard);\r\n\tcontainer.pushComponent(statusbar);\r\n\r\n\tcontainer.render();\r\n\tkeyboard.update();\r\n\tkeyboard.keyDownEvent(0);\r\n}\n\n//# sourceURL=webpack://vitual-keyboard/./src/index.js?");

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