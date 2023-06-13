import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById("reverse-it").addEventListener('click', () => {
  debugger;

  // read user text
  let string = readString("user-text");

  // use a for loop that counts down (i--) to reverse the input
  let result = '';

  for(let i = string.length; i >= 0; i--) {
    result += string.charAt(i);
  }

  // display the reversed string
  display("reversed-output", result);
});
