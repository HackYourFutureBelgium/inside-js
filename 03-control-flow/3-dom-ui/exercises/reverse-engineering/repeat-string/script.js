'use strict';

import { readNumber, readString, displayString } from '../../../../../lib/dom-io/index.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  // debugger;

  // read user values
  const text = readString('user-text');
  const repeatCount = readNumber('number-of-times');

  // repeat the string
  const repeatedString = text.repeat(repeatCount);

  // display the repeated string
  displayString('repeated-output',repeatedString);
});