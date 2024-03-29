'use strict';

/* Repeat Characters


*/

// --- saved DOM Elements ---

// --- user interaction ---
import { readNumber, readString, displayString } from '../../../../../lib/dom-io/index.js';
document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

	// read user values

 const text = readString('user-text');
 const number = readNumber('number-of-times');
	// repeat the characters in the text
 console.log('user-text');

let toRepeat='';

	for (let i = 0; i < text.length; i++) {
    let temp = text[i];
		for (let j = 0; j < number; j++) {
      toRepeat += temp;
    }
    console.log(toRepeat);
	}

	// display the text with repeated characters
  displayString('repeated-output', toRepeat);
});
