'use strict';
import { readString, displayString } from'../../../../../lib/dom-io/index.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  // debugger;

  // read user text
  const text = readString('user-text');

  let reversedText = '';
  // use a for loop that counts down (i--) to reverse the input
  for (let i = text.length - 1; i >= 0; i--) {
    reversedText += text[i];
  }

  // display the reversed string
  displayString('reversed-output', reversedText);
});
