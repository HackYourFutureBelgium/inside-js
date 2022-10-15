// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use a _?_:_ instead of a conditional

// try different values and different types
const isLoggedIn = true;
const secretInformation = 'your secret information';
const warningMessage = 'try again';
console.log(isLoggedIn, secretInformation, warningMessage);



let toDisplay = isLoggedIn ? secretInformation : warningMessage

console.log(toDisplay);

console.log('-- end --');
