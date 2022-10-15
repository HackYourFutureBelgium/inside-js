'use strict';

// Be sure to study this in JS Tutor or debugger

// DECLARING a function creates it in memory
//  without executing the code inside the curly braces


// there are 3 logs, and one console.log in the source code
//  console.log is not run when the function is DECLARED
//  but it is run each time the function is EXECUTED

                   //-------


// decleration of the function
// function myFirstFunction (name, age) {   
//   if (age >= 18) {
//     console.log(`you can drive ${name}`)
//   }else{
//     console.log(`you can not drive ${name}`)
//   }
// }


// //excution of the function

// myFirstFunction('Jane', 12)


                    //------


                    // arrow function

const myFirstFunction = (name, age) => {   
  if (age >= 18) {
    console.log(`you can drive ${name}`)
  }else{
    console.log(`you can not drive ${name}`)
  }
}


//excution of the function

myFirstFunction('Jane', 12)                    