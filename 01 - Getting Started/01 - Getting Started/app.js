
let txt = "Programming courses always starts with a hello world example."

let regex1 = new RegExp("hello");
let regex2 = /worlds/;

console.log(regex1.exec(txt));
console.log(regex2.exec(txt));