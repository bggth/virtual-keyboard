import { Container } from "./Container";
import { Keyboard } from "./Keyboard";
import { KeyboardListener } from "./KeyboardListener";
import { Statusbar } from "./Statusbar";
import { Textarea } from "./Textarea";
import { Title } from "./Title";

window.onload = () => {

	let container = new Container();
	let title = new Title();
	let textarea = new Textarea();
	let keyboard = new Keyboard(14, 6);
	let statusbar = new Statusbar();

	let keyboardListener = new KeyboardListener(keyboard, textarea);
	keyboardListener.installListeners();

	container.pushComponent(title);
	container.pushComponent(textarea);
	container.pushComponent(keyboard);
	container.pushComponent(statusbar);

	container.render();

	keyboard.keyDownEvent(0);
}