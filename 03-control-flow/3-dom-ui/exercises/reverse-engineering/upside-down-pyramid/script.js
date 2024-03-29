'use strict';
import {readString, displayString} from '../../../../../lib/dom-io/index.js';
document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

/* Upside-Down Pyramid



*/

// --- saved DOM Elements ---


  // read user text
  const text = readString('to-pyramid');

  // create the pyramid
  let pyramid = '';

  for (let i = 0; i < text.length; i++) {
    let row = text.slice(i) + '\n';
    pyramid += row;
  }

  // display the pyramid
  displayString('pyramided', pyramid);
});
