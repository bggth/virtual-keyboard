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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n  constructor() {\n    this.components = [];\n  }\n\n  pushComponent(component) {\n    this.components.push(component);\n  }\n\n  render() {\n    let innerHTML = '';\n    for (let i = 0; i < this.components.length; i += 1) {\n      innerHTML += this.components[i].render();\n    }\n    document.body.innerHTML = `<div class=\"container\">${innerHTML}<div>`;\n  }\n});\n\n\n//# sourceURL=webpack://vitual-keyboard/./src/Container.js?");

/***/ }),

/***/ "./src/InputListener.js":
/*!******************************!*\
  !*** ./src/InputListener.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _OS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OS */ \"./src/OS.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n  constructor(keyboard) {\n    this.keyboard = keyboard;\n    this.os = new _OS__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().getOSType();\n  }\n\n  installListeners() {\n    const body = document.querySelector('body');\n    body.addEventListener('keydown', (e) => {\n      e.preventDefault();\n      this.keyboard.onKeyDown(e.code);\n      return false;\n    });\n\n    body.addEventListener('keyup', (e) => {\n      e.preventDefault();\n      this.keyboard.onKeyUp(e.code);\n      return false;\n    });\n\n    const buttons = document.querySelectorAll('.keyboard__button');\n    for (let i = 0; i < buttons.length; i += 1) {\n      buttons[i].addEventListener('mouseup', (e) => {\n        const code = e.target.classList[1].split('-')[2];\n        if ((this.os === 'mac') && (code === 'CapsLock')) { return; }\n        this.keyboard.onKeyUp(code);\n      });\n\n      buttons[i].addEventListener('mousedown', (e) => {\n        this.keyboard.onKeyDown(e.target.classList[1].split('-')[2]);\n      });\n    }\n  }\n});\n\n\n//# sourceURL=webpack://vitual-keyboard/./src/InputListener.js?");

/***/ }),

/***/ "./src/Key.js":
/*!********************!*\
  !*** ./src/Key.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n  constructor({ width, code, shiftTitles }) {\n    this.code = code;\n    this.width = width;\n    this.shiftTitles = shiftTitles;\n    this.element = null;\n  }\n\n  render() {\n    let className = `button-code-${this.code} button-${this.width}`;\n    className += (this.shiftTitles[4] !== '') || (this.shiftTitles[0] === 'en') ? ' button-small-title' : '';\n    const innerHTML = this.shiftTitles[4];\n    return `<span class=\"keyboard__button ${className}\" >${innerHTML}</span>`;\n  }\n\n  update(shift) {\n    if (this.element == null) {\n      this.element = document.querySelector(`.button-code-${this.code}`);\n    }\n    this.element.innerHTML = this.shiftTitles[4] === '' ? this.shiftTitles[shift] : this.shiftTitles[4];\n  }\n});\n\n\n//# sourceURL=webpack://vitual-keyboard/./src/Key.js?");

/***/ }),

