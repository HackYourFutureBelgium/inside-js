// #todo

'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'z';
let b = 'x';
let c = 'y';
let temp;

// --- swap values ---
temp = a;
console.assert(temp = 'z', 'step 1.1');
console.assert(a = 'z', 'step 1.2');

a = b;
console.assert(a = 'x', 'step 2.1');
console.assert(b = 'x', 'step 2.2');

b = temp;
console.assert(b = 'z', 'step 3.1');
console.assert(temp = 'z', 'step 3.2');

temp = b;
console.assert(temp = 'z', 'step 4.1');
console.assert(b = 'z', 'step 4.2');

b = c; 
console.assert(b = 'y', 'step 5.1');
console.assert(c = 'y', 'step 5.2');

c = temp;
console.assert(c = 'z', 'step 6.2');
console.assert(temp = 'z', 'step 6.2');


// --- test final values ---

const test1 = a === 'x';
console.assert(test1, 'Test 1');

const test2 = b === 'y';
console.assert(test2, 'Test 2');

const test3 = c === 'z';
console.assert(test3, 'Test 3');

const test4 = temp === 'z';
console.assert(test4, 'Test 4');

console.log('-- end --');
