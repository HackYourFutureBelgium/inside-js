// #todo

'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'y';
let b = 'w';
let c = 'z';
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

console.assert(a === 'w', 'Test 1');

console.assert(b === 'x', 'Test 2');

console.assert(c === 'y', 'Test 3');

console.assert(d === 'z', 'Test 4');

console.assert(temp === 'z', 'Test 5');

console.log('-- end --');
