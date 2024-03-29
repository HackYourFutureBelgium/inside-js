import {
	readString,
	displayString,
} from '../../../../../../../lib/dom-io/index.js';

import { removeCharacters } from './utils/remove-characters.js';

const removeThese = () => {
	debugger;

	// --- read user input ---
	const userText = readString('user-text');
	const removeThese = readString('to-remove');

	// remove all the user's characters from the input
	//  use `removeCharacters` to write this step of the program
  const removechar = removeCharacters(userText, removeThese);
	// --- display the input with no consonants ---
	displayString('removified', removechar);
};

document.getElementById('these').addEventListener('click', removeThese);
