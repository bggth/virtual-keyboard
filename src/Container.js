export default class {
  constructor() {
    this.components = [];
  }

  pushComponent(component) {
    this.components.push(component);
  }

  render() {
    let innerHTML = '';
    for (let i = 0; i < this.components.length; i += 1) {
      innerHTML += this.components[i].render();
    }
    document.body.innerHTML = `<div class="container">${innerHTML}<div>`;
  }
}
