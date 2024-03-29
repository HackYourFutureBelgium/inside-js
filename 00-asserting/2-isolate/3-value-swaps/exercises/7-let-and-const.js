// #todo

'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'y';
let b = 'x';
let temp;

temp = a;
const c = temp;

// --- swap values ---

a = b;
console.assert(a === 'x', 'Step 1.1');
console.assert(b === 'x', 'Step 1.2');

b = temp;
console.assert(b === 'y', 'Step 2.1');
console.assert(temp === 'y', 'Step 2.2');

// --- test final values ---

const test1 = a === 'x';
console.assert(test1, 'Test 1');

const test2 = b === 'y';
console.assert(test2, 'Test 2');

const test3 = c === 'y';
console.assert(test3, 'Test 3');

const test4 = temp === 'y';
console.assert(test4, 'Test 4');

console.log('-- end --');
