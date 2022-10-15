// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use a _?_:_ instead of a conditional

// try different values and different types
const isLoggedIn = "user1_log";
const secretInformation = "user1_paswd";
const warningMessage = "alert";
console.log(isLoggedIn, secretInformation, warningMessage);

let toDisplay = "message to display";
isLoggedIn? secretInformation : warningMessage;
  
  console.log(toDisplay)
  

console.log('-- end --');