// #todo

'use strict';

let userInput = '';
while (true) {
  userInput = prompt('enter a word to filter:');

  /* -- BEGIN: validate input -- */

  /* -- END: validate input -- */
}

const removeVowels = confirm(`what would you like to remove from "${userInput}"?
- ok: vowels
- cancel: consonants
`);

let toRemove = '';
if (removeVowels) {
  toRemove = 'AEIOU';
} else {
  toRemove = 'BCDFGHJKLMNPQRSTVWXYZ';
}

let filteredInput = '';
/* -- BEGIN: filter input -- */

/* -- END: filter input -- */

const finalMessage = `"${userInput}" -> "${filteredInput}"`;
alert(finalMessage);