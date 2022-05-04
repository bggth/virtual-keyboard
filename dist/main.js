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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Key\": () => (/* binding */ Key)\n/* harmony export */ });\nclass Key {\r\n\r\n\tconstructor({width, code, shiftTitles}) {\r\n\t\tthis.code = code;\r\n\t\tthis.width = width;\r\n\t\tthis.shiftTitles = shiftTitles;\r\n\t\tthis.element = null;\r\n\t}\r\n\r\n\trender() {\r\n\t\tlet className = `button-code-${this.code} button-${this.width}`;\r\n\t\tclassName += (this.shiftTitles[4]!='') || (this.shiftTitles[0]=='en')?' button-small-title':'';\r\n\t\tlet innerHTML = this.shiftTitles[4];\r\n\t\treturn  `<span class=\"keyboard__button ${className}\" >${innerHTML}</span>`;\r\n\t}\r\n\r\n\tupdate(shift) {\r\n\t\tif (this.element == null) {\r\n\t\t\tthis.element = document.querySelector(`.button-code-${this.code}`)\r\n\t\t}\r\n\t\tthis.element.innerHTML = this.shiftTitles[4]==''?this.shiftTitles[shift]:this.shiftTitles[4];\r\n\t}\r\n}\n\n//# sourceURL=webpack://vitual-keyboard/./src/Key.js?");

/***/ }),

