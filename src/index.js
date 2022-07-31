const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

const letter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function decode(expr) {
  result = '';
  for (let i = 0; i < expr.length; i += 10) {
    let element = expr.slice(i, i + 10);
    if (element === '**********') {
      result += ' ';
      continue;
    }
    let smb = '';
    for (let k = 0; k < element.length; k += 2) {
      let dot = element.slice(k, k + 2);
      if (dot == '10') {
        smb += '.';
      } else if (dot == '11') {
        smb += '-';
      }
    }
    result += MORSE_TABLE[smb];
  }
  return result;
}

module.exports = {
  decode,
};
