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
const functionalButton = [
  {
    code: 'Escape',
    value: 'Esc',
  },
  {
    code: 'F1',
    value: 'F1',
  },
  {
    code: 'F2',
    value: 'F2',
  },
  {
    code: 'F3',
    value: 'F3',
  },
  {
    code: 'F4',
    value: 'F4',
  },
  {
    code: 'F5',
    value: 'F5',
  },
  {
    code: 'F6',
    value: 'F6',
  },
  {
    code: 'F7',
    value: 'F7',
  },
  {
    code: 'F8',
    value: 'F8',
  },
  {
    code: 'F9',
    value: 'F9',
  },
  {
    code: 'F10',
    value: 'F10',
  },
  {
    code: 'F11',
    value: 'F11',
  },
  {
    code: 'F12',
    value: 'F12',
  },
];

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

const objectLang = {
  eng: valueKeyEng,
  rus: valueKeyRus,
  common,
  functionalButton,
};

export default objectLang;
