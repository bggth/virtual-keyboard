import Key from './Key';
import KeyData from './KeyData';
import OS from './OS';
import InputListener from './InputListener';
import Storage from './Storage';

export default class {
  constructor(textarea) {
    this.keys = [];
    this.textarea = textarea;
    this.storage = new Storage();
    this.shift = parseInt(this.storage.get('shift', 0), 10);
    this.lang = parseInt(this.storage.get('lang', 0), 10);
    this.shiftFlag = false;
    this.controlLeftFlag = false;
    this.os = new OS().getOSType();

    for (let l = 0; l < KeyData.length; l += 1) {
      const line = [];
      for (let k = 0; k < KeyData[l].length; k += 1) {
        const key = new Key(KeyData[l][k]);
        line.push(key);
      }
      this.keys.push(line);
    }
  }

  init() {
    this.update();
    this.updateCapsState();
    this.inputListener = new InputListener(this);
    this.inputListener.installListeners();
  }

  render() {
    let innerHTML = '';
    for (let l = 0; l < this.keys.length; l += 1) { innerHTML += this.renderline(l); }
    return `<div class="keyboard__wrapper">${innerHTML}</div>`;
  }

  renderline(l) {
    let innerHTML = '';
    for (let k = 0; k < this.keys[l].length; k += 1) {
      innerHTML += this.keys[l][k].render();
    }
    return `<div class="keyboard__line">${innerHTML}</div>`;
  }

  update() {
    for (let l = 0; l < this.keys.length; l += 1) {
      for (let k = 0; k < this.keys[l].length; k += 1) {
        this.keys[l][k].update(this.lang + this.shift);
      }
    }

    this.storage.set('shift', this.shift);
    this.storage.set('lang', this.lang);
  }

  updateCapsState() {
    const key = this.findKeyByCode('CapsLock');
    if (this.shift) { key.element.classList.add('button-active'); } else { key.element.classList.remove('button-active'); }
    this.update();
  }

  onKeyDown(code) {
    const key = this.findKeyByCode(code);
    if (!key) { return; }

    key.element.classList.add('button-active');

    if (code.toString().includes('ShiftLeft') || (code.toString().includes('ShiftRight'))) {
      if (this.shiftFlag === false) {
        this.shiftFlag = true;
        this.shift = this.shift ? 0 : 1;
        this.update();
      }
      return;
    }

    // Escape
    if (code.toString().includes('Escape')) {
      this.textarea.setText('');
      return;
    }

    // F9
    if (code.toString().includes('F9')) {
      try {
        this.textarea.appendText(`\n${eval(this.textarea.text.split('\n')[this.textarea.text.split('\n').length - 1]).toString()}`);
      } catch (err) {
        this.textarea.appendText('\nError');
      }

      return;
    }

    // Backspace
    if (code.toString().includes('Backspace')) {
      this.textarea.setText(this.textarea.text.slice(0, this.textarea.text.length - 1));
      return;
    }

    if (code.toString().includes('CapsLock')) {
      this.shift = this.shift ? 0 : 1;
      this.updateCapsState();
      return;
    }

    if (code.toString().includes('ControlLeft')) {
      this.controlLeftFlag = true;
      return;
    }

    if (code.toString().includes('Space')) {
      if (this.controlLeftFlag) {
        this.lang = this.lang === 0 ? 2 : 0;
        this.update();
        return;
      }
    }

    this.textarea.appendText(key.shiftTitles[this.lang + this.shift]);
  }

  onKeyUp(code) {
    const key = this.findKeyByCode(code);
    if (!key) { return; }

    if (code.toString().includes('CapsLock')) {
      if (this.os === 'mac') {
        this.shift = this.shift ? 0 : 1;
        this.updateCapsState();
      }
      return;
    }

    key.element.classList.remove('button-active');

    if (code.toString().includes('ShiftLeft') || (code.toString().includes('ShiftRight'))) {
      if (this.shiftFlag === true) {
        this.shiftFlag = false;
        this.shift = this.shift ? 0 : 1;
        this.update();
      }
    }

    if (code.toString().includes('ControlLeft')) {
      this.controlLeftFlag = false;
      // return;
    }
  }

  findKeyByCode(code) {
    for (let l = 0; l < this.keys.length; l += 1) {
      for (let k = 0; k < this.keys[l].length; k += 1) {
        if (this.keys[l][k].code === code) { return this.keys[l][k]; }
      }
    }
    return null;
  }
}
