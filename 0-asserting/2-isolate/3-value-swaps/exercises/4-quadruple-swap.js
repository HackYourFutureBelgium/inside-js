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
a = c;
c = temp;
temp = b;
b = d;
d = temp;



// --- test final values ---

const test1 = a === 'w';   //c 
console.assert(test1, 'Test 1');

const test2 = b === 'x';   //d
console.assert(test2, 'Test 2');

const test3 = c === 'y';    //temp
console.assert(test3, 'Test 3');

const test4 = d === 'z';  //b
console.assert(test4, 'Test 4');

const test5 = temp === 'z';
console.assert(test5, 'Test 5');

console.log('-- end --');