/***/ "./src/KeyData.js":
/*!************************!*\
  !*** ./src/KeyData.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\n  [\n    { code: 'Escape', width: 15, shiftTitles: ['', '', '', '&#x1F600', 'esc'] },\n    { code: 'F1', width: 10, shiftTitles: ['&#x1F600;', '&#x1F600;', '&#x1F600;', '&#x1F600;', 'F1'] },\n    { code: 'F2', width: 10, shiftTitles: ['&#x1F601;', '&#x1F601;', '&#x1F601;', '&#x1F601;', 'F2'] },\n    { code: 'F3', width: 10, shiftTitles: ['&#x1F602;', '&#x1F602;', '&#x1F602;', '&#x1F602;', 'F3'] },\n    { code: 'F4', width: 10, shiftTitles: ['&#x1F603;', '&#x1F603;', '&#x1F603;', '&#x1F603;', 'F4'] },\n    { code: 'F5', width: 10, shiftTitles: ['&#x1F604;', '&#x1F604;', '&#x1F604;', '&#x1F604;', 'F5'] },\n    { code: 'F6', width: 10, shiftTitles: ['&#x1F605;', '&#x1F605;', '&#x1F605;', '&#x1F605;', 'F6'] },\n    { code: 'F7', width: 10, shiftTitles: ['&#x1F606;', '&#x1F606;', '&#x1F606;', '&#x1F606;', 'F7'] },\n    { code: 'F8', width: 10, shiftTitles: ['&#x1F607;', '&#x1F607;', '&#x1F607;', '&#x1F607;', 'F8'] },\n    { code: 'F9', width: 10, shiftTitles: ['&#x1F608;', '&#x1F608;', '&#x1F608;', '&#x1F608;', 'F9'] },\n    { code: 'F10', width: 10, shiftTitles: ['&#x1F609;', '&#x1F609;', '&#x1F609;', '&#x1F609;', 'F10'] },\n    { code: 'F11', width: 10, shiftTitles: ['&#x1F60A;', '&#x1F60A;', '&#x1F60A;', '&#x1F60A;', 'F11'] },\n    { code: 'F12', width: 10, shiftTitles: ['&#x1F60B;', '&#x1F60B;', '&#x1F60B;', '&#x1F60B;', 'F12'] },\n    { code: 'F13', width: 10, shiftTitles: ['&#x1F608;', '&#x1F608;', '&#x1F608;', '&#x1F608;', 'F13'] },\n  ],\n  [\n    { code: 'Backquote', width: 10, shiftTitles: ['`', '~', 'ё', 'Ё', ''] },\n    { code: 'Digit1', width: 10, shiftTitles: ['1', '!', '1', '!', ''] },\n    { code: 'Digit2', width: 10, shiftTitles: ['2', '@', '2', '\"', ''] },\n    { code: 'Digit3', width: 10, shiftTitles: ['3', '#', '3', '№', ''] },\n    { code: 'Digit4', width: 10, shiftTitles: ['4', '$', '4', ';', ''] },\n    { code: 'Digit5', width: 10, shiftTitles: ['5', '%', '5', '%', ''] },\n    { code: 'Digit6', width: 10, shiftTitles: ['6', '^', '6', ':', ''] },\n    { code: 'Digit7', width: 10, shiftTitles: ['7', '&', '7', '?', ''] },\n    { code: 'Digit8', width: 10, shiftTitles: ['8', '*', '8', '*', ''] },\n    { code: 'Digit9', width: 10, shiftTitles: ['9', '(', '9', '(', ''] },\n    { code: 'Digit0', width: 10, shiftTitles: ['0', ')', '0', ')', ''] },\n    { code: 'Minus', width: 10, shiftTitles: ['-', '_', '-', '_', ''] },\n    { code: 'Equal', width: 10, shiftTitles: ['=', '+', '=', '+', ''] },\n    { code: 'Backspace', width: 15, shiftTitles: ['', '', '', '', 'backspace'] },\n  ],\n  [\n    { code: 'Tab', width: 15, shiftTitles: ['\\t', '\\t', '\\t', '\\t', 'tab'] },\n    { code: 'KeyQ', width: 10, shiftTitles: ['q', 'Q', 'й', 'Й', ''] },\n    { code: 'KeyW', width: 10, shiftTitles: ['w', 'W', 'ц', 'Ц', ''] },\n    { code: 'KeyE', width: 10, shiftTitles: ['e', 'E', 'у', 'У', ''] },\n    { code: 'KeyR', width: 10, shiftTitles: ['r', 'R', 'к', 'К', ''] },\n    { code: 'KeyT', width: 10, shiftTitles: ['t', 'T', 'е', 'Е', ''] },\n    { code: 'KeyY', width: 10, shiftTitles: ['y', 'Y', 'н', 'Н', ''] },\n    { code: 'KeyU', width: 10, shiftTitles: ['u', 'U', 'г', 'Г', ''] },\n    { code: 'KeyI', width: 10, shiftTitles: ['i', 'I', 'ш', 'Ш', ''] },\n    { code: 'KeyO', width: 10, shiftTitles: ['o', 'O', 'щ', 'Щ', ''] },\n    { code: 'KeyP', width: 10, shiftTitles: ['p', 'P', 'з', 'З', ''] },\n    { code: 'BracketLeft', width: 10, shiftTitles: ['[', '{', 'х', 'Х', ''] },\n    { code: 'BracketRight', width: 10, shiftTitles: [']', '}', 'ъ', 'Ъ', ''] },\n    { code: 'Backslash', width: 10, shiftTitles: ['\\\\', '|', '\\\\', '/', ''] },\n  ],\n  [\n    { code: 'CapsLock', width: 17, shiftTitles: ['', '', '', '', 'caps'] },\n    { code: 'KeyA', width: 10, shiftTitles: ['a', 'A', 'ф', 'Ф', ''] },\n    { code: 'KeyS', width: 10, shiftTitles: ['s', 'S', 'ы', 'Ы', ''] },\n    { code: 'KeyD', width: 10, shiftTitles: ['d', 'D', 'в', 'В', ''] },\n    { code: 'KeyF', width: 10, shiftTitles: ['f', 'F', 'а', 'А', ''] },\n    { code: 'KeyG', width: 10, shiftTitles: ['g', 'G', 'п', 'П', ''] },\n    { code: 'KeyH', width: 10, shiftTitles: ['h', 'H', 'р', 'Р', ''] },\n    { code: 'KeyJ', width: 10, shiftTitles: ['j', 'J', 'о', 'О', ''] },\n    { code: 'KeyK', width: 10, shiftTitles: ['k', 'K', 'л', 'Л', ''] },\n    { code: 'KeyL', width: 10, shiftTitles: ['l', 'L', 'д', 'Д', ''] },\n    { code: 'Semicolon', width: 10, shiftTitles: [';', ':', 'ж', 'Ж', ''] },\n    { code: 'Quote', width: 10, shiftTitles: ['\\'', '\"', 'э', 'Э', ''] },\n    { code: 'Enter', width: 17, shiftTitles: ['\\n', '\\n', '\\n', '\\n', 'enter'] },\n  ],\n  [\n    { code: 'ShiftLeft', width: 20, shiftTitles: ['', '', '', '', 'shift'] },\n    { code: 'KeyZ', width: 10, shiftTitles: ['z', 'Z', 'я', 'Я', ''] },\n    { code: 'KeyX', width: 10, shiftTitles: ['x', 'X', 'ч', 'Ч', ''] },\n    { code: 'KeyC', width: 10, shiftTitles: ['c', 'C', 'с', 'С', ''] },\n    { code: 'KeyV', width: 10, shiftTitles: ['v', 'V', 'м', 'М', ''] },\n    { code: 'KeyB', width: 10, shiftTitles: ['b', 'B', 'и', 'И', ''] },\n    { code: 'KeyN', width: 10, shiftTitles: ['n', 'N', 'т', 'Т', ''] },\n    { code: 'KeyM', width: 10, shiftTitles: ['m', 'M', 'ь', 'Ь', ''] },\n    { code: 'Comma', width: 10, shiftTitles: [',', '<', 'б', 'Б', ''] },\n    { code: 'Period', width: 10, shiftTitles: ['.', '>', 'ю', 'Ю', ''] },\n    { code: 'Slash', width: 12, shiftTitles: ['/', '?', '.', ',', ''] },\n    { code: 'ArrowUp', width: 10, shiftTitles: ['↑', '↑', '↑', '↑', '↑'] },\n    { code: 'ShiftRight', width: 10, shiftTitles: ['', '', '', '', 'shift'] },\n\n  ],\n  [\n    { code: 'FN', width: 10, shiftTitles: ['', '', '', '', 'fn'] },\n    { code: 'ControlLeft', width: 10, shiftTitles: ['', '', '', '', 'control'] },\n    { code: 'AltLeft', width: 12, shiftTitles: ['', '', '', '', 'alt'] },\n    { code: 'MetaLeft', width: 10, shiftTitles: ['', '', '', '', 'command'] },\n    { code: 'Space', width: 50, shiftTitles: [' ', ' ', ' ', ' ', ' '] },\n    { code: 'MetaRight', width: 10, shiftTitles: ['', '', '', '', 'command'] },\n    { code: 'AltRight', width: 12, shiftTitles: ['', '', '', '', 'alt'] },\n    { code: 'ArrowLeft', width: 10, shiftTitles: ['←', '←', '←', '←', '←'] },\n    { code: 'ArrowDown', width: 10, shiftTitles: ['↓', '↓', '↓', '↓', '↓'] },\n    { code: 'ArrowRight', width: 10, shiftTitles: ['→', '→', '→', '→', '→'] },\n  ],\n]);\n\n\n//# sourceURL=webpack://vitual-keyboard/./src/KeyData.js?");

/***/ }),

