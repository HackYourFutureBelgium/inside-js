import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById("repeat-it").addEventListener('click', () => {
  debugger;

  // read user values
  let string = readString("user-text");
  let number = readNumber("number-of-times");

  // repeat the string
let result = '';

  for (let i of string) {
    for (let j = 0; j < number; j++) {
      result += string.charAt(j);
    }
  }

  // display the repeated string
  display("repeated-output", result);
});