/***/ "./src/KeyData.js":
/*!************************!*\
  !*** ./src/KeyData.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"keyData\": () => (/* binding */ keyData)\n/* harmony export */ });\nlet keyData = [\r\n\t[\r\n\t\t{'code': 'Escape', 'width': 15, 'shiftTitles': ['&#x1F600', '&#x1F600', '&#x1F600', '&#x1F600', 'esc' ]},\r\n\t\t{'code': 'F1', 'width': 10, 'shiftTitles': ['&#x1F600', '&#x1F600', '&#x1F600', '&#x1F600', 'F1' ]},\r\n\t\t{'code': 'F2', 'width': 10, 'shiftTitles': ['&#x1F601', '&#x1F601', '&#x1F601', '&#x1F601', 'F2' ]},\r\n\t\t{'code': 'F3', 'width': 10, 'shiftTitles': ['&#x1F602', '&#x1F602', '&#x1F602', '&#x1F602', 'F3' ]},\r\n\t\t{'code': 'F4', 'width': 10, 'shiftTitles': ['&#x1F603', '&#x1F603', '&#x1F603', '&#x1F603', 'F4' ]},\r\n\t\t{'code': 'F5', 'width': 10, 'shiftTitles': ['&#x1F604', '&#x1F604', '&#x1F604', '&#x1F604', 'F5' ]},\r\n\t\t{'code': 'F6', 'width': 10, 'shiftTitles': ['&#x1F605', '&#x1F605', '&#x1F605', '&#x1F605', 'F6' ]},\r\n\t\t{'code': 'F7', 'width': 10, 'shiftTitles': ['&#x1F606', '&#x1F606', '&#x1F606', '&#x1F606', 'F7' ]},\r\n\t\t{'code': 'F8', 'width': 10, 'shiftTitles': ['&#x1F607', '&#x1F607', '&#x1F607', '&#x1F607', 'F8' ]},\r\n\t\t{'code': 'F9', 'width': 10, 'shiftTitles': ['&#x1F608', '&#x1F608', '&#x1F608', '&#x1F608', 'F9' ]},\r\n\t\t{'code': 'F10', 'width': 10, 'shiftTitles': ['&#x1F609', '&#x1F609', '&#x1F609', '&#x1F609', 'F10' ]},\r\n\t\t{'code': 'F11', 'width': 10, 'shiftTitles': ['&#x1F60A', '&#x1F60A', '&#x1F60A', '&#x1F60A', 'F11' ]},\r\n\t\t{'code': 'F12', 'width': 10, 'shiftTitles': ['&#x1F60B', '&#x1F60B', '&#x1F60B', '&#x1F60B', 'F12' ]},\r\n\t\t{'code': 'F13', 'width': 10, 'shiftTitles': ['&#x1F608', '&#x1F608', '&#x1F608', '&#x1F608', 'F13' ]},\r\n\t],\r\n\t[\r\n\t\t{'code': 'Backquote', 'width': 10, 'shiftTitles': ['`', '~', 'ё', 'Ё', '' ]},\r\n\t\t{'code': 'Digit1', 'width': 10, 'shiftTitles': ['1', '!', '1', '!', '' ]},\r\n\t\t{'code': 'Digit2', 'width': 10, 'shiftTitles': ['2', '@', '2', '\"', '' ]},\r\n\t\t{'code': 'Digit3', 'width': 10, 'shiftTitles': ['3', '#', '3', '№', '' ]},\r\n\t\t{'code': 'Digit4', 'width': 10, 'shiftTitles': ['4', '$', '4', ';', '' ]},\r\n\t\t{'code': 'Digit5', 'width': 10, 'shiftTitles': ['5', '%', '5', '%', '' ]},\r\n\t\t{'code': 'Digit6', 'width': 10, 'shiftTitles': ['6', '^', '6', ':', '' ]},\r\n\t\t{'code': 'Digit7', 'width': 10, 'shiftTitles': ['7', '&', '7', '?', '' ]},\r\n\t\t{'code': 'Digit8', 'width': 10, 'shiftTitles': ['8', '*', '8', '*', '' ]},\r\n\t\t{'code': 'Digit9', 'width': 10, 'shiftTitles': ['9', '(', '9', '(', '' ]},\r\n\t\t{'code': 'Digit0', 'width': 10, 'shiftTitles': ['0', ')', '0', ')', '' ]},\r\n\t\t{'code': 'Minus', 'width': 10, 'shiftTitles': ['-', '_', '-', '_', '' ]},\r\n\t\t{'code': 'Equal', 'width': 10, 'shiftTitles': ['=', '+', '=', '+', '' ]},\r\n\t\t{'code': 'Backspace', 'width': 15, 'shiftTitles': ['', '', '', '', 'backspace' ]},\r\n\t],\r\n\t[\r\n\t\t{'code': 'Tab', 'width': 15, 'shiftTitles': ['\\t', '\\t', '\\t', '\\t', 'tab' ]},\r\n\t\t{'code': 'KeyQ', 'width': 10, 'shiftTitles': [ 'q', 'Q', 'й', 'Й' , '']},\r\n\t\t{'code': 'KeyW', 'width': 10, 'shiftTitles': ['w', 'W', 'ц', 'Ц', '' ]},\r\n\t\t{'code': 'KeyE', 'width': 10, 'shiftTitles': ['e', 'E', 'у', 'У', '' ]},\r\n\t\t{'code': 'KeyR', 'width': 10, 'shiftTitles': ['r', 'R', 'к', 'К', '' ]},\r\n\t\t{'code': 'KeyT', 'width': 10, 'shiftTitles': ['t', 'T', 'е', 'Е', '' ]},\r\n\t\t{'code': 'KeyY', 'width': 10, 'shiftTitles': ['y', 'Y', 'н', 'Н', '' ]},\r\n\t\t{'code': 'KeyU', 'width': 10, 'shiftTitles': ['u', 'U', 'г', 'Г', '' ]},\r\n\t\t{'code': 'KeyI', 'width': 10, 'shiftTitles': ['i', 'I', 'ш', 'Ш', '' ]},\r\n\t\t{'code': 'KeyO', 'width': 10, 'shiftTitles': ['o', 'O', 'щ', 'Щ', '' ]},\r\n\t\t{'code': 'KeyP', 'width': 10, 'shiftTitles': ['p', 'P', 'з', 'З', '' ]},\r\n\t\t{'code': 'BracketLeft', 'width': 10, 'shiftTitles': ['[', '{', 'х', 'Х', '' ]},\r\n\t\t{'code': 'BracketRight', 'width': 10, 'shiftTitles': [']', '}', 'ъ', 'Ъ', '' ]},\r\n\t\t{'code': 'Backslash', 'width': 10, 'shiftTitles': ['\\\\', '|', '', '', '' ]},\r\n\t],\r\n\t[\r\n\t\t{'code': 'CapsLock', 'width': 17, 'shiftTitles': ['', '', '', '', 'caps' ]},\r\n\t\t{'code': 'KeyA', 'width': 10, 'shiftTitles': ['a', 'A', 'ф', 'Ф', '' ]},\r\n\t\t{'code': 'KeyS', 'width': 10, 'shiftTitles': ['s', 'S', 'ы', 'Ы', '' ]},\r\n\t\t{'code': 'KeyD', 'width': 10, 'shiftTitles': ['d', 'D', 'в', 'В', '' ]},\r\n\t\t{'code': 'KeyF', 'width': 10, 'shiftTitles': ['f', 'F', 'а', 'А', '' ]},\r\n\t\t{'code': 'KeyG', 'width': 10, 'shiftTitles': ['g', 'G', 'п', 'П', '' ]},\r\n\t\t{'code': 'KeyH', 'width': 10, 'shiftTitles': ['h', 'H', 'р', 'Р', '' ]},\r\n\t\t{'code': 'KeyJ', 'width': 10, 'shiftTitles': ['j', 'J', 'о', 'О', '' ]},\r\n\t\t{'code': 'KeyK', 'width': 10, 'shiftTitles': ['k', 'K', 'л', 'Л', '' ]},\r\n\t\t{'code': 'KeyL', 'width': 10, 'shiftTitles': ['l', 'L', 'д', 'Д', '' ]},\r\n\t\t{'code': 'Semicolon', 'width': 10, 'shiftTitles': [';', ':', 'ж', 'Ж', '' ]},\r\n\t\t{'code': 'Quote', 'width': 10, 'shiftTitles': ['\\'', '\"', 'э', 'Э', '' ]},\r\n\t\t{'code': 'Enter', 'width': 17, 'shiftTitles': ['\\n', '\\n', '\\n', '\\n', 'enter' ]},\r\n\t],\r\n\t[\r\n\t\t{'code': 'ShiftLeft', 'width': 20, 'shiftTitles': ['', '', '', '', 'shift' ]},\r\n\t\t{'code': 'KeyZ', 'width': 10, 'shiftTitles': ['z', 'Z', 'я', 'Я', '' ]},\r\n\t\t{'code': 'KeyX', 'width': 10, 'shiftTitles': ['x', 'X', 'ч', 'Ч', '' ]},\r\n\t\t{'code': 'KeyC', 'width': 10, 'shiftTitles': ['c', 'C', 'с', 'С', '' ]},\r\n\t\t{'code': 'KeyV', 'width': 10, 'shiftTitles': ['v', 'V', 'м', 'М', '' ]},\r\n\t\t{'code': 'KeyB', 'width': 10, 'shiftTitles': ['b', 'B', 'и', 'И', '' ]},\r\n\t\t{'code': 'KeyN', 'width': 10, 'shiftTitles': ['n', 'N', 'т', 'Т', '' ]},\r\n\t\t{'code': 'KeyM', 'width': 10, 'shiftTitles': ['m', 'M', 'ь', 'Ь', '' ]},\r\n\t\t{'code': 'Comma', 'width': 10, 'shiftTitles': [',', '<', 'б', 'Б', '' ]},\r\n\t\t{'code': 'Period', 'width': 10, 'shiftTitles': ['.', '>', 'ю', 'Ю', '' ]},\r\n\t\t{'code': 'Slash', 'width': 12, 'shiftTitles': ['/', '?', '.', '.', '' ]},\r\n\t\t{'code': 'ArrowUp', 'width': 10, 'shiftTitles': ['⯅', '⯅', '⯅', '⯅', '⯅' ]},\r\n\t\t{'code': 'ShiftRight', 'width': 10, 'shiftTitles': ['', '', '', '', 'shift' ]},\r\n\t],\r\n\t[\r\n\t\t{'code': 'ControlLeft', 'width': 10, 'shiftTitles': ['en', 'EN', 'ru', 'RU', '']},\r\n\t\t{'code': 'MetaLeft2', 'width': 10, 'shiftTitles': ['', '', '', '', '' ]},\r\n\t\t{'code': 'MetaLeft', 'width': 10, 'shiftTitles': ['', '', '', '', '#' ]},\r\n\t\t{'code': 'AltLeft', 'width': 12, 'shiftTitles': ['', '', '', '', 'alt' ]},\r\n\t\t{'code': 'Space', 'width': 50, 'shiftTitles': [' ', ' ', ' ', ' ', ' ' ]},\r\n\t\t{'code': 'AltRight', 'width': 12, 'shiftTitles': ['', '', '', '', 'alt' ]},\r\n\t\t{'code': 'ControlRight', 'width': 10, 'shiftTitles': ['', '', '', '', 'ctrl' ]},\r\n\t\t{'code': 'ArrowLeft', 'width': 10, 'shiftTitles': ['⯇', '⯇', '⯇', '⯇', '⯇' ]},\r\n\t\t{'code': 'ArrowDown', 'width': 10, 'shiftTitles': ['⯆', '⯆', '⯆', '⯆', '⯆' ]},\r\n\t\t{'code': 'ArrowRight', 'width': 10, 'shiftTitles': ['⯈', '⯈', '⯈', '⯈', '⯈' ]},\r\n\t]\r\n]\n\n//# sourceURL=webpack://vitual-keyboard/./src/KeyData.js?");

/***/ }),

/***/ "./src/Keyboard.js":
/*!*************************!*\
  !*** ./src/Keyboard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Keyboard\": () => (/* binding */ Keyboard)\n/* harmony export */ });\n/* harmony import */ var _Key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Key */ \"./src/Key.js\");\n/* harmony import */ var _KeyData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KeyData */ \"./src/KeyData.js\");\n\r\n\r\n\r\n\r\nclass Keyboard {\r\n\tconstructor(textarea, storage) {\r\n\t\tthis.buttons = null;\r\n\t\tthis.keys = [];\r\n\t\tthis.textarea = textarea;\r\n\t\tthis.storage = storage;\r\n\t\tthis.shift = parseInt(this.storage.get('shift', 0));\r\n\t\tthis.lang = parseInt(this.storage.get('lang', 0));\r\n\t\tthis.shiftFlag = false;\r\n\r\n\t\tfor (let l = 0; l < _KeyData__WEBPACK_IMPORTED_MODULE_1__.keyData.length; l++) {\r\n\t\t\tlet line = [];\r\n\t\t\tfor (let k = 0; k < _KeyData__WEBPACK_IMPORTED_MODULE_1__.keyData[l].length; k++) {\r\n\t\t\t\tlet key = new _Key__WEBPACK_IMPORTED_MODULE_0__.Key(_KeyData__WEBPACK_IMPORTED_MODULE_1__.keyData[l][k]);\r\n\t\t\t\tline.push(key);\r\n\t\t\t}\r\n\t\t\tthis.keys.push(line);\r\n\t\t}\r\n\t}\r\n\r\n\trender() {\r\n\t\tlet innerHTML = '';\r\n\t\tfor (let l = 0; l < this.keys.length; l++)\r\n\t\t\tinnerHTML+=this.renderline(l);\r\n\t\treturn `<div class=\"keyboard__wrapper\">${innerHTML}</div>`;\r\n\t}\r\n\r\n\trenderline(l) {\r\n\t\tlet innerHTML = '';\r\n\t\tfor (let k = 0; k < this.keys[l].length; k++) {\r\n\t\t\tinnerHTML += this.keys[l][k].render();\r\n\t\t}\r\n\t\treturn `<div class=\"keyboard__line\">${innerHTML}</div>`;\r\n\t}\r\n\r\n\tupdate() {\r\n\t\tfor (let l = 0; l < this.keys.length; l++)\r\n\t\t\tfor (let k = 0; k < this.keys[l].length; k++) {\r\n\t\t\t\tthis.keys[l][k].update(this.lang + this.shift);\r\n\t\t}\r\n\r\n\t\tthis.storage.set('shift', this.shift);\r\n\t\tthis.storage.set('lang', this.lang);\r\n\t}\r\n\r\n\tonKeyDown(code) {\r\n\t\tlet key = this.findKeyByCode(code);\r\n\t\tkey.element.classList.add('button-active');\r\n\t\tif (code.toString().includes('Shift')) {\r\n\t\t\tif(this.shiftFlag == false) {\r\n\t\t\t\tthis.shiftFlag = true;\r\n\t\t\t\tthis.shift = this.shift?0:1;\r\n\t\t\t\tthis.update();\t\r\n\t\t\t}\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\t//Escape\r\n\t\tif (code.toString().includes('Escape')){\r\n\t\t\tthis.textarea.setText('');\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\t//F9\r\n\t\tif (code.toString().includes('F9')){\r\n\t\t\tthis.textarea.appendText('\\n'+eval(this.textarea.text.split('\\n')[this.textarea.text.split('\\n').length-1]).toString());\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\t//Backspace\r\n\t\tif (code.toString().includes('Backspace')){\r\n\t\t\tthis.textarea.setText(this.textarea.text.slice(0, this.textarea.text.length-1));\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tif (code.toString().includes('CapsLock')){\r\n\t\t\tthis.shift = this.shift?0:1;\r\n\t\t\tthis.update();\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tif (code.toString().includes('ControlLeft')){\r\n\t\t\tthis.lang = this.lang==0?2:0;\r\n\t\t\tthis.update();\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tthis.textarea.appendText(key.shiftTitles[this.lang + this.shift]);\r\n\t}\r\n\r\n\tonKeyUp(code) {\r\n\t\tlet key = this.findKeyByCode(code);\r\n\t\tkey.element.classList.remove('button-active');\r\n\r\n\t\tif (code.toString().includes('Shift')) {\r\n\t\t\tif (this.shiftFlag == true) {\r\n\t\t\t\tthis.shiftFlag = false;\r\n\t\t\t\tthis.shift = this.shift?0:1;\r\n\t\t\t\tthis.update();\t\r\n\t\t\t}\r\n\t\t\treturn;\r\n\t\t}\r\n\t}\r\n\r\n\tfindKeyByCode(code) {\r\n\t\tfor (let l = 0; l < this.keys.length; l++)\r\n\t\tfor (let k = 0; k < this.keys[l].length; k++) \r\n\t\t\tif (this.keys[l][k].code==code)\r\n\t\t\t\treturn this.keys[l][k];\r\n\t\treturn null;\r\n\t}\r\n}\n\n//# sourceURL=webpack://vitual-keyboard/./src/Keyboard.js?");

