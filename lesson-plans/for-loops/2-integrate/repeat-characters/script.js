import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById("repeat-them").addEventListener('click', () => {
  debugger;

  // read user values
  let string = readString("user-text");
  let number = readNumber("number-of-times");

  // repeat the characters in the text
  let result = '';

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < number; j++) {
      result += string.charAt(i);
    }
  }

  // display the text with repeated characters
  display("repeated-output", result);
});
