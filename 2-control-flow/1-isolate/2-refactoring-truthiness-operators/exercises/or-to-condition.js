// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use a condition instead of ||

// try different values and different types
const firstName = 'filmon';
const lastName = 'goitom';

// console.log(firstName, lastName);

// const hasAnAName = firstName[0] === 'A' || lastName[0] === 'A';
 
let hasAnAName;
if (Boolean(firstName) === Boolean(lastName)){
  hasAnAName = `${firstName} ${lastName}`;
}else if (Boolean(firstName) === false){
  hasAnAName = 'input your first name';
}else if (Boolean(lastName) === false){
  hasAnAName = 'input your last name';
}else{
  hasAnAName = 'input your first name and last name';
}





console.log(hasAnAName);

console.log('-- end --');
