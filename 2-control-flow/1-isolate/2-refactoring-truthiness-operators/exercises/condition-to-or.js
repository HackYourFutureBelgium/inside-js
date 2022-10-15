// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use || instead of a conditional

// try different values and different types
const isAfterFive = false;
const isTheWeekend = true;

console.log(isAfterFive, isTheWeekend);

let stopWorking = isAfterFive || isTheWeekend;
console.log('can we stop Working?', stopWorking);

console.log('-- end --');
