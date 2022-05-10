import Container from './Container';
import Keyboard from './Keyboard';
import Statusbar from './Statusbar';
import Textarea from './Textarea';
import Title from './Title';

window.onload = () => {
  const container = new Container();
  const title = new Title('virtual-keyboard');
  const textarea = new Textarea();
  const keyboard = new Keyboard(textarea);
  const statusbar = new Statusbar('made for macos • control+alt: switch language • f9: eval() line');

  container.pushComponent(title);
  container.pushComponent(textarea);
  container.pushComponent(keyboard);
  container.pushComponent(statusbar);
  container.render();

  keyboard.init();
};