/***/ "./src/Keyboard.js":
/*!*************************!*\
  !*** ./src/Keyboard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Key */ \"./src/Key.js\");\n/* harmony import */ var _KeyData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KeyData */ \"./src/KeyData.js\");\n/* harmony import */ var _OS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OS */ \"./src/OS.js\");\n/* harmony import */ var _InputListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InputListener */ \"./src/InputListener.js\");\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Storage */ \"./src/Storage.js\");\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n  constructor(textarea) {\n    this.keys = [];\n    this.textarea = textarea;\n    this.storage = new _Storage__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n    this.shift = parseInt(this.storage.get('shift', 0), 10);\n    this.lang = parseInt(this.storage.get('lang', 0), 10);\n    this.shiftFlag = false;\n    this.controlLeftFlag = false;\n    this.os = new _OS__WEBPACK_IMPORTED_MODULE_2__[\"default\"]().getOSType();\n\n    for (let l = 0; l < _KeyData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length; l += 1) {\n      const line = [];\n      for (let k = 0; k < _KeyData__WEBPACK_IMPORTED_MODULE_1__[\"default\"][l].length; k += 1) {\n        const key = new _Key__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_KeyData__WEBPACK_IMPORTED_MODULE_1__[\"default\"][l][k]);\n        line.push(key);\n      }\n      this.keys.push(line);\n    }\n  }\n\n  init() {\n    this.update();\n    this.updateCapsState();\n    this.inputListener = new _InputListener__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this);\n    this.inputListener.installListeners();\n  }\n\n  render() {\n    let innerHTML = '';\n    for (let l = 0; l < this.keys.length; l += 1) { innerHTML += this.renderline(l); }\n    return `<div class=\"keyboard__wrapper\">${innerHTML}</div>`;\n  }\n\n  renderline(l) {\n    let innerHTML = '';\n    for (let k = 0; k < this.keys[l].length; k += 1) {\n      innerHTML += this.keys[l][k].render();\n    }\n    return `<div class=\"keyboard__line\">${innerHTML}</div>`;\n  }\n\n  update() {\n    for (let l = 0; l < this.keys.length; l += 1) {\n      for (let k = 0; k < this.keys[l].length; k += 1) {\n        this.keys[l][k].update(this.lang + this.shift);\n      }\n    }\n\n    this.storage.set('shift', this.shift);\n    this.storage.set('lang', this.lang);\n  }\n\n  updateCapsState() {\n    const key = this.findKeyByCode('CapsLock');\n    if (this.shift) { key.element.classList.add('button-active'); } else { key.element.classList.remove('button-active'); }\n    this.update();\n  }\n\n  onKeyDown(code) {\n    const key = this.findKeyByCode(code);\n    if (!key) { return; }\n\n    key.element.classList.add('button-active');\n\n    if (code.toString().includes('ShiftLeft') || (code.toString().includes('ShiftRight'))) {\n      if (this.shiftFlag === false) {\n        this.shiftFlag = true;\n        this.shift = this.shift ? 0 : 1;\n        this.update();\n      }\n      return;\n    }\n\n    // Escape\n    if (code.toString().includes('Escape')) {\n      this.textarea.setText('');\n      return;\n    }\n\n    // F9\n    if (code.toString().includes('F9')) {\n      try {\n        this.textarea.appendText(`\\n${eval(this.textarea.text.split('\\n')[this.textarea.text.split('\\n').length - 1]).toString()}`);\n      } catch (err) {\n        this.textarea.appendText('\\nError');\n      }\n\n      return;\n    }\n\n    // Backspace\n    if (code.toString().includes('Backspace')) {\n      this.textarea.setText(this.textarea.text.slice(0, this.textarea.text.length - 1));\n      return;\n    }\n\n    if (code.toString().includes('CapsLock')) {\n      this.shift = this.shift ? 0 : 1;\n      this.updateCapsState();\n      return;\n    }\n\n    if (code.toString().includes('ControlLeft')) {\n      this.controlLeftFlag = true;\n      return;\n    }\n\n    if (code.toString().includes('AltLeft')) {\n      if (this.controlLeftFlag) {\n        this.lang = this.lang === 0 ? 2 : 0;\n        this.update();\n        return;\n      }\n    }\n\n    this.textarea.appendText(key.shiftTitles[this.lang + this.shift]);\n  }\n\n  onKeyUp(code) {\n    const key = this.findKeyByCode(code);\n    if (!key) { return; }\n\n    if (code.toString().includes('CapsLock')) {\n      if (this.os === 'mac') {\n        this.shift = this.shift ? 0 : 1;\n        this.updateCapsState();\n      }\n      return;\n    }\n\n    key.element.classList.remove('button-active');\n\n    if (code.toString().includes('ShiftLeft') || (code.toString().includes('ShiftRight'))) {\n      if (this.shiftFlag === true) {\n        this.shiftFlag = false;\n        this.shift = this.shift ? 0 : 1;\n        this.update();\n      }\n    }\n\n    if (code.toString().includes('ControlLeft')) {\n      this.controlLeftFlag = false;\n      // return;\n    }\n  }\n\n  findKeyByCode(code) {\n    for (let l = 0; l < this.keys.length; l += 1) {\n      for (let k = 0; k < this.keys[l].length; k += 1) {\n        if (this.keys[l][k].code === code) { return this.keys[l][k]; }\n      }\n    }\n    return null;\n  }\n});\n\n\n//# sourceURL=webpack://vitual-keyboard/./src/Keyboard.js?");

