export class KeyboardListener {
	constructor(keyboard, textarea) {
		this.keyboard = keyboard;
		this.textarea = textarea;
	}

	installListeners() {
		const input = document.querySelector('body');
		input.addEventListener('keydown', (e) => {
			this.keyboard.onKeyDown(e);
			//this.textarea.appendText(`{'code': '${e.code}', 'width': 10, 'shiftTitles': ['${e.code}', ,'', '', '', '' ]},\n`);
		});

		input.addEventListener('keyup', (e) => {
			this.keyboard.onKeyUp(e);
		});


	}
}