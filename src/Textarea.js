export class Textarea {
	constructor() {
		this.text = '';
		this.element = null;
	}
	render() {
		return `<textarea class="body__textarea" rows="10" cols="80"></textarea>`;
	}

	appendText(text) {
		if (this.element == null)
			this.element = document.querySelector('.body__textarea');
		this.text += text;
		this.element.innerHTML = this.text;
	}

	setText(text) {
	if (this.element == null)
		this.element = document.querySelector('.body__textarea');
	this.text = text;
	this.element.innerHTML = this.text;	
	}
	
}