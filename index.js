window.onload = function load() {
  const textField = document.createElement('textarea');
  textField.className = 'text';
  document.body.appendChild(textField);

  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';
  const valueKey = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'bsp'],
    ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'ent'],
    ['caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '/', 'ent'],
    ['shift', '|', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift', ''],
    ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'ent'],
    ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'ent']];

  for (let i = 0; i < 6; i += 1) {
    for (let j = 0; j < 14; j += 1) {
      const btn = document.createElement('button');
      btn.className = 'button';

      btn.innerHTML = valueKey[i][j];
      btn.value = valueKey[i][j];
      keyboard.appendChild(btn);
    }
  }
  document.body.appendChild(keyboard);

  window.addEventListener('keydown', (event) => {
    textField.value += event.key;
  });

  const btn = document.querySelectorAll('button');
  btn.forEach((el) => {
    el.addEventListener('click', (event) => {
      textField.value += event.toElement.value;
    });
  });
};
