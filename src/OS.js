export class OS {
	constructor() {
	}
	getOSType() {
		return navigator.userAgentData.platform.slice(0, 3);
	}
}