/***/ }),

/***/ "./src/OS.js":
/*!*******************!*\
  !*** ./src/OS.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n  constructor() {\n    this.OS = navigator.userAgentData.platform.slice(0, 3);\n  }\n\n  getOSType() {\n    return this.OS;\n  }\n});\n\n\n//# sourceURL=webpack://vitual-keyboard/./src/OS.js?");

/***/ }),

/***/ "./src/Statusbar.js":
/*!**************************!*\
  !*** ./src/Statusbar.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n  constructor(text) {\n    this.text = text;\n  }\n\n  render() {\n    return `<div class=\"body__statusbar\">${this.text}</div>`;\n  }\n});\n\n\n//# sourceURL=webpack://vitual-keyboard/./src/Statusbar.js?");

/***/ }),

/***/ "./src/Storage.js":
/*!************************!*\
  !*** ./src/Storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n  constructor() {\n    this.data = {};\n    const data = document.cookie.split('|');\n    if (data.length < 2) { return; }\n    for (let i = 0; i < data.length - 1; i += 1) {\n      const values = data[i].split('=');\n      const tmp = values[1];\n      this.data[values[0]] = tmp;\n    }\n  }\n\n  set(key, value) {\n    this.data[key] = value;\n    this.flush();\n  }\n\n  get(key, def) {\n    let result = this.data[key];\n    if (result == null) { result = def; }\n    return result;\n  }\n\n  flush() {\n    let data = '';\n    Object.keys(this.data).forEach((e) => {\n      data += `${e}=${this.data[e]}|`;\n    });\n    document.cookie = data;\n  }\n});\n\n\n//# sourceURL=webpack://vitual-keyboard/./src/Storage.js?");

/***/ }),

