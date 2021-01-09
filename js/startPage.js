import objectLang from './layout';

function drawButtons(keyboard, lang) {
  const array = [].concat(...objectLang[lang]);
  const len = array.length;
  for (let j = 0; j < len; j += 1) {
    const btn = document.createElement('button');
    btn.className = 'button';

    btn.innerHTML = array[j];
    btn.value = array[j];
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

  const lang = 'rus';

  drawButtons(keyboardButton, lang);
  keyboard.appendChild(keyboardButton);
  document.body.appendChild(keyboard);

  return { textField, checkboxChoiceLang, keyboardButton };
}

export default drawStartPage;
