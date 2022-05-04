export class Key {

	constructor({width, code, shiftTitles}) {
		this.code = code;
		this.width = width;
		this.shiftTitles = shiftTitles;
		this.element = null;
	}

	render() {
		let className = `button-code-${this.code} button-${this.width}`;
		let innerHTML = this.shiftTitles[0];
		return  `<button class="keyboard__button ${className}" tabindex="-1">${innerHTML}</button>`;
	}

	update(shift) {
		if (this.element == null) {
			this.element = document.querySelector(`.button-code-${this.code}`)
		}
		//shift =0;
		console.log(this.shiftTitles[shift]);
		this.element.innerHTML = this.shiftTitles[shift];
	}

}