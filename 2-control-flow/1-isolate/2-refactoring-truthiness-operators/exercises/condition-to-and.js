// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use && instead of a conditional

// try different values and different types
const input = 'emailAddress';
const password = 'pickles';

console.log(input, password);

let isValidPassword = typeof input === ('string' && typeof password);

console.log(isValidPassword);

console.log('-- end --');
