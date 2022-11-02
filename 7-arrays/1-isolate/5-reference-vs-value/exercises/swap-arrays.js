'use strict';
console.log('--start--')
// -- declare variables (this is correct) --
let a = [1, 2, 3];       //  a = [1, 2, 3] , b = ['x', 'y', 'z'] ,  aReference = [1, 2, 3] ,bReference = ['x', 'y', 'z']
const aReference = a;
let b = ['x', 'y', 'z'];
const bReference = b; 
let temp;

// -- swap reference types (write this code) --
temp = a
a = bReference
b = temp


// -- assert the references (this is correct) --
console.assert(a === bReference, 'a references the array with strings');
console.assert(b === aReference, 'b references the array with numbers');

console.log('--end--')