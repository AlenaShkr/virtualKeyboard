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
