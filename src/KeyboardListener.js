export class KeyboardListener {
	constructor(keyboard, textarea) {
		this.keyboard = keyboard;
		this.textarea = textarea;
	}

	installListeners() {
		const input = document.querySelector('body');
		input.addEventListener('keydown', (e) => {
			this.textarea.setText(`${e.code}`);
		});
	}
}