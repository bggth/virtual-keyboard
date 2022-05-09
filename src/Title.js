export default class Title {
  constructor(title) {
    this.title = title;
    document.title = this.title;
  }

  render() {
    return `<h1 class=body__title>${this.title}</h1>`;
  }
}
