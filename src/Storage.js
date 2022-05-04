export class Storage {
	constructor() {
		this.data = new Object();
		let data = document.cookie.split('|');
		if (data.length<2)
			return;
		for (let i = 0; i < data.length-1; i++){
			let values = data[i].split('=');
			this.data[values[0]] = values[1];
		}
	}

	set(key, value) {
		this.data[key] = value;
		this.flush();
	}

	get(key, def) {
		let result = this.data[key];
		if (result==null)
			result = def;
		return result;
	}

	flush() {
		let data = '';
		Object.keys(this.data).forEach(e => {
			data += `${e}=${this.data[e]}|`;
		});
		document.cookie = data;
	}

}