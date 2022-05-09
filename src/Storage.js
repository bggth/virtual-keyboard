export default class {
  constructor() {
    this.data = {};
    const data = document.cookie.split('|');
    if (data.length < 2) { return; }
    for (let i = 0; i < data.length - 1; i += 1) {
      const values = data[i].split('=');
      const tmp = values[1];
      this.data[values[0]] = tmp;
    }
  }

  set(key, value) {
    this.data[key] = value;
    this.flush();
  }

  get(key, def) {
    let result = this.data[key];
    if (result == null) { result = def; }
    return result;
  }

  flush() {
    let data = '';
    Object.keys(this.data).forEach((e) => {
      data += `${e}=${this.data[e]}|`;
    });
    document.cookie = data;
  }
}
