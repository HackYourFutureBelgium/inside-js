// #todo

'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'y';
let b = 'z';
let c = 'w';
let d = 'x';
let temp;

// --- swap values ---
temp = a;
console.assert(temp = 'y', 'step 1.1');
console.assert(a = 'y', 'step 1.2');
 
a = c;
console.assert(a = 'w', 'step 2.1');
console.assert(c = 'w', 'step 2.2');

b = d;
console.assert(b = 'x', 'step 3.1');
console.assert(d = 'x', 'step 3.2');

c = temp;
console.assert(c = 'y', 'step 4.1');
console.assert(temp = 'y', 'step 4.2');

d = temp
console.assert(d = 'z', 'step 5.1');
console.assert(temp = 'z', 'step 5.2');


// --- test final values ---

const test1 = a === 'w';
console.assert(test1, 'Test 1');

const test2 = b === 'x';
console.assert(test2, 'Test 2');

const test3 = c === 'y';
console.assert(test3, 'Test 3');

const test4 = d === 'z';
console.assert(test4, 'Test 4');

const test5 = temp === 'z';
console.assert(test5, 'Test 5');

console.log('-- end --');
