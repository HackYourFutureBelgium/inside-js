'use strict';

/* Skip



*/

// --- saved DOM Elements ---


// --- user interaction ---
import { readNumber, readString, displayString} from '../../../../../lib/dom-io/index.js';

document.getElementById('skip-them').addEventListener('click', () => {
	debugger;

	// read user values

 const text = readString('user-text');
  const skipSize = readNumber('skip-size');

	 // create a new string with skipped characters
  let newText = '';
  for (let i = 0; i < text.length; i = i + skipSize) {
    newText += text[i];
  }

  // display the skipped string
  displayString('skipped-output', newText);
});