/***/ }),

/***/ "./src/KeyboardListener.js":
/*!*********************************!*\
  !*** ./src/KeyboardListener.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KeyboardListener\": () => (/* binding */ KeyboardListener)\n/* harmony export */ });\nclass KeyboardListener {\r\n\tconstructor(keyboard, textarea) {\r\n\t\tthis.keyboard = keyboard;\r\n\t\tthis.textarea = textarea;\r\n\t}\r\n\r\n\tinstallListeners() {\r\n\t\tlet body = document.querySelector('body');\r\n\t\tbody.addEventListener('keydown', (e) => {\r\n\t\t\te.preventDefault();\r\n\t\t\tthis.keyboard.onKeyDown(e.code);\r\n\t\t\treturn false;\r\n\t\t});\r\n\r\n\t\tbody.addEventListener('keyup', (e) => {\r\n\t\t\te.preventDefault();\r\n\t\t\tthis.keyboard.onKeyUp(e.code);\r\n\t\t\treturn false;\r\n\t\t});\r\n\r\n\t\tlet buttons = document.querySelectorAll('.keyboard__button');\t\r\n\t\tfor (let i = 0; i < buttons.length; i++) {\r\n\t\t\tbuttons[i].addEventListener('mouseup', (e) => {\r\n\t\t\t\tthis.keyboard.onKeyUp(e.target.classList[1].split('-')[2])\r\n\t\t\t});\r\n\r\n\t\t\tbuttons[i].addEventListener('mousedown', (e) => {\r\n\t\t\t\tthis.keyboard.onKeyDown(e.target.classList[1].split('-')[2])\r\n\t\t\t});\r\n\t\t}\r\n\t}\r\n}\n\n//# sourceURL=webpack://vitual-keyboard/./src/KeyboardListener.js?");

