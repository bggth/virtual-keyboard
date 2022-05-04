import { Key } from "./Key";
import { keyData } from "./KeyData";
import { OS } from "./OS";


export class Keyboard {
	constructor(textarea, storage) {
		this.buttons = null;
		this.keys = [];
		this.textarea = textarea;
		this.storage = storage;
		this.shift = parseInt(this.storage.get('shift', 0));
		this.lang = parseInt(this.storage.get('lang', 0));
		this.shiftFlag = false;

		let os = new OS();
		this.os = os.getOSType();

		for (let l = 0; l < keyData.length; l++) {
			let line = [];
			for (let k = 0; k < keyData[l].length; k++) {
				let key = new Key(keyData[l][k]);
				line.push(key);
			}
			this.keys.push(line);
		}
	}

	render() {
		let innerHTML = '';
		for (let l = 0; l < this.keys.length; l++)
			innerHTML+=this.renderline(l);
		return `<div class="keyboard__wrapper">${innerHTML}</div>`;
	}

	renderline(l) {
		let innerHTML = '';
		for (let k = 0; k < this.keys[l].length; k++) {
			innerHTML += this.keys[l][k].render();
		}
		return `<div class="keyboard__line">${innerHTML}</div>`;
	}

	update() {
		for (let l = 0; l < this.keys.length; l++)
			for (let k = 0; k < this.keys[l].length; k++) {
				this.keys[l][k].update(this.lang + this.shift);
		}

		this.storage.set('shift', this.shift);
		this.storage.set('lang', this.lang);
	}

	onKeyDown(code) {
		let key = this.findKeyByCode(code);
		key.element.classList.add('button-active');
		if (code.toString().includes('Shift')) {
			if(this.shiftFlag == false) {
				this.shiftFlag = true;
				this.shift = this.shift?0:1;
				this.update();	
			}
			return;
		}

		//Escape
		if (code.toString().includes('Escape')){
			this.textarea.setText('');
			return;
		}

		//F9
		if (code.toString().includes('F9')){
			this.textarea.appendText('\n'+eval(this.textarea.text.split('\n')[this.textarea.text.split('\n').length-1]).toString());
			return;
		}

		//Backspace
		if (code.toString().includes('Backspace')){
			this.textarea.setText(this.textarea.text.slice(0, this.textarea.text.length-1));
			return;
		}

		if (code.toString().includes('CapsLock')){
			this.shift = this.shift?0:1;
			this.update();
			return;
		}

		if (code.toString().includes('ControlLeft')){
			this.lang = this.lang==0?2:0;
			this.update();
			return;
		}

		this.textarea.appendText(key.shiftTitles[this.lang + this.shift]);
	}

	onKeyUp(code) {
		let key = this.findKeyByCode(code);
		key.element.classList.remove('button-active');

		if (code.toString().includes('Shift')) {
			if (this.shiftFlag == true) {
				this.shiftFlag = false;
				this.shift = this.shift?0:1;
				this.update();	
			}
			return;
		}

		if (this.os == 'Mac') {
			if (code.toString().includes('CapsLock')){
				this.shift = this.shift?0:1;
				this.update();
				return;
			}
		}

	}

	findKeyByCode(code) {
		for (let l = 0; l < this.keys.length; l++)
		for (let k = 0; k < this.keys[l].length; k++) 
			if (this.keys[l][k].code==code)
				return this.keys[l][k];
		return null;
	}
}