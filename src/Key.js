export default class {
  constructor({ width, code, shiftTitles }) {
    this.code = code;
    this.width = width;
    this.shiftTitles = shiftTitles;
    this.element = null;
  }

  render() {
    let className = `button-code-${this.code} button-${this.width}`;
    className += (this.shiftTitles[4] !== '') || (this.shiftTitles[0] === 'en') ? ' button-small-title' : '';
    const innerHTML = this.shiftTitles[4];
    return `<span class="keyboard__button ${className}" >${innerHTML}</span>`;
  }

  update(shift) {
    if (this.element == null) {
      this.element = document.querySelector(`.button-code-${this.code}`);
    }
    this.element.innerHTML = this.shiftTitles[4] === '' ? this.shiftTitles[shift] : this.shiftTitles[4];
  }
}