/***/ }),

/***/ "./src/Statusbar.js":
/*!**************************!*\
  !*** ./src/Statusbar.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Statusbar\": () => (/* binding */ Statusbar)\n/* harmony export */ });\nclass Statusbar{\r\n\r\n\trender() {\r\n\t\treturn `<div class=\"body__statusbar\">made for macos • left ctrl: switch language • f9: eval() line</div>`;\r\n\t}\r\n}\n\n//# sourceURL=webpack://vitual-keyboard/./src/Statusbar.js?");

/***/ }),

/***/ "./src/Storage.js":
/*!************************!*\
  !*** ./src/Storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Storage\": () => (/* binding */ Storage)\n/* harmony export */ });\nclass Storage {\r\n\tconstructor() {\r\n\t\tthis.data = new Object();\r\n\t\tlet data = document.cookie.split('|');\r\n\t\tif (data.length<2)\r\n\t\t\treturn;\r\n\t\tfor (let i = 0; i < data.length-1; i++){\r\n\t\t\tlet values = data[i].split('=');\r\n\t\t\tthis.data[values[0]] = values[1];\r\n\t\t}\r\n\t}\r\n\r\n\tset(key, value) {\r\n\t\tthis.data[key] = value;\r\n\t\tthis.flush();\r\n\t}\r\n\r\n\tget(key, def) {\r\n\t\tlet result = this.data[key];\r\n\t\tif (result==null)\r\n\t\t\tresult = def;\r\n\t\treturn result;\r\n\t}\r\n\r\n\tflush() {\r\n\t\tlet data = '';\r\n\t\tObject.keys(this.data).forEach(e => {\r\n\t\t\tdata += `${e}=${this.data[e]}|`;\r\n\t\t});\r\n\t\tdocument.cookie = data;\r\n\t}\r\n\r\n}\n\n//# sourceURL=webpack://vitual-keyboard/./src/Storage.js?");

