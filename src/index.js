import { Container } from "./Container";
import { Keyboard } from "./Keyboard";
import { Statusbar } from "./Statusbar";
import { Textarea } from "./Textarea";
import { Title } from "./Title";

window.onload = () => {
	let container = new Container();
	let title = new Title();
	let textarea = new Textarea();
	let keyboard = new Keyboard(textarea);
	let statusbar = new Statusbar();

	container.pushComponent(title);
	container.pushComponent(textarea);
	container.pushComponent(keyboard);
	container.pushComponent(statusbar);
	container.render();

	keyboard.init();
}