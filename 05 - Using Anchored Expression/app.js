/*
The content.js file contains a string of text stored in a variable text1. 
This string of text is a statement that contains a day of the week as a part of the statement. 
Write a regular expression that will match any day of the week and then replace that day of the week in the string with Monday. 
Display the results to the console. 
*/

const regEx = /[m,t,w,f,s][a-z]*[n,s,i,t]day/gi;
const newText = text1.replace(regEx, 'Monday');
console.log(newText);
