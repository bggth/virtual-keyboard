import { OS } from "./OS";

export class KeyboardListener {
	constructor(keyboard, textarea) {
		this.keyboard = keyboard;
		this.textarea = textarea;
		let os = new OS();
		this.os = os.getOSType();
	}

	installListeners() {
		let body = document.querySelector('body');
		body.addEventListener('keydown', (e) => {
			console.log(e);
			e.preventDefault();
			this.keyboard.onKeyDown(e.code);
			return false;
		});

		body.addEventListener('keyup', (e) => {
			e.preventDefault();
			this.keyboard.onKeyUp(e.code);
			return false;
		});

		let buttons = document.querySelectorAll('.keyboard__button');	
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('mouseup', (e) => {
				let code = e.target.classList[1].split('-')[2];
				if ((this.os == 'mac') && (code == 'CapsLock'))
					return;
				this.keyboard.onKeyUp(code);
			});

			buttons[i].addEventListener('mousedown', (e) => {
				this.keyboard.onKeyDown(e.target.classList[1].split('-')[2]);
			});
		}
	}
}