/***/ }),

/***/ "./src/Textarea.js":
/*!*************************!*\
  !*** ./src/Textarea.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Textarea\": () => (/* binding */ Textarea)\n/* harmony export */ });\nclass Textarea {\r\n\tconstructor() {\r\n\t\tthis.text = '';\r\n\t\tthis.element = null;\r\n\t}\r\n\trender() {\r\n\t\treturn `<textarea class=\"body__textarea\" rows=\"5\" cols=\"80\" tabindex=\"-1\" readonly></textarea>`;\r\n\t}\r\n\r\n\tappendText(text) {\r\n\t\tif (this.element == null)\r\n\t\t\tthis.element = document.querySelector('.body__textarea');\r\n\t\tthis.text += text;\r\n\t\tthis.element.innerHTML = this.text + '_';\r\n\t\tthis.element.scrollTop = this.element.scrollHeight;\r\n\t}\r\n\r\n\tsetText(text) {\r\n\t\tif (this.element == null)\r\n\t\t\tthis.element = document.querySelector('.body__textarea');\r\n\t\tthis.text = text;\r\n\t\tthis.element.innerHTML = this.text + '_';\t\r\n\t\tthis.element.scrollTop = this.element.scrollHeight;\r\n\r\n\t}\r\n\t\r\n}\n\n//# sourceURL=webpack://vitual-keyboard/./src/Textarea.js?");

