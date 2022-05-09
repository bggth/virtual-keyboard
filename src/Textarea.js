export default class {
  constructor() {
    this.text = '';
    this.element = null;
  }

  render() {
    return `<textarea class="body__textarea" rows="5" cols="80" tabindex="-1" readonly>${this.text}</textarea>`;
  }

  appendText(text) {
    if (this.element == null) { this.element = document.querySelector('.body__textarea'); }
    this.text += text;
    this.element.innerHTML = `${this.text}_`;
    this.element.scrollTop = this.element.scrollHeight;
  }

  setText(text) {
    if (this.element == null) { this.element = document.querySelector('.body__textarea'); }
    this.text = text;
    this.element.innerHTML = `${this.text}_`;
    this.element.scrollTop = this.element.scrollHeight;
  }
}
