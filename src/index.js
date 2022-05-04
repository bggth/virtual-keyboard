import { Container } from "./Container";
import { Keyboard } from "./Keyboard";
import { KeyboardListener } from "./KeyboardListener";
import { Statusbar } from "./Statusbar";
import { Textarea } from "./Textarea";
import { Title } from "./Title";
import { Storage } from "./Storage";

window.onload = () => {
	let storage = new Storage();
	let container = new Container();
	let title = new Title();
	let textarea = new Textarea();
	let keyboard = new Keyboard(textarea, storage);
	let statusbar = new Statusbar();

	container.pushComponent(title);
	container.pushComponent(textarea);
	container.pushComponent(keyboard);
	container.pushComponent(statusbar);

	container.render();
	keyboard.update();
	keyboard.updateCapsState();

	let keyboardListener = new KeyboardListener(keyboard, textarea);
	keyboardListener.installListeners();
}