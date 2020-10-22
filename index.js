window.onload = function load() {
  const textField = document.createElement('textarea');
  textField.className = 'text';
  document.body.appendChild(textField);

  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';
  
  const valueKeyEng = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'bsp'],
    ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '|'],
    ['caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', `'`, 'ent', ''],
    ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift', 'up',''],
    ['ctrl', 'fn', 'win', 'alt', 'gap', 'alt', 'list', 'ctl', '', '', '', '<-', 'down', '->']];

  const valueKeyRus = [
    ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'bsp'],
    ['tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '|'],
    ['caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'ent', ''],
    ['shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'shift', 'up',''],
    ['ctrl', 'fn', 'win', 'alt', 'gap', 'alt', 'list', 'ctl', '', '', '', '<-', 'down', '->']];

  const objectLang = {
    eng: valueKeyEng,
    rus: valueKeyRus,
  };

  for (let i = 0; i < 5; i += 1) {
    for (let j = 0; j < 14; j += 1) {
      if (objectLang.rus[i][j] !=='') {
        const btn = document.createElement('button');
      btn.className = 'button';

      btn.innerHTML = objectLang.rus[i][j];
      btn.value = objectLang.rus[i][j];
      keyboard.appendChild(btn);
      }
    }
  }
  document.body.appendChild(keyboard);

  window.addEventListener('keyup', (event) => {
    if (event.key === 'Tab')
    textField.value += '   ';
    if (event.key !== 'Control'& 'Shift' & 'Tab')
    textField.value += event.key;
  });

  const btn = document.querySelectorAll('button');
  btn.forEach((el) => {
    el.addEventListener('click', (event) => {
      textField.value += event.target.value;
    });
  });
};
