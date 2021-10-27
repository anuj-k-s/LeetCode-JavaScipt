/* 

We cannot redeclare let and const but var can be redeclared 
If redeclaration happened in same level at any line , the code execution 
phase wont execute 

*/

/* 
# var  global scope - can be used in whole window
       function scope - can be used inside function only 

function printNames(){
  var z = 30;
}
console.log(z); // z is not defined 

# var  - can be redeclared

var y = 20;
var y = 30;
console.log(y); //30

#var - can be updated

var y = 10;
y =20;


# var variables are hoisted to the top of their scope and initialized with a value of undefined.

# let  - let is block scoped, can be updated but cant be redeclared

# const - const is block scoped, cant be updated nor can be redeclared
 
*/

/* 
console.log("a") //wont print as code will break in memory allocation phase
let x= 10;
let x= 20; //Identifier 'x' has already been declared
console.log(x);

var y = 20;
var y = 30;
console.log(y);

const z = 20;
const z = 30; //Identifier 'z' has already been declared
console.log(z);

 */

/* 
This code works fine with let/const/var as closure comes into picture
where inner scope variable can access outer scope
var z = 10;
printNames();
function printNames(){
  console.log(z);
}
 */

/* const z = 10;
z =20;
printNames();
function printNames(){
  z=20; // We are doing assignment of outer scope variable in inner scope
        //TypeError: Assignment to constant variable. works fine with let and const
  console.log(z);
} */

/* 
let z = 10;
function printNames(){
  console.log(z);  We cannot use outer scope variable in inner scope if 
                    the initialization happened in inner scope  because the variable is scoped inside now
                    let const will result in runtime error, var wil result to undefined
  let z = 30;
}
console.log(z);
printNames();
*/

function printNames() {
  var z = 30;
}
console.log(z); // z is not defined
