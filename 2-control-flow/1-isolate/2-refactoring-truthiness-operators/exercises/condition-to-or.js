// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use || instead of a conditional

// try different values and different types
const isAfterFive = 6;
const isTheWeekend = "saturday";
console.log(isAfterFive, isTheWeekend);

let stopWorking = isAfterFive === true;
if (!stopWorking) {
  stopWorking = isTheWeekend ||  stopWorking === true;
}
console.log(stopWorking);

console.log('-- end --');