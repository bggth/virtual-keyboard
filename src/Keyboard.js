export class Keyboard {
	constructor(width, height) {
		this.width = width;
		this.height = height;
		this.buttons = null;
	}

	widths() {
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
				['_esq', '_F1', '_F2', '_F3', '_F4', '_F5', '_F6', '_F7', '_F8', '_F9', '_F10', '_F11', '_F12', ''],
				['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '_delete'],
				['_tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
				['_caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', `'`, '_return'],
				['_shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<<br>,', '><br>.', '/<br>?', '_⯅', '_shift'],
				['_fn', '_control', '_option', '_command', '', '_command', '_option', '_⯇', '_⯆', '_⯈'],	//⯆
			],
		]
	}

	render() {
		let innerHTML = '';
		for (let i = 0; i < this.height; i++)
			innerHTML+=this.renderLine(i);
		return `<div class="keyboard__wrapper">${innerHTML}</div>`;
	}

	renderLine(line) {
		let innerHTML = '';
		for (let i = 0; i < this.width; i++)
		{
			let className = '';
			className = `button-${this.widths()[line][i]}`;
			let caption = `${this.buttonCaptions()[0][line][i]}`;

			if (caption[0] == '_'){
				caption = caption.substring(1);
				className += ' button-small-title';
				if (i == 0) {
					className += ' button-caption-start';
				}
				if (i == this.buttonCaptions()[0][line].length-1) {
					className += ' button-caption-end';
				}
			}
			
			// /if i

			if (caption=='10') {
				caption = '';
			}
			if (this.widths()[line][i] != undefined)
				innerHTML+=this.renderButton(caption, className);
		}
			
		return `<div class="keyboard__line">${innerHTML}</div>`;
	}

	renderButton(text, className='') {
		let innerHTML = text;
		return  `<button class="keyboard__button ${className}" tabindex="-1">${innerHTML}</button>`;
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