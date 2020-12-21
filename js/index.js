import objectLang from './layout';
import drawStartPage from './startPage';


function redrawButtons(keyboard, lang) {
  const buttons = keyboard.querySelectorAll('.button');
  const result = [].concat(...objectLang[lang]);
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].innerText = result[i];
    buttons[i].value = result[i];
  }
}

window.onload = function load() {
  const { textField, checkboxChoiceLang, keyboardButton } = drawStartPage();
  let lang = 'rus';
  checkboxChoiceLang.addEventListener('click', () => {
    lang = 'rus';
    if (checkboxChoiceLang.checked) {
      lang = 'eng';
    }
    redrawButtons(keyboardButton, lang);
  });
  window.addEventListener('keydown', (event) => {
    textField.value += event.key;
  });
  window.addEventListener('keyup', (event) => {
    if (event.key === 'Tab') {
      textField.value += '\t';
    }
    if (event.key !== 'Control' && 'Shift' && 'Tab') {
      textField.value += event.key;
    }
  });

  const btn = document.querySelectorAll('button');
  btn.forEach((el) => {
    el.addEventListener('click', (event) => {
      textField.value += event.toElement.value;
    });
  });
};