/***/ "./src/Textarea.js":
/*!*************************!*\
  !*** ./src/Textarea.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n  constructor() {\n    this.text = '';\n    this.element = null;\n  }\n\n  render() {\n    return `<textarea class=\"body__textarea\" rows=\"5\" cols=\"80\" tabindex=\"-1\" readonly>${this.text}</textarea>`;\n  }\n\n  appendText(text) {\n    if (this.element == null) { this.element = document.querySelector('.body__textarea'); }\n    this.text += text;\n    this.element.innerHTML = `${this.text}_`;\n    this.element.scrollTop = this.element.scrollHeight;\n  }\n\n  setText(text) {\n    if (this.element == null) { this.element = document.querySelector('.body__textarea'); }\n    this.text = text;\n    this.element.innerHTML = `${this.text}_`;\n    this.element.scrollTop = this.element.scrollHeight;\n  }\n});\n\n\n//# sourceURL=webpack://vitual-keyboard/./src/Textarea.js?");

/***/ }),

/***/ "./src/Title.js":
/*!**********************!*\
  !*** ./src/Title.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Title)\n/* harmony export */ });\nclass Title {\n  constructor(title) {\n    this.title = title;\n    document.title = this.title;\n  }\n\n  render() {\n    return `<h1 class=body__title>${this.title}</h1>`;\n  }\n}\n\n\n//# sourceURL=webpack://vitual-keyboard/./src/Title.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ \"./src/Container.js\");\n/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Keyboard */ \"./src/Keyboard.js\");\n/* harmony import */ var _Statusbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Statusbar */ \"./src/Statusbar.js\");\n/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Textarea */ \"./src/Textarea.js\");\n/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Title */ \"./src/Title.js\");\n\n\n\n\n\n\nwindow.onload = () => {\n  const container = new _Container__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  const title = new _Title__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('virtual-keyboard');\n  const textarea = new _Textarea__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n  const keyboard = new _Keyboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"](textarea);\n  const statusbar = new _Statusbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('made for macos • control+alt: switch language • f9: eval() line');\n\n  container.pushComponent(title);\n  container.pushComponent(textarea);\n  container.pushComponent(keyboard);\n  container.pushComponent(statusbar);\n  container.render();\n\n  keyboard.init();\n};\n\n\n//# sourceURL=webpack://vitual-keyboard/./src/index.js?");

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