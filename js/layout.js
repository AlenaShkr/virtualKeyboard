const valueKeyEng = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'bsp', 'num', '/', '*', '-'],
  ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '|', '7', '8', '9', '+'],
  ['caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'ent', '', '4', '5', '6', ''],
  ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift', '', 'up', '1', '2', '3', 'enter'],
  ['ctrl', 'fn', 'win', 'alt', 'gap', 'alt', 'list', 'ctl', '', '', '', '<-', 'down', '->', '0', '.', '']];

const valueKeyRus = [
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'bsp', 'num', '/', '*', '-'],
  ['tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '|', '7', '8', '9', '+'],
  ['caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'ent', '', '4', '5', '6', ''],
  ['shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'shift', '', 'up', '1', '2', '3', 'enter'],
  ['ctrl', 'fn', 'win', 'alt', 'gap', 'alt', 'list', 'ctl', '', '', '', '<-', 'down', '->', '0', '.', '']];
const common = [{
  code: 'Backquote',
  value: {
    eng: '`',
    ru: 'ё',
  },
  size: '1',
},
{
  code: 'Digit1',
  value: {
    eng: '1',
    ru: '1',
  },
  size: '1',
},
{
  code: 'Digit2',
  value: {
    eng: '2',
    ru: '2',
  },
  size: '1',
},
{
  code: 'Digit3',
  value: {
    eng: '3',
    ru: '3',
  },
  size: '1',
},
{
  code: 'Digit4',
  value: {
    eng: '4',
    ru: '4',
  },
  size: '1',
},
{
  code: 'Digit5',
  value: {
    eng: '5',
    ru: '5',
  },
  size: '1',
},
{
  code: 'Digit6',
  value: {
    eng: '6',
    ru: '6',
  },
  size: '1',
},
{
  code: 'Digit7',
  value: {
    eng: '7',
    ru: '7',
  },
  size: '1',
},
{
  code: 'Digit8',
  value: {
    eng: '8',
    ru: '8',
  },
  size: '1',
},
{
  code: 'Digit9',
  value: {
    eng: '9',
    ru: '9',
  },
  size: '1',
},
{
  code: 'Digit0',
  value: {
    eng: '0',
    ru: '0',
  },
  size: '1',
},
{
  code: 'Minus',
  value: {
    eng: '-',
    ru: '-',
  },
  size: '1',
},
{
  code: 'Equal',
  value: {
    eng: '=',
    ru: '=',
  },
  size: '1',
},
{
  code: 'Backspace',
  value: {
    eng: 'Backspace',
    ru: 'Backspace',
  },
  size: '1.25',
},
{
  code: 'home',
  value: {
    eng: 'home',
    ru: 'home',
  },
  size: '1',
},
{
  code: 'Tab',
  value: {
    eng: 'Tab',
    ru: 'Tab',
  },
  size: '1.25',
},
{
  code: 'keyQ',
  value: {
    eng: 'q',
    ru: 'й',
  },
  size: '1',
},
{
  code: 'keyW',
  value: {
    eng: 'w',
    ru: 'ц',
  },
  size: '1',
},
{
  code: 'keyE',
  value: {
    eng: 'e',
    ru: 'у',
  },
  size: '1',
},
{
  code: 'keyR',
  value: {
    eng: 'r',
    ru: 'к',
  },
  size: '1',
},
{
  code: 'keyT',
  value: {
    eng: 't',
    ru: 'е',
  },
  size: '1',
},
{
  code: 'keyY',
  value: {
    eng: 'y',
    ru: 'н',
  },
  size: '1',
},
{
  code: 'keyU',
  value: {
    eng: 'u',
    ru: 'г',
  },
  size: '1',
},
{
  code: 'keyI',
  value: {
    eng: 'i',
    ru: 'ш',
  },
  size: '1',
},
{
  code: 'keyO',
  value: {
    eng: 'o',
    ru: 'щ',
  },
  size: '1',
},
{
  code: 'keyP',
  value: {
    eng: 'p',
    ru: 'з',
  },
  size: '1',
},
{
  code: 'Bracket Left',
  value: {
    eng: '[',
    ru: 'х',
  },
  size: '1',
},
{
  code: 'Bracket Right',
  value: {
    eng: ']',
    ru: 'ъ',
  },
  size: '1',
},
{
  code: 'Backslash',
  value: {
    eng: '\\',
    ru: '\\',
  },
  size: '1',
},
{
  code: 'End',
  value: {
    eng: 'end',
    ru: 'end',
  },
  size: '1',
},
{
  code: 'Capslock',
  value: {
    eng: 'Capslock',
    ru: 'Capslock',
  },
  size: '1.5',
},
];
const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
const keyboardButton = document.createElement('div');
keyboardButton.className = 'keyboard-buttons';
keyboard.appendChild(keyboardButton);
document.body.appendChild(keyboard);
const len = common.length;
for (let j = 0; j < len; j += 1) {
  const btn = document.createElement('button');
  btn.className = 'button';
  if (common[j].size === '1.25') {
    btn.className += ' button_125';
  }
  if (common[j].size === '1.5') {
    btn.className += ' button_150';
  }
  btn.innerHTML = common[j].value.eng;
  btn.value = common[j].code;
  keyboardButton.appendChild(btn);
}

// const common = [
//   {'key' : '0',
//     'code': '0',
//       'engvalue': '0'},
//   {'key' : '1',
//   'code': '1'},
//   {'key' : '2',
//   'code': '2'},
//   {'key' : '3',
//   'code': '3'},
//   {'key' : '4',
//   'code': '4'},
//   {'key' : '5',
//   'code': '5'},
//   {'key' : '6',
//     'code': '6'},
//   {'key' : '7',
//   'code': '7'},
//   {'key' : '8',
//   'code': '8'},
//   {'key' : '9',
//   'code': '9'},
//   {'key' : 'Esc',
//   'code': 'Escape'},
//   {'key' : 'Backspase',
//   'code': 'Backspase'},
//   {'key' : 'Tab',
//     'code': 'Tab'},
//   {'key' : '-',
//   'code': '-'},
//   {'key' : '=',
//   'code': '='},
//   {'key' : '/\\',
//   'code': '/\\'},
//   {'key' : 'Caps Lock',
//   'code': 'CapsLock'},
//   {'key' : 'Shift',
//   'code': 'Shift'},
//   {'key' : 'Ctrl',
//     'code': 'Control'},
//   {'key' : 'Win',
//   'code': 'Meta'},
//   {'key' : 'Alt',
//   'code': 'Alt'},
//   {'key' : 'пробел',
//   'code': ''},
//   {'key' : 'Enter',
//   'code': 'Enter'},
//   {'key' : 'Menu',
//   'code': 'ContextMenu'},
//   {'key' : 'Print Screen',
//   'code': 'PrintScreen'}
// ];

const objectLang = {
  eng: valueKeyEng,
  rus: valueKeyRus,
};

export default objectLang;
