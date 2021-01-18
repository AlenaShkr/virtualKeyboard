import objectLang from './layout';

function drawButtons(keyboard, arr, lang) {
  const array = [].concat(...arr);
  const len = array.length;
  for (let j = 0; j < len; j += 1) {
    const btn = document.createElement('button');
    btn.className = 'button';
    if (array[j].size === '1.25') {
      btn.className += ' button_125';
    }
    if (array[j].size === '1.5') {
      btn.className += ' button_150';
    }
    if (array[j].value[lang] === undefined) {
      btn.innerHTML = array[j].value;
    } else btn.innerHTML = array[j].value[lang];
    btn.value = array[j].code;
    keyboard.appendChild(btn);
  }
}

function drawStartPage() {
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
  const choiceTheme = document.createElement('button');
  choiceTheme.className = 'choice-theme-button';
  keyboard.appendChild(choiceTheme);

  const lang = 'ru';
  const widthScreen = window.document.body.clientWidth;
  if (widthScreen >= 1000) {
    const divFunctButton = document.createElement('div');
    divFunctButton.className = 'functional-button';
    drawButtons(divFunctButton, objectLang.functionalButton);
    drawButtons(keyboardButton, objectLang.common, lang);
    keyboard.appendChild(divFunctButton);
  }
  if (widthScreen <= 1000 && widthScreen > 420) {
    drawButtons(keyboardButton, objectLang.common, lang);
  }
  keyboard.appendChild(keyboardButton);
  document.body.appendChild(keyboard);

  return { textField, checkboxChoiceLang, keyboardButton };
}

export default drawStartPage;
