const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
   
  let count = 0;
  let res = [];
  let word = '';
  let text = [];

  for(let el of expr) {
    word += el;
    count++;
    if(count === 10) {
      res.push(word);
      count = 0;
      word = ''
    }
  }
  let element = '';
  res.forEach(el => {
    if(el === '**********') {
     text.push(' ');
    } 
    else { 
      for (let i = 0; i <= el.length; i=i+2) {
        if (el[i] === '1' && el[i+1] === '1') {
          element += '-';
        }
        if (el[i] === '1' && el[i+1] === '0') {
          element += '.';
        }
      }
      text.push(element) 
      element = ''
      }
  })
  let fin = [];
  text.forEach(el => {
    if(el === ' ') { fin.push(" ")}
    if(el in MORSE_TABLE){
      fin.push(MORSE_TABLE[el])}
  })
  return fin.join('')
}


module.exports = {
    decode
}