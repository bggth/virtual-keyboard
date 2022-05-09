(()=>{"use strict";var __webpack_modules__={403:(t,e,i)=>{i.d(e,{Z:()=>h});var s=i(398);const h=class{constructor(t){this.keyboard=t,this.os=(new s.Z).getOSType()}installListeners(){const t=document.querySelector("body");t.addEventListener("keydown",(t=>(t.preventDefault(),this.keyboard.onKeyDown(t.code),!1))),t.addEventListener("keyup",(t=>(t.preventDefault(),this.keyboard.onKeyUp(t.code),!1)));const e=document.querySelectorAll(".keyboard__button");for(let t=0;t<e.length;t+=1)e[t].addEventListener("mouseup",(t=>{const e=t.target.classList[1].split("-")[2];"mac"===this.os&&"CapsLock"===e||this.keyboard.onKeyUp(e)})),e[t].addEventListener("mousedown",(t=>{this.keyboard.onKeyDown(t.target.classList[1].split("-")[2])}))}}},886:(t,e,i)=>{i.d(e,{Z:()=>s});const s=class{constructor({width:t,code:e,shiftTitles:i}){this.code=e,this.width=t,this.shiftTitles=i,this.element=null}render(){let t=`button-code-${this.code} button-${this.width}`;return t+=""!==this.shiftTitles[4]||"en"===this.shiftTitles[0]?" button-small-title":"",`<span class="keyboard__button ${t}" >${this.shiftTitles[4]}</span>`}update(t){null==this.element&&(this.element=document.querySelector(`.button-code-${this.code}`)),this.element.innerHTML=""===this.shiftTitles[4]?this.shiftTitles[t]:this.shiftTitles[4]}}},758:(t,e,i)=>{i.d(e,{Z:()=>s});const s=[[{code:"Escape",width:15,shiftTitles:["","","","&#x1F600","esc"]},{code:"F1",width:10,shiftTitles:["&#x1F600;","&#x1F600;","&#x1F600;","&#x1F600;","F1"]},{code:"F2",width:10,shiftTitles:["&#x1F601;","&#x1F601;","&#x1F601;","&#x1F601;","F2"]},{code:"F3",width:10,shiftTitles:["&#x1F602;","&#x1F602;","&#x1F602;","&#x1F602;","F3"]},{code:"F4",width:10,shiftTitles:["&#x1F603;","&#x1F603;","&#x1F603;","&#x1F603;","F4"]},{code:"F5",width:10,shiftTitles:["&#x1F604;","&#x1F604;","&#x1F604;","&#x1F604;","F5"]},{code:"F6",width:10,shiftTitles:["&#x1F605;","&#x1F605;","&#x1F605;","&#x1F605;","F6"]},{code:"F7",width:10,shiftTitles:["&#x1F606;","&#x1F606;","&#x1F606;","&#x1F606;","F7"]},{code:"F8",width:10,shiftTitles:["&#x1F607;","&#x1F607;","&#x1F607;","&#x1F607;","F8"]},{code:"F9",width:10,shiftTitles:["&#x1F608;","&#x1F608;","&#x1F608;","&#x1F608;","F9"]},{code:"F10",width:10,shiftTitles:["&#x1F609;","&#x1F609;","&#x1F609;","&#x1F609;","F10"]},{code:"F11",width:10,shiftTitles:["&#x1F60A;","&#x1F60A;","&#x1F60A;","&#x1F60A;","F11"]},{code:"F12",width:10,shiftTitles:["&#x1F60B;","&#x1F60B;","&#x1F60B;","&#x1F60B;","F12"]},{code:"F13",width:10,shiftTitles:["&#x1F608;","&#x1F608;","&#x1F608;","&#x1F608;","F13"]}],[{code:"Backquote",width:10,shiftTitles:["`","~","ё","Ё",""]},{code:"Digit1",width:10,shiftTitles:["1","!","1","!",""]},{code:"Digit2",width:10,shiftTitles:["2","@","2",'"',""]},{code:"Digit3",width:10,shiftTitles:["3","#","3","№",""]},{code:"Digit4",width:10,shiftTitles:["4","$","4",";",""]},{code:"Digit5",width:10,shiftTitles:["5","%","5","%",""]},{code:"Digit6",width:10,shiftTitles:["6","^","6",":",""]},{code:"Digit7",width:10,shiftTitles:["7","&","7","?",""]},{code:"Digit8",width:10,shiftTitles:["8","*","8","*",""]},{code:"Digit9",width:10,shiftTitles:["9","(","9","(",""]},{code:"Digit0",width:10,shiftTitles:["0",")","0",")",""]},{code:"Minus",width:10,shiftTitles:["-","_","-","_",""]},{code:"Equal",width:10,shiftTitles:["=","+","=","+",""]},{code:"Backspace",width:15,shiftTitles:["","","","","backspace"]}],[{code:"Tab",width:15,shiftTitles:["\t","\t","\t","\t","tab"]},{code:"KeyQ",width:10,shiftTitles:["q","Q","й","Й",""]},{code:"KeyW",width:10,shiftTitles:["w","W","ц","Ц",""]},{code:"KeyE",width:10,shiftTitles:["e","E","у","У",""]},{code:"KeyR",width:10,shiftTitles:["r","R","к","К",""]},{code:"KeyT",width:10,shiftTitles:["t","T","е","Е",""]},{code:"KeyY",width:10,shiftTitles:["y","Y","н","Н",""]},{code:"KeyU",width:10,shiftTitles:["u","U","г","Г",""]},{code:"KeyI",width:10,shiftTitles:["i","I","ш","Ш",""]},{code:"KeyO",width:10,shiftTitles:["o","O","щ","Щ",""]},{code:"KeyP",width:10,shiftTitles:["p","P","з","З",""]},{code:"BracketLeft",width:10,shiftTitles:["[","{","х","Х",""]},{code:"BracketRight",width:10,shiftTitles:["]","}","ъ","Ъ",""]},{code:"Backslash",width:10,shiftTitles:["\\","|","\\","/",""]}],[{code:"CapsLock",width:17,shiftTitles:["","","","","caps"]},{code:"KeyA",width:10,shiftTitles:["a","A","ф","Ф",""]},{code:"KeyS",width:10,shiftTitles:["s","S","ы","Ы",""]},{code:"KeyD",width:10,shiftTitles:["d","D","в","В",""]},{code:"KeyF",width:10,shiftTitles:["f","F","а","А",""]},{code:"KeyG",width:10,shiftTitles:["g","G","п","П",""]},{code:"KeyH",width:10,shiftTitles:["h","H","р","Р",""]},{code:"KeyJ",width:10,shiftTitles:["j","J","о","О",""]},{code:"KeyK",width:10,shiftTitles:["k","K","л","Л",""]},{code:"KeyL",width:10,shiftTitles:["l","L","д","Д",""]},{code:"Semicolon",width:10,shiftTitles:[";",":","ж","Ж",""]},{code:"Quote",width:10,shiftTitles:["'",'"',"э","Э",""]},{code:"Enter",width:17,shiftTitles:["\n","\n","\n","\n","enter"]}],[{code:"ShiftLeft",width:20,shiftTitles:["","","","","shift"]},{code:"KeyZ",width:10,shiftTitles:["z","Z","я","Я",""]},{code:"KeyX",width:10,shiftTitles:["x","X","ч","Ч",""]},{code:"KeyC",width:10,shiftTitles:["c","C","с","С",""]},{code:"KeyV",width:10,shiftTitles:["v","V","м","М",""]},{code:"KeyB",width:10,shiftTitles:["b","B","и","И",""]},{code:"KeyN",width:10,shiftTitles:["n","N","т","Т",""]},{code:"KeyM",width:10,shiftTitles:["m","M","ь","Ь",""]},{code:"Comma",width:10,shiftTitles:[",","<","б","Б",""]},{code:"Period",width:10,shiftTitles:[".",">","ю","Ю",""]},{code:"Slash",width:12,shiftTitles:["/","?",".",",",""]},{code:"ArrowUp",width:10,shiftTitles:["⯅","⯅","⯅","⯅","⯅"]},{code:"ShiftRight",width:10,shiftTitles:["","","","","shift"]}],[{code:"FN",width:10,shiftTitles:["","","","","fn"]},{code:"ControlLeft",width:10,shiftTitles:["","","","","control"]},{code:"AltLeft",width:12,shiftTitles:["","","","","alt"]},{code:"MetaLeft",width:10,shiftTitles:["","","","","command"]},{code:"Space",width:50,shiftTitles:[" "," "," "," "," "]},{code:"MetaRight",width:10,shiftTitles:["","","","","command"]},{code:"AltRight",width:12,shiftTitles:["","","","","alt"]},{code:"ArrowLeft",width:10,shiftTitles:["⯇","⯇","⯇","⯇","⯇"]},{code:"ArrowDown",width:10,shiftTitles:["⯆","⯆","⯆","⯆","⯆"]},{code:"ArrowRight",width:10,shiftTitles:["⯈","⯈","⯈","⯈","⯈"]}]]},56:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _Key__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(886),_KeyData__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(758),_OS__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(398),_InputListener__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(403),_Storage__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(505);const __WEBPACK_DEFAULT_EXPORT__=class{constructor(t){this.keys=[],this.textarea=t,this.storage=new _Storage__WEBPACK_IMPORTED_MODULE_1__.Z,this.shift=parseInt(this.storage.get("shift",0),10),this.lang=parseInt(this.storage.get("lang",0),10),this.shiftFlag=!1,this.controlLeftFlag=!1,this.os=(new _OS__WEBPACK_IMPORTED_MODULE_2__.Z).getOSType();for(let t=0;t<_KeyData__WEBPACK_IMPORTED_MODULE_0__.Z.length;t+=1){const e=[];for(let i=0;i<_KeyData__WEBPACK_IMPORTED_MODULE_0__.Z[t].length;i+=1){const s=new _Key__WEBPACK_IMPORTED_MODULE_3__.Z(_KeyData__WEBPACK_IMPORTED_MODULE_0__.Z[t][i]);e.push(s)}this.keys.push(e)}}init(){this.update(),this.updateCapsState(),this.inputListener=new _InputListener__WEBPACK_IMPORTED_MODULE_4__.Z(this),this.inputListener.installListeners()}render(){let t="";for(let e=0;e<this.keys.length;e+=1)t+=this.renderline(e);return`<div class="keyboard__wrapper">${t}</div>`}renderline(t){let e="";for(let i=0;i<this.keys[t].length;i+=1)e+=this.keys[t][i].render();return`<div class="keyboard__line">${e}</div>`}update(){for(let t=0;t<this.keys.length;t+=1)for(let e=0;e<this.keys[t].length;e+=1)this.keys[t][e].update(this.lang+this.shift);this.storage.set("shift",this.shift),this.storage.set("lang",this.lang)}updateCapsState(){const t=this.findKeyByCode("CapsLock");this.shift?t.element.classList.add("button-active"):t.element.classList.remove("button-active"),this.update()}onKeyDown(code){const key=this.findKeyByCode(code);if(key)if(key.element.classList.add("button-active"),code.toString().includes("ShiftLeft")||code.toString().includes("ShiftRight"))!1===this.shiftFlag&&(this.shiftFlag=!0,this.shift=this.shift?0:1,this.update());else if(code.toString().includes("Escape"))this.textarea.setText("");else if(code.toString().includes("F9"))try{this.textarea.appendText(`\n${eval(this.textarea.text.split("\n")[this.textarea.text.split("\n").length-1]).toString()}`)}catch(t){this.textarea.appendText("\nError")}else if(code.toString().includes("Backspace"))this.textarea.setText(this.textarea.text.slice(0,this.textarea.text.length-1));else{if(code.toString().includes("CapsLock"))return this.shift=this.shift?0:1,void this.updateCapsState();if(!code.toString().includes("ControlLeft"))return code.toString().includes("Space")&&this.controlLeftFlag?(this.lang=0===this.lang?2:0,void this.update()):void this.textarea.appendText(key.shiftTitles[this.lang+this.shift]);this.controlLeftFlag=!0}}onKeyUp(t){const e=this.findKeyByCode(t);e&&(t.toString().includes("CapsLock")?"mac"===this.os&&(this.shift=this.shift?0:1,this.updateCapsState()):(e.element.classList.remove("button-active"),(t.toString().includes("ShiftLeft")||t.toString().includes("ShiftRight"))&&!0===this.shiftFlag&&(this.shiftFlag=!1,this.shift=this.shift?0:1,this.update()),t.toString().includes("ControlLeft")&&(this.controlLeftFlag=!1)))}findKeyByCode(t){for(let e=0;e<this.keys.length;e+=1)for(let i=0;i<this.keys[e].length;i+=1)if(this.keys[e][i].code===t)return this.keys[e][i];return null}}},398:(t,e,i)=>{i.d(e,{Z:()=>s});const s=class{constructor(){this.OS=navigator.userAgentData.platform.slice(0,3)}getOSType(){return this.OS}}},505:(t,e,i)=>{i.d(e,{Z:()=>s});const s=class{constructor(){this.data={};const t=document.cookie.split("|");if(!(t.length<2))for(let e=0;e<t.length-1;e+=1){const i=t[e].split("="),s=i[1];this.data[i[0]]=s}}set(t,e){this.data[t]=e,this.flush()}get(t,e){let i=this.data[t];return null==i&&(i=e),i}flush(){let t="";Object.keys(this.data).forEach((e=>{t+=`${e}=${this.data[e]}|`})),document.cookie=t}}}},__webpack_module_cache__={};function __webpack_require__(t){var e=__webpack_module_cache__[t];if(void 0!==e)return e.exports;var i=__webpack_module_cache__[t]={exports:{}};return __webpack_modules__[t](i,i.exports,__webpack_require__),i.exports}__webpack_require__.d=(t,e)=>{for(var i in e)__webpack_require__.o(e,i)&&!__webpack_require__.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},__webpack_require__.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var __webpack_exports__={};(()=>{var t=__webpack_require__(56);class e{constructor(t){this.title=t,document.title=this.title}render(){return`<h1 class=body__title>${this.title}</h1>`}}window.onload=()=>{const i=new class{constructor(){this.components=[]}pushComponent(t){this.components.push(t)}render(){let t="";for(let e=0;e<this.components.length;e+=1)t+=this.components[e].render();document.body.innerHTML=`<div class="container">${t}<div>`}},s=new e("virtual-keyboard"),h=new class{constructor(){this.text="",this.element=null}render(){return`<textarea class="body__textarea" rows="5" cols="80" tabindex="-1" readonly>${this.text}</textarea>`}appendText(t){null==this.element&&(this.element=document.querySelector(".body__textarea")),this.text+=t,this.element.innerHTML=`${this.text}_`,this.element.scrollTop=this.element.scrollHeight}setText(t){null==this.element&&(this.element=document.querySelector(".body__textarea")),this.text=t,this.element.innerHTML=`${this.text}_`,this.element.scrollTop=this.element.scrollHeight}},o=new t.Z(h),d=new class{constructor(t){this.text=t}render(){return`<div class="body__statusbar">${this.text}</div>`}}("made for macos • control+space: switch language • f9: eval() line");i.pushComponent(s),i.pushComponent(h),i.pushComponent(o),i.pushComponent(d),i.render(),o.init()}})()})();