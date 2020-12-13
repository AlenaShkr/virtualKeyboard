const valueKeyEng = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'bsp'],
  ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '|'],
  ['caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'ent', ''],
  ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift', 'up'],
  ['ctrl', 'fn', 'win', 'alt', 'gap', 'alt', 'list', 'ctl', '', '', '', '<-', 'down', '->']];

const valueKeyRus = [
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'bsp'],
  ['tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '|'],
  ['caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'ent', ''],
  ['shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'shift', 'up'],
  ['ctrl', 'fn', 'win', 'alt', 'gap', 'alt', 'list', 'ctl', '', '', '', '<-', 'down', '->']];

const objectLang = {
  eng: valueKeyEng,
  rus: valueKeyRus,
};
function drawButtons(keyboard, lang) {
  for (let i = 0; i < 5; i += 1) {
    for (let j = 0; j < 14; j += 1) {
      const btn = document.createElement('button');
      btn.className = 'button';

      btn.innerHTML = objectLang[lang][i][j];
      btn.value = objectLang[lang][i][j];
      keyboard.appendChild(btn);
    }
  }
}
function redrawButtons(keyboard, lang) {
  const buttons = keyboard.querySelectorAll('.button');
  let result = [].concat(...objectLang[lang]);
  for (let i = 0; i < buttons.length; i ++) {
  buttons[i].innerText = result[i];
  buttons[i].value = result[i];
  }
}
window.onload = function load() {
  const textField = document.createElement('textarea');
  textField.className = 'text';
  document.body.appendChild(textField);
  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';
  const keyboardButton = document.createElement('div');
  keyboardButton.className = 'keyboard-buttons';
  const sectionChoiceLang = document.createElement('section');
  sectionChoiceLang.className = 'slider-checkbox';
  const checkboxChoiceLang = document.createElement('input');
  checkboxChoiceLang.type = 'checkbox';
  checkboxChoiceLang.className = 'checkbox';
  const labelForCheckbox = document.createElement('label');
  labelForCheckbox.className = 'label';
  labelForCheckbox.htmlFor = 'checkbox';
  sectionChoiceLang.appendChild(checkboxChoiceLang);
  sectionChoiceLang.appendChild(labelForCheckbox);
  keyboard.appendChild(sectionChoiceLang);
  let lang = 'rus';
  
  drawButtons(keyboardButton, lang); 
  keyboard.appendChild(keyboardButton); 
  document.body.appendChild(keyboard);
  checkboxChoiceLang.addEventListener('click', () => {
    lang = 'rus';
     if(checkboxChoiceLang.checked) {
    lang = 'eng';
  }
    redrawButtons(keyboardButton, lang);
  });
  window.addEventListener('keydown', (event) => {
    textField.value += event.key;
  });
  window.addEventListener('keyup', (event) => {
    if (event.key === 'Tab')
    textField.value += '\t';
    if (event.key !== 'Control'& 'Shift' & 'Tab')
    textField.value += event.key;
  });

  const btn = document.querySelectorAll('button');
  btn.forEach((el) => {
    el.addEventListener('click', (event) => {
      textField.value += event.toElement.value;
    });
  });
};
