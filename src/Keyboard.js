import { Key } from "./Key";
import { keyData } from "./KeyData";


export class Keyboard {
	constructor(width, height) {
		this.width = width;
		this.height = height;
		this.buttons = null;
		this.keys = [];
		this.shift = 1;

		for (let l = 0; l < keyData.length; l++) {
			let line = [];
			for (let k = 0; k < keyData[l].length; k++) {
				let key = new Key(keyData[l][k]);
				line.push(key);
			}
			this.keys.push(line);
		}
		console.log(this.keys);

	}

	/*widths() {
		return [
			[15, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
			[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 15],
			[15, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
			[17, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 17],
			[20, 10, 10, 10, 10, 10, 10, 10, 10, 10, 12, 10, 10],
			[10, 10, 10, 12, 50, 12, 10, 10, 10, 10],
			
		]
	}

	buttonCaptions() {
		return [
			// english default
			[
				['_esc', '_F1', '_F2', '_F3', '_F4', '_F5', '_F6', '_F7', '_F8', '_F9', '_F10', '_F11', '_F12', ''],
				['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '_delete'],
				['_tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
				['_caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', `'`, '_return'],
				['_shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<<br>,', '><br>.', '/<br>?', '_⯅', '_shift'],
				['_fn', '_control', '_option', '_command', '', '_command', '_option', '_⯇', '_⯆', '_⯈'],	//⯆
			],
		]
	}*/

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
				this.keys[l][k].update(this.shift);
		}

	}

	onKeyDown(e) {
		let elem = this.findKeyElementByCode(e.code);
		if (e.code.toString().includes('Shift')) {
			this.shift = 2;
			this.update();
		}
			
	}

	onKeyUp(e) {
		if (e.code.toString().includes('Shift')) {
			this.shift = 1;
			this.update();
		}
	}

	findKeyElementByCode(code) {
		for (let l = 0; l < this.keys.length; l++)
		for (let k = 0; k < this.keys[l].length; k++) 
			if (this.keys[l][k].code==code)
				return this.keys[l][k];
		return null;
	}


	keyDownEvent(code) {
		if (this.buttons == null) {
			let buttons = document.querySelectorAll('.keyboard__button');
			for (let i = 0; i < buttons.length; i++)
				buttons[i].addEventListener('click', this.onButtonClick)
		}
	}

	onButtonClick = (e) => {
		console.log(e);
	}
}