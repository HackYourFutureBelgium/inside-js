import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById("pyramid-it").addEventListener('click', () => {
  debugger;

  // read user text
  const string = readString("to-pyramid");

  // create the pyramid

  let result = '';
  let splitWord ='';

  for (let i = 0; i < string.length; i++) {
    
      splitWord = string.slice(i);
   
    if(i == 0) {
      result += splitWord;
    } else {
      result += "\n" + splitWord;
    }
     
  }
  

  // display the pyramid
  display("pyramided", result);
});
