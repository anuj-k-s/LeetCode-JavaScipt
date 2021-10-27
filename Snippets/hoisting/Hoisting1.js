
/* this error will happen at runtime and code execution phase will work as usual */

/* 
console.log(x); //ReferenceError: Cannot access 'x' before initialization [CODE BREAK]
let x = 10;
function printName() {
  console.log("Printed");
}
*/

/* 
console.log(x); //ReferenceError: Cannot access 'x' before initialization [CODE BREAK]
const x = 10;
function printName() {
  console.log("Printed");
}
*/

console.log("a") // will print
printName();
const x = 10; // will work same for let 
function printName() {
  console.log(x)  //ReferenceError: Cannot access 'x' before initialization [CODE BREAK]
  console.log("Printed");
}
