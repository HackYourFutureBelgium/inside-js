// import program data

import { data } from '../data.js';

// import helper functions

import { listItems } from './utils/list-items.js';

// once when the page is loaded
debugger;

const addNumber = () => {
	// each time the user does this
	debugger;

	// --- read user input ---

	const newNumber = Number(document.getElementById('the-num').value);

	// --- update shared data ---

	data.numbers.push(newNumber);

	// --- use shared data to update the UI ---

	const numbersList = listItems(data.numbers);
	document.getElementById('all-numbers').innerText = numbersList;
};

// tell the browser to call your function each time the user interacts
document.getElementById('add-it').addEventListener('click', addNumber);
