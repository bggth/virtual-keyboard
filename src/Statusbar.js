export default class {
  constructor(text) {
    this.text = text;
  }

  render() {
    return `<div class="body__statusbar">${this.text}</div>`;
  }
}