/***/ }),

/***/ "./src/Title.js":
/*!**********************!*\
  !*** ./src/Title.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Title\": () => (/* binding */ Title)\n/* harmony export */ });\nclass Title {\r\n\trender() {\r\n\t\treturn `<h1 class=body__title>virtual-keyboard</h1>`\r\n\t}\r\n}\n\n//# sourceURL=webpack://vitual-keyboard/./src/Title.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ \"./src/Container.js\");\n/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Keyboard */ \"./src/Keyboard.js\");\n/* harmony import */ var _KeyboardListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KeyboardListener */ \"./src/KeyboardListener.js\");\n/* harmony import */ var _Statusbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Statusbar */ \"./src/Statusbar.js\");\n/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Textarea */ \"./src/Textarea.js\");\n/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Title */ \"./src/Title.js\");\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Storage */ \"./src/Storage.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.onload = () => {\r\n\tlet storage = new _Storage__WEBPACK_IMPORTED_MODULE_6__.Storage();\r\n\tlet container = new _Container__WEBPACK_IMPORTED_MODULE_0__.Container();\r\n\tlet title = new _Title__WEBPACK_IMPORTED_MODULE_5__.Title();\r\n\tlet textarea = new _Textarea__WEBPACK_IMPORTED_MODULE_4__.Textarea();\r\n\tlet keyboard = new _Keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard(textarea, storage);\r\n\tlet statusbar = new _Statusbar__WEBPACK_IMPORTED_MODULE_3__.Statusbar();\r\n\r\n\tcontainer.pushComponent(title);\r\n\tcontainer.pushComponent(textarea);\r\n\tcontainer.pushComponent(keyboard);\r\n\tcontainer.pushComponent(statusbar);\r\n\r\n\tcontainer.render();\r\n\tkeyboard.update();\r\n\r\n\tlet keyboardListener = new _KeyboardListener__WEBPACK_IMPORTED_MODULE_2__.KeyboardListener(keyboard, textarea);\r\n\tkeyboardListener.installListeners();\r\n}\n\n//# sourceURL=webpack://vitual-keyboard/./src/index.js?");

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