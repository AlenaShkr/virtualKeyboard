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
  const buttons = document.querySelectorAll('button');
  const arr = [];
  buttons.forEach(el => arr.push(el.value));

  let lang = 'rus';
  checkboxChoiceLang.addEventListener('click', () => {
    lang = 'rus';
    if (checkboxChoiceLang.checked) {
      lang = 'eng';
    }
    redrawButtons(keyboardButton, lang);
  });
  window.addEventListener('keypress', (event) => {
    event.preventDefault();

    if (event.key === 'Tab') {
      event.preventDefault();
      textField.value += '\t';
    }
    if (event.key !== 'Control' && 'Shift' && 'Tab') {
      if (event.key.charCodeAt(0) < 1040 && lang === 'rus') {
        lang = 'eng';
        checkboxChoiceLang.checked = true;
        redrawButtons(keyboardButton, lang);
      } else if (event.key.charCodeAt(0) >= 1040 && lang === 'eng') {
        lang = 'rus';
        checkboxChoiceLang.checked = false;
        redrawButtons(keyboardButton, lang);
      }
      const indexButtonClick = arr.findIndex(el => el === event.key);
      buttons[indexButtonClick].style.color = 'red';
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
