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
      if (event.key === 'Enter') {
        event.preventDefault();
        textField.value += '\n';
      } else textField.value += event.key;
      // // if (event.key.charCodeAt(0) < 1040 && lang === 'rus') {
      // //   lang = 'eng';
      // //   checkboxChoiceLang.checked = true;
      // //   redrawButtons(keyboardButton, lang);
      // // } else if (event.key.charCodeAt(0) >= 1040 && lang === 'eng') {
      // //   lang = 'rus';
      // //   checkboxChoiceLang.checked = false;
      // //   redrawButtons(keyboardButton, lang);
      // // }
      // const indexButtonClick = arr.findIndex(el => el === event.key);
      // buttons[indexButtonClick].className = 'button clicked';
      // setTimeout(() => { buttons[indexButtonClick].className = 'button'; }, 700);
    }
  });

  const btn = document.querySelectorAll('button');
  btn.forEach((el) => {
    el.addEventListener('click', (event) => {
      textField.value += event.toElement.textContent;
    });
  });
  const choiceThemeButton = document.querySelector('.choice-theme-button');
  let colorBackground = window.getComputedStyle(document.body).getPropertyValue('background-color');
  choiceThemeButton.addEventListener('click', () => {
    colorBackground = window.getComputedStyle(document.body).getPropertyValue('background-color');
    if (colorBackground !== 'rgb(0, 0, 0)') {
      document.body.style.backgroundColor = 'black';
      choiceThemeButton.style.backgroundColor = 'whitesmoke';
    } else {
      document.body.style.backgroundColor = 'white';
      choiceThemeButton.style.backgroundColor = 'rgb(32, 32, 59)';
    }
  });
};
